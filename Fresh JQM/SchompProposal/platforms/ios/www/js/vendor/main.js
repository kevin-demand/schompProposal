// Custom Javascript


  $(document).ready(function() {  
  		 $("#history-slider").swiperight(function() {  
    		  $(this).carousel('prev');  
	    		});  
		   $("#history-slider").swipeleft(function() {  
		      $(this).carousel('next');  
	   });  
	});  

