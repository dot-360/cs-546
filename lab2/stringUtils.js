const sortString= function sortString(string){
    if(!(typeof string==='string')){
        throw " it is not a string"
    }
    str12=string.split('')
    
    if(str12.length<=0& string.trim()===""){
        throw "it is an empty string"
    }
    
    a=string
var c=[]
 c=a.split('')
//console.log(c);
 //c=c.sort()
 str=""
 sp="!/[~`!#$%@\^&*+=/\']';,/{()}|\\:<>\?]/"
sp1=[]
sp1=sp.split('')
num=""

num2=[]
char=""
spchar=""
bl=""
 for(let i of c){
//console.log(sp1);
//c=a.concat(b)
    x=Number(i)
    if((x%x==0||x==0)&(!(i==" "))){
        num+=i
    }
    else if(sp.indexOf(i)>=0){
        spchar+=i
    }
    else if(i==" "){
        bl+=i
    }
    else{
        char+=i
    }
}
 num=num.split('')
 num.sort()
 sonum=""
 for(let i of num){
     sonum+=i
 }
 char=char.split('')
 char.sort()
 sochar=""
 for(let j of char){
    sochar+=j
 }
 resend=sonum+sochar+spchar+bl
 return resend;


}

const replaceChar = function replaceChar(string, idx){

    if(!(typeof string==='string')){
        throw " it is not a string"
    }
    //str12=String.split('')
    len=string.length
    if(len<=0& string.trim()===""){
        throw "it is an empty string"
    }

    if(idx<=0|idx>(len-1)|(!(idx%idx==0))){
        throw "invalid idx"
    }
    
    newstr=""
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

return newstr
}

const mashUp = function mashup(string1,string2, char){

    if(!(typeof string1==='string')&(!(typeof string2==='string'))){
        throw " it is not a string"
    }
    //str12=String.split('')
    len=string1.length
    len2=string2.length
    if(len<=0&&len2<=0& string1.trim()===' '& string2.trim()===' '){
        throw "it is an empty string"
    }

    if(char.trim()===""){
        throw 'char is not valid'
    }



    l=string1
b=string2
res=""
if(l.length>b.length){
    chk=b.length
    ptr=l.length
    rest=l
}
else{
    chk=l.length
    ptr=b.length
    rest=b
}
if(l.length==b.length){
for (i=0;i<l.length;i++){
    res=res+l[i]+b[i]
}
}
else{
        for(i=0;i<ptr;i++){
            if(chk>0){
                res=res+l[i]+b[i]
            }
            else{
                res=res+rest[i]+char
            }
            chk--
        }
}
return res


}


module.exports={
    mashUp,
    replaceChar,
    sortString
}