// Disable Back Button
window.history.pushState(null, '', window.location.href);
window.onpopstate = function () {
  window.history.go(1);
};

// Disable Right Click
window.addEventListener('contextmenu', e => e.preventDefault());

// Disable View Source Shortcut
window.addEventListener('keydown', function(e) {

  if (
    e.key === 'F12' ||
    (e.ctrlKey && e.shiftKey && ['I','J','C'].includes(e.key)) ||
    (e.ctrlKey && e.key === 'u')
  ) {
    e.preventDefault();
  }

});

// Prevent iframe embedding
if (window.top !== window.self) {
  window.top.location = window.self.location;
}