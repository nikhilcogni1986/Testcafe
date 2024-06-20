import { fixture, test } from "testcafe";

fixture`Select the text and delete the same`
    .page("https://devexpress.github.io/testcafe/example/");

test("Select the text and delete it", async t =>{

    await t.navigateTo("https://devexpress.github.io/testcafe/example/").maximizeWindow();
    await t
        .typeText("#developer-name","TESTCAFE AUTOMATION")
        .selectText("#developer-name")
        .pressKey('delete')
        .wait(4000);
});