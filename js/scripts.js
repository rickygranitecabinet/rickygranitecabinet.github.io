$("#slide_show_container > div:gt(0)").hide();

setInterval(function() {
  $('#slide_show_container > div:first')
    .fadeOut(1)
    .next()
    .fadeIn(100)
    .end()
    .appendTo('#slide_show_container');
}, 5000);