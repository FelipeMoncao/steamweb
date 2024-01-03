//-------------------------entrada das variaveis
//---------------variaveis do html
// ----- ---sessões principais
let headerOpen = document.getElementById('header__open')
let header = document.getElementById('header');
let choose = document.getElementById('choose');
let competences = document.getElementById('competences');
let letterbox = document.getElementById('letterbox');
let howWeDo = document.getElementById('howWeDo');
let banner = document.getElementById('banner')

// -------- sessões detalhes
// ----- competences
let competencesTextTitle = document.getElementById('competences__text__title');
let box = document.getElementById('competences__box');
let boxBefore = document.getElementById('competencesBoxBefore');
let boxAfter = document.getElementById('competencesBoxAfter');
let competencesTitle = document.getElementById('competences__title');
let competencesTextBox = document.getElementById('competences__text__box');
let boxRight = document.getElementById('competences__text__box');
let texto1 = document.getElementById('comp_t1');
let texto2 = document.getElementById('comp_t2');
let texto3 = document.getElementById('comp_t3');
let texto4 = document.getElementById('comp_t4');
let texto5 = document.getElementById('comp_t5');
let texto6 = document.getElementById('comp_t6');
let texto7 = document.getElementById('comp_t7');
let pTexto1 = document.getElementById('comp_p1');
let pTexto2 = document.getElementById('comp_p2');
let pTexto3 = document.getElementById('comp_p3');
let pTexto4 = document.getElementById('comp_p4');
let pTexto5 = document.getElementById('comp_p5');
let pTexto6 = document.getElementById('comp_p6');
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
//-------choose
let chooseContainer = document.getElementById('chooseContainer');
let chooseTexto1 = document.getElementById('chooseTexto1');
let chooseTexto2 = document.getElementById('chooseTexto2');
let pointer1 = document.getElementById('choosePointer1');
let pointer2 = document.getElementById('choosePointer2');

//---- How We Doo
let howDoWeDoCont = document.getElementById('howDoWeDoCont');
let titleHowWeDo = document.getElementById('howWeDoTitle');
let b1 = document.getElementById('b1');
let b2 = document.getElementById('b2');
let b3 = document.getElementById('b3');
let b4 = document.getElementById('b4');
let b5 = document.getElementById('b5');
let b6 = document.getElementById('b6');
let b7 = document.getElementById('b7');
let b8 = document.getElementById('b8');
let b9 = document.getElementById('b9');
let b10 = document.getElementById('b10');
let i01 = document.getElementById('inf01');
let i02 = document.getElementById('inf02');
let i03 = document.getElementById('inf03');
let i04 = document.getElementById('inf04');
let i05 = document.getElementById('inf05');
let i06 = document.getElementById('inf06');
let i07 = document.getElementById('inf07');
let i08 = document.getElementById('inf08');
let i09 = document.getElementById('inf09');
let i10 = document.getElementById('inf10');
let pop1 = document.getElementById('popUp01');
let pop2 = document.getElementById('popUp02');
let pop3 = document.getElementById('popUp03');
let pop4 = document.getElementById('popUp04');
let pop5 = document.getElementById('popUp05');
let pop6 = document.getElementById('popUp06');
let pop7 = document.getElementById('popUp07');
let pop8 = document.getElementById('popUp08');
let pop9 = document.getElementById('popUp09');
let pop10 = document.getElementById('popUp10');
let popUpFundo = document.getElementById('popUpFundo');
let openPopup = document.getElementById('saibaMais');
let popUpAberto = 0;

//----------Portifolio
let portifolio = document.getElementById('portifolio');
let imagemPortifolio01 = document.getElementById('modelo1');
let imagemPortifolio02 = document.getElementById('modelo2');
let imagemPortifolio03 = document.getElementById('modelo3');
let imagemPortifolio04 = document.getElementById('modelo4');
let imagemPortifolio05 = document.getElementById('modelo5');
let imagemPortifolio06 = document.getElementById('modelo6');
let imagemPortifolio07 = document.getElementById('modelo7');
let imagemPortifolio08 = document.getElementById('modelo8');
let imagemPortifolio01L = document.getElementById('modelo1Large');
let imagemPortifolio02L = document.getElementById('modelo2Large');
let imagemPortifolio03L = document.getElementById('modelo3Large');
let imagemPortifolio04L = document.getElementById('modelo4Large');
let imagemPortifolio05L = document.getElementById('modelo5Large');
let imagemPortifolio06L = document.getElementById('modelo6Large');
let imagemPortifolio07L = document.getElementById('modelo7Large');
let imagemPortifolio08L = document.getElementById('modelo8Large');
let boxPortifolio = document.getElementById('boxPortifolio');

//------------O que fazemos
let containerHorizontal = document.getElementById('containerHorizontal');
let lastItem = document.getElementById('lastItem');
let oQueFazemos = document.getElementById('oQueFazemos');

//---------------variaveis do javascript
let direction;
let position;
let positionTop;
let positionLeft;
let positionRight;
let up;
let positionChoose;
let positionChooseTop;
let waitTransition = 0;
let waitText = 0;
let positionCompetences;
let positionCompetencesTop;
let marginDiv = 0;
let halfHide = 0;
let waitChoose = 0;
let waitGira = 0;
let countGira = 0;
let waitBox = 0;
let espera = 1;
let howAnimation = 0;
let portifolioPosition = 0;



//rolagem sessão banner

//function rolarBanner(event){
 //   direciona(event);
  //  if(direction>0){
   //     goUp(choose, 400);
    //} else{
     //   goDown(choose, 200);
      //}     
//}  


//rolagem sessão escolha

function rolarChoose(event){
    positionChoose =  choose.getBoundingClientRect();
    positionChooseTop =  positionChoose.top;
    if(positionChooseTop > 200){ // se posição topo maior que 0
          direciona(event); //verifica direção
          if(direction>0){ // se rolou para baixo
              goUp(choose, 250); // sobe choose em 200
               
          } 
          else{ // se rolou para cima
            goDown(choose, 250); // desde choose em 200
          }
    } 
    else{ // se a posição topo não for maior que 200 
        choose.style.marginTop='0'; // alinha o topo em 0
        direciona(event); //verifica direção
        
        if(direction > 0 && halfHide ==0 && waitTransition ==0 ){ // se rolou para baixo e half__hide for 0
            setTimeout(waitTransitionFunction , 500);  // chama a função que muda wait para 1 depois de 0,5s
            chooseContainer.classList.add('half__hide'); // coloca a classe half__hide reduzindo escala e opacidade
            chooseContainer.classList.remove('volta__normal'); // remove a classe volta__normal
            halfHide = 1; // altera a variavel half__hide para 1
            banner.style.display = "block";
            
        }  
        if(direction > 0 && halfHide ==1 && waitTransition ==1){  // se rolou para baixo e half__hide for 1
              setTimeout(waitTransitionFunction , 500);  // chama a função que muda wait para 2 depois de 0,5s
              chooseContainer.classList.add('hide'); // coloca a classe hide
              chooseContainer.classList.remove('half__hide'); // remove a classe half__hide
              halfHide = 2; // altera a variavel half__hide para 2
              
        }
        if(direction > 0 && halfHide ==2 && waitTransition ==2 ){  // se rolou para baixo e half__hide for 2
            choose.style.marginTop = '-100vh';
            competences.style.marginTop='0';
            setTimeout(mostraCaixa , 1000);
         
            banner.style.display = "none";

            deslizar()
            mostrarTexto();
            
        }  
        if(direction < 0 && halfHide ==0 && waitTransition ==0 ){ // se rolou para cima e half__hide for 0
            chooseContainer.classList.remove('volta__normal'); // remove a classe volta__normal
            goDown(choose, 400);
            
        }
        if(direction < 0 && halfHide ==1 && waitTransition ==1 ){ // se rolou para cima e half__hide for 1
          chooseContainer.classList.add('volta__normal'); // remove a classe volta__normal
            chooseContainer.classList.remove('half__hide'); // remove a classe half__hide
            chooseContainer.classList.remove('volta__half__hide'); // remove a classe half__hide
            halfHide = 0; // altera a variavel half__hide para 0
            setTimeout(waitTransitionSubFunction , 500);
            
        
        }
        if(direction < 0 && halfHide ==2 && waitTransition ==2 ){ // se rolou para cima e half__hide for 2
            chooseContainer.classList.add('volta__half__hide'); // coloca a classe hide
            chooseContainer.classList.remove('hide'); // remove a classe half__hide
            halfHide = 1; // altera a variavel half__hide para 0
            setTimeout(waitTransitionSubFunction , 500);
           
        
        }
    }
  }  
  function mostraCaixa(){
    box.style.display = "block";
    boxBefore.style.display = "block";
    boxAfter.style.display = "block";
  }    
  function mudaTexto(event) {
    chooseTexto1.style.display = "none";
    chooseTexto2.style.display = "block";
    pointer1.classList.remove('pointer__active');
    pointer1.classList.add('pointer__inactive');
    pointer2.classList.remove('pointer__inactive');
    pointer2.classList.add('pointer__active');

  }  
  function voltaTexto(event) {
    chooseTexto1.style.display = "block";
    chooseTexto2.style.display = "none";
    pointer1.classList.remove('pointer__inactive');
    pointer1.classList.add('pointer__active');
    pointer2.classList.remove('pointer__active');
    pointer2.classList.add('pointer__inactive');
  }  


//rolagem sessão o que usamos

function rolarCompetences(event){
    
    positionCompetences =  competences.getBoundingClientRect();
    positionCompetencesTop =  positionCompetences.top;

    if(positionCompetencesTop >= 0){
        direciona(event);
        if(direction>0){
            goUp(competences, 200);
            boxMovement();
            waitChoose = 0;
            
        } else{
            if(waitChoose == 1){
              choose.style.marginTop='0';
              competences.style.marginTop='100vh';
              box.style.display = "none";
              boxBefore.style.display = "none";
              boxAfter.style.display = "none";
              boxMovement();
              waitChoose = 0;
            } else {
              setTimeout(waitChooseFunction , 100)
            }
            
        }
    } else{
      direciona(event);
      if(direction>0){
        goUp(competences, 200);
        boxMovement();
        waitChoose = 0
        
      } else{
        goDown(competences, 200);
        boxMovement();
            } 
      }
}  


//rolagem sessão como fazemos

//IMAGEM DA CAIXA

  texto1.onmouseover = function(){
    box.style.backgroundColor = 'black';
    box.style.backgroundImage = 'url(assets/media/wordpress.gif)';
  }
  texto2.onmouseover = function(){
    box.style.backgroundImage = 'url(assets/media/ecommerce.gif)';
  }
  texto3.onmouseover = function(){
    box.style.backgroundImage = 'url(assets/media/languages.gif)';
    box.style.objectPosition = "center";
    box.style.objectFit = "cover";
    box.style.backgroundRepeat = 'no';
  }
  texto4.onmouseover = function(){
    box.style.backgroundImage = 'url(assets/media/wp.gif)';
  }
  texto5.onmouseover = function(){
    box.style.backgroundImage = 'url(assets/media/figma.gif)';
    box.style.objectPosition = "center";
    box.style.objectFit = "contain";
  }
  texto6.onmouseover = function(){
    box.style.backgroundColor = 'brown';
  }

  //MOVIMENTO DA CAIXA 

function boxMovement() {
    let boxCoordenadas = boxRight.getBoundingClientRect();
    let boxPositionTop = boxCoordenadas.top;
    let boxPositionBottom = boxCoordenadas.bottom;
    let linhaInferior = linha7.getBoundingClientRect();
    let linhaInferiorBottom = linhaInferior.bottom;
    let linhaSuperior = linha1.getBoundingClientRect();
    let linhaSuperiorTop = linhaSuperior.top;

    console.log(linhaSuperiorTop);

  
    if(linhaInferiorBottom <= 550){
      box.style.position="relative";
      box.style.marginTop="89vh";
      boxBefore.style.position="relative";
      boxBefore.style.marginTop="89vh";
      boxAfter.style.position="relative";
      boxAfter.style.marginTop="89vh";
    }else{
      if(linhaSuperiorTop>50){
        box.style.position="relative";
        box.style.marginTop="0";
        boxBefore.style.position="relative";
        boxBefore.style.marginTop="0";
        boxAfter.style.position="relative";
        boxAfter.style.marginTop="0";
      }
      else{
      box.style.position="sticky"
      box.style.marginTop="0px";
      boxBefore.style.position="sticky"
      boxBefore.style.marginTop="0";
      boxAfter.style.position="sticky"
      boxAfter.style.marginTop="0";
    }}
   

}  


// ---- Movimento lateral do texto no competences

function deslizar(){
  const itens = [linha1, texto1, pTexto1, tituloTexto1,
                 linha2, texto2, pTexto2, tituloTexto2,
                 linha3, texto3, pTexto3, tituloTexto3,
                 linha4, texto4, pTexto4, tituloTexto4,
                 linha5, texto5, pTexto5, tituloTexto5,
                 linha6, texto6, pTexto6, tituloTexto6,
                 linha7 ];

      function slide(item){
      let itemPosition =  item.getBoundingClientRect();
      let itemPositionTop =  itemPosition.top;
      
      if(itemPositionTop<=300){
        item.classList.add('mov1');
        item.classList.remove('mov2', 'mov3', 'mov4', 'mov5', 'mov6', 'mov7', 'mov8');
      }
      if(itemPositionTop >300 && itemPositionTop<=350){
        item.classList.add('mov2');
        item.classList.remove('mov1', 'mov3', 'mov4', 'mov5', 'mov6','mov7', 'mov8');
      }
      if(itemPositionTop >350 && itemPositionTop <=400){
        item.classList.add('mov3');
        item.classList.remove('mov1', 'mov2', 'mov4', 'mov5', 'mov6','mov7', 'mov8');
      }
      if(itemPositionTop >400 && itemPositionTop <=450){
        item.classList.add('mov4');
        item.classList.remove('mov1', 'mov2', 'mov3', 'mov5', 'mov6','mov7', 'mov8');
      }
      if(itemPositionTop >450 && itemPositionTop<=500){
        item.classList.add('mov5');
        item.classList.remove('mov1', 'mov2', 'mov3', 'mov4', 'mov6','mov7', 'mov8');
      }
      if(itemPositionTop >500){
        item.classList.add('mov6');
        item.classList.remove('mov1', 'mov2', 'mov3', 'mov4', 'mov5','mov7', 'mov8');
      }
      if(itemPositionTop >550){
        item.classList.add('mov7');
        item.classList.remove('mov1', 'mov2', 'mov3', 'mov4', 'mov5','mov6', 'mov8');
      }
      if(itemPositionTop >650){
        item.classList.add('mov8');
        item.classList.remove('mov1', 'mov2', 'mov3', 'mov4', 'mov5','mov6', 'mov7');
      }
      
    }  
    itens.forEach(slide) ;
  }

//------------SESSÃO LETTERBOX ----------
function rolarLetterbox(event){
  direciona(event);
  
  
      if(direction>0){
        goUp(competences, 150);
        
        
        
      } else{
        goDown(competences, 150);
        
            } 
  
      }
  


//----------SESSÃO HOW WE DO--------
function rolarHowWeDo(event){
  let howCoordenadas = howWeDo.getBoundingClientRect();
  let howPositionTop = howCoordenadas.top;
 
  direciona(event);
  if(howPositionTop>200 &&popUpAberto==0){
      if(direction>0){
        goUp(competences, 250);
        console.log(howPositionTop)
                
      } else{
        goDown(competences, 250);
        console.log(howPositionTop)
            } 
    } else{
      console.log('voltar zero = '+howPositionTop)
      position =  competences.getBoundingClientRect();
      
      positionTop =  position.top;
      up = positionTop-howPositionTop +'px';
      competences.style.marginTop= up;
      titleHowWeDo.style.fontSize = '50px';
      titleHowWeDo.style.paddingTop = '5vh';
      setTimeout(grow, 800);
      setTimeout(blink, 800);
      setTimeout(stopGira, 1000);
      setTimeout(changeBackground, 6500);
      portifolioPosition=0;
      if(direction>0 && howAnimation ==1 &&popUpAberto==0){
        if(countGira >=0 && countGira <9 &&popUpAberto==0){
            const bolas = [b1,b2,b3,b4,b5,b6,b7,b8,b9,b10];
            bolas.forEach(giraHorario); 
            console.log(waitGira);
            if(waitBox == 0 ){
              waitBox ++;
              setTimeout(mudaWaitBox, 750);
              countGira ++;
              howBox();
            }
        }else{
          if(countGira == 9 && waitBox ==0 && popUpAberto ==0){
          goUp(competences, 250);
          
          
          
        } }     
        
      } else{
          if(countGira >0 && countGira <10 && howAnimation ==1 && popUpAberto ==0){
            const bolas = [b1,b2,b3,b4,b5,b6,b7,b8,b9,b10];
            bolas.forEach(giraAntHorario);
            console.log(waitGira);
            if(waitBox == 0 && popUpAberto==0){
              waitBox ++;
              setTimeout(mudaWaitBox, 750);
              countGira --;
              howBox();
            }
          } else
            if(howAnimation==1 && countGira == 0 && waitBox ==0 &&popUpAberto==0){
            goDown(competences, 250);
          }  
       }
        
    }

}

function stopDefault(event){
  console.log("clicou popup")
}
function stopGira(){
    let bola = document.getElementById("howdowedo__ball");
    bola.classList.remove('howdowedo__front__img');
    bola.classList.add('howdowedo__front__img__stop');
};






//------------------SESSÃO PORTIFOLIO

function pausaAnimacao(e){
  if(espera == 1){
  console.log(e);
  switch (e){
    case 'modelo1':
      boxPortifolio.style.display='none';
      imagemPortifolio01L.style.display='grid'
      console.log(e);
    break
    case 'modelo2':
      boxPortifolio.style.display='none';
      imagemPortifolio02L.style.display='grid'
      console.log(e);
    break
    case 'modelo3':
      boxPortifolio.style.display='none';
      imagemPortifolio03L.style.display='grid'
      console.log(e);
    break
    case 'modelo4':
      boxPortifolio.style.display='none';
      imagemPortifolio04L.style.display='grid'
      console.log(e);
    break
    case 'modelo5':
      boxPortifolio.style.display='none';
      imagemPortifolio05L.style.display='grid'
      console.log(e);
    break
    case 'modelo6':
      boxPortifolio.style.display='none';
      imagemPortifolio06L.style.display='grid'
      console.log(e);
    break
    case 'modelo7':
      boxPortifolio.style.display='none';
      imagemPortifolio07L.style.display='grid'
      console.log(e);
    break
    case 'modelo8':
      boxPortifolio.style.display='none';
      imagemPortifolio08L.style.display='grid'
      console.log(e);
    break
  }  
}}

function mostraPortifolio(){
  console.log('tirou o mouse')
  boxPortifolio.style.display='block';
  imagemPortifolio01L.style.display='none';
  imagemPortifolio02L.style.display='none';
  imagemPortifolio03L.style.display='none';
  imagemPortifolio04L.style.display='none';
  imagemPortifolio05L.style.display='none';
  imagemPortifolio06L.style.display='none';
  imagemPortifolio07L.style.display='none';
  imagemPortifolio08L.style.display='none';
  espera = 0;
  setTimeout(mudaEspera, 50);

}


function rolarPortifolio(event){
  let portifolioCoordenadas = portifolio.getBoundingClientRect();
  let portifolioTop = portifolioCoordenadas.top;

  if(portifolioTop<=0 && portifolioPosition == 0){
    goUp(competences, portifolioTop);
    console.log(portifolioPosition) ;
    setTimeout(trocaPortifolioPosition, 500);
  }else{
    direciona(event);
        if(direction>0){
          goUp(competences, 150);
          
          
          
        } else{
          goDown(competences, 150);
          
              } }
}



//-------------SESSÃO O QUE FAZEMOS

function rolarContainerHorizontal(event){
  direciona(event);
  let lastItemPosition = lastItem.getBoundingClientRect();
  let lastItemPositionRight = lastItemPosition.right;
  let firstItemPosition = containerHorizontal.getBoundingClientRect();
  let fistItemPositionLeft = firstItemPosition.left;
  console.log('margem esquerda '+fistItemPositionLeft);
  
  if(direction>0 && lastItemPositionRight>1650){
    goLeft(containerHorizontal, 350);
    
     
    
  } else{ if(direction<0 && fistItemPositionLeft<=50){
    goRight(containerHorizontal, 350);
  }
    
      } 
}

function rolaroQueFazemos(event){
  direciona(event);
  if(direction>0){
    goUp(competences, 120);
    
    
    
  } else{
    goDown(competences, 120);
    
        }
}
//-------------------------------funções em geral-------------------------------------

//direciona scroll
function mudaEspera(){
  espera = 1;
}

function direciona(event){
    direction = event.deltaY
    
   
}

function grow() {
    let raio1 = document.getElementById('raio1');
    let raio2 = document.getElementById('raio2');
    let raio3 = document.getElementById('raio3');
    let raio4 = document.getElementById('raio4');
    let raio5 = document.getElementById('raioaro');
    let raio6 = document.getElementById('raioaro1');

    raio1.classList.add('animate__raio');
    raio2.classList.add('animate__raio');
    raio3.classList.add('animate__raio');
    raio4.classList.add('animate__raio');
    raio5.classList.add('animate__raio');
    raio6.classList.add('animate__raio');

    raio1.classList.remove('raio');
    raio2.classList.remove('raio');
    raio3.classList.remove('raio');
    raio4.classList.remove('raio');
    raio5.classList.remove('raio');
    raio6.classList.remove('raio');

  }
  function blink() {
    let container = document.getElementById('howDoWeDoCont');
    let fundoHow1 = document.getElementById('fundoHow1');
    container.classList.add('animate__how_we_do_container');
    fundoHow1.classList.add('animate__fundo__how1');
     

  }
  function changeBackground() {
    let how1 = document.getElementById('how1');
    let fundoHow1 = document.getElementById('fundoHow1');
    let howInf = document.getElementById('howInf');
    let howEng = document.getElementById('howEng');
    fundoHow1.style.background="none";
    how1.style.display='none';
    b1.classList.remove('ball__none');
    b2.classList.remove('ball__none');
    b3.classList.remove('ball__none');
    b4.classList.remove('ball__none');
    b5.classList.remove('ball__none');
    b6.classList.remove('ball__none');
    b7.classList.remove('ball__none');
    b8.classList.remove('ball__none');
    b9.classList.remove('ball__none');
    b10.classList.remove('ball__none');
    howInf.classList.remove('ball__none');
    howEng.classList.remove('ball__none');
    howAnimation = 1;
    

  }



//rola tela
function goUp (sessao , x){
    position =  sessao.getBoundingClientRect();
    positionTop =  position.top;
    up = positionTop-x +'px';
    sessao.style.marginTop=up;
}
function goDown (sessao , x){
    position =  sessao.getBoundingClientRect();
    positionTop =  position.top;
    up = positionTop+x +'px';
    sessao.style.marginTop=up;
}
function goLeft (sessao , x){
  position =  sessao.getBoundingClientRect();
  positionLeft =  position.left;
  up = positionLeft-x +'px';
  sessao.style.marginLeft=up;
}
function goRight (sessao , x){
  position =  sessao.getBoundingClientRect();
  positionLeft =  position.left;
  up = positionLeft+x +'px';
  sessao.style.marginLeft=up;
}
function giraAntHorario(item){
  if(waitGira < 10 && popUpAberto ==0){
  classe = item.classList[1]
  setTimeout(mudaWaitGira, 750);

 
  switch (classe){
    case 'ball1':
      item.classList.remove('ball1');
      item.classList.add('ball2');
      waitGira++;
      
    break
    case 'ball2':
      item.classList.remove('ball2');
      item.classList.add('ball3');
      waitGira++;
      
    break
    case 'ball3':
      item.classList.remove('ball3');
      item.classList.add('ball4');
      waitGira++;
      
    break
    case 'ball4':
      item.classList.remove('ball4');
      item.classList.add('ball5');
      waitGira++;
      
    break
    case 'ball5':
      item.classList.remove('ball5');
      item.classList.add('ball6');
      waitGira++;
      
    break
    case 'ball6':
      item.classList.remove('ball6');
      item.classList.add('ball7');
      waitGira++;
      
    break
    case 'ball7':
      item.classList.remove('ball7');
      item.classList.add('ball8');
      waitGira++;
      
    break
    case 'ball8':
      item.classList.remove('ball8');
      item.classList.add('ball9');
      waitGira++;
      
    break
    case 'ball9':
      item.classList.remove('ball9');
      item.classList.add('ball10');
      waitGira++;
      
    break
    case 'ball10':
      item.classList.remove('ball10');
      item.classList.add('ball1');
      waitGira++;
      
    break
  }
  }     
     
    
  }
  function giraHorario(item){
    if(waitGira < 10 && popUpAberto ==0){
    classe = item.classList[1]
    setTimeout(mudaWaitGira, 750);

   
    switch (classe){
      case 'ball1':
        item.classList.remove('ball1');
        item.classList.add('ball10');
        waitGira++;
        
      break
      case 'ball2':
        item.classList.remove('ball2');
        item.classList.add('ball1');
        waitGira++;
        
      break
      case 'ball3':
        item.classList.remove('ball3');
        item.classList.add('ball2');
        waitGira++;
        
      break
      case 'ball4':
        item.classList.remove('ball4');
        item.classList.add('ball3');
        waitGira++;
        
      break
      case 'ball5':
        item.classList.remove('ball5');
        item.classList.add('ball4');
        waitGira++;
        
      break
      case 'ball6':
        item.classList.remove('ball6');
        item.classList.add('ball5');
        waitGira++;
        
      break
      case 'ball7':
        item.classList.remove('ball7');
        item.classList.add('ball6');
        waitGira++;
        
      break
      case 'ball8':
        item.classList.remove('ball8');
        item.classList.add('ball7');
        waitGira++;
        
      break
      case 'ball9':
        item.classList.remove('ball9');
        item.classList.add('ball8');
        waitGira++;
        
      break
      case 'ball10':
        item.classList.remove('ball10');
        item.classList.add('ball9');
        waitGira++;
        
      break
    }
    } 
    }

    function howBox(){
      if(popUpAberto == 0){
      console.log('chamou howBox countGira='+countGira);
      switch (countGira){
        case 0:
          i10.style.display='none';
          i01.style.display='block';
          i02.style.display='none';
          console.log('posição 00');
        break
        case 1:
          i01.style.display='none';
          i02.style.display='block';
          i03.style.display='none';
          console.log('posição 01');
        break
        case 2:
          i02.style.display='none';
          i03.style.display='block';
          i04.style.display='none';
          console.log('posição 02');
        break
        case 3:
          i03.style.display='none';
          i04.style.display='block';
          i05.style.display='none';
          console.log('posição 03');
        break
        case 4:
          i04.style.display='none';
          i05.style.display='block';
          i06.style.display='none';
          console.log('posição 04');
          
        break
        case 5:
          i05.style.display='none';
          i06.style.display='block';
          i07.style.display='none';
          console.log('posição 05');
        break
        case 6:
          i06.style.display='none';
          i07.style.display='block';
          i08.style.display='none';
          console.log('posição 06');
        break
        case 7:
          i07.style.display='none';
          i08.style.display='block';
          i09.style.display='none';
          console.log('posição 07');
        break
        case 8:
          i08.style.display='none';
          i09.style.display='block';
          i10.style.display='none';
          console.log('posição 08');
        break
        case 9:
          i09.style.display='none';
          i10.style.display='block';
          i01.style.display='none';
          console.log('posição 09');
        break
        case 10:
          i10.style.display='none';
          i01.style.display='block';
          i02.style.display='none';
          console.log('posição 10');
        break
      }
    }  }
 ;


openPopup.addEventListener("click", function() {

      switch (countGira){
        case 0:
          pop1.style.display='block';
          popUpFundo.style.display='block';
          popUpAberto = 1;
          console.log('popUp 01');
        break
        case 1:
          pop2.style.display='block';
          popUpFundo.style.display='block';
          popUpAberto = 1;
          console.log('popUp 02');
        break
        case 2:
          pop3.style.display='block';
          popUpFundo.style.display='block';
          popUpAberto = 1;
          console.log('popUp 03');
        break
        case 3:
          pop4.style.display='block';
          popUpFundo.style.display='block';
          popUpAberto = 1;
          console.log('popUp 04');
        break
        case 4:
          pop5.style.display='block';
          popUpFundo.style.display='block';
          popUpAberto = 1;
          console.log('popUp 05');
        break
        case 5:
          pop6.style.display='block';
          popUpFundo.style.display='block';
          popUpAberto = 1;
          console.log('popUp 06');
        break
        case 6:
          pop7.style.display='block';
          popUpFundo.style.display='block';
          popUpAberto = 1;
          console.log('popUp 07');
        break
        case 7:
          pop8.style.display='block';
          popUpFundo.style.display='block';
          popUpAberto = 1;
          console.log('popUp 08');
        break
        case 8:
          pop9.style.display='block';
          popUpFundo.style.display='block';
          popUpAberto = 1;
          console.log('popUp 09');
        break
        case 9:
          pop10.style.display='block';
          popUpFundo.style.display='block';
          popUpAberto = 1;
          console.log('popUp 10');
        break
      
      }
    document.body.style.overflow = "hidden"; // Impede a rolagem da página de fundo
});


    function howPopup(){
      
    }  
    function closePopup(){
      popUpAberto = 0;
      popUpFundo.style.display='none';
      pop1.style.display='none';
      pop2.style.display='none';
      pop3.style.display='none';
      pop4.style.display='none';
      pop5.style.display='none';
      pop6.style.display='none';
      pop7.style.display='none';
      pop8.style.display='none';
      pop9.style.display='none';
      pop10.style.display='none';
    }
   
//-----mostrar / esconder

//mostrar texto o que usamos
function mostrarTexto(){
    competencesTextTitle.classList.add('slide_up');
    competencesTitle.classList.add('slide_up');
    setTimeout(waitTextSlide, 1000);   
};
   



//---- Funções de Espera
function waitTransitionFunction(){
    if(waitTransition <2){
    let i = waitTransition;
    waitTransition = i + 1;
    
    } else { waitTransition = 0;
      }
}
function waitTransitionSubFunction(){
  if(waitTransition <3){
  let i = waitTransition;
  waitTransition = i - 1;
  
  } else { waitTransition = 0;
    }
}
function waitTextSlide(){
    waitText = 1
}

function waitChooseFunction(){
  waitChoose = 1;
}

function mudaWaitGira(){
  waitGira = 0;
}

function mudaWaitBox(){
  waitBox = 0;
}
function trocaPortifolioPosition(){
  portifolioPosition =1;
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
  
  