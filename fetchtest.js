// const { json } = require("body-parser");

// const { json } = require("body-parser");

fetch("http://localhost:4000/testinput")
.then( (res) => {
   
    const data = res.json();

    return data;
})
.then((data) => {
      
     data.map(function(param){
         const id = param["ID"];

         const test = param["TEST"];

         const cost = param["COST"];

         const tbody= document.querySelector("tbody");
        
             const tr = document.createElement("tr");
             const th= document.createElement("th");
             const  td2 = document.createElement("td");
             const td = document.createElement("td");
             th.setAttribute("scope","row");
          //    td.setAttribute("scope","col");
          //    td2.setAttribute("scope","col");
             tr.appendChild(th);
             tr.appendChild(td);
             tr.appendChild(td2);
             th.innerHTML=id;
             td.innerHTML=test;
             td2.innerHTML=cost;
             

             tbody.appendChild(tr)

            // 

            
        
                const modystructure=document.querySelector(".test-edit-modal");
                const costinput  =   document.querySelector("#price");
                const testinput = document.querySelector("#test");
                const headeredit= document.querySelector(".test-edit-header")
       
       
       
               
                async function createeditmodal() {
                    headeredit.innerHTML=`Edit ${test} of cost ${cost} `

                    modystructure.style.display="block";
                    costinput.setAttribute("value",`${cost}`)
                    testinput.setAttribute("value",`${test}`);

                }

                tr.addEventListener("click",createeditmodal);


               const postbtn = document.querySelector("#postbtn");

              

              

              
       
           
     })
     
   
     postbtn.addEventListener("click",() =>{
        const altercost = document.getElementById("altercost");
        
         const xhr = new XMLHttpRequest();

     
         xhr.open("POST","http://localhost:4000/altercost",true);
          
         xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        
         const formdata= new FormData(altercost)
        //  xhr.send(JSON.stringify({ "email": "hello@user.com", "response": { "name": "Tester" }}));
            xhr.send(JSON.stringify(formdata));
            console.log(JSON.stringify(form))
         xhr.onload = () =>{
             console.log(xhr.response)
         }


       })

       

      
      
    
} )
.then ((tbody) => {
    //  console.log(tbody)
})
.catch( (err) => { return err})


console.log(document.querySelector("tr"));