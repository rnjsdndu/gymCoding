let h2 = document.querySelector('h2');
let img = document.querySelector('img');
let li = document.querySelectorAll('li');
let select = document.querySelector('.select')
console.log('h2.dataset.test' , h2.dataset.test);
console.log(select);




li[0].addEventListener('click',(event)=>{
  selectItem();
})
li[1].addEventListener('click',(event)=>{
  selectItem();
})
li[2].addEventListener('click',(event)=>{
  selectItem();
})


function selectItem() {
  console.log(event.target.dataset.img);
  img.setAttribute('src' , event.target.dataset.img)
  select.textContent = event.target.textContent;
}