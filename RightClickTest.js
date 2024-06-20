import { Selector, fixture, t } from "testcafe";

fixture('Right click Test')
    .page("https://demoqa.com/buttons");

test('Right click test', async t =>
{
    t.rightClick(Selector("#rightClickBtn"))
        .expect(Selector("#rightClickMessage").exists).ok;

    console.log(await Selector("#rightClickMessage").textContent);
});