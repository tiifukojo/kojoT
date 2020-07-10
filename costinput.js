const db = require ("/xampp/htdocs/electron/config/db");

const  router = require("express").Router();

const bodyparser  = require ("body-parser");

router.use(bodyparser.urlencoded({extended:true}));

router.route("/testinput")

.all((req, res, next) => {
     res.statusCode="200";

    res.statusMessage="OK";

     next();

})

.post((req ,res , next)=> {
    const { test , cost } = req.body;

    const mysql=`CREATE TABLE costtable(
        ID int(255) not null PRIMARY KEY AUTO_INCREMENT,
        TEST varchar(255) not null ,
        COST int(255) not null 
      )`

    db.query(mysql, function(err, result, fields){
       
        if(err && err.errno == 1050){
            const  mysql =`INSERT INTO costtable(test,cost)VALUES('${test}','${cost}')`;
       db.query(mysql, function(err, result ,fields){

           if(err) throw err;
            res.redirect("/testinput.html");
       })

        }
    })

})
.get((req, res, next) => {

    const mysql= "SELECT * FROM costtable";

    db.query(mysql, function(err,result, fields){
        if(err) throw err;
        res.send(result);
    })
})



module.exports =router;