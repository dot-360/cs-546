obj={1:4,2:99}
//if(Object.values(obj).includes(3)){
 //   console.log("emo");
//}

a=Object.values(obj)
b=Math.max.apply(null, Object.values(obj))
if(b<100){
    obj={5:25};
}
console.log(obj);