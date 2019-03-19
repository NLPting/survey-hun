

$('#go').click(function() {
  //$clock.countdown(get15dayFromNow());
  var items = Array('http://localhost:3001/tmp' ,'http://localhost:3001/tmp1', '0');
  var item = items[Math.floor(Math.random()*items.length)];
  if (item=='http://localhost:3001/tmp'){
    window.location.href = "http://localhost:3001/tmp"
  }
  if (item=='http://localhost:3001/tmp1'){
    window.location.href = "http://localhost:3001/tmp1"
  }

  var pages = Array('https://www.surveycake.com/s/8aNgP' ,'https://www.surveycake.com/s/yo9V0', 'https://www.surveycake.com/s/l03OO','https://www.surveycake.com/s/GRLON');
  var page = pages[Math.floor(Math.random()*pages.length)];

  $('.sticky').show()
  $('.page1').hide()
  document.getElementById('surveycake').innerHTML = "<iframe width='100%' height='800' src='"+page+"'style='overflow:hidden;border:#ddd 1px solid;' allowTransparency='true' frameborder='0'> </iframe>"
  
});

