// Highlight navigation bar tab on scroll based on viewport position
window.onscroll = function () {
  const sections = ['home', 'about', 'products', 'quote', 'contact'];
  const scrollPos = window.scrollY || document.documentElement.scrollTop;
  
  for (let i = 0; i < sections.length; i++) {
    const section = document.getElementById(sections[i]);
    if (section && section.offsetTop <= scrollPos + 100) {
      document.querySelectorAll('nav ul li a').forEach(a => a.classList.remove('active'));
      const activeLink = document.querySelector('nav ul li a[href="#' + sections[i] + '"]');
      if (activeLink) activeLink.classList.add('active');
    }
  }
};
