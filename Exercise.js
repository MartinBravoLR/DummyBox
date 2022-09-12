////Exercises of makeitrealcamp-ejercicios-javascript

///Contraseña / Rango valido
let nivel="C1"
let acceso;

function EnglishValidator(nivel,acceso){
    if(nivel==="C1"){
         acceso=true;
        console.log(acceso);
        }
    else if(nivel==="B1"){//| nivel==="B2");{
         acceso=false;
        console.log(acceso)

    }else{
        acceso=false;
        console.log(acceso)

    }
}
EnglishValidator(nivel);