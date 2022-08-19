const person1 = {
    nome: 'Luiz',
    idade: 21,
    sexo: 'masculino'
}

const person2 = {
    nome: 'Maísa',
    idade: 15,
    sexo: 'feminino'
}

const person3 = {
    nome: 'Amora',
    idade: 42,
    sexo: 'feminino'
}


function descricao(anos) {
	return `${this.nome} tem ${this.idade} anos de idade. É do sexo ${this.sexo}. E daqui a ${anos} anos terá ${this.idade + anos} anos de idade`;
}

console.log(descricao.call(person3, 57));