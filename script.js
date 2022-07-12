setInterval(function() {
    $('#clock').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
}, 100000000);

$(function() {
    $('#date').text(moment().format('MMMM Do YYYY'));
    $('#time').text(moment().format('h:mm:ss a'));
})