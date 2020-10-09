//Justine Cruz-101206000 question 2

//●	Given the script file callbacks.js, write a script that does the following:
//o	Create a method resolvedPromise 
//that is similar to delayedSuccess 
//and resolves a message after a 
//timeout of 500ms.

//o	Create a method rejectedPromise 
//that is similar to delayedException and 
//is an error message after a timeout of 
//500ms.

//o	Call both promises separately and 
//handle the resolved and reject results
//and then output to the console

//resolved Promise
const resolvedPromise(){ 
return new Promise(completed =>{}
    ,setTimeout(() =>{
        completed("completed after 500ms");
    },500));
     };


//Rejected Promise
const rejectedPromise = new Promise(rejected)=> {
    setTimeout(()=>{
        rejected("failed");
    },500);

    rejectedPromise.catch(error =>{
        console.log(error)
    })
}

resolvedPromise()
rejectedPromise()
