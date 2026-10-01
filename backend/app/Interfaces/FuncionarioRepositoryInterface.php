<?php
declare(strict_types=1);

namespace App\Interfaces;

use App\Models\Funcionario;

interface FuncionarioRepositoryInterface {
    public function cadastrarFuncionario(Funcionario $funcionario): void;
    public function listarTodosFuncionarios(): array;
    public function buscarFuncionario(int $id): array | string;
    public function atualizarFuncionario(int $id, string $nome, string $sobrenome, string $cargo, int $idade, float $salario): void;
    public function deletarFuncionario(int $id): void;
}
?>