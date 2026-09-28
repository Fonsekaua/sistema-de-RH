<?php

declare(strict_types=1);

require_once __DIR__ . '/Funcionario.php';

class Contador extends Funcionario
{
    public function calcularBonificacao(): float
    {
        return $this->getSalario() + 600;
    }

    public function getCargo(): string
    {
        return "Contador";
    }
}