import { describe, it, expect, beforeEach, vi } from 'vitest';
import { initHamburgerMenu } from './hamburger-menu.js';

describe('Hamburger Menu', () => {
	let hamburger;
	let nav;
	let cleanup;

	beforeEach(() => {
		// Set up DOM
		document.body.innerHTML = `
			<button class="cp-hamburger" aria-expanded="false">
				<img class="icon-hamburger" src="" alt="">
				<img class="icon-close" src="" alt="">
			</button>
			<nav class="cp-nav">
				<ul>
					<li><a href="/">Home</a></li>
				</ul>
			</nav>
		`;

		hamburger = document.querySelector('.cp-hamburger');
		nav = document.querySelector('.cp-nav');
	});

	it('should initialize when hamburger and nav elements exist', () => {
		cleanup = initHamburgerMenu();
		expect(cleanup).toBeTypeOf('function');
	});

	it('should return null when hamburger element is missing', () => {
		hamburger.remove();
		const result = initHamburgerMenu();
		expect(result).toBeNull();
	});

	it('should return null when nav element is missing', () => {
		nav.remove();
		const result = initHamburgerMenu();
		expect(result).toBeNull();
	});

	it('should toggle active class on hamburger when clicked', () => {
		cleanup = initHamburgerMenu();

		expect(hamburger.classList.contains('active')).toBe(false);
		hamburger.click();
		expect(hamburger.classList.contains('active')).toBe(true);
		hamburger.click();
		expect(hamburger.classList.contains('active')).toBe(false);
	});

	it('should toggle active class on nav when hamburger is clicked', () => {
		cleanup = initHamburgerMenu();

		expect(nav.classList.contains('active')).toBe(false);
		hamburger.click();
		expect(nav.classList.contains('active')).toBe(true);
		hamburger.click();
		expect(nav.classList.contains('active')).toBe(false);
	});

	it('should toggle aria-expanded attribute', () => {
		cleanup = initHamburgerMenu();

		expect(hamburger.getAttribute('aria-expanded')).toBe('false');
		hamburger.click();
		expect(hamburger.getAttribute('aria-expanded')).toBe('true');
		hamburger.click();
		expect(hamburger.getAttribute('aria-expanded')).toBe('false');
	});

	it('should remove event listener when cleanup is called', () => {
		cleanup = initHamburgerMenu();

		hamburger.click();
		expect(hamburger.classList.contains('active')).toBe(true);

		// Cleanup and reset state
		cleanup();
		hamburger.classList.remove('active');
		nav.classList.remove('active');

		// Click should not toggle anymore
		hamburger.click();
		expect(hamburger.classList.contains('active')).toBe(false);
	});
});
