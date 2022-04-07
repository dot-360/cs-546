a=[1,3,4,5,99,104,10,7]
f=a.length
median=0,mid=0
c={}
//console.log(f);
if(!(f%2==0)){
    for(let i in a){
        //a = a.sort((a, b) => a - b);
mid = Math.ceil(f / 2);
median = f % 2 == 0 ? (a[mid] + a[mid - 1]) / 2 : a[mid - 1];
 

}
val=a.indexOf(median)
c[median]=val
}

else
{
    for(let i in a){
    a = a.sort((a, b) => a - b);
    
mid = Math.ceil(f / 2);
median = f % 2 == 0 ? (a[mid] + a[mid - 1]) / 2 : a[mid - 1];
}
val=a.indexOf(mid)
val+=2
c[median]=val}
console.log(a);
console.log(c);
console.log(median);
