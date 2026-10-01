<?php

declare(strict_types=1);

namespace App\Models;

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
