<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = $_POST['data'] ?? '';

    if (!empty($data)) {
        file_put_contents('database.txt', $data, FILE_APPEND);
        http_response_code(200);
        echo "Data saved successfully!";
    } else {
        http_response_code(400);
        echo "No data received!";
    }
} else {
    http_response_code(405);
    echo "Method not allowed!";
}
?>
