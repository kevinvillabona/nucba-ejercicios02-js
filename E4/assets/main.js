const container = document.getElementById("container");
const form = document.getElementById("form");
const input = document.querySelector(".input");


const renderPokemon = (pokemon) => {
    const { id, name, sprites, height, weight, types } = pokemon;
    const bgColor = (types.length) > 1 
    ? `${types[1].type.name}` 
    : `${types[0].type.name}` ;
    const sprite = !(sprites.other.home.front_default) 
    ? `${sprites.other["official-artwork"].front_default}`
    : `${sprites.other.home.front_default}`
    return `
    <div class="poke" style="background-image: linear-gradient(to bottom, rgba(255,255,255,0), var(--${bgColor})), url(assets/img/bg/Type_Background_${types[0].type.name}.webp)">
    <p class="id-poke">#${id}</p>
    <img src="${sprite}" alt="${name}" />
            <h2>${name.replace(/\b\w/g, l => l.toUpperCase())}</h2>
            <span class="exp">EXP. BASE: ${pokemon.base_experience}</span>
            <div class="poke-card"></div>
            <div class="poke-info">
              <div class="info border-r">
                ${weight / 10}kg
                <p class="sub">PESO</p>
              </div>
              ${types
                .map((tipo) => {
                  return `<div class="info">
                  <img src="assets/img/icons/${tipo.type.name}.png" alt="${tipo.type.name}-icon" class="tipo-icon" />
                  <p class="sub">${tipo.type.name.toUpperCase()}</p>
                </div>`;
                })
                .join("")}
              <div class="info border-l">
                ${height / 10}m
                <p class="sub">ALTURA</p>
              </div>
            </div>
            <span class="border-t"></span>
            <p class="info-adicional">Región: ${id<152? "Kanto" : id<252 ? "Johto": id<387 ? "Hoenn": id<494 ? "Sinnoh": id<650 ? "Teselia": id<722 ? "Kalos": id<810 ? "Alola": id<899 ? "Galar": id <906? "Hisui": "Otra"}</p>
  
    </div>
    `;
  };

// se traen los datos
const fetchPokemon = async (id) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await res.json();
        console.log(data)
        return data;
    }
    catch {
        return null;
    }
  };

const emptyContainer = () =>{
    container.innerHTML= `
    <h2 style="margin-top: 2rem;">Por favor, ingrese un número.</h2>
    `
}

const renderResult = async pokemon => {
    const newPk = await pokemon;
    if(!newPk){
        container.innerHTML = `
        <h2 style="color:red; margin-top: 2rem;">Ningún Pokémon coincide con tu búsqueda.</h2>
        `
    } else {
        container.innerHTML = renderPokemon(newPk)
    }

}

const search = e =>{
    e.preventDefault();
    const inputVal = input.value;
    if(!inputVal){
        emptyContainer();
        return;
    }
    const poke = fetchPokemon(Number(inputVal));
    renderResult(poke);
    // form.reset()
}

const init = () =>{
    form.addEventListener("submit", search)
}

init();