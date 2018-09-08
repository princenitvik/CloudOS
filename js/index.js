$(function() {
  $("#Icon1").draggable({
    grid: [80, 80]
  });
});
$(function() {
  $("#Icon2").draggable({
    grid: [80, 80]
  });
});

$("#Icon1").dblclick(function() {
  $('#ComWin').removeClass('hidden');
});

$("#ClsBtn").click(function() {
  $('#ComWin').addClass('hidden');
});

$("#Icon2").dblclick(function() {
  $('#NoteWin').removeClass('hidden');
});

$("#ClsBtn1").click(function() {
  $('#NoteWin').addClass('hidden');
});

$(function() {
  $("#ComWin").draggable({
    handle: "#ctrlbar"
  });
});

$(function() {
  $("#NoteWin").draggable({
    handle: "#ctrlbar2"
  });
});

Materialize.toast('Double click on icons to open', 4000)

$(document).ready(function() {
  $('input#input_text, textarea#textarea1').characterCounter();
});
$(document).ready(function() {
  $('input#input_text, textarea#textarea2').characterCounter();
});

$(document).ready(function() {
  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal-trigger').leanModal();
});

function FNA() {
  Materialize.toast('Function not available', 4000)
}

if ($(window).width() <= 1023) { 
  $('#ErrorWS').removeClass('hidden');
}