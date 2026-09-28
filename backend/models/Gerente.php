<?php

declare(strict_types=1);

require_once __DIR__ . '/Funcionario.php';

class Gerente extends Funcionario
{
    public function calcularBonificacao(): float
    {
        return $this->getSalario() + ($this->getSalario() * 0.20);
    }

    public function getCargo(): string
    {
        return "Gerente";
    }
}