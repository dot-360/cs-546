array = [9,3,3,3,6,6,6,6,3];

  const obj = {};

  array.forEach(number => {
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
   console.log(obj2);
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
  console.log(finalres);
