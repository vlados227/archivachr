const ti = setInterval(() => {
// var msgBox = document.querySelector("#popup-sticker-convo-main-history-container > div.ConvoMain__history > div > div > div:nth-child(1)");
var kbdButtons = document.querySelectorAll("#popup-sticker-convo-main-history-container > div.ConvoMain__composerWrapper > div.ConvoMain__composer > div > div.MEAppThemeStylesContrastDisable.BotKeyboard--full.ConvoComposer__botKeyboard button");
    if (kbdButtons.length < 4) {
        kbdButtons[ kbdButtons.length - 1 ].click()
    } else {
        kbdButtons[2].click();
    }
    //msgBox.scrollTo(0, msgBox.scrollHeight);
}
, 4500);
var bt = document.querySelector("#popup-sticker-convo-main-history-container > div.ConvoMain__composerWrapper > div.ConvoMain__composer > div > div.ConvoComposer__inputPanel > div.ComposerInput.ConvoComposer__inputWrapper > div > span");
bt.addEventListener("click", () => {
    clearInterval(ti);
    throw new Error("script stopped");
}, {once: true})