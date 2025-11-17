/// <reference:cypress/types" />

describe('Funcionalidade: Login', () => {

        beforeEach(() => { 

        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
                
        });

        afterEach(() => {

        cy.screenshot()

        });

    it ('Deve fazer login com sucesso', () => {
        cy.get('#username').type('contatoalinevieiradentista@gmail.com')
        cy.get('#password').type('teste@123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.page-title').should('contain', 'Minha conta')
})

it('Deve inserir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('contatoaline@gmail.com')
        cy.get('#password').type('teste@123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido.')
})

it('Deve inserir uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('contatoalinevieiradentista@gmail.com')
        cy.get('#password').type('teste@000')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Erro: A senha fornecida para o e-mail contatoalinevieiradentista@gmail.com está incorreta. Perdeu a senha?')

})



})