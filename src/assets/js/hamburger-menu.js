// Export for testing
export function initHamburgerMenu() {
	const hamburger = document.querySelector('.cp-hamburger');
	const nav = document.querySelector('.cp-nav');

	if (!hamburger || !nav) {
		return null;
	}

	const handleClick = () => {
		hamburger.classList.toggle('active');
		nav.classList.toggle('active');

		// Update aria-expanded for accessibility
		const isExpanded =
			hamburger.getAttribute('aria-expanded') === 'true';
		hamburger.setAttribute('aria-expanded', !isExpanded);
	};

	hamburger.addEventListener('click', handleClick);

	// Return cleanup function for testing
	return () => {
		hamburger.removeEventListener('click', handleClick);
	};
}

// Auto-initialize when loaded in browser (not in test environment)
if (typeof window !== 'undefined' && !window.vitest) {
	initHamburgerMenu();
}
