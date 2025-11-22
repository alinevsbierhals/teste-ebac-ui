/// <reference types="cypress" />

describe('Funcionalidade: Detalhes da conta', () => {

    beforeEach(() => {
        cy.visit('/minha-conta/edit-account')
        cy.fixture('perfil').then(dados => {
        cy.login(dados.usuario, dados.senha)
        })

    })
   
    it('Deve completar os detalhes da conta com sucesso', () => {
        cy.detalhesConta('Aline', 'Vieira', 'alinevieiradentista')
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')

    })
})


