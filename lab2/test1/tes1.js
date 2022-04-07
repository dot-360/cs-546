arr1=[1,2,3,4]
arr2=['a','b','A','c']
arr3=arr1.concat(arr2)


res1=[]
res2=[]
res3=[]
lasres=[]
//arr3.sort(caseInsensitiveSort)

//console.log(arr3);

for (let i in arr3){
    if(typeof i ==='string'){
    if(i==i.toLowerCase()){
        res1.push(i)
    }
    }
}
res1.sort()
console.log(res1);

for(let j in arr3){
    if(typeof j ==='string'){
    if(j==j.toUpperCase()){
        res2.push(j)
    }
}
    
}
res2.sort()
console.log(res2);
for (let x in arr1){
    if(typeof x === 'number'){
        res3.push(x)
    }
    }
res3.sort()
console.log(res3);
res1.concat(res2)
res1.concat(res3)
//console.log(res1);

