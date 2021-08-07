const {readFile} = require('fs');

const getText = (path)=>{
    return new Promise()
}

readFile('./content/first.txt','utf-8',(err,data)=>{
    if(err){
        return;
    }else{
        console.log(data);
    }
})


