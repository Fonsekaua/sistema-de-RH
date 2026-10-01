<?php
declare(strict_types=1);

namespace App\Models;

abstract class Funcionario
{
    function __construct(protected int $id, protected string $nome, protected string $sobrenome, protected int $idade, protected float $salario)
    {
        if ($this->salario < 0) {
            $this->salario = 0;
        }
    }
    public function getId(): int
    {
        return $this->id;
    }
    public function getNome(): string
    {
        return $this->nome;
    }

    public function getSobrenome(): string
    {
        return $this->sobrenome;
    }
    public function getIdade(): int
    {
        return $this->idade ? $this->idade : 18;
    }
    public function getSalario(): float
    {
        return $this->salario;
    }

    abstract public function calcularBonificacao(): float;
    abstract public function getCargo(): string;
}
