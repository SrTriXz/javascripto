function verificar(edad){



    if (edad === 18){

        console.log("FELICIDADES PUEDES VOTAR")

    }

    else if(edad > 18){

        console.log("NO ES TU PRIMERA VEZ VOTANDO")
    }

    else{

        console.log("LOSIENTOMUCHO, PERO NO PUEDES VOTAR")
    }


}



console.log(verificar(11))