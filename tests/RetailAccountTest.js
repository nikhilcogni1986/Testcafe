import { Selector } from 'testcafe'

fixture`Add a product to cart as a guest user`
  .page('https://askomdch.com/')
  .skipJsErrors()

test('Add a product to cart as a guest user', async t => {
  let lnkAccount = Selector('li a.menu-link').withText('Account')
  t
    .maximizeWindow()
    .click(lnkAccount)
    .expect(Selector('h1').withText('Account').visible).ok

  await t.typeText('#username', 'nikhiltest@test.com');
  await t.typeText('#password', 'welcome123');
  await t.click(Selector("button[name='login']"))
  await t.expect(Selector('ul.woocommerce-error li').innerText)
    .eql('Unknown email address. Check again or try your username.')
  await t.wait(1000);
})
