// Turn on Bootstrap
$('.sticky').hide()
// 15 days from now!
function get15dayFromNow() {
  return new Date(new Date().valueOf() + 60 * 1000 * 4);
}
var $clock = $('.sticky');
$('#alert-show1').hide()
$('.banner').hide()
$('.intro').hide()


$('#go').click(function() {

    var items = Array('https://www.surveycake.com/s/edv3X' , 'https://www.surveycake.com/s/9k4O7');
    var item = items[Math.floor(Math.random()*items.length)];
    console.log(item)
    $('.sticky').show()
    $('.page1').hide()
    document.getElementById('surveycake').innerHTML = "<iframe width='100%' height='800' src='"+item+"'style='overflow:hidden;border:#ddd 1px solid;' allowTransparency='true' frameborder='0'> </iframe>"
    setTimeout(function(){

        $clock.countdown(get15dayFromNow(), function(event) {
          $(this).html(event.strftime('%M:%S'));
          
          //console.log(event.offset.minutes , event.offset.seconds)
      
        });
    
       }, 5000);
})

