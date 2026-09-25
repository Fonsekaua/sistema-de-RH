<?php
declare(strict_types=1);
include  __DIR__ . "/routes/routes.php";

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');


function Metodo ($metodo){
    return $metodo == $_SERVER['REQUEST_METHOD'];
}

function URL ($url){
    return $url == parse_url($_SERVER['REQUEST_URI'],PHP_URL_PATH);
}

foreach($routes as $route ) {
    if(Metodo($route['method']) && URL($route['url'])) {
        include $route['content'];
    }
}

?>

