<?php

declare(strict_types=1);

namespace App\Actions;

header('Content-Type: application/json');

use App\Repositories\FuncionarioRepositoryJson;

$funcionarioRepository = new FuncionarioRepositoryJson();

$funcionarios = $funcionarioRepository->listarTodosFuncionarios();

echo json_encode($funcionarios, JSON_UNESCAPED_UNICODE);
