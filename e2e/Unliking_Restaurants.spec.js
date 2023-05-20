/* eslint-disable no-undef */
Feature('Unliking Restaurants')

Before(({ I }) => {
  I.amOnPage('/#/favorite')
})

Scenario('showing empty liked restaurants', ({ I }) => {
  I.see('There are currently no restaurant(s) in your favorites list.', 'div#list')
})

Scenario('unliking one restaurant', ({ I }) => {
  // Liking
  I.amOnPage('/#/')
  I.waitForElement(locate('.card').first(), 5)
  I.seeElement(locate('.card-title a').first())
  I.click(locate('.card-title a').first())

  I.wait(10)

  I.seeElement(locate('.add-to-favorite'))
  I.click(locate('.add-to-favorite'))
  I.see('💔', '.add-to-favorite')

  I.seeElement('.home-button')
  I.click(locate('.home-button'))

  // Unliking
  I.amOnPage('/#/')
  I.waitForElement(locate('.card').first(), 10)
  I.seeElement(locate('.card-title a').first())
  I.click(locate('.card-title a').first())

  I.wait(10)

  I.seeElement(locate('.add-to-favorite'))
  I.see('💔', '.add-to-favorite')

  I.click(locate('.add-to-favorite'))
  I.see('🧡', '.add-to-favorite')
})
