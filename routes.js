const router = require('express').Router();

router.get('/', (req,res)=>{
    res.send('<center><h2>Selamat Datang Di Latihan Express JS</h2><h3>Eduwork MERN</h3></center>');
 });

 router.get('/product/', (req,res)=>{
    const {price,qty,total} = req.query;
    res.json({
        name:'Laptop',
        merk:'Asus',
        price,
        qty,
        total
    });
 });

 router.get('/item/:numberID', (req,res) =>{
     res.json({
         Id:req.params.numberID
     });
 });

 router.get('/:category/:item', (req,res) =>{
    const {category,item} = req.params;
    res.json({category,item});
});

 module.exports = router;