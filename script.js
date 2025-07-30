
//  Project - Restaurant Menu (Minimal Slider)
const images = [
  './media/a4_1.jpg',
  './media/a4_2.jpg',
  './media/a4_3.jpg',
  './media/a4_4.jpg'
];
let currentIndex = 0;

function showImage(index) {
  const img = document.getElementById('a4Slider');
  img.src = images[index];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}






// Project - Hushe Posters (Minimal Slider) 
const husheImages = [
  './media/hushe_poster1.jpg',
  './media/hushe_poster2.jpg',
  './media/hushe_poster3.jpg'
];
let husheIndex = 0;

function showHusheImage(index) {
  const img = document.getElementById('husheSlider');
  img.src = husheImages[index];
}

function nextHusheImage() {
  husheIndex = (husheIndex + 1) % husheImages.length;
  showHusheImage(husheIndex);
}

function prevHusheImage() {
  husheIndex = (husheIndex - 1 + husheImages.length) % husheImages.length;
  showHusheImage(husheIndex);
}





// Project - Dirleh Hotel A4 Digital Posters (Minimal Slider)
const a4dImages = [
  './media/a4d_1.jpg',
  './media/a4d_2.jpg',
  './media/a4d_3.jpg'
];
let a4dIndex = 0;

function showA4dImage(index) {
  const img = document.getElementById('a4dSlider');
  img.src = a4dImages[index];
}

function nextA4dImage() {
  a4dIndex = (a4dIndex + 1) % a4dImages.length;
  showA4dImage(a4dIndex);
}

function prevA4dImage() {
  a4dIndex = (a4dIndex - 1 + a4dImages.length) % a4dImages.length;
  showA4dImage(a4dIndex);
}


// Project - Hiring Posters (Minimal Slider)
const hiringImages = [
  './media/hiring_post1.jpg',
  './media/hiring_post2.jpg'
];
let hiringIndex = 0;

function showHiringImage(index) {
  const img = document.getElementById('hiringSlider');
  img.src = hiringImages[index];
}

function nextHiringImage() {
  hiringIndex = (hiringIndex + 1) % hiringImages.length;
  showHiringImage(hiringIndex);
}

function prevHiringImage() {
  hiringIndex = (hiringIndex - 1 + hiringImages.length) % hiringImages.length;
  showHiringImage(hiringIndex);
}





// Project - North Digit Posters (4 Images Slider) 
const northDigitImages = [
  './media/north_digit1.jpg',
  './media/north_digit2.jpg',
  './media/north_digit3.jpg',
  './media/north_digit4.jpg'
];
let northDigitIndex = 0;

function showNorthDigitImage(index) {
  const img = document.getElementById('northDigitSlider');
  img.src = northDigitImages[index];
}

function nextNorthDigitImage() {
  northDigitIndex = (northDigitIndex + 1) % northDigitImages.length;
  showNorthDigitImage(northDigitIndex);
}

function prevNorthDigitImage() {
  northDigitIndex = (northDigitIndex - 1 + northDigitImages.length) % northDigitImages.length;
  showNorthDigitImage(northDigitIndex);
}



// Project - Rewaj Restaurant Posters (2 Images Slider)
 const rewajImages = [
    './media/rewaj_restaurant1.jpg',
    './media/rewaj_restaurant2.jpg'
  ];
  let rewajIndex = 0;

  function showRewajImage(index) {
    const img = document.getElementById('rewajSlider');
    img.src = rewajImages[index];
  }

  function nextRewajImage() {
    rewajIndex = (rewajIndex + 1) % rewajImages.length;
    showRewajImage(rewajIndex);
  }

  function prevRewajImage() {
    rewajIndex = (rewajIndex - 1 + rewajImages.length) % rewajImages.length;
    showRewajImage(rewajIndex);
  }


// Project - Property Ad Posters (2 Images Slider)
const propertyImages = [
    './media/property_ad_1.png',
    './media/property_ad_2.png'
  ];
  let propertyIndex = 0;

  function showPropertyImage(index) {
    const img = document.getElementById('propertySlider');
    img.src = propertyImages[index];
  }

  function nextPropertyImage() {
    propertyIndex = (propertyIndex + 1) % propertyImages.length;
    showPropertyImage(propertyIndex);
  }

  function prevPropertyImage() {
    propertyIndex = (propertyIndex - 1 + propertyImages.length) % propertyImages.length;
    showPropertyImage(propertyIndex);
  }




  // Project - Royal Business Card (2 Images Slider)
const royalImages = [
    './media/royal_bc1.jpg',
    './media/royal_bc2.jpg'
  ];
  let royalIndex = 0;

  function showRoyalImage(index) {
    const img = document.getElementById('royalSlider');
    img.src = royalImages[index];
  }

  function nextRoyalImage() {
    royalIndex = (royalIndex + 1) % royalImages.length;
    showRoyalImage(royalIndex);
  }

  function prevRoyalImage() {
    royalIndex = (royalIndex - 1 + royalImages.length) % royalImages.length;
    showRoyalImage(royalIndex);
  }



// Mobile menu toggle
document.getElementById('mobile-menu-button').addEventListener('click', function () {
  let menu = document.getElementById('mobile-menu');
  let menuIcon = document.getElementById('icon-menu');
  let closeIcon = document.getElementById('icon-close');

  let isExpanded = menu.classList.toggle('hidden');
  menuIcon.classList.toggle('hidden', !isExpanded);
  closeIcon.classList.toggle('hidden', isExpanded);

  this.setAttribute('aria-expanded', !isExpanded);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offsetTop = target.offsetTop - 64; // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });

      // Close mobile menu if open
      const mobileMenu = document.getElementById('mobile-menu');
      if (!mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
        document.getElementById('icon-menu').classList.remove('hidden');
        document.getElementById('icon-close').classList.add('hidden');
      }
    }
  });
});

// Update the form submission script
document.getElementById('contact-form').addEventListener('submit', async function (e) {
  e.preventDefault();

  const submitBtn = document.getElementById('submit-btn');
  const successMessage = document.getElementById('success-message');
  const errorMessage = document.getElementById('error-message');

  // Hide previous messages
  successMessage.style.display = 'none';
  errorMessage.style.display = 'none';

  // Show loading state
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<div class="loading-spinner"></div>Sending...';

  // Get form data
  const formData = new FormData(this);
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message')
  };

  try {
    // Use your Vercel function endpoint
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (response.ok) {
      successMessage.style.display = 'block';
      this.reset();
    } else {
      throw new Error(result.message || 'Failed to send message');
    }
  } catch (error) {
    console.error('Error:', error);
    errorMessage.style.display = 'block';
  } finally {
    // Reset button state
    submitBtn.disabled = false;
    submitBtn.innerHTML = 'Send Message';
  }
});

// Add scroll effect to navbar
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('nav');
  if (window.scrollY > 50) {
    navbar.classList.add('bg-opacity-95');
  } else {
    navbar.classList.remove('bg-opacity-95');
  }
});


// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const iconMenu = document.getElementById('icon-menu');
const iconClose = document.getElementById('icon-close');

mobileMenuButton.addEventListener('click', () => {
  const isOpen = !mobileMenu.classList.contains('hidden');

  if (isOpen) {
    mobileMenu.classList.add('hidden');
    iconMenu.classList.remove('hidden');
    iconClose.classList.add('hidden');
  } else {
    mobileMenu.classList.remove('hidden');
    iconMenu.classList.add('hidden');
    iconClose.classList.remove('hidden');
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      // Close mobile menu if open
      mobileMenu.classList.add('hidden');
      iconMenu.classList.remove('hidden');
      iconClose.classList.add('hidden');
    }
  });
});

// Contact form handling
const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const successMessage = document.getElementById('success-message');
const errorMessage = document.getElementById('error-message');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  // Disable submit button
  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending...';

  // Hide previous messages
  successMessage.style.display = 'none';
  errorMessage.style.display = 'none';

  // Simulate form submission (replace with actual form handling)
  setTimeout(() => {
    // Reset button
    submitBtn.disabled = false;
    submitBtn.textContent = 'Send Message';

    // Show success message
    successMessage.style.display = 'block';

    // Reset form
    contactForm.reset();

    // Hide success message after 5 seconds
    setTimeout(() => {
      successMessage.style.display = 'none';
    }, 5000);
  }, 2000);
});

// Add scroll effect to navigation
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 100) {
    nav.classList.add('bg-opacity-95');
  } else {
    nav.classList.remove('bg-opacity-95');
  }
});