//interface is same as type but it use for object maximum interface also can extend 
// but in type we cant merge two type but in interface we can merge

interface persion {
name:string
}
interface student extends persion{
    school:string
}

let st:student={
    name:'vj',
    school:"ckpcet"
}

interface persion1{
    sirname:string
}

interface persion1{
    sirname1:string
}