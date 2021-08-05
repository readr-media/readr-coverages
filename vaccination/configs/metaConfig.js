const { app } = require('./config')

export const SITE_TITLE = '打與不打」的疫苗論戰：從不實訊息看輿論如何影響疫苗印象？'
export const SITE_DESCRIPTION = '臺灣疫苗意願登記擴及到 18 歲以上，卻僅有 6 成有意願打 AZ 疫苗，相較於有 9 成臺灣人有意願打莫德納疫苗，形成落差。疫苗開打的這 4 個多月來，各種假訊息、新聞報導可能都影響了臺灣人對於疫苗的印象。'
export const SITE_URL = `${app.siteProtocol}://${app.domain}${app.base}`
export const SITE_DOMAIN = `${app.domain}${app.base}`
export const SITE_OG_IMAGE = `${app.siteProtocol}://${app.domain}${app.base}/images/og.jpg`
export const SITE_LOGO = `${app.siteProtocol}://${app.domain}${app.base}/images/logo.png`
export const SITE_BASE = `${app.base}/`
export const FB_APP_ID = `KJ`
