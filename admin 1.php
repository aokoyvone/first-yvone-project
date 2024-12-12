
<?php
@include 'config.php';
session_start();
if(!isset ($_SESSION['admin_name'])){
    header('location:login.php');
}
?><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
     <link rel="stylesheet" href="admin 1.css">
</head>
<body>
    <div class="container">
        <div class="content">
            <h3>hi,<span>admin</span></h3>
            <h1>welcome<span> <?php
            echo $_SESSION['admin_name']
            ?></span></h1>
            <p>Admin page</p>
            <a a href="Admin.html" class="btn">admin</a>
            <a a href="login.php" class="btn">login</a>
            <a a href="register.php" class="btn">Register</a>
            <a a href="log out.php" class="btn">log out</a>
        </div>
       </div>
</body>
</html>