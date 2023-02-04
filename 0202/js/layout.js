



$(function(){
    let a = $('#m_nav > ul > li > a');
$('#m_nav ul li span').click(function(){
    $(this).find(a).toggleClass('on')
    });
});