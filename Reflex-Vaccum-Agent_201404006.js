class Estado{
    constructor(locacion, A_estado, B_estado, utilizado){
        this.locacion = locacion;
        this.A_estado = A_estado;
        this.B_estado = B_estado;
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

//Contador de visitas
let v0 = 0;
let v1 = 0;
let v2 = 0;
let v3 = 0;
let v4 = 0;
let v5 = 0;
let v6 = 0;
let v7 = 0;

function reflex_agent(location, state){
   	if (state=="DIRTY") return "CLEAN";
   	else if (location=="A") return "RIGHT";
   	else if (location=="B") return "LEFT";
}


function numeroaleatorio(min,max){
    return Math.floor((Math.random() * (max-min)) +min);
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
            if(pos == 0)
            {
                v0 = v0 + 1;
            }
            if(pos == 1)
            {
                v1 = v1 + 1;
            }
            if(pos == 2)
            {
                v2 = v2 + 1;
            }
            if(pos == 3)
            {
                v3 = v3 + 1;
            }
            if(pos == 4)
            {
                v4 = v4 + 1;
            }
            if(pos == 5)
            {
                v5 = v5 + 1;
            }
            if(pos == 6)
            {
                v6 = v6 + 1;
            }
            if(pos == 7)
            {
                v7 = v7 + 1;
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

    document.getElementById("log").innerHTML+="<br>Location: ".concat(location).concat(" | Action: ").concat(action_result).concat("<br>Contador de visitas<br>S0=").concat(v0).concat(" | S1=").concat(v1).concat("<br>S2=").concat(v2).concat(" | S3=").concat(v3).concat("<br>S4=").concat(v4).concat(" | S5=").concat(v5).concat("<br>S6=").concat(v6).concat(" | S7=").concat(v7);

    if (action_result == "CLEAN"){
        if (location == "A") states[1] = "CLEAN";
        else if (location == "B") states[2] = "CLEAN";
    }
    else if (action_result == "RIGHT") states[0] = "B";
    else if (action_result == "LEFT") states[0] = "A";		
	
    ensuciar(location, states);
    estado_utilizado(states);
     
    if(v0 >= 2 && v1 >= 2 && v2 >= 2 && v3 >= 2 && v4 >= 2 && v5 >= 2 && v6 >= 2 && v7 >= 2){   
	    document.getElementById("log").innerHTML+="<br>** Se visitaron al menos 2 veces cada estado ** <br><br> ************ Fin de la ejecucion ************";
    }else{
        setTimeout(function(){ test(states); }, 2000);
    }
        
}

var states = ["A","DIRTY","DIRTY"];
test(states);
