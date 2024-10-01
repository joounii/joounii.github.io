window.addEventListener('scroll', function () {
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const scrollPosition = window.scrollY;
  const scrollPercentage = scrollPosition / maxScroll;

  // Light level goas from 10% to 50%
  const lightnessTop = Math.min(50, (scrollPercentage * 40) + 5);
  // Light level goas from 20% to 60%
  const lightnessBottom = Math.min(80, (scrollPercentage * 50) + 25);

  document.body.style.setProperty('--bg-lightness-top', `${lightnessTop}%`);
  document.body.style.setProperty('--bg-lightness-bottom', `${lightnessBottom}%`);
});

document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('.tab-link');
  const tabContents = document.querySelectorAll('.tab-content');

  // Function to deactivate all tabs and hide content
  function deactivateTabs() {
    tabs.forEach(tab => tab.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));
  }

  // Function to load external HTML content with AJAX
  function loadContent(tab, contentId) {
    fetch(`${tab}.html`)
      .then(response => response.text())
      .then(data => {
        document.getElementById(contentId).innerHTML = data;
      })
      .catch(error => {
        console.error('Error loading content:', error);
      });
  }

  // Event listener for each tab
  tabs.forEach(tab => {
    tab.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent page reload
      deactivateTabs(); // Reset all tabs and contents

      const targetTab = this.getAttribute('data-tab');
      const contentId = `${targetTab}-content`;

      // Activate the clicked tab and its section
      document.getElementById(targetTab).classList.add('active');
      this.classList.add('active');

      // Load the content from an external file
      loadContent(targetTab, contentId);
    });
  });

  // Load default tab content on page load (Home tab)
  loadContent('home', 'home-content');
});

