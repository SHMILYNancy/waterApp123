<?php
class ModelController{
	private $dsn = 'mysql:host=localhost;dbname=WaterApp';
	private $user = 'root';
	private $pass = '';
	static $pdo;
	function __construct(){
		if(!isset(self::$pdo)){
			try{
				self::$pdo = new PDO($this->dsn,$this->user,$this->pass);
				self::$pdo->query('SET NAMES UTF8');
				self::$pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_WARNING);
			}catch(Exception $e){
				echo $e;
			}
		}
	}
	//查询
	public function select_sql($sql){
		$result=self::$pdo->query($sql);
		$row=$result->fetchAll(PDO::FETCH_ASSOC);
		// print_r($row);
		return $row;
	}
	//删除
	public function delete_sql($table,$id){
		$row=self::$pdo->exec("DELETE FROM {$table} WHERE id={$id}");
		return $row;
	}
	//添加
	public function insert_sql($table,$data){
		$key=implode(',',array_keys($data));
		$value="'".implode("','",$data)."'";
		$row=self::$pdo->exec("INSERT INTO {$table}({$key}) VALUES({$value})");
		return $row;
	}
	//修改
	public function update_sql($table,$data,$name){
		$str="";
		foreach ($data as $key => $value) {
			$str.=$key."='".$value."',";
		}
		$str=substr($str,0,strlen($str)-1);
		$row=self::$pdo->exec("UPDATE {$table} SET {$str} WHERE $name");
		return $row;
	}
}
