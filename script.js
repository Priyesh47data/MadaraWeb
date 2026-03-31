
                        // /* ============================================================
                        //     JAVASCRIPT
                        // ============================================================*/
                        
                        //     /* =====================================================
                        //     1. THEME TOGGLE — Dark/Light with localStorage
                        //     ===================================================== */
                        //     const html = document.documentElement;
                        //     const themeBtn = document.getElementById('theme-toggle');
                        //     const iconSun = document.getElementById('icon-sun');
                        //     const iconMoon = document.getElementById('icon-moon');

                        //     // Load saved theme or default to dark
                        //     const savedTheme = localStorage.getItem('devcraft-theme') || 'dark';
                        //     html.setAttribute('data-theme', savedTheme);
                        //     updateThemeIcon(savedTheme);

                        //     themeBtn.addEventListener('click', () => {
                        //     const current = html.getAttribute('data-theme');
                        //     const next = current === 'dark' ? 'light' : 'dark';
                        //     html.setAttribute('data-theme', next);
                        //     localStorage.setItem('devcraft-theme', next);
                        //     updateThemeIcon(next);
                        //     });

                        //     function updateThemeIcon(theme) {
                        //     if (theme === 'dark') {
                        //         iconSun.style.display = 'block';
                        //         iconMoon.style.display = 'none';
                        //     } else {
                        //         iconSun.style.display = 'none';
                        //         iconMoon.style.display = 'block';
                        //     }
                        //     }

                        //     /* =====================================================
                        //     2. MOBILE HAMBURGER MENU
                        //     ===================================================== */
                        //     const hamburger = document.getElementById('hamburger');
                        //     const mobileNav = document.getElementById('mobile-nav');

                        //     hamburger.addEventListener('click', () => {
                        //     hamburger.classList.toggle('open');
                        //     mobileNav.classList.toggle('open');
                        //     });

                        //     // Close on link click
                        //     document.querySelectorAll('.mobile-link, .mobile-nav .btn').forEach(link => {
                        //     link.addEventListener('click', () => {
                        //         hamburger.classList.remove('open');
                        //         mobileNav.classList.remove('open');
                        //     });
                        //     });

                        //     /* =====================================================
                        //     3. SCROLL ANIMATIONS — IntersectionObserver
                        //     ===================================================== */
                        //     const fadeEls = document.querySelectorAll('.fade-up');
                        //     const observer = new IntersectionObserver((entries) => {
                        //     entries.forEach(entry => {
                        //         if (entry.isIntersecting) {
                        //         entry.target.classList.add('visible');
                        //         observer.unobserve(entry.target);
                        //         }
                        //     });
                        //     }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

                        //     fadeEls.forEach(el => observer.observe(el));

                        //     /* =====================================================
                        //     4. SCROLL-TO-TOP BUTTON
                        //     ===================================================== */
                        //     const scrollTopBtn = document.getElementById('scroll-top');

                        //     window.addEventListener('scroll', () => {
                        //     if (window.scrollY > 500) {
                        //         scrollTopBtn.classList.add('show');
                        //     } else {
                        //         scrollTopBtn.classList.remove('show');
                        //     }
                        //     });

                        //     scrollTopBtn.addEventListener('click', () => {
                        //     window.scrollTo({ top: 0, behavior: 'smooth' });
                        //     });

                        //     /* =====================================================
                        //     5. EMAILJS SETUP
                        //     -------------------------------------------------------
                        //     SETUP INSTRUCTIONS:
                        //     1. Sign up at https://www.emailjs.com
                        //     2. Create an Email Service (Gmail, Outlook, etc.)
                        //     3. Create TWO Email Templates:
                        //         a. "Contact Notification" (template_contact) — sent to YOU
                        //             Template variables: {{from_name}}, {{from_email}}, {{phone}},
                        //                                 {{service}}, {{message}}
                        //         b. "Auto Reply" (template_autoreply) — sent to CLIENT
                        //             Template variables: {{to_name}}, {{to_email}}
                        //     4. Get your Public Key from Account > API Keys
                        //     5. Replace the placeholders below:
                        //         - YOUR_PUBLIC_KEY
                        //         - YOUR_SERVICE_ID
                        //         - YOUR_TEMPLATE_ID_CONTACT
                        //         - YOUR_TEMPLATE_ID_AUTOREPLY
                        //     ===================================================== */
                        //     const EMAILJS_CONFIG = {
                        //     publicKey:       'wsIfaK68UMjkebC1V',          // ← Replace
                        //     serviceId:       'service_7qf9qum',          // ← Replace
                        //     templateContact: 'template_6xhjpn5', // ← Replace
                        //     templateReply:   'template_o62hoo4' // ← Replace
                        //     };

                        //     // Initialize EmailJS
                        //     if (EMAILJS_CONFIG.publicKey) {
                        //     emailjs.init(EMAILJS_CONFIG.publicKey);
                        //     }

                        //     /* =====================================================
                        //     6. ZAPIER WEBHOOK
                        //     -------------------------------------------------------
                        //     SETUP INSTRUCTIONS:
                        //     1. Go to https://zapier.com and create a new Zap
                        //     2. Trigger: "Webhooks by Zapier" → "Catch Hook"
                        //     3. Copy the webhook URL Zapier provides
                        //     4. Action: "Google Sheets" → "Create Spreadsheet Row"
                        //         - Map fields: Name, Email, Phone, Service, Message, Timestamp
                        //     5. Replace ZAPIER_WEBHOOK_URL below with your copied URL
                        //     ===================================================== */
                        //     const ZAPIER_WEBHOOK_URL = 'YOUR_ZAPIER_WEBHOOK_URL'; // ← Replace

                        //     /* =====================================================
                        //     7. FORM VALIDATION & SUBMISSION
                        //     ===================================================== */
                        //         const form = document.getElementById('contact-form');
                        //         const submitBtn = document.getElementById('submit-btn');
                        //         const btnText = document.getElementById('btn-text');
                        //         const formStatus = document.getElementById('form-status');

                        //         // Validation helper
                        //         function setError(fieldId, errorId, show) {
                        //         const field = document.getElementById(fieldId);
                        //         const errEl = document.getElementById(errorId);
                        //         if (show) {
                        //             field.classList.add('error');
                        //             errEl.classList.add('show');
                        //         } else {
                        //             field.classList.remove('error');
                        //             errEl.classList.remove('show');
                        //         }
                        //         return !show;
                        //         }

                        //         function isValidEmail(email) {
                        //         return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
                        //         }

                        //         function validateForm() {
                        //         let valid = true;
                        //         const name    = document.getElementById('name').value.trim();
                        //         const email   = document.getElementById('email').value.trim();
                        //         const service = document.getElementById('service').value;
                        //         const message = document.getElementById('message').value.trim();

                        //         valid = setError('name', 'name-error', name.length < 2) && valid;
                        //         valid = setError('email', 'email-error', !isValidEmail(email)) && valid;
                        //         valid = setError('service', 'service-error', !service) && valid;
                        //         valid = setError('message', 'message-error', message.length < 10) && valid;

                        //         return valid;
                        //         }

                        //         // Clear error on input
                        //         ['name', 'email', 'service', 'message'].forEach(id => {
                        //         document.getElementById(id).addEventListener('input', () => {
                        //             document.getElementById(id).classList.remove('error');
                        //             const errEl = document.getElementById(id + '-error');
                        //             if (errEl) errEl.classList.remove('show');
                        //         });
                        //         });

                        //         // Form submit
                        //         form.addEventListener('submit', async (e) => {
                        //         e.preventDefault();

                        //         // Run validation
                        //         if (!validateForm()) return;

                        //         // Collect data
                        //         const formData = {
                        //             from_name:  document.getElementById('name').value.trim(),
                        //             from_email: document.getElementById('email').value.trim(),
                        //             to_name:    document.getElementById('name').value.trim(),
                        //             to_email:   document.getElementById('email').value.trim(),
                        //             phone:      document.getElementById('phone').value.trim() || 'Not provided',
                        //             service:    document.getElementById('service').value,
                        //             message:    document.getElementById('message').value.trim(),
                        //             timestamp:  new Date().toLocaleString()
                        //         };

                        //         // Loading state
                        //         submitBtn.classList.add('btn-loading');
                        //         btnText.textContent = 'Sending...';
                        //         formStatus.className = '';
                        //         formStatus.style.display = 'none';

                        //         let emailSuccess = false;
                        //         let zapierSuccess = false;

                        //         /* --- EmailJS: Send notification to yourself --- */
                        //         try {
                        //             if (EMAILJS_CONFIG.publicKey !== 'wsIfaK68UMjkebC1V') {
                        //             await emailjs.send(
                        //                 EMAILJS_CONFIG.serviceId,
                        //                 EMAILJS_CONFIG.templateContact,
                        //                 formData
                        //             );

                        //             // EmailJS: Send auto-reply to client
                        //             await emailjs.send(
                        //                 EMAILJS_CONFIG.serviceId,
                        //                 EMAILJS_CONFIG.templateReply,
                        //                 formData
                        //             );

                        //             emailSuccess = true;
                        //             } else {
                        //             // Demo mode: simulate success
                        //             await new Promise(r => setTimeout(r, 1000));
                        //             emailSuccess = true;
                        //             }
                        //         } catch (err) {
                        //             console.error('EmailJS error:', err);
                        //         }

                        //     /* --- Zapier Webhook: Store in Google Sheets --- */
                        //     try {
                        //         if (ZAPIER_WEBHOOK_URL !== 'YOUR_ZAPIER_WEBHOOK_URL') {
                        //         await fetch(ZAPIER_WEBHOOK_URL, {
                        //             method: 'POST',
                        //             mode: 'cors', // Zapier webhooks require no-cors
                        //             headers: { 'Content-Type': 'application/json' },
                        //             body: JSON.stringify(formData)
                        //         });
                        //         zapierSuccess = true;
                        //         } else {
                        //         zapierSuccess = true; // Demo mode
                        //         }
                        //     } catch (err) {
                        //         console.error('Zapier error:', err);
                        //     }

                        //     // Reset loading state
                        //     submitBtn.classList.remove('btn-loading');
                        //     btnText.textContent = 'Send Message →';

                        //     // Show feedback
                        //     if (emailSuccess) {
                        //         formStatus.className = 'success';
                        //         formStatus.textContent = '✓ Message sent! We\'ll get back to you within 24 hours. Check your inbox for a confirmation email.';
                        //         form.reset();
                        //     } else {
                        //         formStatus.className = 'error-status';
                        //         formStatus.textContent = '✗ Something went wrong. Please email us directly at hello@devcraft.studio';
                        //     }
                        //     formStatus.style.display = 'block';

                        //     // Scroll to status message
                        //     formStatus.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                        //     });

                        //     /* =====================================================
                        //     8. ACTIVE NAV LINK HIGHLIGHTING
                        //     ===================================================== */
                        //     const sections = document.querySelectorAll('section[id]');
                        //     const navLinks = document.querySelectorAll('.nav-links a');

                        //     const navObserver = new IntersectionObserver((entries) => {
                        //     entries.forEach(entry => {
                        //         if (entry.isIntersecting) {
                        //         navLinks.forEach(link => {
                        //             link.style.color = '';
                        //             link.style.background = '';
                        //             if (link.getAttribute('href') === '#' + entry.target.id) {
                        //             link.style.color = 'var(--accent)';
                        //             }
                        //         });
                        //         }
                        //     });
                        //     }, { threshold: 0.4 });

                        //     sections.forEach(s => navObserver.observe(s));

   /* ============================================================
   1. THEME TOGGLE — Dark/Light
============================================================ */
const html = document.documentElement;
const themeBtn = document.getElementById('theme-toggle');
const iconSun = document.getElementById('icon-sun');
const iconMoon = document.getElementById('icon-moon');

const savedTheme = localStorage.getItem('devcraft-theme') || 'dark';
html.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

themeBtn.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('devcraft-theme', next);
  updateThemeIcon(next);
});

function updateThemeIcon(theme) {
  iconSun.style.display = theme === 'dark' ? 'block' : 'none';
  iconMoon.style.display = theme === 'light' ? 'block' : 'none';
}


/* ============================================================
   2. MOBILE MENU
============================================================ */
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileNav.classList.toggle('open');
});

document.querySelectorAll('.mobile-link, .mobile-nav .btn').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileNav.classList.remove('open');
  });
});


/* ============================================================
   3. SCROLL ANIMATIONS
============================================================ */
const fadeEls = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

fadeEls.forEach(el => observer.observe(el));


/* ============================================================
   4. SCROLL TO TOP
============================================================ */
const scrollTopBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
  scrollTopBtn.classList.toggle('show', window.scrollY > 500);
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


/* ============================================================
   5. EMAILJS CONFIG (FIXED)
============================================================ */
const EMAILJS_CONFIG = {
  publicKey: 'wsIfaK68UMjkebC1V',
  serviceId: 'service_7qf9qum',
  templateContact: 'template_6xhjpn5',
  templateReply: 'template_o62hoo4'
};

// ✅ ALWAYS initialize
emailjs.init(EMAILJS_CONFIG.publicKey);


/* ============================================================
   6. ZAPIER WEBHOOK (OPTIONAL)
============================================================ */
const ZAPIER_WEBHOOK_URL = ''; // paste if using


/* ============================================================
   7. FORM VALIDATION
============================================================ */
function setError(fieldId, errorId, show) {
  const field = document.getElementById(fieldId);
  const err = document.getElementById(errorId);

  field.classList.toggle('error', show);
  if (err) err.classList.toggle('show', show);

  return !show;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateForm() {
  let valid = true;

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const service = document.getElementById('service').value;
  const message = document.getElementById('message').value.trim();

  valid = setError('name', 'name-error', name.length < 2) && valid;
  valid = setError('email', 'email-error', !isValidEmail(email)) && valid;
  valid = setError('service', 'service-error', !service) && valid;
  valid = setError('message', 'message-error', message.length < 10) && valid;

  return valid;
}

// remove errors on typing
['name', 'email', 'service', 'message'].forEach(id => {
  document.getElementById(id).addEventListener('input', () => {
    document.getElementById(id).classList.remove('error');
    const err = document.getElementById(id + '-error');
    if (err) err.classList.remove('show');
  });
});


/* ============================================================
   8. FORM SUBMIT (FINAL WORKING)
============================================================ */
const form = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const btnText = document.getElementById('btn-text');
const formStatus = document.getElementById('form-status');

form.addEventListener('submit', async (e) => {
e.preventDefault();

if (!validateForm()) return;

const formData = {
    from_name: document.getElementById('name').value.trim(),
    from_email: document.getElementById('email').value.trim(),
    to_name: document.getElementById('name').value.trim(),
    to_email: document.getElementById('email').value.trim(),
    phone: document.getElementById('phone').value.trim() || 'Not provided',
    service: document.getElementById('service').value,
    message: document.getElementById('message').value.trim(),
    timestamp: new Date().toLocaleString()
};

// UI loading
submitBtn.classList.add('btn-loading');
btnText.textContent = 'Sending...';
formStatus.style.display = 'none';

try {
    // Send to YOU
    await emailjs.send(
    EMAILJS_CONFIG.serviceId,
    EMAILJS_CONFIG.templateContact,
    formData
    );

    // Auto reply to USER
    await emailjs.send(
    EMAILJS_CONFIG.serviceId,
    EMAILJS_CONFIG.templateReply,
    formData
    );

    // Zapier (optional)
    if (ZAPIER_WEBHOOK_URL) {
    await fetch(ZAPIER_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    });
    }

    // Success
    formStatus.className = 'success';
    formStatus.textContent =
    "✓ Message sent! Check your email.";

    form.reset();

} catch (err) {
    console.error("ERROR:", err);

    formStatus.className = 'error-status';
    formStatus.textContent =
    "✗ Failed to send. Try again later.";
}

// reset UI
submitBtn.classList.remove('btn-loading');
btnText.textContent = 'Send Message →';
formStatus.style.display = 'block';
});                     

                                                // const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwEMrvX6hWYqZ9IBE6YPc_FjXI0YrsmcStcACz1LMCoDqSzRbm9aHQOPR193PUVArAq/exec";
                                                // const WHATSAPP_API = "https://api.callmebot.com/whatsapp.php?phone=+919262665260&apikey=123123";

                                                // form.addEventListener('submit', async (e) => {
                                                // e.preventDefault();

                                                // if (!validateForm()) return;

                                                // const formData = {
                                                //     from_name: document.getElementById('name').value.trim(),
                                                //     from_email: document.getElementById('email').value.trim(),
                                                //     phone: document.getElementById('phone').value.trim() || 'Not provided',
                                                //     service: document.getElementById('service').value,
                                                //     message: document.getElementById('message').value.trim(),
                                                //     timestamp: new Date().toLocaleString()
                                                // };

                                                // submitBtn.classList.add('btn-loading');
                                                // btnText.textContent = 'Sending...';

                                                // try {
                                                //     /* ✅ EmailJS */
                                                //     await emailjs.send(
                                                //     EMAILJS_CONFIG.serviceId,
                                                //     EMAILJS_CONFIG.templateContact,
                                                //     formData
                                                //     );

                                                //     await emailjs.send(
                                                //     EMAILJS_CONFIG.serviceId,
                                                //     EMAILJS_CONFIG.templateReply,
                                                //     formData
                                                //     );

                                                //     /* ✅ Google Sheets */
                                                //     await fetch(GOOGLE_SCRIPT_URL, {
                                                //     method: "POST",
                                                //     body: JSON.stringify(formData)
                                                //     });

                                                //     /* ✅ WhatsApp Alert */
                                                //     const text = `🔥 New Lead!

                                                // Name: ${formData.from_name}
                                                // Email: ${formData.from_email}
                                                // Phone: ${formData.phone}
                                                // Service: ${formData.service}
                                                // Message: ${formData.message}`;

                                                //     await fetch(`${WHATSAPP_API}&text=${encodeURIComponent(text)}`);

                                                //     // Success
                                                //     formStatus.className = 'success';
                                                //     formStatus.textContent = "🔥 Message sent! We'll contact you soon.";

                                                //     form.reset();

                                                // } catch (err) {
                                                //     console.error(err); 
                                                //     formStatus.className = 'error-status';
                                                //     formStatus.textContent = "Something went wrong!";
                                                // }

                                                // submitBtn.classList.remove('btn-loading');
                                                // btnText.textContent = 'Send Message →';
                                                // formStatus.style.display = 'block';
                                                // });