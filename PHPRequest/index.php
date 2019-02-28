
<?php
$url = 'http://10.104.239.115:8088/data';

$context = stream_context_create(array(
    'http' => array(
        'method' => 'POST',
        'header' => 'Content-type: application/x-www-form-urlencoded',
        'content' => http_build_query(
            array(
                'data' => 'helloworld'
            )
        ),
        'timeout' => 60
    )
));

$resp = file_get_contents($url, FALSE, $context);
print_r($resp); 
?>
