// Generics
//generics is not repeat function


// function logString(arg: string) {
//     console.log(arg);
//     return arg;
// }

// function logNumber(arg: number) {
//     console.log(arg);
//     return arg;
// }

// function logArray(arg: any[]) { // it will also work but return type of function also is any so that auto show property not work
//     console.log(arg);
//     return arg;
// }

// function logAnything<T>(arg: T): T {
//     console.log(arg);
//     return arg;
// }

// logAnything(['hello']);

// interface HasAge {
//     age: number;
// }


//T extends HasAge means passsing any variable have age property if not than not work funcion
// function getOldest<T extends HasAge>(people: T[]): T {
//     return people.sort((a, b) => b.age - a.age)[0];
// }

// const people: HasAge[] = [{ age: 30 }, { age: 40 }, { age: 10 }];

// interface Player {
//     name: string;
//     age: number;
// }
// const players: Player[] = [
//     { name: 'John', age: 30 },
//     { name: 'Jane', age: 35 },
//     { name: 'Joe', age: 16 },
// ];
// // Assertion
// // const person = getOldest(players) as Player;

// const person = getOldest(people);
// // Generics
// person.age;

interface IPost {
    title: string;
    id: number;
    description: string;
}

interface IUser {
    id: number;
    name: string;
    age: number;
}

// const fetchPostData = async (path: string): Promise<IPost[]> => {
//     const response = await fetch(`http://example.com${path}`);
//     return response.json();
// };

// const fetchUsersData = async (path: string): Promise<IUser[]> => {
//     const response = await fetch(`http://example.com${path}`);
//     return response.json();
// };

// const fetchData = async <ResultType>(path: string): Promise<ResultType> => {
//     const response = await fetch(`http://example.com${path}`);
//     return response.json();
// }

// (async () => {
//     // const posts = await fetchPostData('/posts');
//     const posts = await fetchData<IPost[]>('/posts'); //result type will replaced with Iposts
//     posts[0].
// })();

// (async () => {
//     // const posts = await fetchPostData('/posts');
//     const posts = await fetchData<IUser[]>('/posts'); 
//     posts[0].
// })();


// (
        //this will imidiete call
// )()