<?php

declare(strict_types=1);
require_once __DIR__ . '/../interfaces/FuncionarioRepositoryInterface.php';
require_once __DIR__ . '/../models/Funcionario.php';
class FuncionarioRepositoryJson implements FuncionarioRepositoryInterface
{
    private string $caminhoArquivo;
    public function __construct()
    {
        $this->caminhoArquivo = __DIR__ . '/../dados/funcionarios.json';
    }
    public function carregarDados(): array
    {
        if (!file_exists($this->caminhoArquivo))  {
            return [];
        }
        $conteudo = file_get_contents($this->caminhoArquivo);

        if ($conteudo === false) {
            return [];
        }

        return json_decode($conteudo, true);
    }

    public function salvarDados(array $dados): void
    {
        file_put_contents($this->caminhoArquivo, json_encode($dados, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
    }
    
    public function cadastrarFuncionario(Funcionario $funcionario): void
    {
        $funcionarios = $this->carregarDados();
        if (empty($funcionarios)) {
            $novoId = 1;
        } else {
            $ids = array_column($funcionarios, 'id');
            $novoId = max($ids) + 1;
        }

        $funcionarios[] = [
            'id' => $novoId,
            'nome' => $funcionario->getNome(),
            'sobrenome' => $funcionario->getSobrenome(),
            'cargo' => $funcionario->setCargo(),
            'salario' => $funcionario->getSalario()
        ];

        $this->salvarDados($funcionarios);
    }

    public function listarTodosFuncionarios(): array
    {
        $funcionarios = $this->carregarDados();
        return $funcionarios;
    }

    public function buscarFuncionario(int $id): array | string
    {
        $funcionarios = $this->carregarDados();

        foreach ($funcionarios as $funcionario) {
            if ($funcionario['id'] === $id) {
                return [
                    'id' => $funcionario['id'],
                    'nome' => $funcionario['nome'],
                    'sobrenome' => $funcionario['sobrenome'],
                    'salario' => $funcionario['salario']
                ];
            }
        }

        return "Funcionário não encontrado <br>";
    }

    public function atualizarFuncionario(int $id, string $nome, string $sobrenome, float $salario): void
    {
        $funcionarios = $this->carregarDados();

        foreach ($funcionarios as $funcionario) {
            if ($funcionario['id'] === $id) {
                $funcionario['nome'] = $nome;
                $funcionario['salario'] = $salario;

                $this->salvarDados($funcionarios);

                echo "Funcionário atualizado com sucesso <br>";
            }
        }
        
        echo "Funcionário não encontrado <br>";
    }

    public function deletarFuncionario(int $id): void
    {
        $funcionarios = $this->carregarDados();

        foreach ($funcionarios as $index => $funcionario) {
            if ($funcionario['id'] === $id) {
                unset($funcionarios[$index]);
                $this->salvarDados(array_values($funcionarios));
                echo "Funcionário deletado com sucesso <br>";
                return;
            }
        }

        echo "Funcionário não encontrado <br>";
    }
}
