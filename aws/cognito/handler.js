const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');

const cognito = new AWS.CognitoIdentityServiceProvider();
const dynamoDB = new AWS.DynamoDB.DocumentClient();

const TABLE_NAME = 'UserProfiles';

module.exports.register = async (event) => {
  const { email, password } = JSON.parse(event.body);

  try {
    await cognito.signUp({
      ClientId: process.env.COGNITO_CLIENT_ID,
      Username: email,
      Password: password,
      UserAttributes: [{ Name: 'email', Value: email }],
    }).promise();

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'User registered successfully' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error registering user', error }),
    };
  }
};

module.exports.login = async (event) => {
  const { email, password } = JSON.parse(event.body);

  try {
    const response = await cognito.initiateAuth({
      AuthFlow: 'USER_PASSWORD_AUTH',
      ClientId: process.env.COGNITO_CLIENT_ID,
      AuthParameters: {
        USERNAME: email,
        PASSWORD: password,
      },
    }).promise();

    return {
      statusCode: 200,
      body: JSON.stringify({ accessToken: response.AuthenticationResult.AccessToken }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error logging in', error }),
    };
  }
};

module.exports.profile = async (event) => {
  const { accessToken } = JSON.parse(event.body);

  try {
    const user = await cognito.getUser({
      AccessToken: accessToken,
    }).promise();

    // You can customize this to fetch additional profile information from DynamoDB
    // For simplicity, let's assume we have a DynamoDB table named 'UserProfiles'
    const userProfile = await dynamoDB.get({
      TableName: TABLE_NAME,
      Key: { userId: user.Username },
    }).promise();

    return {
      statusCode: 200,
      body: JSON.stringify({ user: user.UserAttributes, profile: userProfile.Item }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error fetching user profile', error }),
    };
  }
};
