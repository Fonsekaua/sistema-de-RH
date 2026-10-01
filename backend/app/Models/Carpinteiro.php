<?php

declare(strict_types=1);

namespace App\Models;

class Carpinteiro extends Funcionario
{
    public function calcularBonificacao(): float
    {
        return $this->salario + 100;
    }
    public function getCargo(): string
    {
        return "Carpinteiro";
    }
}
