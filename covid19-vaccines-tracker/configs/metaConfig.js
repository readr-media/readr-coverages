const { app } = require('./config')

export const SITE_TITLE = '我什麼時候可以打疫苗？臺灣最新 COVID-19 疫苗接種進度、預約方式'
export const SITE_DESCRIPTION = '面對 COVID-19，臺灣疫苗陸續到貨，盼能在今年 10 月底之前達成 6 成人口接種第一劑的「全體免疫」目標。READr 統整所有最新接種資訊、接種方式、以及接種疫苗的常見問答，讓你即時掌握。'
export const SITE_URL = `${app.siteProtocol}://${app.domain}${app.base}`
export const SITE_DOMAIN = `${app.domain}${app.base}`
export const SITE_OG_IMAGE = `${app.siteProtocol}://${app.domain}${app.base}/images/og.png`
export const SITE_LOGO = `${app.siteProtocol}://${app.domain}${app.base}/images/logo.svg`
export const SITE_BASE = `${app.base}/`
export const FB_APP_ID = `KJ`
