<?php
declare(strict_types=1);
require_once __DIR__ . "/../models/Funcionario.php";
interface FuncionarioRepositoryInterface {
    public function cadastrarFuncionario(Funcionario $funcionario): void;
    public function listarTodosFuncionarios(): array;
    public function buscarFuncionario(int $id): array | string;
    public function atualizarFuncionario(int $id, string $nome, string $sobrenome, float $salario): void;
    public function deletarFuncionario(int $id): void;
}
?>