(function () {
  'use strict';

  // Smooth scroll for same-page anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Booking form: submit via Formspree and show success/error message
  var form = document.getElementById('booking-form');
  if (form && form.action && form.action.indexOf('formspree.io') !== -1) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var submitBtn = form.querySelector('button[type="submit"]');
      var originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending…';

      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      })
        .then(function (res) {
          if (res.ok) {
            form.reset();
            submitBtn.textContent = 'Message sent';
            var message = document.createElement('p');
            message.className = 'booking-form__success';
            message.setAttribute('role', 'status');
            message.textContent = 'Thank you. We\'ll get back to you soon.';
            form.appendChild(message);
            setTimeout(function () {
              message.remove();
              submitBtn.disabled = false;
              submitBtn.textContent = originalText;
            }, 5000);
          } else {
            throw new Error('Submit failed');
          }
        })
        .catch(function () {
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
          var err = document.createElement('p');
          err.className = 'booking-form__error';
          err.setAttribute('role', 'alert');
          err.textContent = 'Something went wrong. Please call or WhatsApp to book.';
          form.appendChild(err);
          setTimeout(function () { err.remove(); }, 5000);
        });
    });
  }
})();
