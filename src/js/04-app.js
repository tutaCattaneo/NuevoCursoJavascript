//ELIMINAR EL ESPACIO EN BLANCO AL INICIO Y AL FINAL
//LOS ESPACIOS EN BLANCO SON CONSIDERADOS ESPACIOS EN BLANCO Y OCUPAN LUGAR EN UNA CADENA DE TEXTO
const producto= '           monitor           ';
console.log(producto.length);
//ELIMINAR EL ESPACIO EN BLANCO DEL INICIO
/*
  PUEDE SERVIR PARA UNA VALIDACION EN ALGUN FORMULARIO PARA SACAR LOS ESPACIOS EN BLANCO
*/
console.log(producto.trimStart());
/*
 ELIMINAR LOS ESPACIOS EN BLANCO AL FINAL DE LA CADENA
*/
console.log(producto.trimEnd());
//SE PUEDE HACER ESTO
console.log(producto.trimStart().trimEnd());
//OTRA FORMA ELIMINAR EN AMBAS DIRECCIONES
console.log(producto.trim())
//trimEnd, trimStart y trim son metodos llevan () al final
