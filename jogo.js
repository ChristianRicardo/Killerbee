var altura= 0
var largura= 0
var vidas=1
var tempo= 15

var tempojogo=1500

var nivel= window.location.search
nivel= nivel.replace('?', '')

if(nivel==='Easy'){
	tempojogo=1500
}
else if(nivel==='Hard'){
	tempojogo=750
}


function AjustaTamanhoJogo(){
	altura= window.innerHeight
	largura= window.innerWidth
	console.log(largura, altura)
}

AjustaTamanhoJogo()

var cronometro= setInterval(function(){
	tempo -=1
	if(tempo<0){
		clearInterval(cronometro)
		clearInterval(criamosca)
		window.location.href='winner.html'
	}
	document.getElementById('cronometro').innerHTML = tempo
	}, 1000)


function PosicaoRandom(){

if(document.getElementById('mosca')){
document.getElementById('mosca').remove()

if(vidas>3){

	window.location.href='game_over.html'

}
else{
	document.getElementById('v' + vidas).src="imagens/coracao_vazio.png"
	vidas++
}


}


var posicaoX= Math.floor(Math.random()*largura) -90
var posicaoY= Math.floor(Math.random()*altura) -90

posicaoX= posicaoX<0? 0 :posicaoX
posicaoY= posicaoY<0? 0 :posicaoY


console.log(posicaoX, posicaoY)

var mosca = document.createElement('img')
mosca.src = 'imagens/mosca.png'
mosca.className = 'mosca1'
mosca.style.left= posicaoX + 'px'
mosca.style.top= posicaoY +'px'
mosca.style.position='absolute'
mosca.className= TamanhoMosca() + ' ' + ladoAleatorio()
mosca.id='mosca'
mosca.onclick= function(){
	this.remove()
}


document.body.appendChild(mosca)

}


function TamanhoMosca(){

	var classe=Math.floor(Math.random()*3)

	switch(classe){
	case 0: return 'mosca1'
	case 1: return 'mosca2' 
	case 2: return 'mosca3'
}
}

function ladoAleatorio(){
	var classe = Math.floor(Math.random()*2)

	switch(classe){
		case 0: return 'ladoA'
		case 1: return 'ladoB'
	}
}