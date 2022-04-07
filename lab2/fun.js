a="ee"
b=['a','3','?','*'," "," "]
sp="!/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\:<>\?]/"
sp1=[]
sp1=sp.split('')
//console.log(sp1);
c=a.concat(b)
for (let i of b){
    x=Number(i)
    if((x%x==0||x==0)&(!(i==" "))){
        console.log("hi");
    }
    if(sp.indexOf(i)>=0){
        console.log("goca");
    }
    else if(i==" "){
        console.log("blank");
    }
}

console.log(b[0]);
