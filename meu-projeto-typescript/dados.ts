// Definindo variáveis com diferentes tipos de dados
let nome: string = "Thais";
let idade: number = 19;
let ativo: boolean = false;
let hobbies: string[] = ["Ler", "Desenhar", "Jogar"];
let informacoesVariadas: any = "Inicialmente uma string";

// Modificando a variável do tipo any para demonstrar sua flexibilidade
informacoesVariadas = 12345; // Agora é um número
informacoesVariadas = true; // Agora é um booleano

// Exibindo os valores no console
console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Ativo:", ativo);
console.log("Hobbies:", hobbies);
console.log("Informações Variadas:", informacoesVariadas);
