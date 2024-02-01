function combinarNomePokemon(prefixo) {
    // Mapeia o sufixo final correspondente a cada prefixo
    const sufixos = {
        "Bulba": "saur",
        "Ivy": "ysaur",
        "Venu": "saur",
        // Adicione mais prefixos e sufixos conforme necessário
    };

    // Verifica se o prefixo existe no mapeamento
    if (prefixo in sufixos) {
        // Combina o prefixo com o sufixo correspondente
        const nomeCompleto = prefixo + sufixos[prefixo];
        return nomeCompleto;
    } else {
        // Se o prefixo não for reconhecido, retorna uma mensagem de erro
        return "Pokémon desconhecido";
    }
}

// Exemplos de uso
console.log(combinarNomePokemon("Bulba"));  // Saída: Bulbasaur
console.log(combinarNomePokemon("Ivy"));    // Saída: Ivysaur
console.log(combinarNomePokemon("Venu"));   // Saída: Venusaur
console.log(combinarNomePokemon("Char"));   // Saída: Pokémon desconhecido
