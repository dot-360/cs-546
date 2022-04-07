a={a:1,b:33,k:22,w:{q:76}}
//console.log(a);
//b=0
c=0
b={}
for(let i in a){
   if(typeof i ==='object'){
        for(let j in i){
            i[i[j]]=j
            
        }
        console.log(i);
    
    }
    else{
        ch=Number(a[i])
        b[ch]=i
        //}
    
    
    //b[a[i]]=i 
   
}
console.log(b);