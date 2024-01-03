
//variaveis
let box = document.getElementById('competences__box');
let boxRight = document.getElementById('competences__text__Box');
let boxCoordenadas = boxRight.getBoundingClientRect();
let i = 1;
let texto1 = document.getElementById('comp_t1')
let texto2 = document.getElementById('comp_t2')
let texto3 = document.getElementById('comp_t3')
let texto4 = document.getElementById('comp_t4')
let texto5 = document.getElementById('comp_t5')
let texto6 = document.getElementById('comp_t6')
let texto7 = document.getElementById('comp_t7')
let header = document.getElementById('header')
let headerOpen = document.getElementById('header__open')
let competences = document.getElementById('competences')
let competencesTextTitle = document.getElementById('competences__text__title')
let competencesTitle = document.getElementById('competences__title')
let choose = document.getElementById('choose')
let chooseContainer = document.getElementById('chooseContainer')

let linha1 = document.getElementById('lt1');
let linha2 = document.getElementById('lt2');
let linha3 = document.getElementById('lt3');
let linha4 = document.getElementById('lt4');
let linha5 = document.getElementById('lt5');
let linha6 = document.getElementById('lt6');
let linha7 = document.getElementById('lt7');
let tituloTexto1 = document.getElementById('tt1');
let tituloTexto2 = document.getElementById('tt2');
let tituloTexto3 = document.getElementById('tt3');
let tituloTexto4 = document.getElementById('tt4');
let tituloTexto5 = document.getElementById('tt5');
let tituloTexto6 = document.getElementById('tt6');
let pTexto1 = document.getElementById('comp_p1');
let pTexto2 = document.getElementById('comp_p2');
let pTexto3 = document.getElementById('comp_p3');
let pTexto4 = document.getElementById('comp_p4');
let pTexto5 = document.getElementById('comp_p5');
let pTexto6 = document.getElementById('comp_p6');
let textoApareceu = 0;
let chooseBack = 0;



//competences 

//MOVIMENTO DA CAIXA 
function boxMovement() {
    let boxCoordenadas = boxRight.getBoundingClientRect();
    let boxPositionTop = boxCoordenadas.top;
    
       
    if(boxPositionTop <=210 && boxPositionTop > -360 ){
      box.classList.remove('competences__box__down');
      box.classList.add('competences__box');
      box.style.top ='190px';
      box.style.left ='-100px';
      box.style.position ='fixed';
      
    } else {
      box.style.position ='static';
      if(boxPositionTop < -360 ){
        box.classList.remove('competences__box');
        box.classList.add('competences__box__down');
      }  
    } 
}  


//window.addEventListener("wheel",
  //myFunction(event),
  //boxMovement(),
  //esconder();
  //mostrarTexto();
  //deslizar();

 let chooseContainerOpacity = 1
 let chooseContainerScale = 1
 
 console.log(choosePositionTop)
 
function rolar (event){
  let direction = event.deltaY
  let choosePosition =  choose.getBoundingClientRect();
  let choosePositionTop =  choosePosition.top;
  let competencesPosition =  competences.getBoundingClientRect();
  let competencesPositionTop =  competencesPosition.top;
  let up = 0
  
  if ( chooseContainerOpacity <= 0){          //mover para sessão o que usamos
    competences.style.marginTop = '-100vh';
    mostrarTexto();
    if (textoApareceu == 1){
      //rolar tela    
      if(direction > 0 ){
      up = competencesPositionTop-100 +'px';
      choose.style.marginTop=up;
      }
      else {
        if(competencesPositionTop < -100){
          console.log(competencesPositionTop)
           up = competencesPositionTop +100 +'px';
          choose.style.marginTop=up;
       } 
       else{
        competences.style.marginTop='+100vh';
        choose.style.marginTop ='0vh'
        setTimeout(mudarChooseBack , 1000);
        if(chooseBack == 1){
        chooseContainer.style.opacity = 1;
        chooseContainer.style.scale = 1;
        
        let choosePosition =  choose.getBoundingClientRect();
        let choosePositionTop =  choosePosition.top;

        }  

       }
     } 
    }
    
  } else { // mover sessão escolha
    
      if(choosePositionTop >0){
        if(direction > 0){
          let up = choosePositionTop-200 +'px';
          choose.style.marginTop=up;
        } else {
          let up = choosePositionTop+200 +'px';
          choose.style.marginTop=up;
        }
      }else{
        choose.style.marginTop=0;

        if(direction > 0){
          chooseContainerScale = chooseContainerScale -0.02;
          chooseContainerOpacity = chooseContainerOpacity -0.05;
          chooseContainer.style.opacity = chooseContainerOpacity;
          chooseContainer.style.scale = chooseContainerScale;
        
        } else {
          if(chooseContainerOpacity <1){
            chooseContainerOpacity = chooseContainerOpacity +0.05;
            chooseContainerScale = chooseContainerScale +0.02;
            chooseContainer.style.opacity = chooseContainerOpacity;
            chooseContainer.style.scale = chooseContainerScale;
          } else {
            let up = choosePositionTop+200 +'px';
            choose.style.marginTop=up;
            }
          }
        }
      }  
}

 
//window.onweel = function(){ 
  //boxMovement();
  //esconder();
  //mostrarTexto();
  //
 
 //};

 


//IMAGEM DA CAIXA

texto1.onmouseover = function(){
  box.style.backgroundColor = 'black';
}
texto2.onmouseover = function(){
  box.style.backgroundColor = 'blue';
}
texto3.onmouseover = function(){
  box.style.backgroundColor = 'red';
}
texto4.onmouseover = function(){
  box.style.backgroundColor = 'pink';
}
texto5.onmouseover = function(){
  box.style.backgroundColor = 'orange';
}
texto6.onmouseover = function(){
  box.style.backgroundColor = 'brown';
}


//slide up

function mostrarTexto(){
let competencesCoordenadas = competences.getBoundingClientRect();
let competencesCoordenadasTop = competencesCoordenadas.top;

if (competencesCoordenadasTop <=0){
  competencesTextTitle.classList.add('slide_up');
  competencesTitle.classList.add('slide_up');
  setTimeout(mudarTexto , 1000);

};
}
function mudarTexto(){
  textoApareceu = 1;
}

function mudarChooseBack(){
  chooseBack = 1;
}

//slide left

function deslizar(){
  let texto1Position =  texto1.getBoundingClientRect();
  let texto1PositionTop =  texto1Position.top;


  let positiont1 = texto1PositionTop/5 ; //line
  let position1 = 0
    if (positiont1 <= 0){
        position1 = 0;
    } else {
        position1 = positiont1 +'px';
    };

  let position2 = texto1PositionTop/2.5 +'px';
  let position3 = texto1PositionTop +'px'; 
  let positiont4 = texto1PositionTop/1.5; //line
  let position4 = 0;
  if (positiont4 <=0 ){
    position4 = 0
  } else {
      position4 = positiont4  +'px'
  };
  
  let texto1Position2 =  texto2.getBoundingClientRect();
  let texto1PositionTop2 =  texto1Position2.top;
  let position21 = texto1PositionTop2/5 +'px';
  let position22 = texto1PositionTop2/2.5 +'px';
  let positiont23 = texto1PositionTop2/1.5 ;//line
  let position23 = 0;
  if(positiont23<=0){
    position23 = 0
  } else {
      position23 = positiont23  +'px'
  };

  let texto1Position3 =  texto3.getBoundingClientRect();
  let texto1PositionTop3 =  texto1Position3.top;
  let position31 = texto1PositionTop3/5 +'px';
  let position32 = texto1PositionTop3/2.5 +'px';
  let positiont33 = texto1PositionTop3 /1.5;//line
  let position33 =0;
  if(positiont33<=0){
    position33 = 0
  } else {
      position33 = positiont33  +'px'
  };

  let texto1Position4 =  texto4.getBoundingClientRect();
  let texto1PositionTop4 =  texto1Position4.top;
  let position41 = texto1PositionTop4/5 +'px';
  let position42 = texto1PositionTop4/2.5 +'px';
  let positiont43 = texto1PositionTop4 /1.5;//line
  let position43 = 0;
  if(positiont43<=0){
    position43 = 0
  } else {
      position43 = positiont43  +'px'
  };

  let texto1Position5 =  texto5.getBoundingClientRect();
  let texto1PositionTop5 =  texto1Position5.top;
  let position51 = texto1PositionTop5/5 +'px';
  let position52 = texto1PositionTop5/2.5 +'px';
  let positiont53 = texto1PositionTop5 /1.5;//line
  let position53 = 0;
  if(positiont53<=0){
    position53 = 0
  } else {
      position53 =positiont53  +'px'
  };

  let texto1Position6 =  texto6.getBoundingClientRect();
  let texto1PositionTop6 =  texto1Position6.top;
  let position61 = texto1PositionTop6/5 +'px';
  let position62 = texto1PositionTop6/2.5 +'px';
  let positiont63 = texto1PositionTop6 /1.5;//line
  let position63 = 0;
  if(positiont63<=0){
    position63 = 0
  } else {
      position63 =positiont63  +'px'
  };

//c1
  linha1.style.marginLeft=position1;
  tituloTexto1.style.paddingLeft=position2;
  pTexto1.style.paddingLeft=position3;
  linha2.style.marginLeft=position4;
//c2
  tituloTexto2.style.paddingLeft=position21;
  pTexto2.style.paddingLeft=position22;
  linha3.style.marginLeft=position23;
//c3
  tituloTexto3.style.paddingLeft=position31;
  pTexto3.style.paddingLeft=position32;
  linha4.style.marginLeft=position33;
//c4
  tituloTexto4.style.paddingLeft=position41;
  pTexto4.style.paddingLeft=position42;
  linha5.style.marginLeft=position43;
//c5
  tituloTexto5.style.paddingLeft=position51;
  pTexto5.style.paddingLeft=position52;
  linha6.style.marginLeft=position53;
//c6
  tituloTexto6.style.paddingLeft=position61;
  pTexto6.style.paddingLeft=position62;
  linha7.style.marginLeft=position63;
}



//ESCONDE MENU

function esconder (){
  header.style.display = 'none';
  
}
esconder();
setTimeout(mostrar , 2000)

headerOpen.onmouseover = function(){mostrar()}

function mostrar () {
  {
    header.style.display = 'block';
  }
}

