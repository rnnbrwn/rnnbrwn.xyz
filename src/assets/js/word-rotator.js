// Word rotation functionality
// Add your words to this array - they will be randomly selected on page load
const words = ['DELICIOUS', 'DELIGHTFUL'];

function getRandomWord() {
	return words[Math.floor(Math.random() * words.length)];
}

// Update the word when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
	const wordElement = document.getElementById('rotating-word');
	if (wordElement) {
		wordElement.textContent = getRandomWord();
	}
});
