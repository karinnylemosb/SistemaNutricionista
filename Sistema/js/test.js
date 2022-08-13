/**
 * Validar se o email informado é valido
 * @param {String} email 
 */

 function validarEmail(email)
 {
  var regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
  if (regex.test(email)){
  return true; }
  else{
  return false;
  }
 } 
 
 /**
  * Cadastrar o usuario no BD
  * @param {String} name 
  * @param {String} email 
  */
 function createUser(name, email) {  
   if (validarEmail(email)) {
     createUserInDatabase(name, email);
   } else {
     console.log("Email informado está inválido")
   }
 }
 