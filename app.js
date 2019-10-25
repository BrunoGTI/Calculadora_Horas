function calcular() {
	let horas1 = document.querySelector(".horas1").value;
	let horas2 = document.querySelector(".horas2").value;
	let minutos1 = document.querySelector(".minutos1").value;
	let minutos2 = document.querySelector(".minutos2").value;

	let Horas = parseInt(horas1) + parseInt(horas2);
	let Minutos = parseInt(minutos1) + parseInt(minutos2);

	if (Minutos >= 60){
		let result = Minutos - 60;
		Horas ++;
		document.querySelector(".resultM").value = result;
		document.querySelector(".resultH").value = Horas;
	}else{
		document.querySelector(".resultM").value = Minutos;
		document.querySelector(".resultH").value = Horas;
	}
}