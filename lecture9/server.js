const exxpress=require('express');
const app=exxpress();

const users=[
    {id:1, name:'yash', email:"yash.singl@gmail.com"},
    {id:2, name:'ravi', email:"ravi@gmail.com"},
    {id:3, name:'priya', email:"priya@gmail.com"},
    {id:4, name:'vasu', email:"vasu@getMaxListeners.com"}
];


app.get('/',(req,res)=>{
    res.send('Hello, World!');
});
app.get('/contact',(req,res)=>{
    res.send('hello from contact page');
});
app.get('/users',(req,res)=>{
    res.json("hello from users page");
});

app.listen(3000,()=>console.log("Server is running on port 3000"));