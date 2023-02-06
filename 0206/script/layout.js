$(function(){

  $(window).scroll(function(){
    let sPos = $(this).scrollTop();
    console.log(sPos);

  // 스크롤 기능을 사용하여 header, gnb에 서식을 적용하기
    if(sPos>=800){
      $('header').addClass('h_on');
      $('header .gnb a').addClass('on');
      $('header i.fas').addClass('on');
      $('header h1 img').attr('src','./images/logo-casper_black.png');

    }else{
      $('header').removeClass('h_on');
      $('header .gnb a').removeClass('on');
      $('header i.fas').removeClass('on');
      $('header h1 img').attr('src','./images/logo-casper-white.png');
    }
  });

  //header에 마우스 오버시 로고, 내비게이션, i.fas에 서식적용하고
  $('header').hover(function(){
    $(this).addClass('h_on');
    $('header .gnb a').addClass('on');
    $('header i.fas').addClass('on');
    $('header h1 img').attr('src','./images/logo-casper_black.png');

    //header에 마우스 아웃시 로고, 내비게이션, i.fas에 서식제거하기
  },function(){
    $(this).removeClass('h_on');
    $('header .gnb a').removeClass('on');
    $('header i.fas').removeClass('on');
    $('header h1 img').attr('src','./images/logo-casper-white.png');
  });

   //아래로 이동하기 버튼을 클릭시 top콘텐츠가 상단으로 올라오게 하기
  $('#next_btn').click(function(){
    $('html, body').animate({scrollTop:$('#top3').offset().top-70},500,'easeOutQuint');
  });

    //내비게이션 클릭시 해당 콘텐츠가 상단으로 올라오게 하기
    const gnb = $('header .gnb li, #m_nav li');

    gnb.click(function(e){
      let n = $(this).index();
      console.log(n);
      $('html, body').animate({scrollTop:$('main section').eq(n+2).offset().top-70},400,'easeOutCubic');
      return false;
    });

});