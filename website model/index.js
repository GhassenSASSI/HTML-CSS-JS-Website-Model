window.onbeforeunload = () => {
    window.scrollTo(0, 0);
}

window.onload = () => {
    const div = document.getElementById("first")
    const image = document.getElementById("image")

    if(div.offsetHeight > window.innerHeight){
      translateImage(div, image)
    }else{
      image.style.transform = 'translate(0,0)'
    }

    window.onresize = () => {
      if(div.offsetHeight > window.innerHeight){
        translateImage(div, image)
      }else{
        image.style.transform = 'translate(0,0)'
      }
    }
    
    document.body.onscroll = () => {
      if(div.offsetHeight > window.innerHeight){
        translateImage(div, image)
      }
    }
}

function translateImage(el, image) {
  const rect = el.getBoundingClientRect()
  let translateY = -0.8 * ((rect.y + el.offsetHeight / 2) - (window.innerHeight / 2))
  image.style.transform = `translate(0,${translateY}px)`
}

function scrollToTop() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

function showSideMenu(){
  const sideMenu = document.getElementsByClassName("side-menu")
  sideMenu[0].style.display = 'flex'
}

function hideSideMenu(){
  const sideMenu = document.getElementsByClassName("side-menu")
  sideMenu[0].style.display = 'none'
}