class Estado{
    constructor(locacion, A_estado, B_estado, utilizado){
        this.locacion = locacion;
        this.A_estado = A_estado;
        this.B_estado = B_estado;
        this.utilizado = utilizado;
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

function reflex_agent(location, state){
   	if (state=="DIRTY") return "CLEAN";
   	else if (location=="A") return "RIGHT";
   	else if (location=="B") return "LEFT";
}

function test(states){
      	var location = states[0];		
      	var state = states[0] == "A" ? states[1] : states[2];
      	var action_result = reflex_agent(location, state);
      	document.getElementById("log").innerHTML+="<br>Location: ".concat(location).concat(" | Action: ").concat(action_result);
      	if (action_result == "CLEAN"){
        	if (location == "A") states[1] = "CLEAN";
         	else if (location == "B") states[2] = "CLEAN";
      	}
      	else if (action_result == "RIGHT") states[0] = "B";
      	else if (action_result == "LEFT") states[0] = "A";		
	setTimeout(function(){ test(states); }, 2000);
}

var states = ["A","DIRTY","DIRTY"];
test(states);
