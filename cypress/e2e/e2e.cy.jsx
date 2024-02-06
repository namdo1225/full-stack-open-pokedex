describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:9000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
})

describe('Pokedex Hidden Ability', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:9000')
    cy.contains('bulbasaur').click()
    cy.contains('chlorophyll')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
})