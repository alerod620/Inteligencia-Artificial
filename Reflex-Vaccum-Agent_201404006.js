class Estado{
    constructor(locacion, A_estado, B_estado, utilizado){
        this.locacion = locacion;
        this.A_estado = A_estado;
        this.B_estado = B_estado;
        this.utilizado = utilizado;
        this.visita = 0;
    }
}

let s0 = new Estado("A","DIRTY","DIRTY",false);
let s1 = new Estado("A","DIRTY","CLEAN",false);
let s2 = new Estado("A","CLEAN","DIRTY",false);
let s3 = new Estado("A","CLEAN","CLEAN",false);
let s4 = new Estado("B","DIRTY","DIRTY",false);
let s5 = new Estado("B","DIRTY","CLEAN",false);
let s6 = new Estado("B","CLEAN","DIRTY",false);
let s7 = new Estado("B","CLEAN","CLEAN",false);

let estados = new Array();
estados.push(s0);
estados.push(s1);
estados.push(s2);
estados.push(s3);
estados.push(s4);
estados.push(s5);
estados.push(s6);
estados.push(s7);

function reflex_agent(location, state){
   	if (state=="DIRTY") return "CLEAN";
   	else if (location=="A") return "RIGHT";
   	else if (location=="B") return "LEFT";
}

function ensuciar(location, states){
    let random = numeroaleatorio(0,15);
    if( random < 5){
        if(location == "A" && states[1] == "CLEAN" ) states[1] = "DIRTY";
    }else if( random >= 5 && random < 10){
        if(location == "B"  && states[2] == "CLEAN") states[2] = "DIRTY";
    } 
}

function estado_utilizado(states){
    let pos = 0;
    for(let estado of estados){
        if(states[0] == estado.locacion && states[1] == estado.A_estado && states[2] == estado.B_estado){
            if(!estado.utilizado){
                estado.utilizado = true; 
                estado.visita = estado.visita + 1;

            } 
            console.log("Estado: " + pos  + ", " + estado.locacion  + ", " + estado.A_estado + ", " +  estado.B_estado);
        }
        pos = pos +1;
    }
}

function test(states){
    var location = states[0];		
    var state = states[0] == "A" ? states[1] : states[2];
    var action_result = reflex_agent(location, state);

    document.getElementById("log").innerHTML+="<br>Location: ".concat(location).concat(" | Action: ").concat(action_result).concat("<br>Contador de visitas --> S0=").concat(estados[0].visita).concat(" S1=").concat(estados[1].visita).concat(" S2=").concat(estados[2].visita).concat(" S3=").concat(estados[3].visita).concat(" S4=").concat(estados[4].visita).concat(" S5=").concat(estados[5].visita).concat(" S6=").concat(estados[6].visita).concat(" S7=").concat(estados[7].visita);

    if (action_result == "CLEAN"){
        if (location == "A") states[1] = "CLEAN";
        else if (location == "B") states[2] = "CLEAN";
    }
    else if (action_result == "RIGHT") states[0] = "B";
    else if (action_result == "LEFT") states[0] = "A";		
	
    ensuciar(location, states);
    estado_utilizado(states);
     
    if(estados[0].visita >= 2 && estados[1].visita >= 2 && estados[2].visita >= 2 && estados[3].visita >= 2 && estados[4].visita >= 2 && estados[5].visita >= 2 && estados[6].visita >= 2 && estados[7].visita >= 2){   
	    document.getElementById("log").innerHTML+="<br>** Se cumplieron los 8 estados ** <br><br> ************ Fin de la ejecucion ************";
    }else{
        setTimeout(function(){ test(states); }, 2000);
    }
        
}

var states = ["A","DIRTY","DIRTY"];
test(states);
