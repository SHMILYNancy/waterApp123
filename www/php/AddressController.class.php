<?php
class AddressController{
	public function submit(){
		$data=json_decode(file_get_contents('php://input'),true);
		print_r($data);
	}
}
