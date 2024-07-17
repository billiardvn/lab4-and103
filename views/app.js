const express = require('express');
const path = require('path');
const fs = require ('fs');
const multer = require('multer');

//tao doi tuong express
const app = express();
const upload = multer({dest: 'upload/'}); // dinh nghia thu muc chua anh 
// cau hinh duong dan phuc vu file trong thu muc
app.use('/upload', express.static(path.join(__dirname,'upload')));
//cau hinh link den cau hinh view 
app.set('views', path.join(__dirname,'views'));
//cho view engine la ejs
app.set('view engine', 'ejs');
//upload
app.set('/gallery', (req,res)=> {
    fs.readdir(path.join(__dirname, 'upload'), (err, files)=>{
        if(err){
            console.error("Loi khong don file: ", err);
            return;
        }
        res.render('gallery', {Images: files});
    });
});
//upload anh 
app.post('/upload', upload.single('image'),(req,res)=>{
    res.redirect('/gallery');
});
//lang nghe
app.listen(3001,()=>{
    console.log("Server dang chay o cong 3001");
});
