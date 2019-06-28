angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
(function(){

  var ModTab = document.querySelectorAll(".buttons > a"),
    rgLink = document.querySelector("span + a"),
    showModal = document.getElementsByClassName("session"),
    Modal = document.querySelector(".modalogin"),
    submitbtn = document.querySelectorAll(".ui_submitbtn");
    

  function ShowfunctionDawud(e) {
    e.preventDefault();
    
    /*Función que se ejecuta al terminar la transicion*/
    function myEndFunction(e) {
      var thisDiv = this.parentNode,
      formheight = this.parentNode.parentNode;        

      /* Comprueba si contiene la clase active el elemento div inicio de sesión el cual si no muestra el sesión rápida*/
      if(this.classList.contains('active')){

        //Oculta el modulo de inicio de sesión y muestra el sesion rápido
        this.classList.remove('active');          
        this.classList.add('hide');
        thisDiv = thisDiv.children[2];  
        thisDiv.classList.remove('hide');
        formheight.style.minHeight="361px";            // establece el ancho del elemento form 
                
        setTimeout( () => { thisDiv.classList.add('visible','active'); },200); 
      
      } else {

        //Oculta el modulo de sesión rápida y muestra el inicio de sesión
        this.classList.remove('active');
        this.classList.add('hide');
        thisDiv = thisDiv.children[0];
        thisDiv.classList.remove('hide');       
        formheight.style.minHeight="261px";         // Establece el ancho del elemento form
        // formheight.style.backgroundColor="yellow";   // Solo para definir que fue seleccionado
        
        setTimeout(() => { thisDiv.classList.add('visible',"active"); },200);
         
      }// Endelse 

      /*Eliminamos el eventos para no generar conflictos del transition*/
      this.removeEventListener("transitionend", myEndFunction  ); 
      this.removeEventListener("webkitTransitionEnd", myEndFunction); 
    }// End fuction myEndFunction
    
    var tabform = this.parentNode.parentNode.children[1];

    if(this.getAttribute( "data-sesion" ) === "2"  || this.dataset.sesion === "2"){
      
      tabform = tabform.children[0];        // Se define a la variable el primer hijo[0] de la clase formContent
            
      //Evita el llamado del evento comprobando si contiene la clase
      if(tabform.classList.contains('active')){
        tabform.classList.remove('visible');
        tabform.addEventListener("transitionend", myEndFunction  ); // Función transition. Espera que termine el objeto en transition 
        tabform.addEventListener("webkitTransitionEnd", myEndFunction); // para ejecutar la función continua;
      } else {

          /*En caso contrario de no contener la clase se asigna la nueva ruta a la variable tabform  y se comprueba si existe la clase active */

          tabform = tabform.parentNode.children[2];

          if(!tabform.classList.contains("active")){
            // alert("Sesion rápida "+tabform.getAttribute("class"));

            tabform = tabform.previousElementSibling;             // Definimos la variable estableciendo el anterior elemnto hermano
            tabform.classList.remove('visible',"active");

            var formheight = tabform.parentNode.parentNode;             // Retorna al elemento form

            setTimeout(function() {                     //Esperamo que termine la transition .3s = 300  

              tabform.classList.add('hide');                // oculta el tabIndex 1
              formheight.style.minHeight="261px";             // Establece el ancho al elemento form        
              tabform.parentNode.children[2].classList.remove('hide');  // Remueve la clase del segundo elemento de la clase formContent

              setTimeout(function() {
                tabform.parentNode.children[2].classList.add('visible','active');   
              },200); // se espera un 200ms, posteriormente se agrega las clases 
            },300); 
            }

        }//end else
    }else{
      

      tabform = tabform.lastElementChild;       // Selecciona el ultimo hijo
      // tabform = tabform.children[2];     // Realiza igual a la línea anterior solo que definiendo el hijo
      
      
      // Evita el llamado del evento comprobando si conttiene la clase
      if(tabform.classList.contains('active')){ 
        tabform.classList.remove('visible',"active");
        tabform.addEventListener("transitionend", myEndFunction);
        tabform.addEventListener("webkitTransitionEnd", myEndFunction); }
        
        else{
          /*En caso contrario de no contener la clase se asigna la nueva ruta a la variable tabform  y se comprueba
          si existe la clase active */
          tabform = tabform.parentNode.children[0];
          if(!tabform.classList.contains("active")){
            // alert("Inicio por correo "+tabform.getAttribute("class"));

            tabform = tabform.nextElementSibling;               // Definimos la variable estableciendo el siguiente elemnto hermano
            tabform.classList.remove('visible',"active");

            var formheight = tabform.parentNode.parentNode;             // Retorna al elemento form

            setTimeout(function() {                     //Esperamo que termine la transition .3s = 300  

              tabform.classList.add('hide');                // oculta el tabIndex 1
              // formheight.style.backgroundColor="green";          // Para observar el cambio efectivo
              formheight.style.minHeight="261px";             // Establece el ancho al elemento form        
              tabform.parentNode.children[0].classList.remove('hide');  // Remueve la clase del segundo elemento de la clase formContent

              setTimeout(function() {
                tabform.parentNode.children[0].classList.add('visible','active');   
              },200); // se espera un 200ms, posteriormente se agrega las clases 
            },300); 
          }
        }         
    }// Endelse_main    
  }//end ShowfunctionDawud


  function ShowfunctionDawud02(e) {

    if(e.target.dataset.login === "registrarse"){
      
      tabform = e.target.parentNode.parentNode.children[1].children[1].children.item(0); // seleccionamos el primer hijo de la clase formContent
      var formheight = tabform.parentNode.parentNode;                   // Retorna al elemento form
      tabform.classList.remove('visible','active');                 // Remueve las clases para el elemento 1
      tabform.parentNode.lastElementChild.classList.remove('visible','active');   // Remueve las clases para el elemento 3

      setTimeout(function (argument) {                //Esperamo que termine la transition .3s = 300

        tabform.classList.add('hide');                // oculta el tabIndex 1
        tabform.parentNode.lastElementChild.classList.add("hide");  // oculta el tabIndex 3
        formheight.style.minHeight="360px";             // Establece el ancho al elemento form        
        tabform.nextElementSibling.classList.remove('hide');    //Remueve la clase del segundo elemento de la clase formContent

        setTimeout(function() {
          tabform.nextElementSibling.classList.add('visible','active');   
        },200); // se espera un 200ms, posteriormente se agrega las clases 
      },300); 

    }//end if     
  }

  function ShowModalDAwud(e) {
    e.stopPropagation();
    var ruta = "", fig = "";
    if(e.target.nodeName === "IMG") {
      ruta = e.target.src;
      fig = e.target.nextElementSibling.textContent;
    } else {
        if(e.target.nodeName === "FIGCAPTION") {
          ruta = e.target.previousElementSibling.src;
          fig = e.target.textContent;
        }
      }
    var moImg = document.querySelector(".contentModal .ui_card figure");
    moImg.children[0].src = ruta;
    moImg.children[1].textContent = fig;
    Modal.classList.add("show");
  }
  function ShowfunctionDawud03(e) {
    e.stopPropagation();
    alert("Bienvenido .... Realizado por @gersondani2001");
  }

  for (var i = 0; i < ModTab.length; i++) {
    ModTab[i].addEventListener("click", ShowfunctionDawud);
  }

  for (var i = 0; i < showModal.length; i++) {
    showModal[i].addEventListener("click", ShowModalDAwud);
  }
  
  rgLink.addEventListener("click", ShowfunctionDawud02);  
  submitbtn[2].addEventListener("click", ShowfunctionDawud03);
    
})("docReady", window);






})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})


.controller('loginCtrl',function($scope, $rootScope, $http){


  $rootScope.poke = [];


  for(let i = 1; i < 800; i++){
    $http({
      method:"GET",
      url:'https://pokeapi.co/api/v2/pokemon/'+i+'/'
    }).then((lib) => {
      $rootScope.poke.push(lib);

      if(i>= 1 && i<10){
        lib.data.sprites.front_default = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/00'+i+'.png';
      } if(i>9 && i<100){
        lib.data.sprites.front_default = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/0'+i+'.png';
      } if(i>99 && i<800){
        lib.data.sprites.front_default = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'+i+'.png';
      }

      console.log(lib);
    });
  };
});


