/**
 *  Author: Phuong Linh Pham (300923800)
 *  File Name: /Scripts/app.js
 *  Description: This is where all custom scripts belong
 */

/* To initialize tooltop
Source code from: http://www.w3schools.com/bootstrap/bootstrap_tooltip.asp
*/
$(document).ready(() => {
    $('[data-toggle="tooltip"]').tooltip();   
});

/* Get ID element when a link is clicked */
$(document).on("click", "a", (event)=>{
    let clickedElement = event.target.id;
    console.log(clickedElement);
});
function confirmInput() {
    fname = document.forms[0].fname.value;
    lname = document.forms[0].lname.value;
    email = document.forms[0].email.value;
    message = document.forms[0].message.value;

    total = "Hello, " + fname + " " + lname + "(" + email + ")"+ "\nYour email is sent with contents:\n" + message;
    alert(total);
} 


