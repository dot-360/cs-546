const axios= require('axios')
const util = require('util')
async function getPeople(){
    const {data}  = await axios.get('https://gist.githubusercontent.com/graffixnyc/a1196cbf008e85a8e808dc60d4db7261/raw/9fd0d1a4d7846b19e52ab3551339c5b0b37cac71/people.json')
    return data // return data // this will be the array of people objects
  }
  const getPersonById= function getPersonById(id){
    if(typeof id === 'boolean'){
        throw "input cannot be boolean"
    }
    if(id === undefined || id === null){
        throw "you should provide an input"
    }
        
        if(typeof id ==="string"){
            if(id.trim()==""){
                throw "it is an empty string"
            }

        }else{throw "there should be an valid input"}
        
      async function hello(){
       try{ 
           c=0
           let a = await getPeople()
           //console.log(a.length);
           for( i =0;i<a.length;i++){
               if(a[i].id==id){
                   c=1
                   console.log(a[i]);
               }
           }
       
            if(c==0){
                throw "Person not found"
            } 
           
            }catch(e){
                console.log(e);
            }


            
        }
        
        async function main(){
                await hello();

            }
        
        main()}


const sameStreet=function sameStreet(streetName, streetSuffix){
    if(typeof streetName === 'boolean'|typeof streetSuffix === 'boolean'){
        throw "input cannot be boolean"
    }

    if(streetName === undefined || streetName === null | streetSuffix === undefined || streetSuffix === null){
        throw "you should provide an input"
    }
    if(typeof streetName==='string'&typeof streetSuffix ==='string'){
            sn=streetName.trim()
            ss=streetSuffix.trim()
            if(sn==""|ss==""){
                throw "it is an empty string"
            }    
        }else{
            throw "there should be an valid input "
        }


      async function fun2(){
            try{
                let b = await getPeople()
                str1=streetName
                c=0
                str2=streetSuffix
                var f= str1.charAt(0).toUpperCase()+str1.slice(1)
                var f1= str2.charAt(0).toUpperCase()+str2.slice(1)
                mainarr=[]
                for( i =0;i<b.length;i++){

                    if((b[i].address.home.street_name==f&b[i].address.home.street_suffix==f1)|(b[i].address.work.street_name==f&b[i].address.work.street_suffix==f1)){
                        mainarr.push(b[i])
                        c+=1
                    }
                }
                
                if(c<2){       
                    for(i of mainarr){
                        var dd=i
                     }                         
                    sent=`error: there is only one person who lives or work at ${streetName} ${streetSuffix} location which is ${dd.first_name} ${dd.last_name} `
                    throw sent
                }
                
                    console.log(util.inspect(mainarr,false,null,true));
                    //console.log(mainarr);
            

            }
            catch(e){
                    console.table(e)
            }            
      }

      async function main2(){
        await fun2();

    }

main2()

}


const manipulateSsn=function manipulateSsn(){

async function fun3(){
        try{
            let da1= await getPeople()
            res=1
            finres=0
            res2 =[]
            obj1={}
                for(i=0;i<da1.length;i++){
                   ssno=da1[i].ssn
                   ssno=ssno.replace(/\-/g,'')
                   ssno2=ssno.split('').sort().join('')

                    f=Number(ssno2)
                    //console.log(f);  
                    res=res+f
                    res2.push(f)
                    obj1[f]=[da1[i].first_name,da1[i].last_name]
                }
                var maxkey = Math.max.apply(Math, res2);
                var minkey = Math.min.apply(Math, res2); 
                subobj1={}
                subobj2={}
                mainobj={}
                subobj1["firstName"]=obj1[maxkey][0]
                subobj1["lastName"]=obj1[maxkey][1]
                subobj2["firstName"]=obj1[minkey][0]
                subobj2["lastName"]=obj1[minkey][1]
                mainobj['highest']=subobj1
                mainobj["lowest"]=subobj2

                mainobj["average"]=Math.floor(res/da1.length)
                

                console.log(mainobj)
                }
        catch(e){

            console.log();
        }
    }
        async function main3(){
             await fun3();
    
        }
    
    main3()

    }
const sameBirthday= function sameBirthday(month,day){
            if(typeof month === 'boolean'|typeof day==='boolean'){
                throw "input cannot be boolean"
            }
            if(typeof month ==='string'|typeof day ==='string'){
            mm=(month.toString()).trim()
            dd=(day.toString()).trim()
            if(mm=='' |dd==''){
                throw "it is not a valid month or day"
            }
        }else if(month === undefined || month === null||day === undefined || day === null){
            throw "you should provide an proper input"
        }
            m=Number(month)
            d=Number(day)
            if(Number.isNaN(m)|Number.isNaN(d)|m<=0|d<=0){
                throw "you can only input valid Gregorian calendar dates"
            }
            mon=m.toString()
             if(m<13){
                str=Intl.DateTimeFormat('en', { month: 'short' }).format(new Date(mon));
                qw=new Date(0,m,0).getDate()
                if(qw<d){
                    throw `there are not ${d} days in ${str}`
                }
            }
            else if(m>12){
                throw "Month > 12"
            }else{
                throw "input is invalid"
            }
            async function fun4(){
        
                

                try{
                    let da4= await getPeople()
                    mainarr=[]
                    for(i=0;i<da4.length;i++){
                        var tp=(new Date(da4[i].date_of_birth))
                        var reald=new Date(tp)
                        var mon=reald.getMonth()+1
                        var dat= reald.getDate()

                        if(mon==month& day==dat){
                            nam=da4[i].first_name+" "+da4[i].last_name
                            mainarr.push(nam)


                        }
                    }


                        if(mainarr.length>0){
                            console.log( mainarr);
                        }else{throw 'there are no birthdays on your input date'}

                    


                }catch(e){
                    console.log(e);
                }
            }

            async function main4(){
                await fun4()
            }
main4()
}

 module.exports={
     getPersonById,
     sameStreet,
     manipulateSsn,
     sameBirthday,  

 }