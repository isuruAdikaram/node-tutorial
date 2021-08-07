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

function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);

            const error=false; // try making this 'true'
            
            if(!error){
                resolve();
            }else{
                reject('something went wrong!!')
            }

        },2000);
    });   
}

// createPost({title:'post three',body:'this is post three'})
// .then(getPost)
// .catch(err => console.log(err));

// Async / Await
async function init(){
    await createPost({title:'post three',body:'this is post three'});
    getPost();
}

init();

// Promise.all

// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve,reject)=>
// setTimeout(resolve,2000,'Goodbye')
// );

// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
// Promise.all([promise1,promise2,promise3,promise4]).then(values=>console.log(values));
