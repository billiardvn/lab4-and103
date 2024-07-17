const express=require('express');
const jwt=require('jsonwebtoken');
const bodyParser=require('body-parser');
//tao app
const app44 = express();
// cho phep xu ly json
app44.use(bodyParser.urlencoded({extended: true}));
app44.use(bodyParser.json());
//tao khoa truy cap, khoa refress
const accessTokenSecret='123456';
const refressTokenSecret='123456';
//user, password can tao token
const users=[
    {id:1, username: 'user123',password: 'password'},
];
//tao token truy cap: khoa nay bi het han trong 15 phut
function generateAcessToken(user){
    return jwt.sign(user,accessTokenSecret,{expiresIn: '15m'});
}
//tao token refress: khoa nay het han trong 7 ngay
function generateRefressToken(user){
    return jwt.sign(user,refressTokenSecret,{expiresIn: '7d'});
}
//tao API login
app44.post('/login', (req,res)=>{
    const { username, password } = req.body; //nhap user, pass qua postman
    console.log(username);
    console.log(password);
    //validate thong tin user nhap
    const user=users.find((u)=>
        u.username===username && u.password===password
    );
    if(!user){
        console.log("user, pass khong dung");
        return;
    }
    //neu du lieu nhap dung -> ta tao token
    const accessToken=generateAcessToken({id:user.id,username: user.username});
    const refessToken=generateRefressToken({id:user.id,username: user.username});
    //tra ve ket qua
    res.json({accessToken,refessToken});
    console.log("AccessToken: ",accessToken);
    console.log("RefressToken: ",refessToken);
    //
});
//lang nghe
app44.listen(3004,()=>{
    console.log("server dang chay o cong 3004");
});