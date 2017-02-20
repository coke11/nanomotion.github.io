if (!(document.location.hostname == "nanomotion.github.io")) {
  window.open("https://nanomotion.github.io" + document.location.pathname)
  window.close()
}

/* For redirects such as maintenance */

if (window.console) {
  window.console.error("Nanomotion.github.io is unavailable")
}

if (!(document.location.pathname == "/") {
  document.location = "https://nanomotion.github.io/"
}
