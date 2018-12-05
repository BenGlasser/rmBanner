var removed = false
var removeBanner = () => {
  var banner = document.querySelector('[class^="TopBar__Container"]')
  if (!!banner) {
    removed = true
    banner.remove()
  }
  if (removed) clearInterval(intervalId)
}
var intervalId = setInterval(removeBanner , 1000);
