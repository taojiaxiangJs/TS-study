
interface Iadd <T,B>{
    (x: T, y: B):B
}

function add<T,B>(x:T, y:B):B{
    return y
}


var add1:Iadd<number, string> = add;

console.log(add1(1,'3'))