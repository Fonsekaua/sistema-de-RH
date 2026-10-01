<?php

declare(strict_types=1);

namespace App\Models;

class Engenheiro extends Funcionario
{
    public function calcularBonificacao(): float
    {
        return $this->getSalario() + 1000;
    }

    public function getCargo(): string
    {
        return "Engenheiro";
    }
}
