

function validate(){

    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="admin"&& password=="1234")
    {
        alert("login succesfully");
        document.getElementById('form').action = 'https://showdeimagem.com.br/';
        return false;
    }
    else{

        alert("login failed");
        document.form.submit();
    }

}