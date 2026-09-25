<?php 
declare(strict_types=1);
header('Content-Type: application/json');

require_once __DIR__ . "/../repositories/FuncionarioRepositoryJson.php";

$funcionarioRepository = new FuncionarioRepositoryJson();

$funcionarios = $funcionarioRepository->listarTodosFuncionarios();
echo json_encode($funcionarios);
?>