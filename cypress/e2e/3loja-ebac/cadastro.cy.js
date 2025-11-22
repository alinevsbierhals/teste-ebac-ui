/// <reference:cypress/types" />
import { faker } from '@faker-js/faker'

describe('Funcionalidade: cadastro', () => {

        beforeEach(() => { 

        cy.visit('minha-conta')
                
        });

        it('Deve completar o cadastro com sucesso', () => {
            cy.get('#reg_email').type(faker.internet.email())
            cy.get('#reg_password').type('senha123')
            cy.get(':nth-child(4) > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(3)').should('exist')
            cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
            cy.get('#account_first_name').type(faker.name.firstName())
            cy.get('#account_last_name').type(faker.name.lastName())
            cy.get('.woocommerce-Button').click()
            cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
        });

         it('Deve completar o cadastro com sucesso - Usando variáveis' , () => {
            var email = faker.internet.email()
            var nome = faker.name.firstName()
            var sobrenome = faker.name.lastName()

            cy.get('#reg_email').type(email)
            cy.get('#reg_password').type('senha123')
            cy.get(':nth-child(4) > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(3)').should('exist')
            cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
            cy.get('#account_first_name').type(nome)
            cy.get('#account_last_name').type(sobrenome)
            cy.get('.woocommerce-Button').click()
            cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')

    })

    it.only('Deve completar cadastro com sucesso - Usando comando customizado', () => {
        cy.preCadastro(faker.internet.email(), 'senha123', faker.name.firstName(), faker.name.lastName())
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    
    });
})
