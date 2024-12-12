<?php  
$conn=mysqli_connect('localhost','root','','');
@include 'config.php';
session_start();
if(!isset ($_SESSION['user_name'])){
    header('location:login.php');
}
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<div class="container">
        <div class="content">
            <h3>hi,<span>User</span></h3>
            <h1>welcome<span> <?php
            echo $_SESSION['user_name']  
            ?>
            </span></h1>
            <p>User page</p>
            <a a href="login.php" class="btn">login</a>
            <a a href="register.php" class="btn">Register</a>
            <a a href="log out.php" class="btn">log out</a>
        </div>
       </div> 
</body>
</html>