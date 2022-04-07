f=[{x:3,d:5,f:4},{x:4,z:9,q:99}]
obj={}

function myFunction(x) {
    return x*2;   // The function returns the product of p1 and p2
  }
  

  for(var i of f){
      for(const j in i){
            if(!(j in obj)){
                a=myFunction(i[j])
                obj[j]= a
            }
            else{
                e=myFunction(i[j])
                c=obj[j]+e
                obj[j]=c

            }
        }
    }
console.log(obj);
  
  