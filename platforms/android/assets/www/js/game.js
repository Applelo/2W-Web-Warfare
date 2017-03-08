$( function() {
  $( "#draggable" ).draggable();
<<<<<<< HEAD
  $( "#draggable2" ).draggable();
  $( "#draggable3" ).draggable();

=======
    $( "#draggable2" ).draggable();
      $( "#draggable3" ).draggable();
  $( "#droppable" ).droppable({
    drop: function( event, ui ) {
      $( this ).css('background', 'purple');
    }
  });
>>>>>>> origin/master
} );
