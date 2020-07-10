
var sql = require ("/xampp/htdocs/electron/config/db")

var router =  require("express").Router();

var bodyparser = require("body-parser");

router.use(bodyparser.urlencoded({extended:true}))

router.route("/paymentsystem")

.all(
    (req,res,next)=>{
        res.statusCode=200;
        next();

})

.post(
    (req,res,next)=>{

        const {ssn , gender, category, referer, test, cost ,phone, pay, john , jane } = req.body;

        console.log(ssn,category,gender,pay,referer,cost,phone,test,john, jane);
        

        


        
    }
)


module.exports= router;