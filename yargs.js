const comandos ={
	nombre:{
		alias:'n',
		demand:true
	},
	identificacion:{
		alias:'d',
		demand:true
	},
		matematica:{
		alias:'m',
		demand:true
		},
		programacion:{
			alias:'p',
			demand:true
		},
		ingles:{
			alias:'i',
			demand:true
		}	
};

const argv = require('yargs').command("registrar","registrar un estudiante y sus notas",comandos).argv

module.exports={
	argv
}