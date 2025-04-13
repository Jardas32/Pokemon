const btpokemon = document.querySelector('.bt');
const pokemon = 'https://pokeapi.co/api/v2/pokemon/typhlosion';
    
async function showPokemon() {
    try {
        const pokemonName = document.getElementById('inputName').value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if(!response.ok) {
            throw new Error('Произошла ошибка в отправке Fetch');
        }

        const data =  await response.json();
        console.log(data.results);
        const pokemonSprits = data.sprites.front_default;
        const imgPokemon = document.querySelector('.imgPokemon');
        imgPokemon.src = pokemonSprits;
        
    }
    catch(error) {
       console.error(error);
    }
};

btpokemon.addEventListener('click', () => {
    document.querySelector('.imgPokemon').style.display = `block`;
    showPokemon();
})

