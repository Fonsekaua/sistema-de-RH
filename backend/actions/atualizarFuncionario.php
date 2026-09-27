<?php 
declare(strict_types=1);
header('Content-Type: application/json');

require_once __DIR__ . "/../repositories/FuncionarioRepositoryJson.php";

$funcionarioRepository = new FuncionarioRepositoryJson();

$id = $_GET["id"];

$dados = json_decode(file_get_contents("php://input"), true);

$nome = $dados["nome"];
$sobrenome = $dados["sobrenome"];
$salario = $dados["salario"];

echo $id;
echo $nome;

?>