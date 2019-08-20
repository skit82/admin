$(document).ready(function() {

    $('.manager__caption-link, .stock__caption-link, .food__caption-link, .manager__redact-link, .food__redact, .stock__redact-link ').click(function() {
        $('.popup-fade').fadeIn();
        return false;
    });    
    
    $('.popup-close').click(function() {
        $(this).parents('.popup-fade').fadeOut();
        return false;
    });        

    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $('.popup-fade').fadeOut();
        }
    });
    
    $('.popup-fade').click(function(e) {
        if ($(e.target).closest('.popup, .popup-stock, .popup-dish').length == 0) {
            $(this).fadeOut();                    
        }
    });

    $("form-stock__remove").on("click", function(){
        if( $("input").val() != "" ) {
        alert("Вы уверены");
        }
    });

    $('.dish__descr-link, .dish__caption-link').click(function() {
        $('.rubric-fade').fadeIn();
        return false;
    });    
    
    $('.popup-close').click(function() {
        $(this).parents('.rubric-fade').fadeOut();
        return false;
    });        

    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $('.rubric-fade').fadeOut();
        }
    });
    
    $('.rubric-fade').click(function(e) {
        if ($(e.target).closest('.popup-rubric').length == 0) {
            $(this).fadeOut();                    
        }
    });

    // $("#datepicker").datepicker({
    // });

    $(".datepickerTimeField").datepicker({
        changeMonth: true,
        changeYear: true,
        dateFormat: 'dd.mm.yy',
        firstDay: 1, changeFirstDay: false,
        navigationAsDateFormat: false,
        duration: 0,
    });
    // $("#datedopicker").datepicker();
    // $('.calendar-img').click(function() {
    // $("#datepicker").focus();
    // });

    $('.time-img').click(function() {
    $("#timepicker").focus();
    });
    $('.time-img').click(function() {
    $("#datepicker").focus();
    });

    // $('.filter-img').on('click', function(){
    // $('.filter-container__wrraper').css('opacity','1');
    // });

    $('.filter-img').on('click', function() {
        $('.filter-container__wrraper').slideToggle(100, function(){
          if($(this).css('display') === 'none'){
          $(this).removeAttr('style')
          };
      });
    })

    // $('.calendar-input').on('click', function(){
     // $('.data__text').css('display','block');
    // });

    // $('.calendar-input').on('click', function(){
     // $('.data__block').css('display','block');
    // });

    // $('.time-input').on('click', function(){
     // $('.time-text').css('display','block');
    // });
});