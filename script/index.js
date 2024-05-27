window.addEventListener('DOMContentLoaded', () => {
	const next = document.querySelector('.frst_btn');
	const prev = document.querySelector('.scnd_btn');
	const navigations = document.querySelectorAll('.circle');
	const slides = document.querySelectorAll('.photo')


	let slideIndex = 1;

	showSlides(slideIndex);

	function showSlides(n) {
		if(n > slides.length) {
			slideIndex = 1;
		};

		if(n < 1) {
			slideIndex = slides.length;
		};

		slides.forEach(item => {
			item.classList.remove('show-photo');
			item.classList.add('hide-photo');
		});

		slides[slideIndex - 1].classList.remove('hide-photo');
		slides[slideIndex - 1].classList.add('show-photo');

		navigations.forEach((item, i) => {
			item.classList.remove('color-circle');

			if(i === slideIndex - 1) {
				item.classList.add('color-circle');
			}
		})
	};

	function plusSlides(n) {
		showSlides(slideIndex += n);
	};

	next.addEventListener('click', () => {
		plusSlides(-1);
	});

	prev.addEventListener('click', () => {
		plusSlides(1);
	});
});