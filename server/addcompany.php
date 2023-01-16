<?php
header("Access-Control-Allow-Origin: *");

$conn = new mysqli('localhost','root', 'mysql', 'companiesbd' );

if(mysqli_connect_error()){
    echo mysqli_connect_error();
    exit();
}
else{
    $name = $_POST['name'];
    $address = $_POST['address'];
    $phone = $_POST['phone'];
    $ceo = $_POST['ceo'];
    
    $sql = "INSERT INTO `data`(`name`,`address`,`phone`,`ceo`) VALUES('$name','$address',' $phone', '$ceo');";
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