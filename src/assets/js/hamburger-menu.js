console.log('External hamburger script loaded!');

// Hamburger menu toggle
(function() {
  console.log('IIFE running');
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.cp-nav');
  
  console.log('Elements found:', hamburger, nav);

  if (hamburger && nav) {
    console.log('Adding event listener');
    hamburger.addEventListener('click', function() {
      console.log('Hamburger clicked!');
      hamburger.classList.toggle('active');
      nav.classList.toggle('active');
      
      // Update aria-expanded for accessibility
      const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', !isExpanded);
    });
  } else {
    console.log('Elements not found!');
  }
})();
