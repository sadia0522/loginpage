function Showbtn(){
    document.getElementById("pass").type="text";
    document.getElementById("show").style.display="none";
    document.getElementById("hide").style.display="inline";

}
function Hidebtn(){
    document.getElementById("pass").type="password";
    document.getElementById("show").style.display="inline";
    document.getElementById("hide").style.display="none";
}
function reveal(){
    document.getElementById("pass").style.color="white";
    document.getElementById("show").style.display="inline"
}
function color(){
    document.getElementById("email").style.color="white";
}
