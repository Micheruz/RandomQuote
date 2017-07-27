<!--Generate Quote -->
$.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(a) {
  $("#quote").html("<h3>" + a.quoteText + "</h3>");
  $("#quote").append("<p id='author'>- " + a.quoteAuthor + "</p>");
});
<!--Generate New Quote -->
$("#switch").click(function() {
  $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(a) {
    $("h3, #author").fadeTo('fast', 0, function() {
      $("#quote").html("<h3>" + a.quoteText + "</h3>");
      <!--Check if author exists -->
      if (a.quoteAuthor == "") {
        $("#quote").append("<p id='author'> - Unknown</p>");
      } else {
        $("#quote").append("<p id='author'> - " + a.quoteAuthor + "</p>");
      }
    });
  });
})
<!--Send Quote to Twitter -->
$("#tweet").click(function getQuote() {
  quote = $("#quote").html();
  var url = $.trim($(quote).text());
  var link = "https://twitter.com/intent/tweet/?text=" + url;
  $("#tweet").attr("href", link);
});
