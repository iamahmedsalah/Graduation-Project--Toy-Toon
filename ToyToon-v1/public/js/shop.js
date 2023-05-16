// Preloader
window.addEventListener('load', () => {
    const loader = document.querySelector('.Preloader');
    loader.classList.add('Preloader-hidden');
    loader.addEventListener('transitionend', () => {
        document.body.classList.remove('Preloader')
    })
})


  window.onload = ()=>{
    
const pgTwo = document.getElementById('pg2')
const pgOne = document.getElementById('pg1')

pgTwo.addEventListener('click',(err) => {
    console.log(err)
    localStorage.ClassName = 'active';
    pgTwo.classList.add(localStorage.ClassName);

  });
  pgOne.classList.remove(localStorage.ClassName);
  }

