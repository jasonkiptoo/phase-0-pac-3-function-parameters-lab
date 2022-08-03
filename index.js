
function introduction (string) {

    const message=`Hi, my name is ${string}.`;
    // console.log(`Hi, my name is ${string}.`);
    return message;
  }

  function introductionWithLanguage(name, language){

    
    const message=`Hi, my name is ${name} and I am learning to program in ${language}.`;
    return message
    
    // console.log(`Hi, my name is ${name} and I am learning to program in ${language}`);
  }
  
  function introductionWithLanguageOptional(name, language){
    
    // var name ="Gracie"
    // var language="JavaScript"
 

 const message= `Hi, my name is ${name} and I am learning to program in ${language}.`;
  return message
}




function introductionWithLanguageOptional(name, language="JavaScript"){
  // var language="Javascript"
  // name= "GRACIE"

 const message= `Hi, my name is ${name} and I am learning to program in ${language}.`;
  return message

}