<?php

namespace App\Routes;

function baseURL($url)
{
    return  __DIR__ . "/../" . $url;
}

function getRoutes(): array
{
    return [
        [
            "method" => "POST",
            "url" => "/funcionarios",
            "content" => baseURL("actions/adicionarFuncionario.php")
        ],
        [
            "method" => "GET",
            "url" => "/",
            "content" => baseURL("actions/paginaInicial.php")
        ],
        [
            "method" => "GET",
            "url" => "/funcionarios",
            "content" => baseURL("actions/listarFuncionarios.php")
        ],
        [
            "method" => "PUT",
            "url" => "/funcionarios",
            "content" => baseURL("actions/atualizarFuncionario.php")
        ],
        [
            "method" => "DELETE",
            "url" => "/funcionarios",
            "content" => baseURL("actions/deletarFuncionario.php")
        ],
    ];
}
