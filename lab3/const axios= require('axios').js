const axios= require('axios')
//const people= require('./people')
//const axios= require('axios')
async function getPeople(){
    const {data}  = await axios.get('https://gist.githubusercontent.com/graffixnyc/a1196cbf008e85a8e808dc60d4db7261/raw/9fd0d1a4d7846b19e52ab3551339c5b0b37cac71/people.json')
    return data // return data // this will be the array of people objects
  }
async function getstocks(){
    const {data}  = await axios.get('https://gist.githubusercontent.com/graffixnyc/8c363d85e61863ac044097c0d199dbcc/raw/7d79752a9342ac97e4953bce23db0388a39642bf/stocks.json')
    return data // return data // this will be the array of people objects
  }
const listShareholders= function listShareholders(){

            async function fun1(){
                try{
                    let a  = await getstocks()
                    c=0
                    let pepdata= await getPeople()
                    //console.log(    );
                    loop1: for(i=0;i<a.length;i++){
                        shareholders=[]
                     loop2:for(let j of a[i].shareholders){
                            
                           
                        loop3: for(k=0;k<pepdata.length;k++){
                            obj={}
                                if(j.userId==pepdata[k].id){
                               // console.log("first name:",pepdata[k].first_name,"last name:",pepdata[k].last_name);
                                    // break loop3
                                     obj["first_name"]=pepdata[k].first_name
                                     obj["last_name"]=pepdata[k].last_name
                                     shareholders.push(obj)
                                }   

                            }
                            //`Get me an Uber ASAP to ${dateDetails.location}, we are going on a date!`
                            console.log("{ id:",a[i].id,"stock_name:",a[i].stock_name,"shareholders:",shareholders,"}");
                            
                        }
                        
                    }
                        

                }catch(e){

                    console.log("it is an errr");
                }



            }


            async function main(){
                await fun1();

            }
        
        main()
}


const getStockById = function getStockById(id){

    async function fun2(){
         try{ 
             let a2 = await getstocks()
             //console.log(a.length);
             for( g =0;g<a2.length;g++){
                 if(a2[g].id==id){
                     console.log(a2[g]);
                 }
             }
         
              }catch(e){
                  console.log("it si ee");
              }
          }
          async function main2(){
                  await fun2();
  
              }
          main2()

}


const check = function check(){


    async function ch1(){
        try{
            let x=await getstocks()
            
            
            for(z=0;z<x.length;z++){
                for(let v of x[z].shareholders){
                        console.log(v.userId);
                }
            }
        }catch(e){
            console.log("it is a prob");
        }



    }
    async function che(){
        await ch1();

    }
che()








}

module.exports={
    listShareholders,     
    getStockById,
    check
}