$(function(){

$(window).scroll(function(){
let sPos = $(this).scrollTop();
console.log(sPos)
});
// 스크롤 기능을 사용해 header,gnb에 서식 적용
if(sPos=800){
    $('header').addClass('h_on');    
    $('header.gnb a').addClass('on');
    $('header h1 img')
}else{
$('header').removeClass('h_on')
}





});