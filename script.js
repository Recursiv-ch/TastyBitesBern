/**
 * TastyBites Bern - Main JavaScript
 * Handles navigation, animations, and interactions
 */

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileNav();
  initScrollAnimations();
  initSmoothScroll();
  initCurrentYear();
});

/**
 * Set current year in footer
 */
function initCurrentYear() {
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}

/**
 * Header scroll behavior
 * Adds/removes 'scrolled' class based on scroll position
 */
function initHeader() {
  const header = document.getElementById('header');
  if (!header) return;

  const scrollThreshold = 50;

  function handleScroll() {
    if (window.scrollY > scrollThreshold) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  // Initial check
  handleScroll();

  // Throttled scroll listener
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        handleScroll();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

/**
 * Mobile navigation toggle
 */
function initMobileNav() {
  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');

  if (!menuToggle || !mobileNav) return;

  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.classList.toggle('active');
    mobileNav.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', isOpen);

    // Prevent body scroll when menu is open
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close menu when clicking a link
  const mobileLinks = mobileNav.querySelectorAll('.mobile-nav__link');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      mobileNav.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // Close menu on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
      menuToggle.classList.remove('active');
      mobileNav.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
}

/**
 * Scroll-triggered animations using Intersection Observer
 */
function initScrollAnimations() {
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    // Make all elements visible immediately
    document.querySelectorAll('.fade-in, .stagger-item').forEach(el => {
      el.classList.add('visible');
    });
    return;
  }

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe fade-in elements
  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });

  // Observe stagger items
  document.querySelectorAll('.stagger-item').forEach(el => {
    observer.observe(el);
  });
}

/**
 * Smooth scroll for anchor links
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');

      // Skip if it's just "#"
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        e.preventDefault();

        const headerHeight = document.getElementById('header')?.offsetHeight || 0;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        // Update URL without jumping
        history.pushState(null, null, targetId);
      }
    });
  });
}

/**
 * Menu category filter (for menu page)
 */
function initMenuFilter() {
  const categoryButtons = document.querySelectorAll('.menu__category-btn');
  const menuItems = document.querySelectorAll('.menu-item, .drink-item');

  if (!categoryButtons.length || !menuItems.length) return;

  categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button
      categoryButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.dataset.category;

      // Filter items
      menuItems.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

// Initialize menu filter if on menu page
if (document.querySelector('.menu__category-btn')) {
  initMenuFilter();
}

/**
 * Form validation (for contact page)
 */
function initContactForm() {
  const form = document.getElementById('contactForm');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Simple validation
    const name = form.querySelector('[name="name"]');
    const email = form.querySelector('[name="email"]');
    const message = form.querySelector('[name="message"]');

    let isValid = true;

    if (!name.value.trim()) {
      showError(name, 'Bitte geben Sie Ihren Namen ein.');
      isValid = false;
    } else {
      clearError(name);
    }

    if (!email.value.trim() || !isValidEmail(email.value)) {
      showError(email, 'Bitte geben Sie eine gültige E-Mail-Adresse ein.');
      isValid = false;
    } else {
      clearError(email);
    }

    if (!message.value.trim()) {
      showError(message, 'Bitte geben Sie eine Nachricht ein.');
      isValid = false;
    } else {
      clearError(message);
    }

    if (isValid) {
      // Show success message
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Gesendet!';
      submitBtn.disabled = true;

      // Reset form after delay
      setTimeout(() => {
        form.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 3000);
    }
  });

  function showError(input, message) {
    const formGroup = input.closest('.form-group');
    let errorEl = formGroup.querySelector('.error-message');

    if (!errorEl) {
      errorEl = document.createElement('span');
      errorEl.className = 'error-message';
      errorEl.style.color = 'var(--color-spicy)';
      errorEl.style.fontSize = '0.875rem';
      errorEl.style.marginTop = '0.25rem';
      formGroup.appendChild(errorEl);
    }

    errorEl.textContent = message;
    input.style.borderColor = 'var(--color-spicy)';
  }

  function clearError(input) {
    const formGroup = input.closest('.form-group');
    const errorEl = formGroup.querySelector('.error-message');
    if (errorEl) errorEl.remove();
    input.style.borderColor = '';
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
}

// Initialize contact form if on contact page
if (document.getElementById('contactForm')) {
  initContactForm();
}
