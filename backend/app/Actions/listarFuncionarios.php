<?php

declare(strict_types=1);

namespace App\Actions;

header('Content-Type: application/json');

use App\Repositories\FuncionarioRepositoryJson;

require_once __DIR__ . "/../repositories/FuncionarioRepositoryJson.php";

$funcionarioRepository = new FuncionarioRepositoryJson();

$funcionarios = $funcionarioRepository->listarTodosFuncionarios();
echo json_encode($funcionarios, JSON_UNESCAPED_UNICODE);
