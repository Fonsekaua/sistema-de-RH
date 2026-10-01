<?php

declare(strict_types=1);

require_once __DIR__ . '/Funcionario.php';

class Programador extends Funcionario
{
    public function calcularBonificacao(): float
    {
        return $this->salario + 1000;
    }
    public function getCargo(): string {
        return "Programador";
    }

}
