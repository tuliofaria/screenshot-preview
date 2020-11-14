import * as playwright from 'playwright-aws-lambda'

const takeScreenshot = async(url) => {
  const browser = await playwright.launchChromium()
  const page = await browser.newPage()
  await page.goto(url)
  const result = await page.screenshot()
  await browser.close()
  return result
}


export default async function handle(req, res) {
  const screenshot = await takeScreenshot(req.query.url)
  res.statusCode = 200
  res.setHeader('Content-type', 'image/png')
  res.end(screenshot)
}