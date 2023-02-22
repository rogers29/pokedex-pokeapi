
import axios from 'axios'

const BASE_URL = 'https://pokeapi.co/api/v2/'

export default class PokemonService {
  public async getPokemonByName (pokemon) {
    const endpoint = `pokemon/${pokemon}`

    const result = await axios.get(`${BASE_URL}${endpoint}`)

    const detailsPokemon = await this.getDetailsPokemon(result.data.id)
    const evolutionChain = await this.getPokemonChainEvolution(detailsPokemon.url_evolution)

    const pokemonData = {
      id: result.data.id,
      name: result.data.name,
      species: result.data.species.name,
      color: detailsPokemon.color,
      weight: result.data.weight,
      types: await this.listPokemonTypes(result.data.types),
      evolution_chain: evolutionChain,
    }

    return pokemonData
  }

  public async getDetailsPokemon (pokemonId) {
    const endpoint = `pokemon-species/${pokemonId}`

    const result = await axios.get(`${BASE_URL}${endpoint}`)

    const pokemonData = {
      color: result.data.color.name,
      url_evolution: result.data.evolution_chain.url,
    }

    return pokemonData
  }

  public async getPokemonChainEvolution (url) {
    const evolutionChains = await axios.get(`${url}`)

    const validateEvolution = evolutionChains.data.chain.evolves_to.length

    if (!validateEvolution) {
      return 'Não existe cadeia de evolução'
    }

    var firstNivel = evolutionChains.data.chain.species.name
    var listEvolves : string[] = []

    // Evolução por ramificação
    if (validateEvolution > 1) {
      for (let i = 0; i < evolutionChains.data.chain.evolves_to.length; i++) {
        listEvolves.push(`${firstNivel} -> ${evolutionChains.data.chain.evolves_to[i].species.name}`)
      }
      return listEvolves.join(', ')
    }

    // Primeira evolução
    listEvolves.push(firstNivel)
    for (let i = 0; i < evolutionChains.data.chain.evolves_to.length; i++) {
      listEvolves.push(evolutionChains.data.chain.evolves_to[i].species.name)
    }

    //Segunda evolução
    if (evolutionChains.data.chain.evolves_to[0].evolves_to.length) {
      for (let i = 0; i < evolutionChains.data.chain.evolves_to[0].evolves_to.length; i++) {
        listEvolves.push(evolutionChains.data.chain.evolves_to[0].evolves_to[i].species.name)
      }
    }

    return listEvolves.join(' -> ')
  }

  public async listPokemonTypes (types) {
    var listTypes : string[] = []

    for (let i = 0; i < types.length; i++) {
      listTypes.push(types[i].type.name)
    }
    return listTypes.join(', ')
  }
}
