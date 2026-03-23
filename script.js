let grow = 0

let btn = document.querySelector('button')
let h2 = document.querySelector('h2')
let inner = document.querySelector('.inner')
let h4 = document.querySelector('h4')
btn.addEventListener('click', function () {
  btn.style.pointerEvents = 'none'
  let num = 50 + Math.floor(Math.random() * 50)
  console.log ('Downloaded in ', num / 10, 'seconds')
  h4.innerHTML= `your file Downloaded in ${num/10} seconds`
  let int = setInterval(() => {
    grow++
    h2.innerHTML = grow + '%'
    inner.style.width = grow + '%'
  }, num);


  setTimeout(() => {
    clearInterval(int)
    btn.style.opacity = 0.5
    btn.innerHTML = 'Downloaded'
    h4.innerHTML = 'Completed'
  }, num * 100);

})




// let grow = 0
// let btn = document.querySelector('button')
// let h2 = document.querySelector('h2')
// let inner = document.querySelector('.inner')
// btn.addEventListener('click',function(){
//   btn.style.pointerEvents = 'none'
// let int = setInterval(() => {
//     grow++
//     h2.innerHTML = grow+'%'
//     inner.style.width = grow+'%'
//   }, 50);

//   setTimeout(() => {
//     clearInterval(int)
//   }, 5000);
// })