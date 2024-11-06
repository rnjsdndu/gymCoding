let addBtn = document.getElementById('button');
let addBeforeBtn = document.getElementById('before');
let inputBox = document.querySelector('input');
let removeTargetBtn = document.getElementById('target-remove');
let target = document.querySelectorAll('li#target')


let removeBtn = document.querySelector('.remove-btn')

addBtn.addEventListener('click', ()=>{
  
  let li = document.createElement('li'); //요소 생성
  let ul = document.querySelector('ul') ;
  li.textContent = '데드리프트';
  li.textContent = inputBox.value;
  ul.appendChild(li); //생성한 요소를 appendChild로 추가
  let button = document.createElement('button');
  button.textContent = 'X'; //()가 아니라 = '' 임
  button.addEventListener('click',(event) =>{
    console.log(event.target.parentNode);
    event.target.parentNode.remove();
  })
  button.classList.add('remove-btn');
  li.appendChild(button)
  inputBox.value = ' ';//추가 누르고 inputBox의 값 비워주기
  inputBox.focus();//추가 누르고 다시 마우스 클릭 안해도 되게
});


addBeforeBtn.addEventListener('click', () =>{
  let li = document.createElement('li')
  let ul = document.querySelector('ul')
  let targetLi = document.querySelector('li#target')
  li.textContent = inputBox.value;
  let button = document.createElement('button');
  button.textContent = 'X' //()가 아니라 = '' 임
  button.addEventListener('click',(event) =>{
    console.log(event.target.parentNode);
    event.target.parentNode.remove();
  })
  button.classList.add('remove-btn');
  li.appendChild(button)

  // ul.appendChild(li);
  ul.insertBefore(li , targetLi) //특정 엘리먼트 앞에 추가할수 있음    
  inputBox.value = ' ';//추가 누르고 inputBox의 값 비워주기
  inputBox.focus();//추가 누르고 다시 마우스 클릭 안해도 되게

});


// removeTargetBtn.addEventListener('click', ()=>{
//   let targetLi = document.querySelector('li#target')
//   targetLi.remove();
// });
removeTargetBtn.addEventListener('click',removeParentNode); //함수로 간단하게

// removeBtn.addEventListener('click',(event)=>{
//   console.log(event.target.parentNode);
//   event.target.parentNode.remove();
// })

removeBtn.addEventListener('click',removeParentNode) //함수로 간단하게

function removeParentNode(event) {
    event.target.parentNode.remove();
}


