const mongoCollections = require('../config/mongoCollections');   
const restaurants= mongoCollections.restaurants;

module.exports={


   async get(id){
        const { ObjectId } = require('mongodb');
        //if(ObjectId.isValid(id))
        if(!(id)) throw "enter proper id to display"
        if(!(typeof id ==='string')) throw "enter proper id to display"
        exp=/^[0-9a-fA-F]{24}$/
        if(!(id.match(exp))){
            throw "enter valid id "
        }
    
        
        const mo = await restaurants()
        id2=ObjectId(id)
        const reso= await mo.findOne({ _id: id2})
        if(reso===null) throw `no restaurent with this id`
        a=reso
        obj={}
            for(i in a){

                if(i==='_id'){
                    const { ObjectId } = require('mongodb');
                    h=ObjectId(a[i])
                    obj[i]=(h.toString())
                    continue
                }
                obj[i]=a[i]
            }

            return obj
       
    },

    async create(name,location,phoneNumber,website,priceRange, cuisines, overallRating, serviceOptions){


        if(!(name)|(!(location))|!(phoneNumber)|(!(website))|(!(priceRange))|(!(cuisines))|!(overallRating)|(!(serviceOptions))){
          throw 'there should be a valid input of the values'
        }
        if(typeof name ==='boolean'|typeof location ==='boolean'|typeof phoneNumber ==='boolean'|typeof website ==='boolean'|typeof priceRange ==='boolean'|typeof cuisines ==='boolean'|typeof serviceOptions ==='boolean'){
            throw "input cannot be a boolean"
        }
        if(typeof name === 'string'&typeof location === 'string'&typeof phoneNumber === 'string'&typeof website === 'string'&typeof priceRange === 'string'){
            if(name.trim()==""|location.trim()==""|phoneNumber.trim()==""|website.trim()==""|priceRange.trim()==""){
                throw " it should not be an empty string"
            }
        }else{throw "name, location, phoneNumber, website, priceRange should be a string"}
        b=phoneNumber.trim()
        al=/^(?:\(\d{3}\)|\d{3}-)\d{3}-\d{4}$/
        if(!(b.match(al))){
            throw "enter proper phone number"
        }   

        http=website.substring(0,11)
        com= website.substring(website.length-4)
        if(!(http=="http://www."&com==".com")){
            throw " the website should be in proper fromat "
        }
        p=priceRange.trim()
        count=1
        for(let op of p){
            count++
            if(!(op=="$")){
                throw 'the priceRange should be only $'
            }
        }
        if(count>5){
            throw 'price range should be from $ to $$$$'
        }
        c=cuisines
        if(Array.isArray(c)){
            if(c.length==0){
                throw "cuisines cannot be empty"
            }
            for(let l of c){
                if(typeof l==='string'){
                    if(l.trim()==""){
                    throw "enter proper values in cuisines section"}
                }else{throw " cuisines should only take string"}
            }
            
        }else{throw "the cuisines should be an array"}

        ov=overallRating
        if(Number.isInteger(ov)){
            if(ov<0 | ov>5){
                throw 'overallrating should be between 0 and 4'
            }
        }else{throw ' enter valid overallrating'}

        so=serviceOptions
        if(!(typeof so ==='object')& !(so!==null)& Array.isArray(so)){
            throw "enter proper input in serviceOption "
        }
        for(let o in so){
            if(!(typeof so[o]==='boolean')){
                throw 'the value should only be in true or false'
            }
        }

       // name, location, phoneNumber, website, priceRange
        const mongoCollections = await restaurants()

        let newres={
            name: name,
            location: location,
            phoneNumber: phoneNumber,
            website: website,
            priceRange: priceRange,
            cuisines: cuisines,
            overallRating: overallRating,
            serviceOptions: serviceOptions
        }
        const insertInfo = await mongoCollections.insertOne(newres)
        if(insertInfo.insertedCount===0) throw 'could not add restaurent'

        const newId = insertInfo.insertedId
        const mo = await restaurants()
        const rest= await mo.findOne({ _id: newId})
         //return reso
       // const rest  = await this.getresidcreate(newId)
        a= rest
        obj={}
            for(i in a){
                
                if(i==='_id'){
                    const { ObjectId } = require('mongodb');
                    h=ObjectId(a[i])
                    obj[i]=(h.toString())
                    continue
                }
                obj[i]=a[i]
            }

            return obj


    },
    async getAll() {
        const rescol = await restaurants();
    
        const reslis = await rescol.find({}).toArray();
        a=reslis
        mainarr=[]
        for(let k of a ){
            obj={}
            for(let m in k){
                if(m==='_id'){
                    const { ObjectId } = require('mongodb');
                    h=ObjectId(k[m])
                    obj[m]=(h.toString())
                    continue
                }
                obj[m]=k[m]


            }
            mainarr.push(obj)


        }
       
        return mainarr;
      },

      async remove(id){


        const { ObjectId } = require('mongodb');
        
        
        if(!id)throw 'you must provide an id to search for'
        if(typeof id === 'string') {
                if(id.trim()==""){
                    throw 'you should enter a valid id'
                }
        }else{throw ' enter an id which is string'}
        exp=/^[0-9a-fA-F]{24}$/
        if(!(id.match(exp))){
            throw "enter valid id "
        }

        
        const id2 = ObjectId(id);

        const moCo = await restaurants()
        const del= await   moCo.deleteOne({_id: id2})

        if(del.deletedCount===0){
            throw `could not be able to delete ${id} please enter correct id or it is not available database`
        }
        return "Black Bear has been successfully deleted!"
    
      },

      async rename(id,newWebsite){
       const { ObjectId } = require('mongodb');

        if(!id)throw 'you must provide an id to search for'
        if(typeof id === 'string') {
                if(id.trim()==""){
                    throw 'you should enter a valid id'
                }
                
        }else{throw ' enter an id which is string'}

        exp=/^[0-9a-fA-F]{24}$/
        if(!(id.match(exp))){
            throw "enter valid id "
        }
        http=newWebsite.substring(0,11)
        com= newWebsite.substring(newWebsite.length-4)
        if(!(http=="http://www."&com==".com")){
            throw " the website name should be in proper fromat "
        }
        chk=newWebsite.slice(11,-4)
        if(chk.length<5){
            throw ' new website name is small in size'
        }

        
        const id2 = ObjectId(id);
        

        const moCo = await restaurants()
        const relid=await moCo.findOne({_id:id2})
        if(relid==null){
            throw "the id does not exist"
        }
        const ren={
            website: newWebsite
        }

        const { value: updatedUser, ok }= await moCo.findOneAndUpdate(
            {_id:id2},
            {$set:ren}

        );
        if(ren.modifiedCount===0){
            throw `could not modified the ${id2} please enter the proper id `
        }
       
        const reso= await moCo.findOne({ _id: id2})
        a=reso    
        obj={}
            for(i in a){
                if(i==='_id'){
                    const { ObjectId } = require('mongodb');
                    h=ObjectId(a[i])
                    obj[i]=(h.toString())
                    continue
                }
                obj[i]=a[i]
            }

            return obj
      }
    }
      

      

