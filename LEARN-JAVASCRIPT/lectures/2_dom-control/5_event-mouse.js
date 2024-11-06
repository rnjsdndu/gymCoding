// mouseDown

let rectangle = document.querySelector('#rectangle')
console.log(rectangle);

rectangle.addEventListener('mousedown',()=>{
  console.log('mousedown');//눌렀을때 발동
})

rectangle.addEventListener('mouseup',()=>{
  console.log('mouseup');//땠을때 발동
})

rectangle.addEventListener('mouseenter',()=>{
  console.log('mouseenter');//마우스가 요소 안으로 들어왔을때 발동
})

rectangle.addEventListener('mouseleave',()=>{
  console.log('mouseleave');//마우스가 요소 밖으로 나갔을때 발동
})

rectangle.addEventListener('mousemove',()=>{
  console.log('mousemove');//마우스가 요소 안에서 움직을때마다  발동
})

//유용한 마우스 이벤트

rectangle.addEventListener('mousedown',(event)=>{
  console.log('client' , event.clinetX , 'client' , event.clinetY);
})