//Justine Cruz-101206000 question 1

//*	Create a script with a function named lowerCaseWords that takes a mixed array as input. 
//The function will do the following.
//return a promise that is resolved or rejected
//filter the non-strings and lower case the remaining words

function lowerCaseWords(array){
    //the for loop is to detect non string values
   for (i=0;array.length;i++){
       
       if (array[i] == String.parsestring(array[count])){
            array[i].toLowercase()}
       else{
           //if the value in the array is not a string it is deleted
           delete array[i]
       }
   }
   return array;
}

 const mixedarray = ["PIZZA",23,true,"Pass","aPPly"]

 console.log(lowerCaseWords(mixedarray))
