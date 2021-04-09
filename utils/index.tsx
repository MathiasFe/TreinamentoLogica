import React from 'react';

export  const firstLetterToUpper = function(string:string){
  return string.substring(0, 1).toUpperCase() + string.substring(1);
}

export const getIdade =  function(nascimento:Date,hoje:Date){
  let idade = (hoje.getFullYear()) - (nascimento.getFullYear());
  let mesHoje = hoje.getMonth();
  let mesNascimento = nascimento.getMonth();
  let diaHoje = hoje.getDay();
  let diaNascimento = nascimento.getDay();

  if (mesHoje < mesNascimento)
    idade--;
  else if ( mesHoje === mesNascimento && diaHoje < diaNascimento)
    idade--;

  return idade;
}