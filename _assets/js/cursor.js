$(document).ready(function(){
var cursor = $(".cursor");

  $(window).mousemove(function(e) {
    cursor.css({
      top: e.clientY - cursor.height() / 2,
      left: e.clientX - cursor.width() / 2
    });
  });

  $(window)
    .mouseleave(function() {
      cursor.css({
        opacity: "0"
      });
    })

    .mouseenter(function() {
      cursor.css({
        opacity: "1"
      });
    });

    $(".link")
      .mouseenter(function() {
        cursor.css({
          transform: "scale(2)",
          backgroundImage: 'none'
        });

      })

      .mouseleave(function() {
        cursor.css({
          transform: "scale(1)",

        });

        $( ".cursor" ).empty();
      });


    $(".invisible-link--top")
      .mouseenter(function() {
        cursor.css({
          backgroundImage: 'url("_uploads/big-arrow.svg")',
          backgroundColor: 'transparent',
          height: '100px',
          width: '100px',
          backgroundSize: 'contain',
          borderRadius: '0',
          transform: 'rotate(-90deg)'
        });
      })

      .mouseleave(function() {
        cursor.css({
          backgroundImage: 'none',
          backgroundColor: '#ffffff',
          height: '40px',
          width: '40px',
          backgroundSize: '16px 8px',
          borderRadius: '50%',
          transform: 'rotate(0deg)'
        });
      });


    $(".invisible-link--bottom")
      .mouseenter(function() {
        cursor.css({
          backgroundImage: 'url("_uploads/big-arrow.svg")',
          backgroundColor: 'transparent',
          height: '100px',
          width: '100px',
          backgroundSize: 'contain',
          borderRadius: '0',
          transform: 'rotate(90deg)'
        });
      })

      .mouseleave(function() {
        cursor.css({
          backgroundImage: 'none',
          backgroundColor: '#ffffff',
          height: '40px',
          width: '40px',
          backgroundSize: '16px 8px',
          borderRadius: '50%',
          transform: 'rotate(0deg)'
        });
      });

});
