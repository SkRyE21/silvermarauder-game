$(document).ready(function() {

  
  
  $('.kingofthieves').click(function() {
    $(this).animate({
        top: '-=60px'
      },
      function() {
        $(this).animate({
          top: '+=60px'
        });
      });
  });

  $(document).keydown(function(e) {
    $('.kingofthieves').keydown;
    switch (e.which) {

      //move left
      case 65:
        $('.kingofthieves').animate({
          left: "-=40px"
        }, 'fast');
        break;

        //move right
      case 68:
        $('.kingofthieves').animate({
          left: "+=40px"
        }, 'fast');
        break;
    };
  });

  $('#razorblade1').effect('shake', {
    times: 500
  }, 100000);

  $('#razorblade2').effect('shake', {
    times: 500
  }, 100000);
  $('#razorblade3').effect('shake', {
    times: 500
  }, 100000);
  $('#razorblade4').effect('shake', {
    times: 500
  }, 100000);
  $('#razorblade5').effect('shake', {
    times: 500
  }, 100000);

});