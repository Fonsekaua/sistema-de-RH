<?php
function baseURL($url){
    return  __DIR__ . "/../" . $url;
}
$routes = [
    [
        "method" => "GET",
        "url" => "/funcionarios",
        "content" => baseURL("actions/listarFuncionarios.php")
    ],
    [
        "method" => "PUT",
        "url" => "/funcionario",
        "content" => baseURL("actions/atualizarFuncionario.php")
    ],
]

?>