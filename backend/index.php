<?php

declare(strict_types=1);

include __DIR__ . "/routes/routes.php";

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

function Metodo(string $metodo): bool
{
    return $metodo === $_SERVER['REQUEST_METHOD'];
}

function URL(string $url): bool
{
    return $url === parse_url(
        $_SERVER['REQUEST_URI'],
        PHP_URL_PATH
    );
}

foreach ($routes as $route) {
    if (Metodo($route['method']) && URL($route['url'])) {
        include $route['content'];
        exit;
    }
}

http_response_code(404);

echo json_encode([
    "status" => false,
    "mensagem" => "Rota não encontrada"
], JSON_UNESCAPED_UNICODE);