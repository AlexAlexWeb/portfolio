const reviewSiper = document.querySelector('.swiper-reviews');

if(reviewSiper) {
	const swiper = new Swiper('.swiper-reviews', {
		loop: true,
		autoHeight: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
	});
}