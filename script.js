$(document).ready(function(){

	$('.category-item').click(function(){
		var catProduct = $(this).attr('category');

		$('.product-item').hide();
		$('.product-item[category="'+catProduct+'"]').show();
	});
});