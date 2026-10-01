<?php

declare(strict_types=1);

namespace App\Models;

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
