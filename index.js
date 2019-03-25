const {argv}= require('./yargs.js');
const funciones = require('./funciones');



switch (argv._[0]) {

	case 'registrar':
	funciones.registrar(argv);
	break;
	
	case 'mPromedio':
	funciones.listarPro();
	break;
	
}