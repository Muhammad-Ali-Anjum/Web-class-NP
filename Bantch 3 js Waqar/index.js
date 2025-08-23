let a={
    name:"anjum",
    age:23,
    pro:"web"
}

console.log(a.pro)
let b="";
for(let c in a){
    b+=a[c]
}
console.log(b)
let n=0

while(n<3){
if(n===5){
    continue
}
else{
    console.log(n)
}
n++;
}

