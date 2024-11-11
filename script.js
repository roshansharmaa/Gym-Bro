window.addEventListener('scroll', () => {

  document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 10);

})



let questions = document.querySelectorAll('.question-item');

questions.forEach(first => {
  first.addEventListener('click', ()=>{
    first.classList.toggle('open');
  let icon = first.querySelector('.icons i');
  if(icon.className == "fa-solid fa-plus"){
    icon.className ='fa-solid fa-minus';
  }else{  
    icon.className ='fa-solid fa-plus';
  }
  });
})



// navbar


let menu= document.querySelector('.nav-menu')
let openmenu= document.querySelector('#open-menu')
let closemenu= document.querySelector('#close-menu')

openmenu.addEventListener('click',()=>{
  menu.style.display='flex';
 openmenu.style.display='none';
 closemenu.style.display='block';
 
})

closemenu.addEventListener('click',()=>{
  menu.style.display='none';
  closemenu.style.display='none';
  openmenu.style.display='block';

  })