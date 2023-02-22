import supertest from 'supertest';
import test from 'japa'

const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`

/*
//id, nome, espécie, cor, peso, tipo e cadeia evolutiva.
  {
    "pokemon": {
      "id": interger,
      "name": string,
      "species": string,
      "color": string,
      "weight": interger,
      "type": string,
      "evolution_chain": string
    }
  }
*/
test.group('Pokemon', () => {
  test('it should get an pokemon', async (assert) => {
    const pokemon = 'eevee'
    const { body } = await supertest(BASE_URL).get(`/pokedex/${pokemon}`).send({}).expect(200)

    assert.exists(body.pokemonData.id, 'Id undefined')
    assert.exists(body.pokemonData.name, 'Name undefined')
    assert.exists(body.pokemonData.species, 'Species undefined')
    assert.exists(body.pokemonData.color, 'Color undefined')
    assert.exists(body.pokemonData.weight, 'Weight undefined')
    assert.exists(body.pokemonData.types, 'Types undefined')
    assert.exists(body.pokemonData.evolution_chain, 'eEvolution chain undefined')
  })

  test('it should return 404 when get an pokemon is not found', async (assert) => {
    const pokemon = 'eeve'
    const { body } = await supertest(BASE_URL).get(`/pokedex/${pokemon}`).send({}).expect(404)

    assert.equal(body.code, 'ERR_BAD_REQUEST')
    assert.equal(body.status, 404)
  })
})
