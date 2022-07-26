
//Procurement validtion
const firstFocus = ()=>{
    let pro = document.procurementform.produce.focus()
};

const valProduce = (inputField, info1) => {
    let Produce = document.procurementform.produce;
    //const info1 = document.getElementById("info1").value;
    let pro = /^[a-zA-Z0-9]+$/
    if (inputField.value.length < 2 || !inputField.value.match(pro)){
        //info1.style.border = "2px solid red";
        info1.innerHTML = "not less than 2 characters";
        info1.style.color = "red";
        info1.style.fontSize = "12px";

        return false;  
    }
    else {
        Produce.style.border = "2px solid lightblue";
        return true;
    }
   
    

};

//validation for type of produce
const valtypeofProduce = (inputField, info2) => {
    let typeP = document.procurementform.typeofproduce;
    //const info2 = document.getElementById("info2").value;
    if (inputField.value == "Select"){
        //typeP.focus()
        //info2.style.border = "2px solid red";
        info2.innerHTML = "select the type of produce";
        info2.style.color = "red";
        info2.style.fontSize = "12px"; 
        return false;
        
    }
    else{
        inputField.style.border = "2px solid lightblue";
        return true;  
    }
};

//validating for tonnage in kgs
const valWeight = (inputField, info3) => {
    let Kg = document.procurementform.weight;
    if (inputField.value.length < 3){
        info3.innerHTML = "not less than 3 characters";
        info3.style.color = "red";
        info3.style.fontSize = "12px";

        return false;  
    }
    else {
        inputField.style.border = "2px solid lightblue";
        return true;
    }
   

};

//validating for cost
const valCost = (inputField, info4)=>{
    let tel = document.procurementform.cost;
    if (inputField.value.length < 5){
        info4.innerHTML = "not less than 5 characters";
        info4.style.color = "red";
        info4.style.fontSize = "12px";

        return false;  
    }
    else {
        inputField.style.border = "2px solid lightblue";
        return true;
    }
     
};

//validating for name of dealer
const valnameofDealer = (inputField, info5)=>{
    let dealer = document.procurementform.nameofDealer;
        let name = /^[a-zA-Z0-9]+$/
    if (inputField.value.length < 2 || !inputField.value.match(name)){
        info5.innerHTML = "not less than 2 characters";
        info5.style.color = "red";
        info5.style.fontSize = "12px";

        return false;  
    }
    else {
        inputField.style.border = "2px solid lightblue";
        return true;
    } 
}
    


const valContact = (inputField, info6)=>{
    let tel = document.procurementform.contact;
    if (inputField.value.length < 10){
        info6.innerHTML = "not less than 10 characters";
        info6.style.color = "red";
        info6.style.fontSize = "12px";

        return false;  
    }
    else {
        inputField.style.border = "2px solid lightblue";
        return true;
    }
   

    
};

//validating for selling price
const valPrice = (inputField, info7)=>{
    let price = document.procurementform.Price;
    if (inputField.value.length < 5){
        info7.innerHTML = "not less than 5 characters";
        info7.style.color = "red";
        info7.style.fontSize = "12px";

        return false;  
    }
    else {
        inputField.style.border = "2px solid lightblue";
        return true;
    }
     
};


const valBranch = (inputField, info8) => {
    let  = document.procurementform.typeofproduce;
        if (inputField.value == "Select"){
        info8.innerHTML = "select the type of produce";
        info8.style.color = "red";
        info8.style.fontSize = "12px"; 
        return false;
        
    }
    else{
        inputField.style.border = "2px solid lightblue";
        return true;  
    }
};

//sells validation
const secondFocus = ()=>{
    let pro = document.salesform.nameofProduce.focus()
};

const valnameofProduce = (inputField, info1) => {
    let Produce = document.sellsform.nameofProduce;
    //const info1 = document.getElementById("info1").value;
    let pro = /^[a-zA-Z0-9]+$/
    if (inputField.value.length < 2 || !inputField.value.match(pro)){
        //info1.style.border = "2px solid red";
        info1.innerHTML = "not less than 2 characters";
        info1.style.color = "red";
        info1.style.fontSize = "12px";

        return false;  
    }
    else {
        Produce.style.border = "2px solid lightblue";
        return true;
    }
   
    

};

//validating for tonnage in kgs
const valTonnage = (inputField, info2) => {
    let Kg = document.sellsform.tonnage;
    if (inputField.value.length < 3){
        info2.innerHTML = "not less than 3 characters";
        info2.style.color = "red";
        info2.style.fontSize = "12px";

        return false;  
    }
    else {
        inputField.style.border = "2px solid lightblue";
        return true;
    }
   

};

//amount paid validation
const valamount = (inputField, info3)=>{
    let tel = document.sellsform.amount;
    if (inputField.value.length < 5){
        info3.innerHTML = "not less than 5 characters";
        info3.style.color = "red";
        info3.style.fontSize = "12px";

        return false;  
    }
    else {
        inputField.style.border = "2px solid lightblue";
        return true;
    }
     
};

//name of buyer validation
const valbuyername = (inputField, info4)=>{
    let Buyer = document.sellsform.nameofBuyer;
        let buyer = /^[a-zA-Z0-9]+$/
    if (inputField.value.length < 2 || !inputField.value.match(buyer)){
        info4.innerHTML = "not less than 2 characters";
        info4.style.color = "red";
        info4.style.fontSize = "12px";

        return false;  
    }
    else {
        inputField.style.border = "2px solid lightblue";
        return true;
    } 
};

//sales agent name validation
    const valagent = (inputField, info5)=>{
    let Agent = document.sellsform.agent;
        let salesA = /^[a-zA-Z0-9]+$/
    if (inputField.value.length < 2 || !inputField.value.match(salesA)){
        info5.innerHTML = "not less than 2 characters";
        info5.style.color = "red";
        info5.style.fontSize = "12px";

        return false;  
    }
    else {
        inputField.style.border = "2px solid green";
        return true;
    } 
};
    //credit validation
    const thirdFocus = ()=>{
        let pro = document.creditform.nameofProduce.focus()
    };
    
    const valproducename = (inputField, info1) => {
        let Produce = document.creditform.nameofProduce;
        //const info1 = document.getElementById("info1").value;
        let pro = /^[a-zA-Z0-9]+$/
        if (inputField.value.length < 2 || !inputField.value.match(pro)){
            //info1.style.border = "2px solid red";
            info1.innerHTML = "not less than 2 characters";
            info1.style.color = "red";
            info1.style.fontSize = "12px";
    
            return false;  
        }
        else {
            Produce.style.border = "2px solid lightblue";
            return true;
        }
       
        
    
    };
    
    //type of produce validation
    //validation for type of produce
    const valproduceType = (inputField, info2) => {
        let typeP = document.creditform.typeofproduce;
        //const info2 = document.getElementById("info2").value;
        if (inputField.value == "Select"){
            //typeP.focus()
            //info2.style.border = "2px solid red";
            info2.innerHTML = "select the type of produce";
            info2.style.color = "red";
            info2.style.fontSize = "12px"; 
            return false;
            
        }
        else{
            inputField.style.border = "2px solid lightblue";
            return true;  
        }
    };
    
    //validating for tonnage in kgs
    const valweight = (inputField, info3) => {
        let Kg = document.creditform.weight;
        if (inputField.value.length < 3){
            info3.innerHTML = "not less than 3 characters";
            info3.style.color = "red";
            info3.style.fontSize = "12px";
    
            return false;  
        }
        else {
            inputField.style.border = "2px solid lightblue";
            return true;
        }
       
    
    };
    
    
    //validating for amount due
    const valAmount = (inputField, info4)=>{
        let tel = document.creditform.amount;
        if (inputField.value.length < 5){
            info4.innerHTML = "not less than 5 characters";
            info4.style.color = "red";
            info4.style.fontSize = "12px";
    
            return false;  
        }
        else {
            inputField.style.border = "2px solid  lightblue";
            return true;
        }
         
    };
    
    //validating for name of buyer
    const valnameofBuyer = (inputField, info5)=>{
        let Buyer = document.creditform.nameofBuyer;
            let buyer = /^[a-zA-Z0-9]+$/
        if (inputField.value.length < 2 || !inputField.value.match(buyer)){
            info5.innerHTML = "not less than 2 characters";
            info5.style.color = "red";
            info5.style.fontSize = "12px";
    
            return false;  
        }
        else {
            inputField.style.border = "2px solid lightblue";
            return true;
        } 
    };
    
    //validation for NIN
    const valNIN = (inputField, info6)=>{
        let nin = document.creditform.NIN;
            let Id = /^[a-zA-Z0-9]+$/
        if (inputField.value.length < 14 || !inputField.value.match(Id)){
            info6.innerHTML = "not less than 14 characters";
            info6.style.color = "red";
            info6.style.fontSize = "12px";
    
            return false;  
        }
        else {
            inputField.style.border = "2px solid lightblue ";
            return true;
        } 
    };
    
    //validate for Location
    const valLocation = (inputField, info7)=>{
        let Location = document.creditform.location;
            let loc = /^[a-zA-Z0-9]+$/
        if (inputField.value.length < 2|| !inputField.value.match(loc)){
            info7.innerHTML = "not less than 2 characters";
            info7.style.color = "red";
            info7.style.fontSize = "12px";
    
            return false;  
        }
        else {
            inputField.style.border = "2px solid green";
            return true;
        } 
    };//validate buyers contact
    const valcontact = (inputField, info8)=>{
        let tel = document.creditform.contact;
        if (inputField.value.length < 10){
            info8.innerHTML = "not less than 10 characters";
            info8.style.color = "red";
            info8.style.fontSize = "12px";
    
            return false;  
        }
        else {
            inputField.style.border = "2px solid  lightblue";
            return true;
        }
       
    
        
    };
    //validate for sales agent name
    const valAgent = (inputField, info9)=>{
        let Agent = document.creditform.agent;
            let salesA = /^[a-zA-Z0-9]+$/
        if (inputField.value.length < 2 || !inputField.value.match(salesA)){
            info9.innerHTML = "not less than 2 characters";
            info9.style.color = "red";
            info9.style.fontSize = "12px";
    
            return false;  
        }
        else {
            inputField.style.border = "2px solid lightblue ";
            return true;
        } 
    };
    //Login validation
    const fourthFocus = ()=> {
        let email = document.loginform.email.focus()
    };
    
    const valEmail = (inputField, info1) => {
        let Email = document.loginform.email;
        //const info1 = document.getElementById("info1").value;
        let Em =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        if (inputField.value.length < 2 || !inputField.value.match(Em)){
            //info1.style.border = "2px solid red";
            info1.innerHTML = "invalid email address";
            info1.style.color = "red";
            info1.style.fontSize = "12px";
    
            return false;  
        }
        else {
            inputField.style.border = "2px solid  lightblue";

            return true;
        }
       
        
    
    };
    
    const valPassword = (inputField, info2) => {
        let Password = document.loginform.password;
        //const info1 = document.getElementById("info1").value;
        let password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
        if (inputField.value.length < 8 || !inputField.value.match(password)){
            //info1.style.border = "2px solid red";
            info2.innerHTML = "should have atleast 8 characters";
            info2.style.color = "red";
            info2.style.fontSize = "12px";
    
            return false;  
        }
        else {
            inputField.style.border = "2px solid lightblue";
            return true;
        }
       
        
    
    };
    //signup validation
    const fastFocus = ()=>{
        let pro = document.signupform.username.focus()
    };
    const valUsername = (inputField, info1) => {
        let User = document.signupform.username;
        //const info1 = document.getElementById("info1").value;
        let reg =  /^[a-zA-Z0-9]+$/;
        if (inputField.value.length < 14 || !inputField.value.match(reg)){
            info1.style.border = "2px solid red";
            info1.innerHTML = "must be between 3-14 characters";
            info1.style.border = "red";
            info1.style.fontSize = "12px";
            return false;  
        }
        else {
            inputField.style.border = "2px solid lightblue";
            return true;
        }
       
        
    
    };
    
        const valemail = (inputField, info2) => {
        let User = document.signupform.email;
        //const info1 = document.getElementById("info1").value;
        let email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        if (inputField.value.length < 2 || !inputField.value.match(email)){
            //info1.style.border = "2px solid red";
            info2.innerHTML = "invalid email address";
            info2.style.color = "red";
            info2.style.fontSize = "12px";
    
            return false;  
        }
        else {
            inputField.style.border = "2px solid lightblue";
            return true;
        }
       
        
    
    };

    const valpassword = (inputField, info3) => {
        let Password = document.signupform.password;
        //const info1 = document.getElementById("info1").value;
        let password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
        if (inputField.value.length < 8 || !inputField.value.match(password)){
            //info1.style.border = "2px solid red";
            info3.innerHTML = "should have atmost 8 characters";
            info3.style.color = "red";
            info3.style.fontSize = "12px";
    
            return false;  
        }
        else {
            inputField.style.border = "2px solid lightblue";
            return true;
        }
       
        
    
    };

    const valSelectrole = (inputField, info4) => {
        let Role = document.signupform.selectrole;
        //const info2 = document.getElementById("info2").value;
        if (inputField.value == "Select"){
            //typeP.focus()
            //info2.style.border = "2px solid red";
            info4.innerHTML = "select the role";
            info4.style.color = "red";
            info4.style.fontSize = "12px"; 
            return false;
            
        }
        else{
            inputField.style.border = "2px solid lightblue";
            return true;  
        }
    };

    const valbranch = (inputField, info5) => {
        let branch = document.signupform.branch;
        //const info2 = document.getElementById("info2").value;
        if (inputField.value == "Select"){
            //typeP.focus()
            //info2.style.border = "2px solid red";
            info5.innerHTML = "select the branch";
            info5.style.color = "red";
            info5.style.fontSize = "12px"; 
            return false;
            
        }
        else{
            inputField.style.border = "2px solid lightblue";
            return true;  
        }
    };
    
     



   
    

