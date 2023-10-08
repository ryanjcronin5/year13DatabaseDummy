<?php

$conn = new mysqli('localhost', '_RCronin', 'E3QieCX0mqBlikTT', 'RCronin_main');
if($conn->connect_error){
	die("Error Connecting to Database: " . $conn->connect_error);
}
?>