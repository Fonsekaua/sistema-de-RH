<?php

declare(strict_types=1);

namespace App\Actions;

header('Content-Type: application/json; charset=utf-8');

use App\Repositories\FuncionarioRepositoryJson;

$funcionarioRepository = new FuncionarioRepositoryJson();

$dados = json_decode(file_get_contents("php://input"), true);

$id = (int) $_GET['id'];

$funcionarioRepository->deletarFuncionario($id);

echo json_encode([
    "status" => true,
    "mensagem" => "Funcionario deletado com sucesso!"
]);
