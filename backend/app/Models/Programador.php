<?php

declare(strict_types=1);

namespace App\Models;

class Programador extends Funcionario
{
    public function calcularBonificacao(): float
    {
        return $this->salario + 1000;
    }
    public function getCargo(): string
    {
        return "Programador";
    }
}
