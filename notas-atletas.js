function calcularMediaAtletas(objAtletas) {
  for (let i = 0; i < objAtletas.length; i++) {
    let atleta = objAtletas[i];
    let notas = atleta.notas;

    let notasParaProcessar = [...notas];
    
    // Ordenando as notas
    notasParaProcessar.sort((a, b) => a - b);

    // Eliminando a maior e a menor nota, slice(x,y)
    let notasComputadas = notasParaProcessar.slice(1, 4);

    let somaDasNotas = 0;
    
    // Somar os valores usando .forEach()
    notasComputadas.forEach(nota => {
      somaDasNotas += nota;
    });

    // Calculando a média
    let media = somaDasNotas / notasComputadas.length;

    // Mostrar o resultado
    console.log(`Atleta: ${atleta.nome}`);
    // Mostrando as notas originais antes de ordenar, para clareza
    console.log(`Notas Obtidas: ${atleta.notas.join(', ')}`);
    console.log(`Média Válida: ${media.toFixed(2)}`);
    console.log('---'); // Separador entre atletas
  }
}

// Dados de entrada:
let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

calcularMediaAtletas(atletas);
