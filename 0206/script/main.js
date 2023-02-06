$(function(){

    // 모달 띄우기
    
    let modal = `
    <div class = "modal">
    <div class = "m_inner">
    <img src="./images/pc_prod_notice_20230203.jpg" alt="모달배너">
    <p>
    <input type="checkbox" id="ch"><lable for="ch">일주일간 열지 않음</lable><a href="#" title="닫기">닫기</a>
    </p>
    </div>
    </div>
    `;
    
    $('body').append(modal);

    let ch = $('.modal #ch'); //체크박스 변수선언

    // 쿠키파일이 현재 브라우저 존재하면 모달창이 안나오도록 한다.
    if($.cookie('popup') == 'none'){
        $('.modal').hide();
    }

    // 쿠키의 존재여부를 체크해 쿠키를 생성하거나 모달을 숨긴다.
    function closeModal(){
        if(ch.is(':checked')){//체크박스 케츠한 경우라면 쿠키를 생성
            $.cookie('popup', 'none' ,{expires:7,path:'/'});
        }
        // 체크박스에 체크 안한경우는 
        $('.modal').hide();
    }
    
    //닫기 버튼을 클릭하여 closeModal함수를 동작하게한다.
    $('.modal a').click(function(){
        closeModal();
    });







});