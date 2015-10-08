// JavaScript Document

 //Verify first name       
 function validateFirst() {
        var uFirst=document.getElementById("userfirst").value;
        var regex = /^\w{2,15}$/;
        if (regex.test(uFirst)) {
            document.getElementById("firstprompt").innerHTML="OK";
            document.getElementById("msg").innerHTML="==== TOTAL ====";
            return(true); }
        else { document.getElementById("firstprompt").innerHTML="X - First name 2 to 15 characters ONLY !"; 
             return(false); }
    }

//Verify last name
function validateLast() {
        var uLast=document.getElementById("userlast").value;
        var regex = /^\w{2,25}$/;
         if (regex.test(uLast)) {
            document.getElementById("lastprompt").innerHTML="OK";
             document.getElementById("msg").innerHTML="==== TOTAL ====";
            return(true); }
        else { document.getElementById("lastprompt").innerHTML="X - First name 2 to 25 characters ONLY !"; 
             return(false); }
    }
     
function validatePhone() {
            var uPhone=document.getElementById("phonenumber").value;
            var regex = /^\(\d{3}\)\s\d{3}-\d{4}$/;
            if (regex.test(uPhone)) {
             document.getElementById("phoneprompt").innerHTML="OK";
             document.getElementById("msg").innerHTML="==== TOTAL ====";
             return(true); }
            else { document.getElementById("phoneprompt").innerHTML="X - use (XXX) XXX-XXXX format !"; 
            return(false); }
 }
//Verify quantity
 function validateQuantity() {
            var uQuantity=document.getElementById("quantity").value;
            var regex = /^\d{1,2}$/;
               if (regex.test(uQuantity) && (uQuantity >0) && (uQuantity<100)) {
                   document.getElementById("quantityprompt").innerHTML="OK!";
                   document.getElementById("msg").innerHTML="==== TOTAL ====";
                   return(true); }
        else { document.getElementById("quantityprompt").innerHTML="X - Quantity of widgets to order is a number from 1-99"; 
             return(false); }
 }    

//Main function and output
function calculate() {
	     if (validateFirst() && validateLast() && validatePhone() && validateQuantity()) {
            const TAXRATE=0.085;
            var widgetprice=4.95;
            var firstName = document.getElementById("userfirst").value;
            var lastName = document.getElementById("userlast").value;
            var phoneNumber=document.getElementById("phonenumber").value;
            var qty=document.getElementById("quantity").value;    
            var subcost=widgetprice*qty;
            var discount=parseInt(qty/10, 10)*10; //Round down to the nearest 10th for discount in percentage
            var tax=subcost*TAXRATE;
            var costwithtax=subcost+tax;
            var discountcal=costwithtax*(discount/100);
            var finalcost=costwithtax - discountcal;
             	 document.getElementById("tname").innerHTML="Name: " + firstName + " "+ lastName;
 				 document.getElementById("tphone").innerHTML= "Phone #: "+phoneNumber;
          		 document.getElementById("tqty").innerHTML= "Quantity: "+qty;               
                 document.getElementById("tdiscount").innerHTML= "Discount: " + discount+"%";    
                 document.getElementById("tsalestax").innerHTML= "Sale Tax Charged (8.5%): $"+ tax.toFixed(2);   
                 document.getElementById("ttotalcost").innerHTML="Total Cost: $"+finalcost.toFixed(2);     } // end if then
          else { 
                    document.getElementById("msg").innerHTML="Incorrect entry. Please enter the correct information"; 
			}
}
//Clear form
function clear() {
            document.getElementById("userfirst").value="";
            document.getElementById("userlast").value="";
            document.getElementById("phonenumber").value="";
            document.getElementById("quantity").value="";    
}