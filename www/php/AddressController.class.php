<?php
class AddressController{
	public function submit(){
		$data=json_decode(file_get_contents('php://input'),true);
		$result=M()->insert_sql('tb_address',$data);
		if($result){
			echo '{"code":1,"msg":"添加成功"}';
		}else{
			echo '{"code":0,"msg":"添加失败"}';
		}
	}
	public function select(){
	    $data=json_decode(file_get_contents('php://input'),true);

	    $result=M()->select_sql("SELECT * FROM tb_address WHERE u_name='{$data}'");
	    
	    if($result){
	      echo json_encode($result);
	    }else{
	      echo '{"code":0,"msg":"查询失败"}';
	    }
	}
	public function update(){
	    $data=json_decode(file_get_contents('php://input'),true);
	    $result=M()->update_sql('tb_address',$data,"a_id='{$data['a_id']}'");
	    if($result){
	      echo '{"code":1,"msg":"修改成功"}';
	    }else{
	      echo '{"code":0,"msg":"修改失败"}';
	    }
	}
}
