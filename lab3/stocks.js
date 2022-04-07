const axios= require('axios')
async function getPeople(){
    const {data}  = await axios.get('https://gist.githubusercontent.com/graffixnyc/a1196cbf008e85a8e808dc60d4db7261/raw/9fd0d1a4d7846b19e52ab3551339c5b0b37cac71/people.json')
    return data 
  }
async function getstocks(){
    const {data}  = await axios.get('https://gist.githubusercontent.com/graffixnyc/8c363d85e61863ac044097c0d199dbcc/raw/7d79752a9342ac97e4953bce23db0388a39642bf/stocks.json')
    return data 
  }
const listShareholders= function listShareholders(){

            async function fun1(){
                try{
                    let a  = await getstocks()
                    c=0
                    let pepdata= await getPeople()
                    //console.log(    );
                    mainarray=[]
                    loop1: for(i=0;i<a.length;i++){
                        mainobj={}
                        shareholders=[]
                     loop2:for(let j of a[i].shareholders){
                            
                           
                        loop3: for(k=0;k<pepdata.length;k++){
                            obj={}
                                if(j.userId==pepdata[k].id){
                               // console.log("first name:",pepdata[k].first_name,"last name:",pepdata[k].last_name);
                                    // break loop3
                                     obj["first_name"]=pepdata[k].first_name
                                     obj["last_name"]=pepdata[k].last_name
                                     obj["number_of_shares"]=j.number_of_shares
                                     shareholders.push(obj)
                                }   

                            }
                            mainobj["id"]=a[i].id
                            mainobj["stock_name"]=a[i].stock_name
                            mainobj["shareholders"]=shareholders
                        }
                        
                        mainarray.push(mainobj)
                    }

                for(let jo of mainarray){
                    console.log(jo);


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

    async function fun2(){
         try{ 
             let a2 = await getstocks()
             //console.log(a.length);
             for( g =0;g<a2.length;g++){
                 if(a2[g].id==id){
                     console.log(a2[g]);
                     break;
                 }
                 else if(g+1==a2.length){
                     throw "stock not found"
                 }
             }
         
              }catch(e){
                  console.log(e);
              }
          }
          async function main2(){
                  await fun2();
  
              }
          main2()

}

const topShareholders= function topShareholders(stockName){
    if(typeof stockName === 'boolean'){
        throw "input cannot be boolean"
    }
    if((stockName === undefined || stockName === null)){
        throw "you should provide an input"
    }

    if(typeof stockName ==="string"){
        if(stockName.trim()==""){
            throw "it is an empty string"
        }

    }else{throw "there should be an valid input"}


    async function fun3(){
        try {

            dt=await getstocks()
            pd= await getPeople()
            for(f=0;f<dt.length;f++){
                if(dt[f].stock_name==stockName){
                    loo=0
                    topshare=''
                    if((dt[f].shareholders).length==0){
                        throw `${stockName} currently has no shareholders`
                    }
                    for(let o of dt[f].shareholders){
                        //console.log(o);
                        if(o.number_of_shares>loo){
                            loo=o.number_of_shares
                            topshare=o.userId
                        }
                    }
                }else if(f+1==dt.length){
                    throw `no stock with that name`
                }
               // console.log(dt[f]);

            }
            for(t=0;t<pd.length;t++){

                if(topshare==pd[t].id){
                    //console.log("with",loo,"shares in",stockName,',', pd[t].first_name,pd[t].last_name,"is the top shareholders");
                    //message = `Get me an Uber ASAP to ${Obj1[maxkey]}, we are going on a date!`;
                    mes= `with ${loo} shares in ${stockName},${pd[t].first_name} ${pd[t].last_name} is the top shareholders`
                    console.log(mes);
                
                     
                }
            }
           // console.log(loo,topshare);

        }catch(e){

            console.log(e);
        }
    
    }

    async function main3(){
     await fun3()

    }
 main3()
}

const listStocks =function  listStocks(firstName,lastName){
    if(typeof firstName === 'boolean'|typeof lastName === 'boolean'){
        throw "input cannot be boolean"
    }
    if(firstName === undefined | firstName === null|lastName === undefined | lastName === null){
        throw "you should provide proper input"
    }
        
    if(typeof firstName==='string'&typeof lastName ==='string'){
        sn=firstName.trim()
        ss=lastName.trim()
        if(sn==""|ss==""){
            throw "there should not be any empty string"
        }    
    }else{
        throw "there should be an valid input "
    }

    async function fun4(){


        try{
            pd= await getPeople()
            sd= await getstocks()

            fn=firstName
            ln=lastName
            mainarr=[]
            //subobj={}
            for(i=0;i<pd.length;i++){
                if(pd[i].first_name==fn&pd[i].last_name==ln){
                    idd=pd[i].id
                    for(j=0;j<sd.length;j++){
                        for(let e of sd[j].shareholders){
                            subobj={}
                            if(idd==e.userId){
                                subobj["stock_name"]=(sd[j].stock_name)
                                subobj["number_of_shares"]=e.number_of_shares
                                //console.log(e);
                               mainarr.push(subobj)
                                break
                            }
                        }

                    }
                }

            }
            if(mainarr.length==0){
                throw `${firstName} ${lastName} is not in people database`
            }
            console.log(mainarr);



        }catch(e){
            console.log(e);
        }
    }
        async function main4(){
            await fun4();
    }
main4()
}

module.exports={
    listShareholders,     
    getStockById,
    topShareholders,
    listStocks,
    }