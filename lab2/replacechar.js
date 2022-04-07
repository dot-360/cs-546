string="Daddy"
newstr=""
idx=2
pre=idx-1
prectr=string.length+2
nxt=idx+1
nxtctr=prectr
en=0
for(let i of string){
    if(i==string[idx]&en==0){
        newstr=newstr+i
        en=1
    }
    else if(i==string[idx]){
        if(prectr>=nxtctr){
            newstr=newstr+string[pre]
            prectr--
        }
        else if(prectr<nxtctr){
            newstr=newstr+string[nxt]
            nxtctr--
        }
     } 
    else{newstr=newstr+i}
    
}
console.log(newstr);