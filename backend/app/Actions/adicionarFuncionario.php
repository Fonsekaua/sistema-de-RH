<?php

declare(strict_types=1);

namespace App\Actions;

header('Content-Type: application/json; charset=utf-8');

use App\Repositories\FuncionarioRepositoryJson;

use App\Models\Advogado;
use App\Models\Carpinteiro;
use App\Models\Contador;
use App\Models\Engenheiro;
use App\Models\Funcionario;
use App\Models\Gerente;
use App\Models\Professor;
use App\Models\Programador;



require_once __DIR__ . "/../repositories/FuncionarioRepositoryJson.php";

$funcionarioRepository = new FuncionarioRepositoryJson();

$dados = json_decode(file_get_contents("php://input"), true);

if (!is_array($dados)) {
    http_response_code(400);

    echo json_encode([
        "status" => false,
        "mensagem" => "Corpo da requisição vazio ou JSON inválido"
    ], JSON_UNESCAPED_UNICODE);

    exit;
}
$id = count($funcionarioRepository->listarTodosFuncionarios()) + 1;
$nome = $dados["nome"];
$sobrenome = $dados["sobrenome"];
$idade = (int) $dados["idade"];
$cargo = $dados["cargo"];
$salario = (float) $dados["salario"];

$funcionario = new $cargo(
    $id,
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
        "id" => $funcionario->getId(),
        "nome" => $funcionario->getNome(),
        "sobrenome" => $funcionario->getSobrenome(),
        "idade" => $funcionario->getIdade(),
        "cargo" => $cargo,
        "salario" => $funcionario->getSalario()
    ]
], JSON_UNESCAPED_UNICODE);
