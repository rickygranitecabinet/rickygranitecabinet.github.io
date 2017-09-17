$("#slide_show_container > div:gt(0)").hide();

setInterval(function() {
  $('#slide_show_container > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slide_show_container');
}, 8000);
