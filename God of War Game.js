function Jugador( nombre ) {
    this.nombre = nombre;
    this.vida = 100;
    this.poder = 100;

    this.curar = function( jugadorObjetivo ){
        if( this.poder >= 40 ){
            this.poder -= 40;
            jugadorObjetivo.vida += 20;
        }else{
        console.error("😱 Ohhh " + this.nombre + " No tiene más poder" );
        } 

        this.estado( jugadorObjetivo );
    }

    this.lanzarHacha = function( jugadorObjetivo ){
        if( jugadorObjetivo.vida > 40 ){
            jugadorObjetivo.vida -= 40;
            
        }else{
            jugadorObjetivo.vida = 0
            jugadorObjetivo.poder = 0
            console.error(jugadorObjetivo.nombre + " Murio 🪦")
        }

        this.estado( jugadorObjetivo );
    }


    /* Funcion que imprime los estados */ 
    
    this.estado = function( jugadorObjetivo ){
            console.log("Estado del juego:")
            console.log( this );
            console.log( jugadorObjetivo );

        }
};


var kratos = new Jugador("Kratos");
var atreus = new Jugador("Atreus");

// estado inicial de los jugadores 

console.log("Estado inicial de los jugadores")

console.log( kratos );
console.log( atreus );



// ---------------- Acciones in game   ------------
atreus.curar( kratos )







/*
Resultado de las acciones:

console.log("Resultado de las acciones")
console.log( kratos );
console.log ( atreus );


Ataques:
kratos.lanzarHacha( atreus )
atreus.lanzarHacha ( kratos )

*/




