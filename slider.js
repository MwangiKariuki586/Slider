const left = document.querySelector(".left")
const right = document.querySelector(".right")
const slider = document.querySelector(".slider")
const images = document.querySelectorAll(".image")
const bottom = document.querySelector(".bottom")
let slideNumber=1
const length = images.length
for (let e = 0; e < length;e++){
    const div = document.createElement("div")
    div.className = "button";
    bottom.appendChild(div)
}
const buttons = document.querySelectorAll(".button")
buttons[1].style.backgroundColor = "white"

const resetBackground = () => {
    buttons.forEach((button)=>{
        button.style.backgroundColor="transparent"
    })
}
buttons.forEach((button,i)=>{
  button.addEventListener("click",()=>{
    resetBackground()
    slider.style.transform = `translateX(-${i * 700}px)`
    slideNumber = i+1
    button.style.backgroundColor = "white" 
  })
   
})
const nextSlide = ()=>{
    slider.style.transform = `translateX(-${slideNumber*700 }px)`
    slideNumber ++
}
const firstSlide = () => {
    slider.style.transform = `translateX(0px)`
    slideNumber=1
}
const previousSlide = ()=> {
    slider.style.transform = `translateX(-${(slideNumber-2)*700}px)`
    slideNumber --
}
const lastSlide = () => {
    slider.style.transform = `translateX(-${(length - 1)*700}px)`
    slideNumber=length
} 
const colorChange = () => {
    resetBackground()
    buttons[slideNumber-1].style.backgroundColor = "white"
} 
right.addEventListener("click",()=>{
   slideNumber < length ? nextSlide() : firstSlide()
   colorChange() 
})
left.addEventListener("click",() => {
    slideNumber > 1 ? previousSlide() : lastSlide()
    colorChange()
})
