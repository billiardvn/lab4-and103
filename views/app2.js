const express=require('express');
const mailer=require('nodemailer');
const app43=express();//tao doi tuong express
//tao thong tin nguoi gui
let transporter=mailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'nguyenquanghung.bkhn@gmail.com',
        pass: 'lkai wdan sqea ueuw'
    }
});
//noi dung can gui
let mailOption={
    from: 'nguyenquanghung.bkhn@gmail.com',
    to: 'hungnq2808@gmail.com',
    subject: 'tesssssssss gui mail',
    text: 'Day la email gui ngay 15/7'
};
//thuc hien gui
transporter.sendMail(mailOption,(error,info)=>{
    if(error){
        console.error(error);
    }
    else{
        console.log("Thanh cong: ",info.messageId);
    }
});
//lang nghe
app43.listen(3002,()=>{
    console.log("server dang chay o cong 3002");
});