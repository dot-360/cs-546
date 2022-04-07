
const average = function average(arr){

    if(!(Array.isArray(arr))){
        throw " it is not an array"
    }
    arr.forEach((activity) => {
    if(activity==null||activity==NaN||activity==""){
        throw "null val"
    } 
    if(activity==NaN|| activity.length==0){
        throw "error"
     }
    } 

)

for(let i of arr){
if(typeof i ==="string"){
    throw "it is a string"
}}


if(arr[0].constructor === Array)
{
    arr2=[]
    for (row of arr) for (e of row) arr2.push(e);
    for(let i of arr2 ){
    if(typeof i==="string"){
        throw "it is an error"
    }}
    d=0
     c=0
    for(let i of arr2){
        c=c+i
        d++
    }
    fin=c/d
    return(Math.round(fin));
}
else
{
    d=0
     c=0
    for(let i of arr){
        c=c+i
        d++
    }
    fin=c/d
    return(Math.round(fin));
}
}

const modeSquared = function modeSquared(arr){

    if(!(Array.isArray(arr))){
        throw "not an error"
    }
    arr.forEach((activity) => {
        if(activity==null||activity==NaN){
            throw "null val"
        } 
        if(activity==NaN|| activity.length==0){
            throw "error"
         }
        
        } 
    )
    for(let i of arr){
    if(typeof i ==="string"){
        throw "it is a string"
    }}
    if(arr[0].constructor === Array)
{
    arr2=[]
    for (row of arr) for (e of row) arr2.push(e);
    for(let i of arr2 ){
    if(typeof i==="string"){
        throw "it is an error"
    }}
}
if(arr==0){
    return 0
}
const obj = {};

  arr.forEach(number => {
    if (!obj[number]) {
      obj[number] = 1;
    } else {
      obj[number] += 1;
    }
  });

   obj2={}
   for (let key in obj) {
     const value = obj[key];
             num=Number(key)
         if(Object.keys(obj2).length==0){
             obj2[num]=value
         }
        b=Math.max.apply(null, Object.values(obj2))
         if(b<value){
         obj2={}
         obj2={[num]:value}
             }
         if(b==value){
 
                 obj2[num]=value
             } 
          }
res=0
fil=[]
   for(let key in obj2){
      c=Number(key)*Number(key)
      fil.push(c)
   }
   finalres=0
for(let i of fil){
  finalres+=i
}
  return finalres


}
const merge = function merge(arr1,arr2){
    if(!(Array.isArray(arr1))&(!(Array.isArray(arr2)))){
        throw "not an error"
    }
    
    
    arr1.forEach((activity) => {
        if(activity==null||activity==NaN){
            throw "null val"
        } 
        if(activity==NaN|| activity.length==0){
            throw "error"
         }
        
        } 
    )
    arr2.forEach((activity) => {
        if(activity==null||activity==NaN){
            throw "null val"
        } 
        if(activity==NaN|| activity.length==0){
            throw "error"
         }
        
        } 
    )
    c=[]
    d=[]
    for (let sq of arr1){
        if(typeof(sq)=='string'){
                c=sq.split("")
                if(c.length>1){
                  throw "error"            }
                }
        }
        
    
    for (let sq2 of arr2){
        if(typeof(sq2)=='string')
                d=sq2.split("")
                if(d.length>1){
                  throw "error2"
                }
                }
    
        arr3=arr1.concat(arr2)


        res1=[]
        res2=[]
        res3=[]
        lasres=[]
        //arr3.sort(caseInsensitiveSort)
        
        //console.log(arr3);
        
        for (let i of arr3){
            if(typeof i ==='string'){
            if(i==i.toLowerCase()){
                res1.push(i)
                
            }
            }
        }
        res1.sort()        
        for(let j of arr3){
            if(typeof j ==='string'){
            if(j==j.toUpperCase()){
                res2.push(j)
            }
        }  
        }
        res2.sort()
        for (let x of arr3){
            if(typeof x === 'number'){
                res3.push(x)
            }
            }
        res3.sort()
        res3 = res3.sort(function (stra, en) {  return stra - en;  });
        //console.log(res3);
        res1=res1.concat(res2)
        res1=res1.concat(res3)
        return res1
}

const   medianElement= function medianElement(array){

    array.forEach((activity) => {
        if(activity==null||activity==NaN){
            throw "null val"
        } 
        if(activity==NaN|| activity.length==0){
            throw "error"
         }
        
        } 
    )
   if(!(Array.isArray(array))){
       throw "not an error"
   }
   for(i of array){
       if(!(i%i==0)){
            throw "not a valid input"
       }
   }   
a=array
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
//val=a.indexOf(mid)
val= a.length
val1=val/2
c[median]=val1
}

return c
}

module.exports={
    average,
    modeSquared,
    merge,
    medianElement
}