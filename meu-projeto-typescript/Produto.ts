// Definindo a interface Livro
interface Livro {
    titulo: string;
    autor: string;
    anoPublicacao: number;
}

// Função que recebe um Livro e retorna uma mensagem informando o título e o ano de publicação
function informarDetalhesLivro(livro: Livro): string {
    return `O livro "${livro.titulo}" foi publicado em ${livro.anoPublicacao}.`;
}

// Exemplo de uso da função
const livro1: Livro = {
    titulo: "O Diário de Anne Frank",
    autor: "Anne Frank",
    anoPublicacao: 1947,
};

const livro2: Livro = {
    titulo: "1984",
    autor: "George Orwell",
    anoPublicacao: 1949,
};

// Exibindo a mensagem no console
console.log(informarDetalhesLivro(livro1));
console.log(informarDetalhesLivro(livro2));
