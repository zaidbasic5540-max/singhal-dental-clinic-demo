/**
 * SINGHAL DENTAL CLINIC AND IMPLANT CENTRE - MAIN APPLICATION LOGIC
 * Handles mobile drawer navigation, form handling, active state management,
 * and accessibility interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNavigation();
  highlightActiveNavLink();
  initAppointmentForm();
});

/**
 * Mobile Navigation Drawer Toggle & Accessibility
 */
function initMobileNavigation() {
  const navToggleBtn = document.getElementById('mobile-menu-toggle');
  const mobileMenuDrawer = document.getElementById('mobile-menu-drawer');
  const mobileMenuBackdrop = document.getElementById('mobile-menu-backdrop');
  const mobileMenuCloseBtn = document.getElementById('mobile-menu-close');

  if (!navToggleBtn || !mobileMenuDrawer) return;

  function openMenu() {
    mobileMenuDrawer.classList.remove('translate-x-full');
    mobileMenuDrawer.classList.add('translate-x-0');
    if (mobileMenuBackdrop) {
      mobileMenuBackdrop.classList.remove('hidden');
      mobileMenuBackdrop.classList.add('block');
    }
    navToggleBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileMenuDrawer.classList.add('translate-x-full');
    mobileMenuDrawer.classList.remove('translate-x-0');
    if (mobileMenuBackdrop) {
      mobileMenuBackdrop.classList.add('hidden');
      mobileMenuBackdrop.classList.remove('block');
    }
    navToggleBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  navToggleBtn.addEventListener('click', openMenu);
  if (mobileMenuCloseBtn) mobileMenuCloseBtn.addEventListener('click', closeMenu);
  if (mobileMenuBackdrop) mobileMenuBackdrop.addEventListener('click', closeMenu);

  // Close drawer on Escape key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !mobileMenuDrawer.classList.contains('translate-x-full')) {
      closeMenu();
    }
  });
}

/**
 * Automatically highlight the active navigation link based on window location
 */
function highlightActiveNavLink() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('text-sky-600', 'font-semibold', 'border-b-2', 'border-sky-600');
      link.classList.remove('text-slate-600', 'hover:text-sky-600');
      link.setAttribute('aria-current', 'page');
    }
  });
}

/**
 * Handle Appointment Form Submission (Front-end Demo Validation)
 */
function initAppointmentForm() {
  const appointmentForm = document.getElementById('appointment-form');
  const formResponseContainer = document.getElementById('form-response-msg');

  if (!appointmentForm) return;

  // Set min date to today for date picker
  const dateInput = document.getElementById('appointment-date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }

  appointmentForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('patient-name')?.value.trim();
    const phone = document.getElementById('patient-phone')?.value.trim();
    const date = document.getElementById('appointment-date')?.value;
    const time = document.getElementById('appointment-time')?.value;
    const reason = document.getElementById('appointment-reason')?.value.trim();

    if (!name || !phone || !date) {
      showFormFeedback('Please fill out all required fields (*).', 'error');
      return;
    }

    // Front-end Demo Confirmation Modal / Toast
    showFormFeedback(
      `Thank you, ${escapeHtml(name)}! Your appointment request for ${escapeHtml(date)} (${escapeHtml(time || 'Preferred Time')}) has been submitted. Our clinic team will call you at ${escapeHtml(phone)} to confirm your slot.`,
      'success'
    );

    appointmentForm.reset();
  });
}

function showFormFeedback(message, type) {
  const msgContainer = document.getElementById('form-response-msg');
  if (!msgContainer) return;

  msgContainer.classList.remove('hidden', 'bg-emerald-50', 'text-emerald-800', 'border-emerald-200', 'bg-rose-50', 'text-rose-800', 'border-rose-200');

  if (type === 'success') {
    msgContainer.classList.add('bg-emerald-50', 'text-emerald-900', 'border', 'border-emerald-200', 'p-4', 'rounded-lg', 'mb-6');
  } else {
    msgContainer.classList.add('bg-amber-50', 'text-amber-900', 'border', 'border-amber-200', 'p-4', 'rounded-lg', 'mb-6');
  }

  msgContainer.innerHTML = `<div class="flex items-start gap-3">
    <svg class="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>
    <div>
      <p class="font-medium">${message}</p>
      <p class="text-xs text-slate-500 mt-1">[Note: This is a front-end demo form. In production, this connects to the clinic SMS/Email gateway.]</p>
    </div>
  </div>`;
  
  msgContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function escapeHtml(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}
