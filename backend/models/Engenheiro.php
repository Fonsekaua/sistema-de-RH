<?php

declare(strict_types=1);

require_once __DIR__ . '/Funcionario.php';

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