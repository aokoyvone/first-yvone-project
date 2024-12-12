<?php
@include'config.php';
session_start();
if(isset($_POST['SUBMIT'])){
    $name=mysqli_real_escape_string($conn,$_POST['name']);
    $email=mysqli_real_escape_string($conn,$_POST['email']);
    $pass=md5($_POST['password']);
    $cpass=md5($_POST['cpassword']);
    $user_type=$_POST['user_type'];

    $select="SELECT*FROM user_form WHERE email='$email' $$ password='$pass'";
    $result=mysqli_query($conn,$select);
    if(mysqli_num_rows($result) > 0){
      $row=mysqli_fetch_array($result);
      if($row['user_type']=='admin'){
        $_SESSION['admin_name']=$row['name'];
        header('location:admin.php');}
        elseif ($row['user_type']=='user'){
            $_SESSION['user_name']=$row['name'];
            header('location:user.php');}
        }
        else{
            $error[]='incorect email or password';
        }
    
      };


?>




<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="register.css">
</head>
<body>
    
    <div class="form-container">
    
        <form action="Admin.html"method="post">
            <h3> Login </h3>
            <?php
            if(isset($error)){
                foreach($error as $error){
                    echo'<span class="error.msg">'.$error.'</span>';
        
                    }

                };
            ?>
        
            <input type="email"name="email" required placeholder="enter your email">
            <input type="password"name="password" required placeholder="enter your password">
            <input type="submit" name="submit" value="login" class="form-btn">
            <p>already have account? <a href="register.php">login</a></p>
        </form>
    </div>
</body>
</html>
</body>
</html>