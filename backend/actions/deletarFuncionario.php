<?php

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

require_once __DIR__ . "/../repositories/FuncionarioRepositoryJson.php";
require_once __DIR__ . "/../models/Advogado.php";
require_once __DIR__ . "/../models/Carpinteiro.php";

$funcionarioRepository = new FuncionarioRepositoryJson();

$dados = json_decode(file_get_contents("php://input"), true);

$id = (int) $_GET['id'];

$funcionarioRepository->deletarFuncionario($id);

echo json_encode([
    "status" => true,
    "mensagem" => "Funcionario deletado com sucesso!"
]);
