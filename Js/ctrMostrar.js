import {
getAuth,getFirestore
}from"/Js/fabrica.js";

const lista =  document, querySelector("#lista");
const daoSecuencia= getFirestore().collection("Secuencia");
function consulta(){
daoSecuencia.orderBy("nombre").onSnapshot(htmllista,errConsulta);
  
}
function htmllista(snap){
let html="";
  if(snap.size>0){
  snap.forEach(doc => html+=htmlFila(doc));
  }else {
  html += `<li class="vacio">--No hay secuencias --</li>`;   
  }
  lista.innerHTML = html;

}
function htmlFila(doc){
const data =  doc.data();
  const secuencia = cod(data.secuencia);
  const nombre = cod(data.nombre);
  const prof = cod(data.prof);
  const salon = cod(data.salon);
  const plata = cod(data.plata);
  var espacio = "[   -   ]";
  const parametros = new URLSearchParams();
  parametros.append("id",doc.id);
  return(`<li><a class="fila" href="edit.html?${parametros}">
  <strong class="primario"> ${secuencia} ${nombre} ${prof} ${salon} ${plata}</strong>
  </a></li>`);

}
