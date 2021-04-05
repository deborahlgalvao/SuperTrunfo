
var cartaChunLi = {
  icone:"https://i.ibb.co/qW0L5n0/chunli.png",
  nome:"Chun Li",
  
  atributos:{
  attack:40,
  defense:25,
  magic:52
  }
}

var cartaMorrigan = {
  icone:"https://i.ibb.co/8bfxzjB/morrigan.png",
  nome: "Morrigan",
  atributos:{
  attack:85,
  defense:50,
  magic:65
  }
}

var cartaNemesis = {
  icone:"https://i.ibb.co/6mtFfhj/nemesis.png",
  nome:"Nemesis",
  atributos:{
  attack:90,
  defense:30,
  magic:65
    }
}

var cartaRyu = {
  icone:"https://i.ibb.co/nb4y4Wq/ryu.png",
  nome:"Ryu",
  atributos:{
  attack:65,
  defense:43,
  magic:70
    }
}

var cartaZero = {
  icone:"https://i.ibb.co/Ld3C2Km/zero.png",
  nome:"Zero",
  atributos:{
  attack:60,
  defense:60,
  magic:35
    }
}

var cartaChris = {
  icone:"https://i.ibb.co/MpH6nMR/chris.png",
  nome:"Chris",
  atributos:{
  attack:62,
  defense:72,
  magic:24
    }
}

var cartaDante = {
  icone:"https://i.ibb.co/Dp0RG1k/dante.png",
  nome:"Dante",
  atributos:{
  attack:55,
  defense:40,
  magic:40
    }
}

var cartaArthur = {
  icone:"https://i.ibb.co/vx80Gzm/arthur.png",
  nome:"Arthur",
  atributos:{
  attack:30,
  defense:60,
  magic:25
    }
}

var cartaGhostrider = {
  icone:"https://i.ibb.co/MpyF2cY/ghostrider.png",
  nome:"Ghost Rider",
  atributos:{
  attack:61,
  defense:53,
  magic:81
    }
}

var cartaBlackpanther = {
  icone:"https://i.ibb.co/sWBZvPP/blackpanther.png",
  nome:"Black Panther",
  atributos:{
  attack:57,
  defense:36,
  magic:60
    }
}

var cartaIronman = {
  icone:"https://i.ibb.co/sWcxWf4/ironman.png",
  nome:"Iron Man",
  atributos:{
  attack:69,
  defense:74,
  magic:90
    }
}

var cartaBlackwidow = {
  icone:"https://i.ibb.co/wK9dsMC/blackwidow.png",
  nome:"Black Widow",
  atributos:{
  attack:54,
  defense:78,
  magic:37
    }
}

var cartaDoctorstrange = {
  icone:"https://i.ibb.co/p02LQ6G/doctorstrange.png",
  nome:"Doctor Strange",
  atributos:{
 attack:61,
  defense:44,
  magic:85
    }
}

var cartaCaptainmarvel = {
  icone:"https://i.ibb.co/jwVKsTP/capitainmarvel.png",
  nome:"Captain Marvel",
  atributos:{
  attack:80,
  defense:54,
  magic:88
    }
}

var cartaDormammu = {
  icone:"https://i.ibb.co/6W45kj4/dormamu.png",
  nome:"Dormammu",
  atributos:{
  attack:42,
  defense:34,
  magic:73
    }
}

var cartaRocketraccoon = {
  icone:"https://i.ibb.co/W2My8Cx/rocketraccoon.png",
  nome:"Rocket Raccoon",
  atributos:{
  attack:66,
  defense:79,
  magic:31
    }
}


var cartas = [cartaChunLi, cartaMorrigan, cartaNemesis, cartaRyu, cartaZero, cartaChris, cartaDante, cartaArthur, cartaGhostrider, cartaBlackpanther, cartaIronman, cartaBlackwidow, cartaDoctorstrange, cartaCaptainmarvel, cartaDormammu, cartaRocketraccoon]
               



function sortearCarta(){
                          
  var numeroCartaMaquina = parseInt(Math.random() * 16) 
 
  cartaMaquina = cartas[numeroCartaMaquina]
  
                             
  var numeroCartaJogador =  parseInt(Math.random() * 16)
  
  while(numeroCartaJogador == numeroCartaMaquina){
   var numeroCartaJogador = parseInt(Math.random() * 16)
  }
  cartaJogador = cartas[numeroCartaJogador]
  console.log(cartaJogador)
  
 
  document.getElementById('btnSortear').disabled = true
  
  document.getElementById('btnJogar').disabled = false
  
  
    var player1 = "";
        player1 +="<div class='player1' id='player1'><img src=" + cartaJogador.icone + ">"
        player1 +="<h2>" + cartaJogador.nome + "</h2>"
        player1 +="<h2>Attack: " + cartaJogador.atributos.attack + "</h2>"
        player1 +="<h2>Defense: " + cartaJogador.atributos.defense + "</h2>"
        player1 +="<h2>Magic: " + cartaJogador.atributos.magic + "</h2></div>"
  
        document.getElementById("player1").innerHTML = player1;
        
   var player2 = "";
        player2 +="<div class='player2' id='player2'><img src=" + cartaMaquina.icone + ">"
  
       document.getElementById("player2").innerHTML = player2;
        

  exibirOpcoes()
}
      

    

function exibirOpcoes(){
  
  var opcoes = document.getElementById('opcoes')
  var opcoesTexto = ""

  for(var atributo in cartaJogador.atributos){
    opcoesTexto += "<input type='radio' name='atributo' value='"+ atributo + "'>" + atributo
  }
  
 
  opcoes.innerHTML = opcoesTexto
}
      
      
      

function obtemAtributoSelecionado(){
                           
  var radioAtributo = document.getElementsByName('atributo')
  
  for(var i = 0; i < radioAtributo.length; i++){
    if (radioAtributo[i].checked){
     
      return radioAtributo[i].value
    }
  }   
}
      

function jogar(){
  var atributoSelecionado = obtemAtributoSelecionado()
  console.log(atributoSelecionado)
  
  var final =""
    if(cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]){
    final +="<p id='final' class='final'>You Win!</p>"
    
    document.getElementById("final").innerHTML = final;
    
  }else if(cartaMaquina.atributos[atributoSelecionado] > cartaJogador.atributos[atributoSelecionado]){
    final +="<p id='final' class='final'>You Lose!</p>"
   
    
    document.getElementById("final").innerHTML = final;
  }else{
       
    
    final +="<p id='final' class='final'>Tie</p>"
    document.getElementById("final").innerHTML = final;
  }
      var player2 = "";
        player2 +="<div class='player2' id='player2'><img src=" + cartaMaquina.icone + ">"
        player2 +="<h2>"+ cartaMaquina.nome + "</h2>"
        player2 +="<h2>Attack: " + cartaMaquina.atributos.attack + "</h2>"
        player2 +="<h2>Defense: " + cartaMaquina.atributos.defense + "</h2>"
        player2 +="<h2>Magic: " + cartaMaquina.atributos.magic + "</h2></div>"
        document.getElementById("player2").innerHTML = player2;
}


