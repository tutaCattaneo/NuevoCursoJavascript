
//CONCATENAR UN STRING SIN EL TEMPLATE
const producto1 = 'Monitor 20 pulgadas';
const producto2 = 'Televisor con play 5';

console.log(producto1 + producto2);
//CONCATENAR UN STRING CON EL TEMPLATE STRING
//Es mas eficiente usar un template string y mas limpio de leer
console.log(`El ${producto1} y el ${producto2}`)
//CON LA PALABRA CONCAT CONCATENO LOS DOS STRINGS
console.log(producto1.concat(producto2))
//OTRA FORMA
console.log(producto1.concat('EN DESCUENTO'))
//SE PUEDE CONCATENAR CON UNA COMA 
console.log(producto1,producto2)