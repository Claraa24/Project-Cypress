describe('1. Buka Test Page', () => {
  it('passes', () => {
    cy.visit('http://siakad.polinema.ac.id/')
  })
})

describe('2. Login', () => {
  it('passes', () => {
    // 1. LOGIN
    // Login - Username salah
    cy.get('#username').type("20417200057")
    cy.get('#password').type("Clayang1!")
    cy.get('.form-actions > .btn').click()
    cy.get('#username').clear()
    cy.get('#password').clear()

    // // Login - Password salah
    cy.get('#username').type("2041720057")
    cy.get('#password').type("Clayang")
    cy.get('.form-actions > .btn').click()
    cy.get('#username').clear()
    cy.get('#password').clear()

    // Login - Sukses
    cy.get('#username').type("2041720057")
    cy.get('#password').type("Clayang1!")
    cy.get('.form-actions > .btn').click()
  })
})

describe('3. Akademik', () => {
  it('passes', () => {
    cy.get('#gm_akademik > [href="javascript:;"]').click()
    cy.get('#gm_akademik > .sub-menu > :nth-child(1) > .ajaxify').click()
    cy.wait(1000) 
    cy.get('#gm_akademik > .sub-menu > :nth-child(2) > .ajaxify').click()
    cy.wait(1000)
    cy.get('#gm_akademik > .sub-menu > :nth-child(3) > .ajaxify').click()
    cy.wait(1000)
    cy.get('#gm_akademik > .sub-menu > :nth-child(4) > .ajaxify').click()
    cy.wait(1000)
    cy.get('.active > .ajaxify').click()
    cy.wait(1000)
    cy.get(':nth-child(6) > .ajaxify').click()
    cy.wait(1000)
    cy.get(':nth-child(7) > .ajaxify').click()
    cy.wait(1000)
  })
})
describe('4. Biodata Mahasiswa', () => {
  it('passes', () => {
    cy.get('#gm_general > [href="javascript:;"]').click()
    cy.get('#gm_general > .sub-menu > :nth-child(1) > .ajaxify').click()
  })
})

describe('5. Logout', () => {
  it('passes', () => {
    cy.get('.dropdown-user > .dropdown-toggle').trigger("mouseover")
    cy.get('.dropdown-menu > :nth-child(2) > a').click()
  })
})

