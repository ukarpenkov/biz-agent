<?php
header("Access-Control-Allow-Origin: *");

require_once 'setting.php';

$connection = new mysqli($host, $user, $pass, $data );

if($connection->connect_error) die('Error connection');

$sql = "select * from data";
$result = mysqli_query($connection, $sql) or die("Error in Selecting " . mysqli_error($connection));

$companies = array();
while($row =mysqli_fetch_assoc($result))
{
    $companies[] = $row;
}

echo json_encode($companies,JSON_UNESCAPED_UNICODE);
$result->close();
$connection->close();
?>



