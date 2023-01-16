<?php
header("Access-Control-Allow-Origin: *");

$conn = new mysqli('localhost','root', 'mysql', 'companiesbd' );

if(mysqli_connect_error()){
    echo mysqli_connect_error();
    exit();
}
else{
    $user_name = $_POST['user_name'];
    $company_id = $_POST['company_id'];
    $comment_text = $_POST['comment_text'];
    $category = $_POST['category'];
  
    
    $sql = "INSERT INTO `comments`(`user_name`,`company_id`,`comment_text`, `category`) VALUES('$user_name','$company_id','$comment_text','$category');";
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