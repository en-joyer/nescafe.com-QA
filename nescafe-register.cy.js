require('cypress-plugin-steps')
require('cypress-xpath')
require('chance')

describe('Nescafe - Kayıt Olma Sayfası Doğrulama  - Otomasyon #3', () => {
   beforeEach(() => {
      cy.viewport('macbook-16');
      cy.visit("https://www.nescafe.com/tr")
      try {
        cy.get('#_evidon-accept-button').click()
      } catch (err) {
        cy.log(err)
        return
      }
   });

   const soyad = chance.last()
   const email = chance.email()
   const sifre = "^aYzaau6*uQvh2"
   
   function getRandomInt(min, max){      
    return Math.floor(Math.random() * (max - min + 1)) + min;    
  } 


   it('Kayıt Formu Geçersiz Ad Hata Doğrulaması #1', () => {
    cy.step("https://www.nescafe.com/tr websitesine eriş.")
    cy.step("Üst menüde bulunan Profil logosuna tıkla.")
    cy.get('.profile').click()
    cy.step("Kayıt Ol seçeneğine tıkla.")
    cy.get('.register-menu > :nth-child(1) > a').click()
    cy.step('Gelen formu doldururken geçersiz bir ad değeri gir.')
    cy.get('#gigya-textbox-32384114701464324').type(" ")
    cy.step('Diğer bilgilerin doldurulması')
    cy.get('#gigya-textbox-56470341204781944') // Soyad
    .type(soyad)
    cy.get('#gigya-textbox-7229776226914300')
    .type(email)
    cy.visit('https://www.nescafe.com/tr/uye-ol');
    cy.get('#gigya-dropdown-70507658919696960').select('01');
    cy.get('#gigya-dropdown-122589491156710460').select('02');
    cy.get('#ddlYears').select('1990');
    cy.get('#gigya-checkbox-16813710383689784').click({force: true});
    cy.get('#gigya-checkbox-29967629431485264').click({force: true});
    cy.get('#gigya-checkbox-129959784605786700').click({force: true});
    cy.step('Üye ol butonuna tıkla.')
    cy.get('#gigya-profile-form > .gigya-form-wrapper-mobile > .gigya-full-reg-login > .large-20 > :nth-child(2) > .gigya-composite-control-submit > .gigya-input-submit')
    .click()
    cy.contains('Bu alan zorunlu').should('be.visible')
   });

   it('Üye Girişi Geçersiz Şifre Hata Doğrulaması #2', () => {
    cy.step("https://www.nescafe.com/tr websitesine eriş.")
    cy.log("beforeEach ile websitesine erişiliyor.")
    cy.step("Üst menüde bulunan Profil logosuna tıkla.")
    cy.get('.profile').click()
    cy.step("Üye Girişi seçeneğine tıkla.")
    cy.get('.register-menu > :nth-child(2) > a').click()
    cy.step('Gelen formu doldururken geçersiz bir sifre gir.')
    cy.get('#gigya-loginID-51322072682240980').click();
    cy.get('#gigya-loginID-51322072682240980').type(email);
    cy.get('#gigya-password-43351943385770020').click();
    cy.get('#gigya-password-43351943385770020').type(sifre);
    cy.get('#gigya-password-43351943385770020').click();
    cy.step("Giriş yap butonuna tıkla.")    
    cy.get('#gigya-profile-form > .gigya-form-wrapper-mobile > .grid-x > .large-10 > :nth-child(1) > .gigya-composite-control > .gigya-input-submit')
    .click()
    cy.contains('Geçersiz email adresi veya şifre').should('be.visible')
   });

   it('Üye Girişi Email Kısmı Boş Bırakma Hata Doğrulaması #3', () => {
      cy.step("https://www.nescafe.com/tr websitesine eriş.")
      cy.log("beforeEach ile websitesine erişiliyor.")
      cy.step("Üst menüde bulunan Profil logosuna tıkla.")
      cy.get('.profile').click()
      cy.step("Üye Girişi seçeneğine tıkla.")
      cy.get('.register-menu > :nth-child(2) > a').click()
      cy.step('Gelen giriş sayfasını doldururken email kısmını boş bırak.')
      cy.get('#gigya-password-43351943385770020').click();
      cy.get('#gigya-password-43351943385770020').type(sifre);
      cy.get('#gigya-password-43351943385770020').click();
      cy.step("Giriş yap butonuna tıkla.")    
      cy.get('#gigya-profile-form > .gigya-form-wrapper-mobile > .grid-x > .large-10 > :nth-child(1) > .gigya-composite-control > .gigya-input-submit')
      .click()
      cy.contains('Bu alan zorunlu').should('be.visible')
   });

   it('Üye Girişi Şifre Kısmı Boş Bırakma Hata Doğrulaması #4', () => {
      cy.step("https://www.nescafe.com/tr websitesine eriş.")
      cy.log("beforeEach ile websitesine erişiliyor.")
      cy.step("Üst menüde bulunan Profil logosuna tıkla.")
      cy.get('.profile').click()
      cy.step("Üye Girişi seçeneğine tıkla.")
      cy.get('.register-menu > :nth-child(2) > a').click()
      cy.step("Gelen giriş sayfasını doldururken şifre kısmını boş bırak.")
      cy.get('#gigya-loginID-51322072682240980').click();
      cy.get('#gigya-loginID-51322072682240980').type(email);
      cy.step("Giriş yap butonuna tıkla.")    
      cy.get('#gigya-profile-form > .gigya-form-wrapper-mobile > .grid-x > .large-10 > :nth-child(1) > .gigya-composite-control > .gigya-input-submit')
      .click()
      cy.contains('Bu alan zorunlu').should('be.visible')
   });
})