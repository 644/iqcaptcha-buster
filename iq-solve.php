<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Content-type: application/json');

$cdata = $_POST['captchadata'];
$formula = $_POST['formula'];
file_put_contents('tmp.jpg', file_get_contents($cdata));
file_put_contents('formula.txt', $formula);

$cmd_res = shell_exec('/path/to/get-solution');
$res = array('solution' => $cmd_res);

echo json_encode($res);

?>