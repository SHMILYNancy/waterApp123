<?php
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Method:GET,POST');
include_once('./function.php');
$a=isset($_GET['a'])?$_GET['a']:'Index';
$a.='Controller';
$b=isset($_GET['b'])?$_GET['b']:'index';
$obj=new $a;
$obj->$b();


