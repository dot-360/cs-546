a={a:{o:45},c:{p:45,d:7}}
b={a:{o:45},c:{a:9,d:7,p:45}}
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
console.log(c);