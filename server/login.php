<?php
header("Access-Control-Allow-Origin: *");

$conn = new mysqli('localhost','root', 'mysql', 'companiesbd' );

header("Access-Control-Allow-Origin: *");

if(mysqli_connect_error()){
    echo mysqli_connect_error();
    exit();
}
else{
    $mail = $_POST['mail'];
    $pass = $_POST['pass'];

    $check_user_mail ="SELECT `name` FROM `registered_users` WHERE `email`= '$mail' AND `pass` = '$pass'";
    $res = $conn->query($check_user_mail);
    
    if($res === false){
    die(mysqli_error($conn));
   }

   $name = array();
while($row =mysqli_fetch_assoc($res))
{
    $name[] = $row;
}

$onlyName = $name[0]['name'];
$nameToFront = preg_replace("/[0-9]/", "", $onlyName);

echo $nameToFront;



  
    $conn->close();
}


?>