import "./css/index.css"
import IMask from "imask"

const ccbgcolor01 = document.querySelector(".cc-bg svg > g g:nth-child(1) path")
const ccbgcolor02 = document.querySelector(".cc-bg svg > g g:nth-child(2) path")
const ccLogo = document.querySelector(".cc-logo span:nth-child(2) img")

function setCardType(type) {
  const colors = {
    visa: ["#436D99", "#2D57F2"],
    MasterCard: ["#C69347", "#DF6F29"],
    default: ["black", "gray"],
  }

  ccbgcolor01.setAttribute("fill", colors[type][0])
  ccbgcolor02.setAttribute("fill", colors[type][1])
  ccLogo.setAttribute("src", `cc-${type}.svg`)
}

globalThis.setCardType = setCardType

// security code
const securityCode = document.querySelector("#security-code")
const securityCodePattern = {
  mask: "0000",
}

const securityCodeMasked = IMask(securityCode, securityCodePattern)

const expirationDate = document.querySelector("#expiration-date")
const expirationDatePattern = {
  mask : "MM{/}YY",
  blocks: {
    YY: {
      mask: IMask.MaskedRange,
      from: String(new Date().getFullYear()).slice(2),
      to: String(new Date().getFullYear() + 10).slice(2),
    },
    MM: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 12,
    }
  }
}
const expirationDateMasked = IMask(expirationDate, expirationDatePattern)
