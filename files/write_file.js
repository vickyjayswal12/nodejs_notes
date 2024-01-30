const fs = require('fs');

const dataToWrite = 'Hello, this is the content to be written to the file.';

fs.writeFile('example1.txt', dataToWrite, (err,res) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log('File has been written successfully.');
    // console.log(res)// not return result 
  }
});
const res=fs.writeFileSync('example2.txt', dataToWrite)
console.log(res)


// const res=fs.writeFileSync('', dataToWrite)//it will return only error

// if we went to delete file from file system than we use unlink