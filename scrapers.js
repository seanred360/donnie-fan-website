const puppeteer = require("puppeteer");

async function scrape(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const [el] = await page.$x(
    `//*[@id="app"]/div[1]/div[2]/div[2]/main/div[1]/div/div[2]/div[1]/div[1]/div[2]/div[1]/img`
  );
  console.log(el);
  const src = await el.getProperty("src");
  const srcTxt = await src.jsonValue();
  browser.close();
  console.log({ srcTxt });
}

scrape("https://weibo.com/u/7708697903");
