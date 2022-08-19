const alunos = [
	{
		nome: 'Carlos',
		cadeira: 'Coding',
        nota: 7,
	},
    {
		nome: 'Eduarda',
		cadeira: 'Coding',
        nota: 6,
	},
    {
		nome: 'Maria',
		cadeira: 'Coding',
        nota: 10,
	},
	{
		nome: 'Lucas',
		cadeira: 'Coding',
        nota: 4,
	},
];

function alunosAprovReprovados (array, media) {
    if(!array && !media) return "Parâmetros não enviados";   
    if(typeof array !== 'object') return "Objeto inválido";
    if(typeof media !== 'number') return "Número inválido";
    
    let aprovados = [];
    let reprovados = [];

    for (let i =0; i < array.length; i++) {
        const {nome, nota} = alunos[i];

        if(nota >= media) {
            aprovados.push(nome);
        } else {
            reprovados.push(nome)
        }
    }

    return `Alunos aprovados: [${aprovados}].
Alunos reprovados: [${reprovados}].`;
}

console.log(alunosAprovReprovados(alunos, 7 ));
