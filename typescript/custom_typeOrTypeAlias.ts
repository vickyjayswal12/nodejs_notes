type Custom={
    name:string,
    age:number
}

let b:Custom={ //here we cant declare a becouse access all variable same rrot
    name:'vicky',
    age:20
}


type Animal = {
    name: string;
    sound: string;
  };
  
  // Extend the Animal type to create a new type alias
  type Dog = Animal & {
    breed: string;
  };

// but not work in merge
// type Animal=

//optional fields
type b={
    name:string,
    age?:number
}
let n:b={
    name:"vj"
}