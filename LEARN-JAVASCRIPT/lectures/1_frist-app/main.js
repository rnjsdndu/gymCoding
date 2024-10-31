console.log('Hello!!!');
console.log('Hello@@@');
console.log('Hello@@@', 'world' , 'javascript');

// alert("경고창");

//변수
let str = 'Hello Javascript'
let number = 23
console.log("문자열: " , str);
console.log("number: " , number);
//변수

//함수
function sayhello() {
  console.log('Hello1');
  console.log('Hello2');
  console.log('Hello3');
}
//코드를 재사용하기위해 그룹화한것
sayhello();
//함수

//객체
let obj = {
  number: 30, //프로퍼티:객체가 갖고있는 변수
  
  sayhello: function() {
    console.log('Hello1');
    console.log('Hello2');
    console.log('Hello3');
  },
}


console.log(obj.number); //obj 안에있는 number만 출력하고싶을때