function fitRows( $container, options ) {
   var cols = options.numColumns,
       $els = $container.children(),
       maxH = 0, j,
       doSize;
   doSize = ( $container.width() != $els.outerWidth(true) );
   $els.each(function( i, p ) {
      var $p = $( p ), h;
      $p.css( 'min-height', '' );
      if ( !doSize ) return;
      maxH = Math.max( $p.outerHeight( true ) + 1, maxH );
      if ( i % cols == cols - 1 || i == cols - 1 ) {
         for ( j=cols;j;j--) {
            $p.css( 'min-height', maxH );
            $p = $p.prev();
         }
         maxH = 0;
      }
   });
}
$(function() {
   var opts = {
      numColumns: 4
   };
   fitRows( $( '.tiles' ), opts );
   $( window ).on( 'resize', function() {
      fitRows( $( '.tiles' ), opts );
   });
});