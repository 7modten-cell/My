// This is a static mirror: Webflow's original form backend is not part of it.
// Prevent forms from posting visitor data to the source template's Webflow site.
document.addEventListener('submit', (event) => {
  if (!(event.target instanceof HTMLFormElement)) return;
  event.preventDefault();
  event.stopImmediatePropagation();

  const form = event.target;
  let notice = form.querySelector('.local-form-notice');
  if (!notice) {
    notice = document.createElement('p');
    notice.className = 'local-form-notice';
    notice.setAttribute('role', 'status');
    form.appendChild(notice);
  }
  notice.textContent = 'This form is not connected in the local version of the site.';
}, true);
