const arrayUtils = require("./arrayUtils")
const objUtils = require("./objUtils")
const stringUtils= require("./stringUtils")

//console.log(arrayUtils.average([[2],[10]]));
try {
    
    console.log(arrayUtils.average([2,3,4]))
    console.log('average passed successfully');
 } catch (e) {
    console.error('average failed test case');
 }

 try {
   console.log(arrayUtils.average([[1,3], ["hi",4,5]]))
   console.log('average did not error');
} catch (e) {
   console.error('average failed successfully');
}


 try {
   console.log(arrayUtils.modeSquared([0,2,2]))
   console.log('modeSquared passed successfully');
} catch (e) {
   console.error('modesquared failed test case');
}
try {
   console.log(arrayUtils.modeSquared("guitar", 1, 3, "apple"))
   console.log('modeSquared did not error');
} catch (e) {
   console.error('modeSquared failed successfully');
}

try {
   
   console.log(arrayUtils.merge([3,2,'s','k','A'],[10,23,5,7,8,'f']))
   console.log("merge passed successfully");
} catch (e) {
   console.error('mean failed test case');
}
try {
   
   console.log(arrayUtils.merge([null, null, null], [null, null, null]))
   console.log("merge did not error");
} catch (e) {
   console.error('merge failed successfully');
}

try{
   console.log(arrayUtils.medianElement([5,6,7,33,78,55,22,67,22,]));
   console.log("medianelement passed succesfully");
}catch(e){
   console.error('medianElement failed test case')
}
try{
   console.log(arrayUtils.medianElement(5, 6, 7));
   console.log("medianElement did not error");
}catch(e){
   console.error('medianElement failed successfully')
}

try {
   // Should Pass
   //console.log(arrayUtils.average([2, 3, 4]));
   console.log(objUtils.computeObjects([{1:2,4:45,3:11},{2:45,3:56}],func=> func*2))
   console.log("computeobject passed succesfully");
} catch (e) {
   console.error('computeobjects failed test case');
}
try {
   // Should Pass
   //console.log(arrayUtils.average([2, 3, 4]));
   console.log(objUtils.computeObjects([],func=> func*2))
   console.log("computeobject did not error");
} catch (e) {
   console.error('computeobject failed successfully');
}

try{

   console.log(objUtils.flipObject({2:4,5:22}))
   console.log("flipObject passed successfully");
} catch(e){
   console.error('flipobject failed test case')
}
try{

   console.log(objUtils.flipObject([2,3]))
   console.log("flipObject did not error");
} catch(e){
   console.error('flipobject failed succesfully')
}
try{

   console.log(objUtils.commonKeys({a:1,b:{x:10},c:{}},{a:2,b:{x:10,y:9},c:{}}))
   console.log("commonkeys passed succesfully");
} catch(e){
   console.error('commonkeys failed test case')
}
try{

   console.log(objUtils.commonKeys([2,4],{a:2,b:{x:10,y:9},c:{}}))
   console.log("commonkeys did not error");
} catch(e){
   console.error('commankeys failed succesfully')
}
try{

   console.log(stringUtils.mashUp("hello","byy","$"))
   console.log("mashup passed succesfully");
}catch(e){
   console.error('mashup failed test case');
}
try{

   console.log(stringUtils.mashUp("Patrick", ""))
   console.log("mashup did not error");
}catch(e){
   console.error('mashup failed succesfully');
}


try{

   console.log(stringUtils.replaceChar("Daddy",2));
   console.log("replacechar passed succesfully");
}catch(e){
   console.error('replacechar failed test case')
}
try{

   console.log(stringUtils.replaceChar("Daddy",99));
   console.log("replacechar did not error");
}catch(e){
   console.error('replacechar failed succesfully')
}


try{
   console.log((stringUtils.sortString('123 FOO BAR!')));
   console.log("sortString passed succesfully");

}catch(e){
   console.error('sortstring failed test case')
}
try{
   console.log((stringUtils.sortString(["Hello", "World"])));
   console.log("sortstring did not error");

}catch(e){
   console.error('sortstring failed succesfully')
}

