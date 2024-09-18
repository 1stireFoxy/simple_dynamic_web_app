const express = require('express');
const app = express();
const port = 3000;
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.get('/api/v1/check',(req, res) =>{
    res.send('Chào mừng bạn đến với ứng đụng web động!');
});
app.post('/api/v1/submit', (req , res) => {
    const {name}  = req.body;
    if (name){
        res.json({message: `Chào mừng ${name}!`});
    }
    else {
        res.status(400).json({message: 'Vui lòng cung cấp tên của bạn'});
    }
});
app.listen(port, () => {
    console.log(`Ứng dụng đang chạy tại http://localhost:${port}`);
});