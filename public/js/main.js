// Turn on Bootstrap
    
// 15 days from now!
function get15dayFromNow() {
  return new Date(new Date().valueOf() + 60 * 1160);
}

var $clock = $('.clock');





$('#go').click(function() {
  //$clock.countdown(get15dayFromNow());
  $('.page1').hide()
  document.getElementById('surveycake').innerHTML = "<iframe width='100%' height='800' src='https://www.surveycake.com/s/NeQgy' style='overflow:hidden;border:#ddd 1px solid;' allowTransparency='true' frameborder='0'> </iframe>"
  setTimeout(function(){

    $clock.countdown(get15dayFromNow(), function(event) {
      //$(this).html(event.strftime('%D days %H:%M:%S'));
      $(this).html(event.strftime('%M:%S'));
      
      //console.log(event.offset.minutes , event.offset.seconds)
  
      //alert_reminder(event.offset.minutes , event.offset.seconds)
  
    });

   }, 5000);
});
//$('.alert_row').hide()
//function alert_reminder(minutes , seconds){
//    if (minutes==1 && seconds==0){
//        $('#alert-show').css('top',15);
//        $('#alert-show').show()
//        $('#alert-show1').css('top',15);
//        $('#alert-show1').show()
//        shake()
//    }
//}

//function shake(){
//    setInterval(function(){ 
//        $(".alert-card").hide();
//    }, 3000);
//}

