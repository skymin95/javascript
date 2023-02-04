$(function(){

  let gnb = $('.gnb');
  // 메인메뉴에 마우스 오버시
  gnb.mouseenter(function(){
    $('#h_bottom').stop().animate({'height':'320px'},500, 'easeInExpo');
    $('.sub').fadeIn(1000);
  });

  //메인메뉴에 마우스 아웃시
  gnb.mouseleave(function(){
    $('#h_bottom').stop().animate({'height':'46px'},500,'easeInExpo');
    $('.sub').fadeOut(500);
  });

  // 메인 좌, 우 슬라이드
  let l_btn = $('.slide i.fa-angle-left'); 
  let r_btn = $('.slide i.fa-angle-right'); 
  let img_w = $('.slide img').width(); //이미지 너비 자동으로 구해줌

  //브라우저창의 크기가 변하면
  $(window).resize(function(){
    //이미지 크기를 다시 계산하여 변수에 대입한다.
    img_w = $('.slide img').width(); 
  });

  //1. 5번 이미지를 1번의 앞쪽으로 자리를 재배치한다.
  $('.slide li:last-child').insertBefore('.slide li:first-child');
  $('.slide ul').css('margin-left',-img_w);

  //2. 움직이는 함수
  function moveLeft(){
    //console.log('왼쪽 이동해요~');
    //왼쪽으로 3200만큼 이동하고 
    $('.slide ul').animate({'margin-left':-img_w*2},500,function(){
      //왼쪽 첫번째 li태그를 마지막 li태그의 뒤쪽에다가 자리를 옮긴다.
      $('.slide li:first-child').insertAfter('.slide li:last-child');
      $('.slide ul').css('margin-left',-img_w);
    });
  }
  function moveRight(){
    $('.slide ul').animate({'margin-left':'0px'},500,function(){
      //오른쪽 마지막 li태그를 왼쪽 첫번째 li태그의 앞에 자리를 옮긴다.
      $('.slide li:last-child').insertBefore('.slide li:first-child');
      $('.slide ul').css('margin-left',img_w);
    });
  }

  //3. 시간객체로 3초마다 함수 호출하기
  let Timer = setInterval(moveLeft, 3000);

  //4. 좌, 우버튼 클릭시 각각 해당하는 함수 호출하여 움직이게 하기
  l_btn.click(function(){
    moveLeft();
  });

  r_btn.click(function(){
    moveRight();
  });

// 좌, 우 버튼에 마우스 오버시 시간을 제거해서 슬라이드 멈추게하고
  $('.slide i.fas').hover(function(){
    clearInterval(Timer);
  },function(){ //다시 마우스 빼면 시간을 넣어서 움직이게 한다.
    Timer = setInterval(moveLeft, 3000);
  });

});