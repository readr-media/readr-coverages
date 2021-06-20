const { app } = require('./config')

export const SITE_TITLE = '疫苗追蹤'
export const SITE_DESCRIPTION = 'COVID-19 疫情持續延燒、能源轉型路漫漫、乾旱缺水衝擊民生與產業⋯⋯透過即時資料，READr 帶你持續追蹤臺灣目前面臨的挑戰。'
export const SITE_URL = `${app.siteProtocol}://${app.domain}${app.base}`
export const SITE_DOMAIN = `${app.domain}${app.base}`
export const SITE_OG_IMAGE = `${app.siteProtocol}://${app.domain}${app.base}/images/og.png`
export const SITE_LOGO = `${app.siteProtocol}://${app.domain}${app.base}/images/logo.svg`
export const SITE_BASE = `${app.base}/`
export const FB_APP_ID = `KJ`
