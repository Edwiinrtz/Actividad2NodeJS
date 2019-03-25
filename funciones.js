const fs = require('fs');

const registrar =(estudiante)=>{
	listar()

	let est={
		n:estudiante.nombre,
		d: estudiante.identificacion,
		m:estudiante.matematica,
		p:estudiante.programacion,
		i:estudiante.ingles,
		pro:((estudiante.matematica+estudiante.programacion+estudiante.ingles)/3)
	}
	
	let ident=listaEstudiantes.find(iden => iden.d == estudiante.identificacion);
	if (!ident) {
		listaEstudiantes.push(est)
		guardar()
	}else{
		console.log('ya hay un usuario con ese ID');
	}
}


const listar = () =>{
	try	{
		listaEstudiantes = require('./estudiante.json')
	}
	catch{
		listaEstudiantes = []
	}

}
const listarPro =()=>{
	try{
	lEst = require('./estudiante.json')
	mPromedio=lEst.filter(esto => esto.pro >=3);
	mPromedio.forEach(variable=>{
		console.log("Nombre: "+variable.n+" indentificación: "+variable.d+" promedio: "+variable.pro)
	})
	}catch{
		console.log('No hay estudiantes registrados')
	}
	

}

const guardar =()=>{
	let texto = JSON.stringify(listaEstudiantes)
	fs.writeFile("estudiante.json",texto,(err)=> {
		if(err){throw(err)}
			else{console.log('creado')}});
}

module.exports={
	registrar,
	listarPro
}