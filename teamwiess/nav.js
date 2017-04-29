$(document).ready(function() {
  $('.question1').click(function(){
    $('.new_member_box_display').html($('#answer1').html());
  })

  $('.question2').click(function(){
    $('.new_member_box_display').html($('#answer2').html());
  })

  $('.question3').click(function(){
    $('.new_member_box_display').html($('#answer3').html());
  })

  $('.question4').click(function(){
    $('.new_member_box_display').html($('#answer4').html());
  })
  
});//end of ready