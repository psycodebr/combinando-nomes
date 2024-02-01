// TODO: Defina uma função chamada "combinandoNomesPokemons" que recebe um parâmetro chamado (palavra);
function combinandoNomesPokemons(palavra) {
    // TODO: Dentro da função, crie uma variável chamada "palavraPokemon" que é formada pela concatenação da "palavra" com a string "saur";
    let palavraPokemon = palavra + "saur";
    
    // TODO: Após a variável, retorne a palavra pokemon; 
    return palavraPokemon;
}

// Entrada da palavra usando o gets():
let nomeEntrada = gets();

// Chamando a função "combinandoNomesPokemons" com o nome pokemon informado e armazenando o resultado na variável "palavraGerada":
let palavraGerada = combinandoNomesPokemons(nomeEntrada);

// Exibindo a palavra gerada:
print(palavraGerada);
