const db = require ("/xampp/htdocs/electron/config/db");

const  router = require("express").Router();

const bodyparser  = require ("body-parser");

const fileuploads =  require("express-fileupload");

router.use(bodyparser.urlencoded({extended:true}));

router.use(bodyparser.json())

// router.use(fileuploads)




router.route("/altercost")

.all((req, res, next) => {
     res.statusCode="200";

    res.statusMessage="OK";

     next();

})

.post((req ,res , next)=> {
    const { name , price} = req.body;



    console.log(price,name ) 
    /
//   const {email} = req.body;


//     console.log(email)

    console.log(req.body)


    res.send("hello world")

})
.get((req,res,next) => {
    res.send("hello world");
})


module.exports = router;