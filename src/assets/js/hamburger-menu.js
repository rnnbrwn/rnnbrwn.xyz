console.log('External hamburger script loaded!');

(function () {
	const hamburger = document.querySelector('.cp-hamburger');
	const nav = document.querySelector('.cp-nav');

	if (hamburger && nav) {
		hamburger.addEventListener('click', function () {
			console.log('Hamburger clicked!');
			hamburger.classList.toggle('active');
			nav.classList.toggle('active');

			// Update aria-expanded for accessibility
			const isExpanded =
				hamburger.getAttribute('aria-expanded') === 'true';
			hamburger.setAttribute('aria-expanded', !isExpanded);
		});
	}
})();
