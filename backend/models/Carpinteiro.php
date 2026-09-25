<?php

declare(strict_types=1);

require_once __DIR__ . '/Funcionario.php';

class Carpinteiro extends Funcionario
{
    public function calcularBonificacao(): float
    {
        return $this->salario + 100;
    }
    public function setCargo() : string {
        return "Carpinteiro";
    }
}
