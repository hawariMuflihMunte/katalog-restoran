/* eslint-disable no-undef */
Feature('Liking Restaurants')

Before(({ I }) => {
  I.amOnPage('/#/favorite')
})

Scenario('showing empty liked restaurants', ({ I }) => {
  I.see('There are currently no restaurant(s) in your favorites list.', 'div#list')
})

Scenario('liking one restaurant', ({ I }) => {
  I.amOnPage('/#/')
  I.waitForElement(locate('.card').first(), 5)
  I.seeElement(locate('.card-title a').first())
  I.click(locate('.card-title a').first())

  I.wait(10)

  I.seeElement(locate('.add-to-favorite'))
  I.click(locate('.add-to-favorite'))
  I.see('💔', locate('.add-to-favorite'))
})
