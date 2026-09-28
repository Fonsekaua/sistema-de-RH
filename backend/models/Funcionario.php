<?php

declare(strict_types=1);
abstract class Funcionario
{
    function __construct(protected string $nome, protected string $sobrenome, protected int $idade, protected float $salario)
    {
        if ($this->salario < 0) {
            $this->salario = 0;
        }
    }

    public function getNome(): string
    {
        return $this->nome;
    }

    public function getSobrenome(): string
    {
        return $this->sobrenome;
    }
    public function getIdade(): int {
        return $this->idade;
    }
    public function getSalario(): float
    {
        return $this->salario;
    }

    abstract public function calcularBonificacao(): float;
    abstract public function getCargo(): string;
}
