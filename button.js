function but(){
	if($('.main-mnu-hidden').css('display')=== 'none'){
		$('.main-mnu-hidden').css('display', 'block');
	}
	else{
		$('.main-mnu-hidden').css('display', 'none');
	}
	$('.main-mnu').css('display', 'none');
}