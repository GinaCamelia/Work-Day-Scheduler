$(document).ready(function(){
	const currentDay = moment().format('dddd, MMMM Do YYYY');
	$('#currentDay').html(currentDay);

	function checkTime() {
		let currentTime = moment().format('HH');
		// console.log(currentTime);
		$('.calendar-row').each(function(){
			let timeBlock = $(this).find('.time-element').attr('id');
			let textArea = $(this).find('.calendar-textarea');
			if(currentTime === timeBlock) {
				textArea.addClass('present').css('background-color','#adf7d1'); //green
			} else if(currentTime < timeBlock){
				textArea.addClass('future').css('background-color', '#f06868'); // yellow
			} else {
				textArea.addClass('past').css('background-color', '#606470'); //grey
			}
		});
	}

	checkTime();













})