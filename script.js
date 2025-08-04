document.addEventListener("DOMContentLoaded",function(){
    const submitbtn=document.getElementById("submitbtn");
    submitbtn.addEventListener("click",function(){
        const nameinput=document.getElementById("name").value.trim();
        if(nameinput === ""){
            alert("Please enter your name first.");
        }else{
        alert(`Thankyou, ${nameinput}! We will contact you soon.`);}
    });
});
