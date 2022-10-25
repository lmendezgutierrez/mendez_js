

//Nombre de usuario
let nombreUsuario = prompt("Ingrese su nombre de usuario");
    alert ("Bienvenido "+ nombreUsuario);

//edad del usuario
let edad = prompt("Ingrese su edad");
    alert (edad +" Has ingresado con éxito");

//cantidad de productos

let pedido = prompt("Ingrese su pedido 1-6uds 6-12uds 12-18uds" );

if (pedido >=1 && pedido <6){
    alert("Estamos procesando tu pedido, te recordamos que por compras mayor a 6 unidades recibirás un descuento especial sobre el valor de tu compra!");

} else if (pedido >=6 && pedido <12) {
    alert("Estamos procesando tu pedido, por tu compra has obtenido un descuento especial del 5% sobre el valor de tu compra!");

} else if (pedido >=12 && pedido <18) {
    alert("Estamos procesando tu pedido, por tu compra has obtenido un descuento especial del 10% sobre el valor de tu compra!");

} else {
    alert ("Esperamos que regreses pronto!")
}

//aplicando While

let tiempo = 0;
while (tiempo <10){
    alert("Ahora tu despacho estará en " + tiempo);
    console.log("Despacho " + tiempo);
    tiempo= tiempo +1;
}


//switch

let dulcePostre = Number(prompt("Ingrese el postre que desea llevar en números 1:Lemon Glass 2:Roles de Canela 3:Cookie de Chocolate"));

switch(dulcePostre) {
    case 1:
        alert ("Lemon Glass");
        break;
    case 2:
        alert ("Roles de Canela");
        break;
    case 3:
        alert ("Cookie de Chocolate");
        break;
    default:
        console.log ("Ese producto no existe");
        break;            
}