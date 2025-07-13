<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // include Composer autoload sau manual PHPMailer

$mail = new PHPMailer(true);

try {
    // Setări server SMTP
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';  // serverul SMTP
    $mail->SMTPAuth   = true;
    $mail->Username   = 'buha2595@gmail.com'; // adresa ta Gmail
    $mail->Password   = 'sboo bikb pril mysk';   // parola aplicației generate în Google Account
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // sau 'ssl'
    $mail->Port       = 587; // port TLS

    // Destinatari
    $mail->setFrom('
     buha2595@gmail.com', 'Andrei Buha'); // adresa de expeditor
    $mail->addAddress('buha2595@gmail.com'); // unde trimiți

    // Conținut mail
    $mail->isHTML(true);
    $mail->Subject = 'Subiect mail';
    $mail->Body    = 'Acesta este un mail trimis prin SMTP cu PHPMailer.';

    $mail->send();
    echo 'Mail trimis cu succes!';
} catch (Exception $e) {
    echo "Mail nu a putut fi trimis. Eroare: {$mail->ErrorInfo}";
}
