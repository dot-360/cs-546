a="heLAl*3314o)@^_''"
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
 console.log(sonum+sochar+spchar+bl);

