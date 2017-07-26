
var scrollAnimAllowed = true;

$(window).scroll(
  function() {

    if ( scrollAnimAllowed ) {
      scrollAnimAllowed = false;

      var top = 0;
      top = $(window).scrollTop();

      if(top < $('#what-text').offset().top - 250){
        $("#homeBut").parent().children().removeClass("current");
        $("#homeBut").addClass("current");
      }

      else if((top >= $('#what-text').offset().top - 250) && (top < $('#stud-text').offset().top - 250)){
        $("#aboutBut").parent().children().removeClass("current");
        $("#aboutBut").addClass("current");
      }    

      else if((top >= $('#stud-text').offset().top - 250) && (top < $('#cust-quotes').offset().top - 250)){      
        $("#studBut").parent().children().removeClass("current");
        $("#studBut").addClass("current");

      } else {
        $("#sponBut").parent().children().removeClass("current");
        $("#sponBut").addClass("current");

      }
    }

    setTimeout(function() {
      scrollAnimAllowed = true;

    }, 300);
  });

// YES YES YES I KNOW I REPLICATED THE DAMN FUNCTIONS HERE AND I SHOULD
// HAVE BETTER STYLE AND CODING PRACTICE IN GENERAL BUT I DON'T WANT TO 
// SPEND FOREVER ON THIS SITE, I'VE GOT A GIRLFRIEND AND A JOB AND WANT
// TO GO BUY A COFFEE. MAYBE SOMEONE CAN FIX THIS IN THE FUTURE. IT'S NOT
// THAT BIG A DEAL, WHY ARE YOU READING THIS ANYWAYS, SHEESH!

// Page Transition Handling
$('#students-button').click(function() {
  $('html,body').animate({
    scrollTop: $('#what-text').offset().top - 40},
    'slow');
  $("#aboutBut").parent().children().removeClass("current");
  $("#aboutBut").addClass("current");
});

// YES YES YES I KNOW I REPLICATED THE DAMN FUNCTIONS HERE AND I SHOULD
// HAVE BETTER STYLE AND CODING PRACTICE IN GENERAL BUT I DON'T WANT TO 
// SPEND FOREVER ON THIS SITE, I'VE GOT A GIRLFRIEND AND A JOB AND WANT
// TO GO BUY A COFFEE. MAYBE SOMEONE CAN FIX THIS IN THE FUTURE. IT'S NOT
// THAT BIG A DEAL, WHY ARE YOU READING THIS ANYWAYS, SHEESH!

$('#homeBut').click(function() {
  $('html,body').animate({
    scrollTop: $('#bod').offset().top - 80},
    'slow');
  $("#homeBut").parent().children().removeClass("current");
  $("#homeBut").addClass("current");
});

// YES YES YES I KNOW I REPLICATED THE DAMN FUNCTIONS HERE AND I SHOULD
// HAVE BETTER STYLE AND CODING PRACTICE IN GENERAL BUT I DON'T WANT TO 
// SPEND FOREVER ON THIS SITE, I'VE GOT A GIRLFRIEND AND A JOB AND WANT
// TO GO BUY A COFFEE. MAYBE SOMEONE CAN FIX THIS IN THE FUTURE. IT'S NOT
// THAT BIG A DEAL, WHY ARE YOU READING THIS ANYWAYS, SHEESH!

$('#aboutBut').click(function() {
  $('html,body').animate({
    scrollTop: $('#what-text').offset().top - 80},
    'slow');
  $("#aboutBut").parent().children().removeClass("current");
  $("#aboutBut").addClass("current");
});

// YES YES YES I KNOW I REPLICATED THE DAMN FUNCTIONS HERE AND I SHOULD
// HAVE BETTER STYLE AND CODING PRACTICE IN GENERAL BUT I DON'T WANT TO 
// SPEND FOREVER ON THIS SITE, I'VE GOT A GIRLFRIEND AND A JOB AND WANT
// TO GO BUY A COFFEE. MAYBE SOMEONE CAN FIX THIS IN THE FUTURE. IT'S NOT
// THAT BIG A DEAL, WHY ARE YOU READING THIS ANYWAYS, SHEESH!

$('#studBut').click(function() {
  $('html,body').animate({
    scrollTop: $('#stud-text').offset().top - 80},
    'slow');
  $("#studBut").parent().children().removeClass("current");
  $("#studBut").addClass("current");
});

// YES YES YES I KNOW I REPLICATED THE DAMN FUNCTIONS HERE AND I SHOULD
// HAVE BETTER STYLE AND CODING PRACTICE IN GENERAL BUT I DON'T WANT TO 
// SPEND FOREVER ON THIS SITE, I'VE GOT A GIRLFRIEND AND A JOB AND WANT
// TO GO BUY A COFFEE. MAYBE SOMEONE CAN FIX THIS IN THE FUTURE. IT'S NOT
// THAT BIG A DEAL, WHY ARE YOU READING THIS ANYWAYS, SHEESH!

$('#sponBut').click(function() {
  $('html,body').animate({
    scrollTop: $('#spon-text').offset().top - 80},
    'slow');
  $("#sponBut").parent().children().removeClass("current");
  $("#sponBut").addClass("current");
});

// YES YES YES I KNOW I REPLICATED THE DAMN FUNCTIONS HERE AND I SHOULD
// HAVE BETTER STYLE AND CODING PRACTICE IN GENERAL BUT I DON'T WANT TO 
// SPEND FOREVER ON THIS SITE, I'VE GOT A GIRLFRIEND AND A JOB AND WANT
// TO GO BUY A COFFEE. MAYBE SOMEONE CAN FIX THIS IN THE FUTURE. IT'S NOT
// THAT BIG A DEAL, WHY ARE YOU READING THIS ANYWAYS, SHEESH!

$('#homeBut2').click(function() {
  $('html,body').animate({
    scrollTop: $('#bod').offset().top - 40},
    'slow');
});

// YES YES YES I KNOW I REPLICATED THE DAMN FUNCTIONS HERE AND I SHOULD
// HAVE BETTER STYLE AND CODING PRACTICE IN GENERAL BUT I DON'T WANT TO 
// SPEND FOREVER ON THIS SITE, I'VE GOT A GIRLFRIEND AND A JOB AND WANT
// TO GO BUY A COFFEE. MAYBE SOMEONE CAN FIX THIS IN THE FUTURE. IT'S NOT
// THAT BIG A DEAL, WHY ARE YOU READING THIS ANYWAYS, SHEESH!

$('#aboutBut2').click(function() {
  $('html,body').animate({
    scrollTop: $('#what-text').offset().top - 40},
    'slow');
});

// YES YES YES I KNOW I REPLICATED THE DAMN FUNCTIONS HERE AND I SHOULD
// HAVE BETTER STYLE AND CODING PRACTICE IN GENERAL BUT I DON'T WANT TO 
// SPEND FOREVER ON THIS SITE, I'VE GOT A GIRLFRIEND AND A JOB AND WANT
// TO GO BUY A COFFEE. MAYBE SOMEONE CAN FIX THIS IN THE FUTURE. IT'S NOT
// THAT BIG A DEAL, WHY ARE YOU READING THIS ANYWAYS, SHEESH!

$('#studBut2').click(function() {
  $('html,body').animate({
    scrollTop: $('#stud-text').offset().top - 40},
    'slow');
});

// YES YES YES I KNOW I REPLICATED THE DAMN FUNCTIONS HERE AND I SHOULD
// HAVE BETTER STYLE AND CODING PRACTICE IN GENERAL BUT I DON'T WANT TO 
// SPEND FOREVER ON THIS SITE, I'VE GOT A GIRLFRIEND AND A JOB AND WANT
// TO GO BUY A COFFEE. MAYBE SOMEONE CAN FIX THIS IN THE FUTURE. IT'S NOT
// THAT BIG A DEAL, WHY ARE YOU READING THIS ANYWAYS, SHEESH!

$('#sponBut2').click(function() {
  $('html,body').animate({
    scrollTop: $('#spon-text').offset().top - 40},
    'slow');
});
