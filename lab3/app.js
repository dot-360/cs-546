const people=require('./people');
const stocks=require('./stocks')
async function main(){
  try{
        people.getPersonById("5c34381a-dcec-428d-aeff-2ba23f3d777e");
    }
        catch(e){
            console.log(e);
        }
     try{
            people.sameStreet('Delaware', 'Alley');
        }
            catch(e){
                console.log(e);
            }

       try{
             people.manipulateSsn()
         }   
         catch(e){
             console.log(" it will not work");
         } 
         try{
            people.sameBirthday(4, 25) 
         }catch(e){
             console.log(e);
         }
   try{
        stocks.listShareholders()
    }   
    catch(e){
        console.log(" it will not work");
    }

    try{
        stocks.topShareholders('Aeglea BioTherapeutics, Inc.')
    }catch(e){

        console.log(e);}
    try{
            stocks.listStocks("Grenville", "Pawelke")
        }catch(e){
            console.log(e);
        }
    try{
        stocks.getStockById("f652f797-7ca0-4382-befb-2ab8be914ff0")
    }catch(e){

        console.log(e);}
    

 
}   
        main()