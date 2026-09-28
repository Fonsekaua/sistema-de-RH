<?php

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

require_once __DIR__ . "/../repositories/FuncionarioRepositoryJson.php";
require_once __DIR__ . "/../models/Advogado.php";
require_once __DIR__ . "/../models/Carpinteiro.php";

$funcionarioRepository = new FuncionarioRepositoryJson();

$dados = json_decode(file_get_contents("php://input"), true);
echo json_encode([
    "mensagem"=> "Voce esta aqui"
]);
if (!is_array($dados)) {
    http_response_code(400);

    echo json_encode([
        "status" => false,
        "mensagem" => "Corpo da requisição vazio ou JSON inválido"
    ], JSON_UNESCAPED_UNICODE);

    exit;
}

$nome = $dados["nome"];
$sobrenome = $dados["sobrenome"];
$idade = $dados["idade"];
$cargo = $dados["cargo"];
$salario = $dados["salario"];

if (strtolower($cargo) === "advogado") {

    $funcionario = new Advogado(
        $nome,
        $sobrenome,
        $idade,
        $salario
    );

} elseif (strtolower($cargo) === "carpinteiro") {

    $funcionario = new Carpinteiro(
        $nome,
        $sobrenome,
        $idade,
        $salario
    );

} else {

    http_response_code(400);

    echo json_encode([
        "status" => false,
        "mensagem" => "Cargo inválido"
    ], JSON_UNESCAPED_UNICODE);

    exit;
}

$funcionarioRepository->cadastrarFuncionario($funcionario);

echo json_encode([
    "status" => true,
    "mensagem" => "Funcionário criado com sucesso!",
    "funcionario" => [
        "nome" => $funcionario->getNome(),
        "sobrenome" => $funcionario->getSobrenome(),
        "idade" => $funcionario->getIdade(),
        "cargo" => $cargo,
        "salario" => $funcionario->getSalario()
    ]
], JSON_UNESCAPED_UNICODE);