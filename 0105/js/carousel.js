

//1.변수
const slide = document.querySelector('.slide');
const slide_img = document.querySelectorAll('.slide li');

const prev_btn = document.getElementById('b_left');
const next_btn = document.getElementById('b_right');
const btn = document.querySelectorAll('.button');

// li목록의 개수구하기 
const img_n = slide_img.length;
console.log(img_n);//5

const img_w = 300; //태그 넓이 300
const m = 30; // 마진 30
const s_con = 3; //화면에 컨텐츠 3개

let count = 0; //넓이에 0을 곱하게 해 한칸씩 이동하게 하기위해 300*0.을 -300*1 ..... 마지막 박스까지 

//감싸는 부모요소의 너비를 구하기 위해
slide.style.width=(img_w+m)*img_n-m+'px';
// (300+30)*5-30=1620


// 왼쪽으로 움직이는 슬라이드 함수
function mslide(n){
  slide.style.left=(img_w+m)*-n+'px';
  count = n;
  console.log(slide.style.left);
console.log(count);
}
// 왼쪽버튼 클릭시 왼쪽 방향으로 움직이게
prev_btn.addEventListener('click', function(){
  if(count > 0){
    mslide(count-1);
  }else{
    mslide(img_n-s_con);

  }
  // 클릭할때는 자동으로 움직이지 말아라
  clearInterval(Timer);
  
})
//오른쪽 버튼 클릭시 오른 방향으로 움직이게
next_btn.addEventListener('click', function(){
  if(count < img_n-s_con){
    mslide(count+1);
  }else{
    mslide(0);
  }
  clearInterval(Timer);
})

// 매 3초마다 자동으로 함수를 호출하여 움직이게 한다.
//시간 객체 - setInterval(함수명, 시간)

let Timer = setInterval(function(){
  if(count < img_n-s_con){
    mslide(count+1); 
  }else{
    mslide(0);
  }
},3000);

//마우스를 양쪽 버튼에서 빼면 다시 시간을 생성하여 자동으로 움직이게 한다.
  prev_btn.addEventListener('mouseout',function(){
      Timer = setInterval(function(){
        if(count < img_n-s_con){
          mslide(count+1); 
        }else{
          mslide(0);
        }
      },3000);
  });
  next_btn.addEventListener('mouseout',function(){
    Timer = setInterval(function(){
      if(count < img_n-s_con){
        mslide(count+1); 
      }else{
        mslide(0);
      }
    },3000);
});
