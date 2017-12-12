<?php
class LoginController{
	public function login(){

		$data=json_decode(file_get_contents('php://input'),true);
		$user=$data['u_name'];

		$result=M()->select_sql("SELECT * FROM tb_user WHERE u_name='{$user}'");
		if($result){
			$oldpass=$result[0]['u_password'];
			$newpass=$this->md($data['u_password']);
			if($oldpass===$newpass){
				setCookie('user',$user,time()+7*24*3600);
				echo '{"code":1,"msg":"登录成功"}';
			}else{
				echo '{"code":0,"msg":"密码错误"}';
			}
		}else{
			echo '{"code":0,"msg":"用户名不存在"}';
		}
	}

	public function sign(){
		$data=json_decode(file_get_contents('php://input'),true);
		$user=$data['u_name'];
		$result=M()->select_sql("SELECT * FROM tb_user WHERE u_name='{$user}'");
		if(!$result){
			$data['u_password']=$this->md($data['u_password']);
			$row=M()->insert_sql('tb_user',$data);
			if($row){
				echo '{"code":1,"msg":"注册成功"}';
			}else{
				echo '{"code":0,"msg":"注册失败"}';
			}
		}else{
			echo '{"code":0,"msg":"用户名已存在"}';
		}
	}

	public function update(){
  		$data=json_decode(file_get_contents('php://input'),true);
  		$user=$data['u_name'];
      $data['u_password']=$this->md($data['u_password']);
      $row=M()->update_sql('tb_user',$data,"u_name='{$user}'");
      if($row){
        echo '{"code":1,"msg":"修改成功"}';
      }else{
        echo '{"code":0,"msg":"修改失败"}';
      }
  	}

	public function md($str){
		return md5(md5($str).'php');
	}
}
