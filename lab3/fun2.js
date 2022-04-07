a="06/29/1982"
b='31'
m=Number(a)
d=Number(b)
str=a.toString()

qw=0

if(a<13){
    qw=new Date(0,m,0).getDate()
    if(qw<d){
        console.log("it is big no");
    }
}
else{
    console.log("year is big");
}

ans=Intl.DateTimeFormat('en', { month: 'short' }).format(new Date(str));

console.log(qw,ans);