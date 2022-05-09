$("#registerTag").click(function(){
  $(".loginComponent").hide();
  $(".registerComponent").attr('hidden', false);
})

$("#loginTag").click(function(){
  $(".registerComponent").attr('hidden', true)
  $(".loginComponent").show()
})