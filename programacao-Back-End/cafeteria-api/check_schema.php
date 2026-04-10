<?php
require_once 'database.php';
$db = new Database();
$result = $db->executeQuery('DESCRIBE produtos');
$rows = $result->fetchAll();
var_dump($rows);
?>
