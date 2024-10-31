console.log('Hello Javascript'); //잘 불러와졌나 확인

//1) get 메서드
document.getElementById(title)//아이디에 의한 엘리먼트(속성)을 가져오겠다는 뜻
title.textContent = '헬스 3대 운동'; //h2에 content 운동을 헬스 3대 운동으로 바꿈(html 조작)


let items = document.getElementsByClassName('item')
console.log(items);//items라는 클래스를 가지고 있는 엘리먼트를 모두 불러옴
console.log('스쿼드: ', items[0]); //items라는 클래스를 가지고 있는 엘리먼트중 첫번째 요소를 불러옴
console.log('벤치프레스: ', items[1]);
console.log('데드리프트: ', items[2]);

let liList = document.getElementsByTagName('li')//li를 모두 불러옴
console.log(liList);

//2) HTML(DOM) 요소 쿼리
let h2 = document.querySelector('#title')//get과는 다르게 css 선택자(# , .)를 넣어준다
console.log('h2: ', h2);

let item = document.querySelector('.item')
console.log('query item' , item);//.item이 여러개인데 하나만 호출된다 (이유: querySelector는 하나의 엘리먼트만 호출한다


let itemAll = document.querySelectorAll('.item')
console.log('itemAll[0]: ' , itemAll[0]);
console.log('itemAll[1]: ' , itemAll[1]);
console.log('itemAll[2]: ' , itemAll[2]);

//content 제어
h2.textContent = '<span> 운동!!!</span>';//출력결과 :'<span> 운동!!!</span> content를 바꿈
h2.innerHTML = '<span> 운동@@@</span>' //출력결과 :운동@@@ //태그까지 바꿈
//*주의* 이전에 값은 지워지고 바뀜
// document.querySelector('body').innerHTML = '<strong>운동</strong>' 
//body안에 값들은 모두 지워지고 운동만 남은걸 볼수있음

//속성 제어
let input = document.querySelector('input');
input.setAttribute('placeholder' , '헬스 운동을 입력해주세요!!')//input에 placeholder 값 변경 //사용법:먼저 바꾸고싶은 속성 입력 -> 바꿀 속성의 값 입력
input.setAttribute('required', '') //속성의 값이 없는 경우는 두번쨰 ''안에 값 생략
input.removeAttribute('placeholder')//속성 지우기

//HTML 요소 스타일링
let helloItem = document.querySelector('.hello');
console.log(helloItem);
console.log('helloItem: ' , helloItem);
// helloItem.style.color = 'blue';
// helloItem.style.backgroundColor = 'red';

helloItem.classList.add('dark', 'one') //classList에는 .빼기
// helloItem.classList.add('light')
// helloItem.classList.remove('light') remove = 지우기
