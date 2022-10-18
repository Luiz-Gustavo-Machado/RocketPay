import "./css/index.css"

const ccbgcolor01 = document.querySelector('.cc-bg svg > g g:nth-child(1) path')
const ccbgcolor02 = document.querySelector('.cc-bg svg > g g:nth-child(2) path')
const ccLogo = document.querySelector(".cc-logo span:nth-child(2) img")


function setCardType(type) {
  const colors = {
  "visa": ["#436D99", "#2D57F2"],
  "MasterCard": ["#C69347", "#DF6F29"],
  "default": ["black", "gray"],

}

  ccbgcolor01.setAttribute('fill', colors[type] [0])
  ccbgcolor02.setAttribute('fill', colors[type] [1])
  ccLogo.setAttribute('src', `cc-${type}.svg`)
}

globalThis.setCardType = setCardType