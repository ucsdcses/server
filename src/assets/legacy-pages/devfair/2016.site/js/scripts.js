$(document).ready( () => {


  $( '#about' ).hover( () => {
    $( '#contactSection' ).stop().fadeOut( 500 );
    $( '#titleSection' ).stop().fadeOut( 500 );
    $( '#signupSection' ).stop().fadeOut( 500 );
    $( '#aboutSection' ).stop().fadeIn( 500 );
    $( '#fullPage' ).css({ transition : 'background 0.1s ease-in-out',
      'background': 'url("images/bg-19.gif") no-repeat center center fixed',
      '-webkit-background-size': 'cover',
      '-moz-background-size': 'cover',
      '-o-background-size': 'cover',
      'background-size': 'cover'
    });
    $( '#menu' ).css({
      transition : 'color 0.5s ease-in-out',
      'color': 'white'
    });
  }, () => {
    $( '#aboutSection' ).stop().fadeOut( 500 );
    $( '#titleSection' ).stop().fadeIn( 500 );
    $( '#fullPage' ).css({ transition : 'background 0.1s ease-in-out',
      'background': 'url("images/bg-title.gif") no-repeat center center fixed',
      '-webkit-background-size': 'cover',
      '-moz-background-size': 'cover',
      '-o-background-size': 'cover',
      'background-size': 'cover'
    });
    $( '#menu' ).css({
      transition : 'color 0.5s ease-in-out',
      'color': 'black'
    });
  });
  $( '#contact' ).hover( () => {
    $( '#aboutSection' ).stop().fadeOut( 500 );
    $( '#titleSection' ).stop().fadeOut( 500 );
    $( '#signupSection' ).stop().fadeOut( 500 );
    $( '#contactSection' ).stop().fadeIn( 500 );
    $( '#fullPage' ).css({ transition : 'background 0.1s ease-in-out',
      'background': 'url("images/bg-13.gif") no-repeat center center fixed',
      '-webkit-background-size': 'cover',
      '-moz-background-size': 'cover',
      '-o-background-size': 'cover',
      'background-size': 'cover'
    });
    $( '#menu' ).css({
      transition : 'color 0.5s ease-in-out',
      'color': 'white'
    });
  }, () => {
    $( '#contactSection' ).stop().fadeOut( 500 );
    $( '#titleSection' ).stop().fadeIn( 500 );
    $( '#fullPage' ).css({ transition : 'background 0.1s ease-in-out',
      'background': 'url("images/bg-title.gif") no-repeat center center fixed',
      '-webkit-background-size': 'cover',
      '-moz-background-size': 'cover',
      '-o-background-size': 'cover',
      'background-size': 'cover'
    });
    $( '#menu' ).css({
      transition : 'color 0.5s ease-in-out',
      'color': 'black'
    });
  });
  $( '#signup' ).hover( () => {
    $( '#aboutSection' ).stop().fadeOut( 500 );
    $( '#titleSection' ).stop().fadeOut( 500 );
    $( '#contactSection' ).stop().fadeOut( 500 );
    $( '#signupSection' ).stop().fadeIn( 500 );
    $( '#fullPage' ).css({ transition : 'background 0.1s ease-in-out',
      'background': 'black',
      '-webkit-background-size': 'cover',
      '-moz-background-size': 'cover',
      '-o-background-size': 'cover',
      'background-size': 'cover'
    });
    $( '#menu' ).css({
      transition : 'color 0.5s ease-in-out',
      'color': 'white'
    });
  }, () => { // Purposefully left empty
  });
});
