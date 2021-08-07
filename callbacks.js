const posts = [
    {title:'post one',body:'this is post one'},
    {title:'post two',body:'this is post two'}
];

function getPost(){
    setTimeout(()=>{
        let outPut ='';
        posts.forEach((post)=>{
            outPut+=`<li>${post.title}</li>`;
        });
        document.body.innerHTML=outPut;
    },1000);
}

function createPost(post,callback){
    setTimeout(()=>{
        posts.push(post);
        callback();
    },2000);
}



createPost({title:'post three',body:'this is post three'},getPost);