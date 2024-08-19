document.getElementById('openWindow').addEventListener('click', () => {
  // Open a new window
  const w = window.open();
  
  // Set the content of the new window
  w.document.body.innerHTML = "<h1>You can add HTML something like this</h1>";

  // Add CSS to the new window
  const style = w.document.createElement('link');
  style.href = 'styles.css'; // Path to your CSS file
  style.rel = 'stylesheet';
  w.document.head.appendChild(style);

  // Optionally add JavaScript to the new window
  const script = w.document.createElement('script');
  script.src = 'script.js'; // Path to your JavaScript file
  script.defer = true;
  w.document.head.appendChild(script);
});
