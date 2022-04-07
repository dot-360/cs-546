const computeObjects = function computeObjects(arr,func){

    for(let i of arr){
        if(!(Object.prototype.toString.call(i) === '[object Object]')){
            throw "it is not an object"
        }
    }
if(arr.length==0){
    throw "it is an empty array"
}
for(let i of arr){
    if(typeof i ==="string"){
        throw "it is a string"
}}
if(!(Array.isArray(arr))){
    throw "it is not array"
}
obj={}
  for(var i of arr){
      for(const j in i){
            if(!(j in obj)){
                a=func(i[j])
                obj[j]= a
            }
            else{
                e=func(i[j])
                c=obj[j]+e
                obj[j]=c

            }
        }
    }
return obj
}

const flipObject = function flipObject(a){

        if(!(Object.prototype.toString.call(a) === '[object Object]')){
            throw "it is not an object"
        }
if(Object.keys(a).length<1){
    throw "object is empty"
}
c=0
b={}
for(let i in a){
   if(typeof a[i] ==='object'){
        for(let j in a[i]){
          ex=i
          c=(a[i])[j]
          k=j
          delete a[i][j]
          a[i][c]=k

          b[ex]=a[i]
        }
        
    
    }
    else{
        ch=Number(a[i])
        b[ch]=i
}
}
return b

}

const commonKeys= function commonKeys(a,b){
    
        if(!(Object.prototype.toString.call(a) === '[object Object]')){
            throw "it is not an object"
        }
        if(!(Object.prototype.toString.call(b) === '[object Object]')){
            throw "it is not an object"
        }
        if(Object.keys(a).length==0||Object.keys(b).length==0){
            throw "Object is empty"
        }

    c={}
for(let i in a){
    if(typeof a[i] ==='object'){
        for(let sq in a[i]){
            
        for (let k in b){
            if(typeof b[k]==='object'& i==k ){
                for(let sq1 in b[k]){
                    v1=sq
                v2=sq1
                q1=a[i][sq]
                q2=b[k][sq1]
                if(v1==v2&q1==q2){
                 c[v1]=q1
                  }
                }
            }
            v1=sq
            v2=k
            q1=a[i][sq]
            q2=b[k]
            if(v1==v2&q1==q2){
                c[v1]=q1
            }}
    }}
    else 
    {
    for (let k in b){
        if(typeof b[k]==='object'&i==k){
            for (let sq2 in b[k]){
                v1=i
                v2=sq2
                q1=a[i]
                q2=b[k][sq2]
                if(v1==v2&q1==q2){
                    c[v1]=q1
                }}

        }
        else{
        v1=i
        v2=k
        q1=a[i]
        q2=b[k]
        if(v1==v2&q1==q2){
            c[v1]=q1
        }
    }   
    }
        //console.log(i);

}}
return c
}
module.exports={
    
    computeObjects,
    flipObject,
    commonKeys
}