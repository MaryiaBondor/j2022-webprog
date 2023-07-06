
    function validation(){
    var userName = document.regForm.fname.value;
    var lastName = document.regForm.lname.value;
    var pas1 = document.regForm.pwd1.value;
    var pas2 = document.regForm.pwd2.value;
    if (userName.trim().length <= 1){
    alert("Incorrect User Name")
    //focus on element
    document.regForm.lname.focus();
    return false;
}
    if (lastName.trim().length <= 1){
    alert("Incorrect Last Name")
    //focus on element
    document.regForm.lname.focus();
    return false;
}
    if(pas1.length < 8){
    alert("Your password less then 8 symbols!")
    document.regForm.pwd1.focus();
    return false;
}
    if (pas1 != pas2){
    alert("Your password 1 is not equal with password 2")
    document.regForm.pwd1.focus()
    return false;
}
    //добавляем функцию email;
    var email = document.regForm.email.value;
    if (email.trim().length <= 1){
    alert("Empty email")
    //focus on element
    document.regForm.email.focus();
    return false;
} else {
    if(!validEmail()){
    return false;
}
}


    return true;
}
    function validEmail(){
    var email = document.regForm.email.valueOf();
    var pos1 = email.indexOf("@");
    var pos2 = email.lastindexOf(".");
    if (pos1 <1 || ((pos2 - pos1) < 2)){
    alert("Incorrect email")
    document.regForm.email.focus()
    return false;
}
    return true;
}
