import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import PokemonService from 'App/Services/PokemonService'

export default class PokemonsController {
  public async getPokemonByName({ request, response }: HttpContextContract) {
    try {
      const pokemonName = request.param('pokemon')

      const pokemonData = await new PokemonService().getPokemonByName(pokemonName)

      return response.ok({ pokemonData })
    } catch (error) {
      return response.status(404).send({error: error.message, code: error.code, status: error.response.status})
    }
  }
}
