<?php
} else {
 $fio = $_POST['fio'];
 $email = $_POST['email'];
 $fio = htmlspecialchars($fio);
 $email = htmlspecialchars($email);
 $fio = urldecode($fio);
 $email = urldecode($email);
 $fio = trim($fio);
 $email = trim($email);
 if (mail("email@email.com", "Site Request", "FIO:".$fio.". E-mail: ".$email ,"From: email2@email.com \r\n")){
 echo "Success";
 } else {
 echo "Error";
 }
}
?>
