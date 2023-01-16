<?php
header("Access-Control-Allow-Origin: *");

$conn = new mysqli('localhost','root', 'mysql', 'companiesbd' );

if(mysqli_connect_error()){
    echo mysqli_connect_error();
    exit();
}
else{
    $company_id = $_POST['company_id'];
    $category = $_POST['category'];
    
    $sql = "SELECT `comment_text`, `user_name`, `comment_id`, `time` FROM `comments` WHERE `company_id`='$company_id' AND `category`='$category'";
    $res = mysqli_query($conn, $sql) or die("Error in Selecting " . mysqli_error($conn));

    $comments = array();
    while($row =mysqli_fetch_assoc($res))
    {
        $comments[] = $row;
    }
    echo json_encode($comments,JSON_UNESCAPED_UNICODE);
    $res->close();
    $conn->close();

}



?>
