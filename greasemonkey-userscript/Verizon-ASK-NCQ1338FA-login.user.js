// ==UserScript==
// @name         Verizon ASK-NCQ1338FA login
// @description  Autocomplete the Verizon Internet Gateway login password field on the web admin GUI for Askey ASK-NCQ1338FA following system update 6.5 (v3.2.0.18)
// @version      1.0.0
// @match        https://192.168.0.1/*
// @icon         https://192.168.0.1/favicon.ico
// @run-at       document-end
// @grant        unsafeWindow
// @homepage     https://github.com/warren-bank/crx-Verizon-ASK-NCQ1338FA-login/tree/master
// @supportURL   https://github.com/warren-bank/crx-Verizon-ASK-NCQ1338FA-login/issues
// @downloadURL  https://github.com/warren-bank/crx-Verizon-ASK-NCQ1338FA-login/raw/master/greasemonkey-userscript/Verizon-ASK-NCQ1338FA-login.user.js
// @updateURL    https://github.com/warren-bank/crx-Verizon-ASK-NCQ1338FA-login/raw/master/greasemonkey-userscript/Verizon-ASK-NCQ1338FA-login.user.js
// @namespace    warren-bank
// @author       Warren Bank
// @copyright    Warren Bank
// ==/UserScript==

var user_configs = {
  "password": "123456789"
}

/* ---------------
 * references:
 * ===========
 * https://www.verizon.com/support/verizon-internet-gateway-ask-ncq1338fa/
 * https://www.verizon.com/support/verizon-internet-gateway-ask-ncq1338fa-update/
 * ---------------
 */

var is_login_route = function() {
  return (unsafeWindow.location.hash === '#/login/')
}

var init = function() {
  var input = unsafeWindow.document.querySelector('.vz-input')

  input.value = user_configs.password
  input.dispatchEvent(new Event('input'))
}

var preinit = function() {
  if (is_login_route())
    init()
}

unsafeWindow.setTimeout(preinit, 2500)
