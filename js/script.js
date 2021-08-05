

$(document).ready(function(){
    $('#slider').slick({
      slidesToShow: 4,
      infinite: true,
      slidesToScroll: 4,
      dots: true,
      autoplay: true,
      autoplaySpeed: 2500,
      
      
      responsive: [
          {
              breakpoint: 992,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
              }
          },
         {
             breakpoint: 768,
             settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
             }
         },
         {
            breakpoint: 576,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               infinite: true,
               dots: true,
               adaptiveHeight: true,
         }   
        }  
      ],
      
    });
  });