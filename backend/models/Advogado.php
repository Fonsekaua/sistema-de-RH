<?php

declare(strict_types=1);

require_once __DIR__ . '/Funcionario.php';

class Advogado extends Funcionario
{
    public function calcularBonificacao(): float
    {
        return $this->salario + 500;
    }
    public function setCargo(): string {
        return "Advogado";
    }

}
