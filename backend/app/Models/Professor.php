<?php

declare(strict_types=1);

namespace App\Models;

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
