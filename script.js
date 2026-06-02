const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isOpen));
    navLinks.classList.toggle('is-open');
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navToggle.setAttribute('aria-expanded', 'false');
      navLinks.classList.remove('is-open');
    });
  });
}

const profileImage = document.querySelector('.profile-photo img');

if (profileImage) {
  const profileFrame = profileImage.closest('.profile-photo');

  if (profileImage.complete && profileImage.naturalWidth > 0) {
    profileFrame.classList.add('is-loaded');
  }

  profileImage.addEventListener('load', () => {
    profileFrame.classList.add('is-loaded');
  });

  profileImage.addEventListener('error', () => {
    profileFrame.classList.remove('is-loaded');
  });
}
