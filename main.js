const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const passwords = require('secure-random-password');
var UsernameGenerator = require('username-generator');
const TempMailFuck = require('temp-mail-fuck');
const clc = require('cli-color');
const fs = require('fs');
puppeteer.use(StealthPlugin());


function sleep(time) {
    return new Promise(function(resolve){
        setTimeout(resolve, time)
    })
}

async function getmail() {
    const tmf = await TempMailFuck({
        savePath: __dirname + '/myMailBox.json'
    })

    const mailbox = await tmf.createMailbox()
    return mailbox['mailbox']

    setTimeout(() => {
        tmf.kill()
    }, 60000 * 10)
}


async function main(){  
    let start = process.hrtime();
    const username = UsernameGenerator.generateUsername();
    const email = await getmail();
    const password = passwords.randomPassword({ characters: passwords.lower + passwords.upper + passwords.digits })
    puppeteer.launch({ headless: false, ignoreDefaultArgs: ["--disable-extensions", "--enable-automation"], executablePath: "C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe"}).then(async browser => {
        const page = await browser.newPage();
        await page.goto('https://www.guilded.gg')
        await sleep(2000)
        try {
          await page.waitForSelector('#app > div > div.ReorderPortalContext-container > div.GameContext-container.GameContext-container-no-game.AppV2-game-context.AppV2-container-minimal-nav > div.StatusContext-container.AppV2-container > div.WebAppV2-container.WebAppV2-container-minimal > div.LayerContext-container > div > div > div.LandingPageV3Footer-container.LandingPageV3-footer > div.LandingPageV3Footer-footer-content > div.LandingPageV3SignupUpsellRow-container.LandingPageV3Footer-upsell-row > button')
          await page.click('#app > div > div.ReorderPortalContext-container > div.GameContext-container.GameContext-container-no-game.AppV2-game-context.AppV2-container-minimal-nav > div.StatusContext-container.AppV2-container > div.WebAppV2-container.WebAppV2-container-minimal > div.LayerContext-container > div > div > div.LandingPageV3Footer-container.LandingPageV3-footer > div.LandingPageV3Footer-footer-content > div.LandingPageV3SignupUpsellRow-container.LandingPageV3Footer-upsell-row > button')
          await page.type('#TextInputWithLabel-input-element-Username', username)
          await page.type('#TextInputWithLabel-input-element-Email', email)
          await page.type('#TextInputWithLabel-input-element-Password', password)
          await sleep(2000)
          await page.evaluate(() => {
            return document.querySelector('#app > div > div.ReorderPortalContext-container > div.GameContext-container.GameContext-container-no-game.AppV2-game-context.AppV2-container-minimal-nav > div.OverlayStackProvider-container > div.PortalTarget-container.OverlayStackProvider-portal-target > span > div.StatusContext-container.Overlay-status-context > div > div > div > div > div > div > div.ConfirmAndCancel-horizontal-right.ConfirmAndCancel-container.FormAndSubmit-confirm-and-cancel.OneStepSignUp-confirm-cancel > button').click();
          })
          await sleep(3000)
          await page.click('#app > div > div.ReorderPortalContext-container > div.GameContext-container.GameContext-container-no-game.AppV2-game-context.AppV2-container-minimal-nav > div.OverlayStackProvider-container > div.PortalTarget-container.OverlayStackProvider-portal-target > span > div.StatusContext-container.Overlay-status-context > div > div > div > div > div.OnboardingExperience-create-team-flow.MultiStageFlow-container > div > div > div.FullScreenFlowStageWrapper-contents > div.ConfirmAndCancel-horizontal-right.ConfirmAndCancel-container.FullScreenFlowStageWrapper-confirm-cancel > button')
          await sleep(1000)
          await page.click('#app > div > div.ReorderPortalContext-container > div.GameContext-container.GameContext-container-no-game.AppV2-game-context.AppV2-container-minimal-nav > div.OverlayStackProvider-container > div.PortalTarget-container.OverlayStackProvider-portal-target > span > div.StatusContext-container.Overlay-status-context > div > div > div > div > div.OnboardingExperience-create-team-flow.MultiStageFlow-container > div > div.FullScreenFlowStageWrapper-contents-wrapper > div > div.ItemChooser-container.OnboardingTeamGamesStage-selector > div.ItemChooser-items-wrapper.ItemChooser-items-wrapper-scrollable > div > div:nth-child(3)')
          await sleep(1000)
          await page.click('#app > div > div.ReorderPortalContext-container > div.GameContext-container.GameContext-container-no-game.AppV2-game-context.AppV2-container-minimal-nav > div.OverlayStackProvider-container > div.PortalTarget-container.OverlayStackProvider-portal-target > span > div.StatusContext-container.Overlay-status-context > div > div > div > div > div.OnboardingExperience-create-team-flow.MultiStageFlow-container > div > div.FullScreenFlowStageWrapper-contents-wrapper > div > div.ConfirmAndCancel-horizontal-right.ConfirmAndCancel-container.FullScreenFlowStageWrapper-confirm-cancel > button')
          await sleep(1000)
          await page.type('#TextInputWithLabel-input-element-Region', 'Global')
          await sleep(1000)
          await page.click('#app > div > div.ReorderPortalContext-container > div.GameContext-container.GameContext-container-no-game.AppV2-game-context.AppV2-container-minimal-nav > div.OverlayStackProvider-container > div.PortalTarget-container.OverlayStackProvider-portal-target > span > div.StatusContext-container.Overlay-status-context > div > div > div > div > div.OnboardingExperience-create-team-flow.MultiStageFlow-container > div > div.FullScreenFlowStageWrapper-contents-wrapper > div > div.ConfirmAndCancel-horizontal-right.ConfirmAndCancel-container.FullScreenFlowStageWrapper-confirm-cancel > button')
          await sleep(1000)
          await page.click('#app > div > div.ReorderPortalContext-container > div.GameContext-container.GameContext-container-no-game.AppV2-game-context.AppV2-container-minimal-nav > div.OverlayStackProvider-container > div.PortalTarget-container.OverlayStackProvider-portal-target > span > div.StatusContext-container.Overlay-status-context > div > div > div > div > div.OnboardingExperience-create-team-flow.MultiStageFlow-container > div > div.FullScreenFlowStageWrapper-contents-wrapper > div > div.ConfirmAndCancel-horizontal-right.ConfirmAndCancel-container.FullScreenFlowStageWrapper-confirm-cancel > button')
          await sleep(1000)
          await page.click('#app > div > div.ReorderPortalContext-container > div.GameContext-container.GameContext-container-no-game.AppV2-game-context.AppV2-container-minimal-nav > div.OverlayStackProvider-container > div.PortalTarget-container.OverlayStackProvider-portal-target > span > div.StatusContext-container.Overlay-status-context > div > div > div > div > div.OnboardingExperience-create-team-flow.MultiStageFlow-container > div > div > div.FullScreenFlowStageWrapper-contents > div.ConfirmAndCancel-horizontal-right.ConfirmAndCancel-container.FullScreenFlowStageWrapper-confirm-cancel > button')
          let stop = process.hrtime(start)
          console.log(clc.green(`[!] Account generated: ${email}:${password}`))
          console.log(`Time to Generate: ${(stop[0] * 1e9 + stop[1])/1e9} seconds`)
          const content = `${email}:${password}\n`;
                            fs.appendFile('generated.txt', content, err => {
                            if (err) {
                                console.log(clc.red("[!] Error saving account to file."))
                                main()
                                return
                        }

                    })
                            await browser.close();
                            main();
        } catch (error) {
          console.log(clc.red(error))
        }
    })
}

main();
