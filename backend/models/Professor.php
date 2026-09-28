<?php

declare(strict_types=1);

require_once __DIR__ . '/Funcionario.php';

class Professor extends Funcionario
{
    public function calcularBonificacao(): float
    {
        return $this->getSalario() + 400;
    }

    public function getCargo(): string
    {
        return "Professor";
    }
}