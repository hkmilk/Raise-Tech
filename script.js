 $(function() {
      $('#nav > li').hover(function(){
            $('ul:not(:animated)',this).slideDown(300);
      },
      function() {
            $('ul',this).stop().hide();
        }
      );
   });