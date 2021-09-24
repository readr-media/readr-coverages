const { app } = require('./config')

export const SITE_TITLE = '【重建太魯閣出軌事發現場】失控的鐵道安全：臺鐵改革為什麼一直失靈？'
export const SITE_DESCRIPTION =
  '2021 年 4 月 2 日清明連假，一輛從邊坡滑落到軌道的大貨車造成臺鐵營運史上死傷最慘重的事故，共 49 人魂斷花蓮。READr 重建事故現場，並嘗試找出事發肇因，除了外包工程的問題，也發現異物入侵鐵軌竟是臺鐵的日常。從普悠瑪到太魯閣號出軌，兩次重大意外後，基層員工認為還是看不見臺鐵的改變。'
export const SITE_URL = `${app.siteProtocol}://${app.domain}${app.base}`
export const SITE_DOMAIN = `${app.domain}${app.base}`
export const SITE_OG_IMAGE = `${app.siteProtocol}://${app.domain}${app.base}/images/og.jpeg`
export const SITE_LOGO = `${app.siteProtocol}://${app.domain}${app.base}/images/logo.png`
export const SITE_BASE = `${app.base}/`
export const FB_APP_ID = `KJ`
