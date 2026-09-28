<?php

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

require_once __DIR__ . "/../repositories/FuncionarioRepositoryJson.php";
require_once __DIR__ . '/../models/Funcionario.php';
require_once __DIR__ . '/../models/Advogado.php';
require_once __DIR__ . '/../models/Carpinteiro.php';
require_once __DIR__ . '/../models/Engenheiro.php';
require_once __DIR__ . '/../models/Contador.php';
require_once __DIR__ . '/../models/Professor.php';
require_once __DIR__ . '/../models/Gerente.php';

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
$idade = (int) $dados["idade"];
$cargo = $dados["cargo"];
$salario = (float) $dados["salario"];

  $funcionario = new $cargo(
        $nome,
        $sobrenome,
        $idade,
        $salario
    );
$funcionario->calcularBonificacao();
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