<?php

declare(strict_types=1);

namespace App\Actions;

header('Content-Type: application/json');


use App\Repositories\FuncionarioRepositoryJson;

$funcionarioRepository = new FuncionarioRepositoryJson();

$id = (int) $_GET["id"];

$dados = json_decode(file_get_contents("php://input"), true);
if (!$dados) {
    echo json_encode([
        "status" => false,
        "mensagem" => "Corpo da requisição vazio"
    ]);
    return;
}
$nome = $dados["nome"];
$sobrenome = $dados["sobrenome"];
$cargo = $dados["cargo"];
$idade = (int) $dados['idade'];
$salario = (float) $dados["salario"];

$funcionario = [
    "id" => $id,
    "nome" => $nome,
    "idade" => $idade,
    "sobrenome" => $sobrenome,
    "salario" => $salario
];
$funcionarioRepository->atualizarFuncionario($id, $nome, $sobrenome, $cargo, $idade, $salario);
echo json_encode([
    "status" => true,
    "mensagem" => "Funcionario atualizado com sucesso!",
    "funcionario" => $funcionario
], JSON_UNESCAPED_UNICODE);
