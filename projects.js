// Auto-play configuration
const AUTO_PLAY_INTERVAL = 4000; // 4 seconds
const PAUSE_DURATION = 8000; // 8 seconds pause after manual interaction

// Project - Restaurant Menu (Auto + Manual Slider)
const images = [
    './media/a4_1.jpg',
    './media/a4_2.jpg',
    './media/a4_3.jpg',
    './media/a4_4.jpg'
];
let currentIndex = 0;
let a4Interval;

function showImage(index) {
    const img = document.getElementById('a4Slider');
    img.src = images[index];
    currentIndex = index;
}

function nextA4Image() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevA4Image() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

function startA4AutoPlay() {
    stopA4AutoPlay();
    document.getElementById('a4Container').classList.add('playing');
    a4Interval = setInterval(nextA4Image, AUTO_PLAY_INTERVAL);
}

function stopA4AutoPlay() {
    if (a4Interval) {
        clearInterval(a4Interval);
        a4Interval = null;
    }
    document.getElementById('a4Container').classList.remove('playing');
}

function pauseA4AutoPlay() {
    stopA4AutoPlay();
    document.getElementById('a4Container').classList.add('paused');
    setTimeout(() => {
        document.getElementById('a4Container').classList.remove('paused');
        startA4AutoPlay();
    }, PAUSE_DURATION);
}

function manualNextA4Image() {
    nextA4Image();
    pauseA4AutoPlay();
}

function manualPrevA4Image() {
    prevA4Image();
    pauseA4AutoPlay();
}

// Project - Hushe Posters (Auto + Manual Slider)
const husheImages = [
    './media/hushe_poster1.jpg',
    './media/hushe_poster2.jpg',
    './media/hushe_poster3.jpg'
];
let husheIndex = 0;
let husheInterval;

function showHusheImage(index) {
    const img = document.getElementById('husheSlider');
    img.src = husheImages[index];
    husheIndex = index;
}

function nextHusheImage() {
    husheIndex = (husheIndex + 1) % husheImages.length;
    showHusheImage(husheIndex);
}

function prevHusheImage() {
    husheIndex = (husheIndex - 1 + husheImages.length) % husheImages.length;
    showHusheImage(husheIndex);
}

function startHusheAutoPlay() {
    stopHusheAutoPlay();
    document.getElementById('husheContainer').classList.add('playing');
    husheInterval = setInterval(nextHusheImage, AUTO_PLAY_INTERVAL);
}

function stopHusheAutoPlay() {
    if (husheInterval) {
        clearInterval(husheInterval);
        husheInterval = null;
    }
    document.getElementById('husheContainer').classList.remove('playing');
}

function pauseHusheAutoPlay() {
    stopHusheAutoPlay();
    document.getElementById('husheContainer').classList.add('paused');
    setTimeout(() => {
        document.getElementById('husheContainer').classList.remove('paused');
        startHusheAutoPlay();
    }, PAUSE_DURATION);
}

function manualNextHusheImage() {
    nextHusheImage();
    pauseHusheAutoPlay();
}

function manualPrevHusheImage() {
    prevHusheImage();
    pauseHusheAutoPlay();
}

// Project - A4D Posters (Auto + Manual Slider)
const a4dImages = [
    './media/a4d_1.jpg',
    './media/a4d_2.jpg',
    './media/a4d_3.jpg'
];
let a4dIndex = 0;
let a4dInterval;

function showA4dImage(index) {
    const img = document.getElementById('a4dSlider');
    img.src = a4dImages[index];
    a4dIndex = index;
}

function nextA4dImage() {
    a4dIndex = (a4dIndex + 1) % a4dImages.length;
    showA4dImage(a4dIndex);
}

function prevA4dImage() {
    a4dIndex = (a4dIndex - 1 + a4dImages.length) % a4dImages.length;
    showA4dImage(a4dIndex);
}

function startA4dAutoPlay() {
    stopA4dAutoPlay();
    document.getElementById('a4dContainer').classList.add('playing');
    a4dInterval = setInterval(nextA4dImage, AUTO_PLAY_INTERVAL);
}

function stopA4dAutoPlay() {
    if (a4dInterval) {
        clearInterval(a4dInterval);
        a4dInterval = null;
    }
    document.getElementById('a4dContainer').classList.remove('playing');
}

function pauseA4dAutoPlay() {
    stopA4dAutoPlay();
    document.getElementById('a4dContainer').classList.add('paused');
    setTimeout(() => {
        document.getElementById('a4dContainer').classList.remove('paused');
        startA4dAutoPlay();
    }, PAUSE_DURATION);
}

function manualNextA4dImage() {
    nextA4dImage();
    pauseA4dAutoPlay();
}

function manualPrevA4dImage() {
    prevA4dImage();
    pauseA4dAutoPlay();
}

// Project - Hiring Posters (Auto + Manual Slider)
const hiringImages = [
    './media/hiring_post1.jpg',
    './media/hiring_post2.jpg'
];
let hiringIndex = 0;
let hiringInterval;

function showHiringImage(index) {
    const img = document.getElementById('hiringSlider');
    img.src = hiringImages[index];
    hiringIndex = index;
}

function nextHiringImage() {
    hiringIndex = (hiringIndex + 1) % hiringImages.length;
    showHiringImage(hiringIndex);
}

function prevHiringImage() {
    hiringIndex = (hiringIndex - 1 + hiringImages.length) % hiringImages.length;
    showHiringImage(hiringIndex);
}

function startHiringAutoPlay() {
    stopHiringAutoPlay();
    document.getElementById('hiringContainer').classList.add('playing');
    hiringInterval = setInterval(nextHiringImage, AUTO_PLAY_INTERVAL);
}

function stopHiringAutoPlay() {
    if (hiringInterval) {
        clearInterval(hiringInterval);
        hiringInterval = null;
    }
    document.getElementById('hiringContainer').classList.remove('playing');
}

function pauseHiringAutoPlay() {
    stopHiringAutoPlay();
    document.getElementById('hiringContainer').classList.add('paused');
    setTimeout(() => {
        document.getElementById('hiringContainer').classList.remove('paused');
        startHiringAutoPlay();
    }, PAUSE_DURATION);
}

function manualNextHiringImage() {
    nextHiringImage();
    pauseHiringAutoPlay();
}

function manualPrevHiringImage() {
    prevHiringImage();
    pauseHiringAutoPlay();
}

// Project - North Digit Posters (Auto + Manual Slider)
const northDigitImages = [
    './media/north_digit1.jpg',
    './media/north_digit2.jpg',
    './media/north_digit3.jpg',
    './media/north_digit4.jpg'
];
let northDigitIndex = 0;
let northDigitInterval;

function showNorthDigitImage(index) {
    const img = document.getElementById('northDigitSlider');
    img.src = northDigitImages[index];
    northDigitIndex = index;
}

function nextNorthDigitImage() {
    northDigitIndex = (northDigitIndex + 1) % northDigitImages.length;
    showNorthDigitImage(northDigitIndex);
}

function prevNorthDigitImage() {
    northDigitIndex = (northDigitIndex - 1 + northDigitImages.length) % northDigitImages.length;
    showNorthDigitImage(northDigitIndex);
}

function startNorthDigitAutoPlay() {
    stopNorthDigitAutoPlay();
    document.getElementById('northDigitContainer').classList.add('playing');
    northDigitInterval = setInterval(nextNorthDigitImage, AUTO_PLAY_INTERVAL);
}

function stopNorthDigitAutoPlay() {
    if (northDigitInterval) {
        clearInterval(northDigitInterval);
        northDigitInterval = null;
    }
    document.getElementById('northDigitContainer').classList.remove('playing');
}

function pauseNorthDigitAutoPlay() {
    stopNorthDigitAutoPlay();
    document.getElementById('northDigitContainer').classList.add('paused');
    setTimeout(() => {
        document.getElementById('northDigitContainer').classList.remove('paused');
        startNorthDigitAutoPlay();
    }, PAUSE_DURATION);
}

function manualNextNorthDigitImage() {
    nextNorthDigitImage();
    pauseNorthDigitAutoPlay();
}

function manualPrevNorthDigitImage() {
    prevNorthDigitImage();
    pauseNorthDigitAutoPlay();
}

// Project - Rewaj Restaurant Posters (Auto + Manual Slider)
const rewajImages = [
    './media/rewaj_restaurant1.jpg',
    './media/rewaj_restaurant2.jpg'
];
let rewajIndex = 0;
let rewajInterval;

function showRewajImage(index) {
    const img = document.getElementById('rewajSlider');
    img.src = rewajImages[index];
    rewajIndex = index;
}

function nextRewajImage() {
    rewajIndex = (rewajIndex + 1) % rewajImages.length;
    showRewajImage(rewajIndex);
}

function prevRewajImage() {
    rewajIndex = (rewajIndex - 1 + rewajImages.length) % rewajImages.length;
    showRewajImage(rewajIndex);
}

function startRewajAutoPlay() {
    stopRewajAutoPlay();
    document.getElementById('rewajContainer').classList.add('playing');
    rewajInterval = setInterval(nextRewajImage, AUTO_PLAY_INTERVAL);
}

function stopRewajAutoPlay() {
    if (rewajInterval) {
        clearInterval(rewajInterval);
        rewajInterval = null;
    }
    document.getElementById('rewajContainer').classList.remove('playing');
}

function pauseRewajAutoPlay() {
    stopRewajAutoPlay();
    document.getElementById('rewajContainer').classList.add('paused');
    setTimeout(() => {
        document.getElementById('rewajContainer').classList.remove('paused');
        startRewajAutoPlay();
    }, PAUSE_DURATION);
}

function manualNextRewajImage() {
    nextRewajImage();
    pauseRewajAutoPlay();
}

function manualPrevRewajImage() {
    prevRewajImage();
    pauseRewajAutoPlay();
}

// Project - Property Ad Posters (Auto + Manual Slider)
const propertyImages = [
    './media/property_ad_1.png',
    './media/property_ad_2.png'
];
let propertyIndex = 0;
let propertyInterval;

function showPropertyImage(index) {
    const img = document.getElementById('propertySlider');
    img.src = propertyImages[index];
    propertyIndex = index;
}

function nextPropertyImage() {
    propertyIndex = (propertyIndex + 1) % propertyImages.length;
    showPropertyImage(propertyIndex);
}

function prevPropertyImage() {
    propertyIndex = (propertyIndex - 1 + propertyImages.length) % propertyImages.length;
    showPropertyImage(propertyIndex);
}

function startPropertyAutoPlay() {
    stopPropertyAutoPlay();
    document.getElementById('propertyContainer').classList.add('playing');
    propertyInterval = setInterval(nextPropertyImage, AUTO_PLAY_INTERVAL);
}

function stopPropertyAutoPlay() {
    if (propertyInterval) {
        clearInterval(propertyInterval);
        propertyInterval = null;
    }
    document.getElementById('propertyContainer').classList.remove('playing');
}

function pausePropertyAutoPlay() {
    stopPropertyAutoPlay();
    document.getElementById('propertyContainer').classList.add('paused');
    setTimeout(() => {
        document.getElementById('propertyContainer').classList.remove('paused');
        startPropertyAutoPlay();
    }, PAUSE_DURATION);
}

function manualNextPropertyImage() {
    nextPropertyImage();
    pausePropertyAutoPlay();
}

function manualPrevPropertyImage() {
    prevPropertyImage();
    pausePropertyAutoPlay();
}

// Project - Royal Business Card (Auto + Manual Slider)
const royalImages = [
    './media/royal_bc1.jpg',
    './media/royal_bc2.jpg'
];
let royalIndex = 0;
let royalInterval;

function showRoyalImage(index) {
    const img = document.getElementById('royalSlider');
    img.src = royalImages[index];
    royalIndex = index;
}

function nextRoyalImage() {
    royalIndex = (royalIndex + 1) % royalImages.length;
    showRoyalImage(royalIndex);
}

function prevRoyalImage() {
    royalIndex = (royalIndex - 1 + royalImages.length) % royalImages.length;
    showRoyalImage(royalIndex);
}

function startRoyalAutoPlay() {
    stopRoyalAutoPlay();
    document.getElementById('royalContainer').classList.add('playing');
    royalInterval = setInterval(nextRoyalImage, AUTO_PLAY_INTERVAL);
}

function stopRoyalAutoPlay() {
    if (royalInterval) {
        clearInterval(royalInterval);
        royalInterval = null;
    }
    document.getElementById('royalContainer').classList.remove('playing');
}

function pauseRoyalAutoPlay() {
    stopRoyalAutoPlay();
    document.getElementById('royalContainer').classList.add('paused');
    setTimeout(() => {
        document.getElementById('royalContainer').classList.remove('paused');
        startRoyalAutoPlay();
    }, PAUSE_DURATION);
}

function manualNextRoyalImage() {
    nextRoyalImage();
    pauseRoyalAutoPlay();
}

function manualPrevRoyalImage() {
    prevRoyalImage();
    pauseRoyalAutoPlay();
}

// Initialize all auto-play carousels when page loads
document.addEventListener('DOMContentLoaded', function () {
    // Start all auto-play carousels
    setTimeout(() => {
        startA4AutoPlay();
        startHusheAutoPlay();
        startA4dAutoPlay();
        startHiringAutoPlay();
        startNorthDigitAutoPlay();
        startRewajAutoPlay();
        startPropertyAutoPlay();
        startRoyalAutoPlay();
    }, 1000); // Start after 1 second

    // Prevent image dragging and context menu
    const images = document.querySelectorAll('.project-image');
    images.forEach(img => {
        img.addEventListener('dragstart', function (e) {
            e.preventDefault();
        });
        img.addEventListener('contextmenu', function (e) {
            e.preventDefault();
        });
    });

    // Add touch event prevention for buttons
    const buttons = document.querySelectorAll('.carousel-btn');
    buttons.forEach(button => {
        button.addEventListener('touchstart', function (e) {
            e.stopPropagation();
        }, { passive: true });

        button.addEventListener('touchend', function (e) {
            e.preventDefault();
            e.stopPropagation();
        }, { passive: false });
    });
});

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

// Pause all carousels when page is not visible
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        // Page is hidden, stop all auto-play
        stopA4AutoPlay();
        stopHusheAutoPlay();
        stopA4dAutoPlay();
        stopHiringAutoPlay();
        stopNorthDigitAutoPlay();
        stopRewajAutoPlay();
        stopPropertyAutoPlay();
        stopRoyalAutoPlay();
    } else {
        // Page is visible, restart all auto-play
        setTimeout(() => {
            startA4AutoPlay();
            startHusheAutoPlay();
            startA4dAutoPlay();
            startHiringAutoPlay();
            startNorthDigitAutoPlay();
            startRewajAutoPlay();
            startPropertyAutoPlay();
            startRoyalAutoPlay();
        }, 500);
    }
});
