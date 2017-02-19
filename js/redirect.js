/* For redirects such as maintenance */

if (window.console) {
  window.console.error("The page responded with 503")
}

document.location = "https://git.io/vD5o4"

/*
if (!(document.location.hostname == "nanomotion.github.io)) {
  document.location = "https://nanomotion.github.io" + document.location.pathname
}*/
