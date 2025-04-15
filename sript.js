
document.getElementById("btn__register").addEventListener("click", register); // Agregar evento al botón de registro
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion); // Agregar evento al botón de inicio de sesión
window.addEventListener("resize", anchoPagina); // Agregar evento al redimensionar la ventana

/*Declarando variables*/
var contenedor_login_register = document.querySelector (".contenedor_login-register");
var fomulario_login = document.querySelector (".formulario__login");
var formulario_register = document.querySelector (".formulario__register"); 
var caja_trasera_login = document.querySelector (".caja__trasera-login");
var caja_trasera_register= document.querySelector (".caja__trasera-register"); 

function register(){
    if(window.innerWidth > 850){ // Verificar el ancho de la ventana
    formulario_register.style.display = "block"; // Mostrar el formulario de registro
    contenedor_login_register.style.left = "410px"; // Desplazar el contenedor a la derecha
    fomulario_login.style.display = "none"; // Ocultar el formulario de inicio de sesión
    caja_trasera_register.style.opacity = "0"; // Aumentar la opacidad de la caja trasera de registro   
    caja_trasera_login.style.opacity = "1"; // Disminuir la opacidad de la caja trasera de inicio de sesión
}
    else{ // Si la ventana es menor a 850px 
        formulario_register.style.display = "block"; // Mostrar el formulario de registro
        contenedor_login_register.style.left = "0px";   // Desplazar el contenedor a la izquierda
        fomulario_login.style.display = "none"; // Ocultar el formulario de inicio de sesión
        caja_trasera_register.style.display = "none"; // Ocultar la caja trasera de registro
        caja_trasera_login.style.opacity = "1"; // Aumentar la opacidad de la caja trasera de inicio de sesión
        caja_trasera_login.sytyle.display = "block"; // Mostrar la caja trasera de inicio de sesión
    }        
}

function iniciarSesion(){
    if(window.innerWidth > 850){ // Verificar el ancho de la ventana    

    formulario_register.style.display = "none";
    contenedor_login_register.style.left = "10px"; 
    fomulario_login.style.display = "block"; 
    caja_trasera_register.style.opacity = "1";   
    caja_trasera_login.style.opacity = "0";}
    else{
        formulario_register.style.display = "none"; // Ocultar el formulario de registro
        contenedor_login_register.style.left = "0px"; // Desplazar el contenedor a la izquierda
        fomulario_login.style.display = "block"; // Mostrar el formulario de inicio de sesión
        caja_trasera_register.style.display = "block"; // Mostrar la caja trasera de registro
        caja_trasera_login.style.display = "none"; // Ocultar la caja trasera de inicio de sesión
    }
}

function anchoPagina(){
    if(window.innerWidth > 850){ // Verificar el ancho de la ventana
        caja_trasera_register.style.display = "block"; // Mostrar la caja trasera de registro
        caja_trasera_login.style.display = "block"; // Ocultar la caja trasera de inicio de sesión
    }else{
        caja_trasera_register.style.opacity = "1";    
        caja_trasera_login.style.display = "block"; // Mostrar la caja trasera de inicio de sesión
        caja_trasera_login.style.display = "none"; // Ocultar la caja trasera de inicio de sesión
        fomulario_login.style.display = "block"; // Mostrar el formulario de inicio de sesión
        formulario_register.style.display = "none"; // Ocultar el formulario de registro
        contenedor_login_register.style.left = "0px"; // Desplazar el contenedor a la izquierda
    }
}

anchoPagina(); // Llamar a la función al cargar la página