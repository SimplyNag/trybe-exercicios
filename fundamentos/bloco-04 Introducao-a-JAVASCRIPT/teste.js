let nomes = ['Yan', 'Joorge', 'Paulo', 'Matheus'];
console.log(nomes)

console.log(nomes[0])

nomes.pop(); //remove ultima chave

nomes.push('jhon'); // adiciona uma chave na ultima posição

for (let index = 0; index < nomes.length; index ++) { //forzinho bunitu
    console.log(nomes[index])
}

let ultimo = nomes[nomes.length - 1];

console.log(ultimo)

let jhon = nomes.indexOf('jhon');
console.log(jhon)