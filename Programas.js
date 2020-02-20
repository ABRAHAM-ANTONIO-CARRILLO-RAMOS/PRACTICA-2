function factorizar (n) {
  var total = 1; 
  for (i=1; i<=n; i++) {
    total = total * i; 
  }
  return total;
}
function funcion1()
{
  let e=1;
  let repeticion = Number(prompt("Digite un numero: "));
  for(let i=1;i<=repeticion;i++)
  {
    e+=Math.pow(repeticion,i)/factorizar(i);
  }
  console.log(e);
}
funcion1();
function funcion2()
{
  let e=1;
  let repeticion = Number(prompt("Digite un numero: "));
  for(let i=1;i<=repeticion;i++)
  {
    e+=1/factorizar(i);
  }
  console.log(e);
}
funcion2();
