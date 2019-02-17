// Turn on Bootstrap

$('#survery').hide()
$('#alert-show').hide()
$('#alert-show1').hide()
    
// 15 days from now!
function get15dayFromNow() {
  return new Date(new Date().valueOf() + 60 * 1160);
}

var $clock = $('#clock');





$('#btn-reset').click(function() {
  //$clock.countdown(get15dayFromNow());
  $clock.countdown(get15dayFromNow(), function(event) {
    //$(this).html(event.strftime('%D days %H:%M:%S'));
    $(this).html(event.strftime('%M:%S'));
    $('#btn-reset').hide()
    $('#btn-r').css('padding',0);
    $('#content').hide()
    $('#card-1').css('top',10);
    $('#survery').show()
    //console.log(event.offset.minutes , event.offset.seconds)

    alert_reminder(event.offset.minutes , event.offset.seconds)

  });
});
$('.alert_row').hide()
function alert_reminder(minutes , seconds){
    if (minutes==1 && seconds==0){
        $('#alert-show').css('top',15);
        $('#alert-show').show()
        $('#alert-show1').css('top',15);
        $('#alert-show1').show()
        shake()
    }
}

function shake(){
    setInterval(function(){ 
        $(".alert-card").hide();
    }, 3000);
}




