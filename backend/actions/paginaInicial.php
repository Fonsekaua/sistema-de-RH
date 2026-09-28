<?php 
declare(strict_types=1);
header('Content-Type: application/json');

require_once __DIR__ . "/../repositories/FuncionarioRepositoryJson.php";
echo json_encode([
    "status" => true,
    "mensagem" => "Você está na pagina principal da api do projeto sistema de RH"
],JSON_UNESCAPED_UNICODE);
?>