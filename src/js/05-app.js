//REEMPLAZAR UN TEXTO EN UNA CADENA
const producto= 'Monitor 20 pulgadas';
console.log(producto);
//.REPLACE PARA REEMPLAZAR
console.log(producto.replace('pulgadas','"'));
console.log(producto.replace('Monitor','Monitor Curvo'));

//.SLIDE PARA CORTAR
//LE TENES QUE INDICAR CUANDO INICIA Y CUANDO QUERES CORTAR
//EJEMPLO QUE COMIENCE EN EL 0 Y TERMINE EN EL CARACTER 1O
console.log(producto.slice(0,10))
//QUE INICIE EN EL CARACTER 8 HASTA EL FINAL
console.log(producto.slice(8));

//ALTERNATIVA A SLICE
console.log(producto.substring(0,10));
//ARRANCA EN LA POSICION 0 Y TERMINA EN LA 1 TE RETORNA UN CARACTER
const usuario = 'Juan';
console.log(usuario.substring(0,1));
//OTRA ALTERNATIVA ES EL .charAt MAS CORTA
console.log(producto.charAt(0));
