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
