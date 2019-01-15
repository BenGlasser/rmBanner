var removed = false
var removeBanner = () => {
  var banner = document.querySelector('[class^="TopBar__Container"]')
  var newBanner = Array.prototype.slice.call(document.getElementsByTagName('span')).filter(span => span.innerHTML === 'Activate your physical card in the mobile app.')[0]
  if (!!banner) {
    removed = true
    banner.remove()
  }
  if (!!newBanner) {
    removed = true
    newBanner.parentElement.parentElement.parentElement.remove()
  }
  if (removed) clearInterval(intervalId)
}
var intervalId = setInterval(removeBanner , 1000);
