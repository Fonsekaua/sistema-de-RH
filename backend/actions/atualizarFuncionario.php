<?php 
declare(strict_types=1);
header('Content-Type: application/json');

require_once __DIR__ . "/../repositories/FuncionarioRepositoryJson.php";

$funcionarioRepository = new FuncionarioRepositoryJson();

$id = (int) $_GET["id"];

$dados = json_decode(file_get_contents("php://input"), true);
if(!$dados) {
    echo json_encode([
        "status" => false,
        "mensagem" => "Corpo da requisição vazio"
    ]);
    return;
}
$nome = $dados["nome"];
$sobrenome = $dados["sobrenome"];
$idade = (int) $dados['idade'];
$salario =(float) $dados["salario"];

$funcionario = [
    "id" => $dados['id'], 
    "nome" => $nome,
    "idade" => $idade,
    "sobrenome" => $sobrenome,
    "salario" => $salario
];
$funcionarioRepository->atualizarFuncionario($id,$nome,$sobrenome,$idade, $salario);
echo json_encode([
    "status" => true,
    "mensagem" => "Funcionario atualizado com sucesso!",
    "funcionario" => $funcionario
],JSON_UNESCAPED_UNICODE);

?>