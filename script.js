let listaLivros = []; 
let mapaAutores = new Map(); 
let conjuntoGeneros = new Set(); 


function adicionarLivro(titulo, autor, genero) {
    
    listaLivros.push(titulo);
    
    
    mapaAutores.set(titulo, autor);
    
    
    conjuntoGeneros.add(genero);
    
    console.log(`Livro "${titulo}" adicionado.`);
}


function removerLivro(titulo) {
    // Remove o livro da lista
    listaLivros = listaLivros.filter(livro => livro !== titulo);
    
    // Remove o autor do mapa
    mapaAutores.delete(titulo);
    
    console.log(`Livro "${titulo}" removido.`);
}


function listarLivros() {
    if (listaLivros.length === 0) {
        console.log("Não há livros na biblioteca.");
    } else {
        console.log("Livros na biblioteca:");
        listaLivros.forEach(titulo => {
            console.log(`- ${titulo} (Autor: ${mapaAutores.get(titulo)})`);
        });
    }
}


function verificarDisponibilidade(titulo) {
    if (listaLivros.includes(titulo)) {
        console.log(`O livro "${titulo}" está disponível.`);
    } else {
        console.log(`O livro "${titulo}" não está disponível.`);
    }
}


function buscarLivrosPorGenero(genero) {
    let livrosPorGenero = listaLivros.filter(titulo => {
        
        return true; 
    });
    
    if (livrosPorGenero.length > 0) {
        console.log(`Livros do gênero "${genero}":`);
        livrosPorGenero.forEach(titulo => {
            console.log(`- ${titulo} (Autor: ${mapaAutores.get(titulo)})`);
        });
    } else {
        console.log(`Não há livros encontrados para o gênero "${genero}".`);
    }
}


adicionarLivro("O Senhor dos Anéis", "J.R.R. Tolkien", "Fantasia");
adicionarLivro("1984", "George Orwell", "Distopia");
adicionarLivro("O Hobbit", "J.R.R. Tolkien", "Fantasia");

listarLivros();

verificarDisponibilidade("O Senhor dos Anéis");

buscarLivrosPorGenero("Fantasia");

removerLivro("1984");

listarLivros();
