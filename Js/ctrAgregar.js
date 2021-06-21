import {
getAuth,getFirestore
}from "fabrica.js";


 const daoSecuencia = getFirestore().collection("Secuencia");
      const forma=  document["forma"];

async function guarda(evt){
	try {
const formData = new FormData(forma);
  const nombre = getString(formData,"nombre").trim();
  const secuencia = getString(formData,"secuencia").trim();
  const prof = getString(formData,"profesor").trim();
  const salon = getString(formData,"salon").trim();
  const plata = getString(formData,"plataforma").trim();

  const modelo = {nombre,secuencia,profesor,salon,plataforma};

  const refNuevoDoc = await daoSecuencia.add(modelo);
 
	
console.log(refNuevoDoc.id);	
		

}catch (e){
	muestraError(e);
}
}
                                               
