const restaurants = require("./data/restaurents");
const connection = require("./config/mongoConnection")

async function main() {
   //create res
 /*try{ const res1 = await restaurants.create("taj", "new york city, New York", "886-996-8879", "http://www.tajhotels.com", "$$$$", ["thai","indian","mexican"], 3, {dineIn: true, takeOut: false, delivery: false});
    //console.log('restaurent 1 is created');
    maiarr=res1
    console.log(res1);}
    catch(e){
        console.log(e);
    }
   //create 2 res
  try{ const res2 = await restaurants.create("oberoi", "los angeles, california", "665-988-4111", "http://www.oberoiservices.com", "$$$", ["chinese", "Italian"], 3, {dineIn: true, takeOut: true, delivery: true});
    maiarr2=res2
    //console.log('restaurent 2 is created');
     }
    catch(e){
        console.log(e);
    }
    //display all
   try{       
         const allResturants = await restaurants.getAll();
        console.log(allResturants);
        //console.log("all the restaurents");    
    }
        catch(e){
            console.log(e);
        }
      // create 3 res  
    try{ const res3 = await restaurants.create("kubera", "jersey city , New jersey", "654-875-9987", "http://www.kuberaonline.com", "$$$$", ["Cuban", "Italian"], 3, {dineIn: false, takeOut: true, delivery: false});
    //console.log('3rd restaurent created'); 
    console.log(res3);}
    catch(e){
        console.log(e);
    }*/
    //rename first res website
    try{

        console.log( await restaurants.rename("615fab737ad1873ea07d312d", "http://www.newtajhotels.com") )
       // console.log(renamedSaffronLounge); 
       }catch(e){
           console.log((e));
       }
     //remove 2 res you created  
       /*try{
    
        const removeBlackBear = await restaurants.remove(maiarr2._id); 
     console.log(removeBlackBear); 
     }catch(e){
        console.log(e);
    }
    //log all res
    try{        const allResturants = await restaurants.getAll();
        console.log(allResturants);}
        catch(e){
            console.log(e);
        }
     //create res with bad input  to throw error 
        try{ const safrronLounge = await restaurants.create("jj", "New York City, New York", "1234567890", "http://www.saffronlounge.com", "$$$$", ["Cuban", "Italian"], true, {dineIn: true, takeOut: true, delivery: false});
        console.log(safrronLounge);}
        catch(e){
            console.log(e);
        }
        // try to remove website that does not exist
        try{
    
            const removeBlackBear = await restaurants.remove(maiarr2._id); 
         console.log(removeBlackBear); 
         }catch(e){
            console.log(e);
        }
        //try to rename webiste that does not exist
        try{

            console.log( await restaurants.rename(maiarr2._id, "http://www.google.com") )
           
           }catch(e){
               console.log((e));
           }
           // rename res to passing invalid data for the paramenter to make sure it thorws
           try{

            console.log( await restaurants.rename(maiarr._id, "ht://www.google.com") )
            
           }catch(e){
               console.log((e));
           }

   try{
        const pizzaLounge = await restaurants.get("507f1f77bcf86cd799439011"); 
        console.log(pizzaLounge)
    }catch(e){
        console.log(e);
    }
    */
try{
    const db = await connection.connectToDb();
  await connection.closeConnection();
  console.log('Done!');}
  catch(e){
      console.log(e);
  }
}


main().catch((error) => {
    console.log(error);
  })