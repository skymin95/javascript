
    $(function () {
      $(".toggle").on("click", function () {
        $("aside").addClass("on");
      });
      $(".fa-solid").on("click", function () {
        $("aside").removeClass("on");
      });


      $('.gnb-item').click(function () {
        $(this).toggleClass("on");
        $('.gnb-item').not($(this)).removeClass("on");
      })
    });
    