let inputInicio = undefined
let inputFim = undefined
let inputPasso = undefined
let msg = undefined

function contar() {

	inputInicio = Number(document.getElementById('primeiroNumero').value)
	inputFim = Number(document.getElementById('ultimoNumero').value)
	inputPasso = Number(document.getElementById('passo').value)
	msg = document.getElementById('contagem')

	if (inputPasso == '') {
		alert('Insira um numero no Input Passo');
		return
	}

	if (inputInicio > inputFim) {
		msg.innerHTML = ''
		for (let q = inputInicio; q >= inputFim; q -= inputPasso) {
			msg.innerHTML += `${q} `;
		}
	} else if (inputInicio < inputFim) {
		msg.innerHTML = ''
		for (let q = inputFim; q >= inputInicio; q -= inputPasso) {
			console.log(q);
			msg.innerHTML += `${q} `;
		}
	}
}