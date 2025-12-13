<?php
header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);
if (!$data || empty($data["titulo"]) || empty($data["letra"])) {
  http_response_code(400);
  exit;
}

$archivo = "canciones.json";
$canciones = json_decode(file_get_contents($archivo), true);

$canciones[] = [
  "titulo" => $data["titulo"],
  "letra" => $data["letra"]
];

file_put_contents(
  $archivo,
  json_encode($canciones, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE)
);

echo json_encode($canciones);
