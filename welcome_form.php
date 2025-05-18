<!DOCTYPE html>
<html lang="en">
<head>
    <title>Miles Garcia</title>
    <link rel="stylesheet" type="text/css" href="<?= base_url('css/style.css') ?>">
</head>
<body>
    <h2>Miles</h2>
    <form method="post" action="/welcome/greet">
        <input type="text" name="name" required>
        <button type="submit">Submit</button>
    </form>
</body>
</html>