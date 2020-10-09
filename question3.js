//Justine Cruz-101206000 question 3
//o	create a Logs directory, if it does not exist
//o	change the current process to the new Logs directory
//o	create 10 log files and write some text into the file
//o	output the files names to console

var fs = require('log');
//inspecting for any files that already exists
for(q=0;q<10;q++){
    if(q=="log"+q){
        fs.unlink("log"+q,function(err){
            if(err) throw err;
            console.log("log"+q+" deleted")
        })
    }
}


//creating files
for(i=0;i<10;i++){
    fs.appendFile("log"+i,"Hello world",function (err){
        if(err) throw err;
        console.log('log'+i+" created");
    });

}
//deleting files
for(a=0;a<10;a++){
    fs.unlink("log"+a,function(err){
        if(err) throw err;
        console.log("log"+a+" deleted")
    })
}