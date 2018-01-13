$(document).ready(function() {

	$('#fineness').selectric();
	$('#loan-plans').selectric();
	$('#discount').selectric();
	$('.tooltip').tooltipster();

	$("#stones-and-inserts").change(function() {
		if ($(this).prop('checked') == true) {
			$('.additional-conditions-container').animate({
				opacity: 0
			}, 500);
		} else {
			$('.additional-conditions-container').animate({
				opacity: 1
			}, 500);
		}
	});

	var weight;
	$('#weight').on('keyup', function() {
		weight = parseInt($('#weight').val());
	})
	$('#weight').blur(function() {
		$('#weight').val(weight + ' г');

		if(weight==undefined || weight != weight){
			$('#weight').val('');
		}
	});
});