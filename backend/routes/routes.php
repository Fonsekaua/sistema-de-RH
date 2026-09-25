<?php
function baseURL($url){
    return  __DIR__ . "/../" . $url;
}
$routes = [
    [
        "method" => "GET",
        "url" => "/funcionarios",
        "content" => baseURL("actions/listarFuncionarios.php")
    ]
]

?>