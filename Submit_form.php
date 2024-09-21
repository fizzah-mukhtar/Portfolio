<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Your personal email address
    $to = "fizzahmm123@gmail.com";

    // Collect form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Email subject
    $mail_subject = "New Contact Form Submission: $subject";

    // Email body
    $mail_body = "Name: $name\n";
    $mail_body .= "Email: $email\n";
    $mail_body .= "Message: \n$message\n";

    // Email headers
    $headers = "From: fizzahmm123@gmail.com\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send the email
    if (mail($to, $mail_subject, $mail_body, $headers)) {
        // Redirect to a 'Thank You' page after sending email
        header("Location: thank_you.html");
        exit();
    } else {
        // Show error if email sending fails (optional)
        echo "Error sending message. Please try again.";
    }
}
?>
