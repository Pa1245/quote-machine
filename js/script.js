$(document).ready(function() {
  $('#genQuote').click(function () {
    var randomNum = Math.floor(Math.random() * (quote.length));
    $('#quoteDisplay').html(quote[randomNum]);
  });
});


var quote = ['We must let go of the life we have planned, so as to accept the one that is waiting for us.',
'When you\'re surrounded by people who share a passionate commitment around a common purpose, anything is possible.',
'Setting goals is the first step in turning the invisible into the visible.',
'It is in your moments of decision that your destiny is shaped.',
'Stay committed to your decisions, but stay flexible in your approach.'];



