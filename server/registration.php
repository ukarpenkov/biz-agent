<?php
header("Access-Control-Allow-Origin: *");

$conn = new mysqli('localhost','root', 'mysql', 'companiesbd' );

if(mysqli_connect_error()){
    echo mysqli_connect_error();
    exit();
}
else{
    $name = $_POST['name'];
    $mail = $_POST['mail'];
    $pass = $_POST['pass'];
    
    $sql = "INSERT INTO registered_users(name,email,pass) VALUES('$name','$mail','$pass');";
    $res = mysqli_query($conn, $sql);

    if($res){
        echo "Success";
    } 
    else {
        echo "Error";
    } 
    $conn->close();
}




?>