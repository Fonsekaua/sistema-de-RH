<?php

declare(strict_types=1);

namespace App\Models;

class Advogado extends Funcionario
{
    public function calcularBonificacao(): float
    {
        return $this->salario + 500;
    }
    public function getCargo(): string
    {
        return "Advogado";
    }
}
