function validateForm(){

	function validarNom (){
		var nombre = document.getElementById('name').value;
		var larg = nombre.length;
		if (nombre === null || nombre.length===0){
			alert ('Ingrese nombre');
			return false;
		}else if (nombre.substring(0,1) !== nombre.substring(0,1).toUpperCase()){
			alert ('La primera letra debe ser con mayúscula');
			return false;
		}else if (nombre.substring(1,larg).toUpperCase() == nombre.substring(1,larg)){
			alert ('Ingrese con minúscula Ej: José');
			return false;
		}else if (/[0-9]/.test(nombre)){
			alert ('Este campo no debe tener números');
			return false;
		}else{
			alert ('Perfeh');
			return true;
		}
		
	} 
	validarNom();

	function validarApel (){
		var apellido = document.getElementById('lastname').value;
		var largo = apellido.length;
		if (apellido === null || apellido.length===0){
			alert ('Ingrese apellido');
			return false;
		}else if (apellido.substring(0,1) !== apellido.substring(0,1).toUpperCase()){
			alert ('La primera letra debe ser con mayúscula');
			return false;
		}else if (apellido.substring(1,largo).toUpperCase() == apellido.substring(1,largo)){
			alert ('Ingrese con minúscula Ej: José');
			return false;
		}else if (/[0-9]/.test(apellido)){
			alert ('Este campo no debe tener números');
			return false;
		}else{
			alert ('Perfeh');
			return true;
		}
		
	} 
	validarApel();

	function validarCorreo(){
		var correo = document.getElementById('input-email').value;
		var caracteres = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
		if (correo === null || correo.length===0){
			alert ('Ingrese correo');
			return false;
		}else if (caracteres.test(correo)){
			return true;
		}else{
			alert('Ingrese su email válido');
			return false;
		}
	}
	validarCorreo();

	function validarContrasena(){
		var contrasena = document.getElementById('input-password').value;
		if (contrasena === null || contrasena.length===0){
			alert ('Ingrese contraseña');
			return false;
	    }else if (contrasena.length <  6){
		    alert ('Ingrese contraseña de mínimo 6 caracteres');
		    return false;
	    }else if (contrasena === "123456"  || contrasena === "password" || contrasena === "098754"){
	    	alert ('Ingrese contraseña válida');
	    	return false;
	    }else{
	    	alert ('Bieen');
	    	return true;

	    }
	}
	    validarContrasena();

	function validarLista(){
		var lista = document.getElementsByTagName('select')[0].selectedIndex;
		
		if( lista == null || lista == 0 ) {
			alert ('Selecione un elemento de la lista')
 		  return false;
		}else{
			return true;
		}
	}
	validarLista();
}
