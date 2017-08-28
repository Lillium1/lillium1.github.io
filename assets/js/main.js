$("#openNav").click(function () {
	$('.nav-section').css({
		'display':'block',
		'margin-top':'50px'
	});

	$('.fa-times').css({
		'display':'block',
	});

	$('.fa-bars').css({
		'display':'none',
	});

})

$("#closeNav").click(function () {
	$('.nav-section').css({
		'display':'none',

	});
	$('.fa-times').css({
		'display':'none',
	});
	$('.fa-bars').css({
		'display':'block',
	});

})

$(document).ready(function() {
	$("#masMenos").click(function() {
		$btn = $(this);
		$contenido = $(".contenido")

		$contenido.slideToggle(500, function () {
			$btn.append(function () {
            	$(".cambiar").remove();
            	return $contenido.is(":visible") ? '<p class="cambiar"><i class="fa fa-plus" aria-hidden="true"></i> Leer menos...</p>' : '<p class="cambiar"><i class="fa fa-plus" aria-hidden="true"></i> Leer más...</p>';
        	});
		})
	});
});
