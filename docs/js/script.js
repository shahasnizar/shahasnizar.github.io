$(".book-button").click(function(){
    $(".bk-container").toggleClass("book-open");
});


// cache container
$container = $('.portfolio-items-wrapper');
if($container.length) {
    $container.imagesLoaded(function() {
        
        // initialize isotope
        $container.isotope({
          itemSelector : '.hentry',
          layoutMode : 'fitRows'
          //animationEngine : animEngine
        });
        
        
        // filters
        if ($container.data('isotope')) {
            var filters = $('#filters');
            if(filters.length) {
                filters.find('a').on("click", function() {
                    //alert('hoyt');
                    var selector = $(this).attr('data-filter');
                      $container.isotope({ filter: selector });
                      $(this).parent().addClass('current').siblings().removeClass('current');
                      return false;
                });
            }
        }
        
        setMasonry();
        setTimeout(function() { $container.isotope(); }, 20);	
        $(window).resize(function() {
            setTimeout(function() { setMasonry(); }, 600);				
        });
        
    });
}




// change the number of masonry columns based on the current container's width
function setMasonry() {
		
    if ($container.data('isotope')) {
    
        var containerW = $container.width();
        var items = $container.children('.article');
        var columns, columnWidth;
        var viewports = [ {
                width : 1200,
                columns : 5
            }, {
                width : 900,
                columns : 4
            }, {
                width : 600,
                columns : 3
            }, { 
                width : 320,
                columns : 2
            }, { 
                width : 0,
                columns : 1
            } ];
    
        for( var i = 0, len = viewports.length; i < len; ++i ) {
    
            var viewport = viewports[i];
    
            if( containerW > viewport.width ) {
    
                columns = viewport.columns;
                break;
    
            }
        }
    
        // set the widths (%) for each of item
        items.each(function(index, element) {
            var multiplier = $(this).hasClass('x2') && columns > 1 ? 2 : 1;
            var itemWidth = (Math.floor( containerW / columns ) * 100 / containerW) * multiplier ;
            $(this).css( 'width', itemWidth + '%' );
        });
    
        columnWidth = Math.floor( containerW / columns );
        $container.isotope().isotope( 'option', { masonry: { columnWidth: columnWidth } } );
    
    }

}