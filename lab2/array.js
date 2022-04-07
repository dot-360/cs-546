arr=[[1234],[33,43]]
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
arr.forEach((activity) => {
    if(activity==null||activity==NaN){
        console.log("null val");
    } 
    if(activity==NaN|| activity.length==0){
        console.log("error");
     }
    
    } 
)
for(let i of arr){
if(typeof i ==="string"){
    console.log("my life");
}}
if(arr[0].constructor === Array)
{
    arr2=[]
    for (row of arr) for (e of row) arr2.push(e);
    for(let i of arr2 ){
    if(typeof i==="string"){
        console.log("hi");
    }}
    d=0
     c=0
    for(let i of arr2){
        c=c+i
        d++
    }
    fin=c/d
    console.log(Math.round(fin));
}
else
{
    d=0
     c=0
    for(let i of arr){
        c=c+i
        d++
    }
    fin=c/d
    console.log(Math.round(fin));
}

