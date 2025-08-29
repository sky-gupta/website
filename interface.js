// Smooth scrolling for nav links

document.querySelectorAll('.nav-item').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    document.getElementById(targetId).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Form submission demo (just for now)
document.querySelector(".contact-form").addEventListener("submit", e => {
  e.preventDefault();
  alert("Thanks for contacting me! 🚀");
});

// ...existing code...

// Tooltip for profile icons
// Tooltip for profile icons
document.querySelectorAll('.profile-icon').forEach(icon => {
  icon.style.position = 'relative'; // Ensure parent is positioned
  icon.addEventListener('mouseenter', function() {
    if (this.querySelector('.profile-tooltip')) return; // Prevent duplicates
    const tooltip = document.createElement('span');
    tooltip.className = 'profile-tooltip';
    tooltip.innerText = this.title;
    this.appendChild(tooltip);
  });
  icon.addEventListener('mouseleave', function() {
    const tooltip = this.querySelector('.profile-tooltip');
    if (tooltip) tooltip.remove();
  });
});
// ...existing code...

// Go to Top button functionality
const goTopBtn = document.getElementById('goTopBtn');
window.addEventListener('scroll', () => {
  goTopBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
});
goTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Experience buttons interactivity
const expBtns = document.querySelectorAll('.exp-btn');
const expContents = document.querySelectorAll('.exp-content');

expBtns.forEach(btn => {
  btn.addEventListener('click', function () {
    // Remove active from all
    expBtns.forEach(b => b.classList.remove('active'));
    expContents.forEach(c => c.classList.remove('active'));

    // Add active to clicked button
    this.classList.add('active');

    // Show related content
    const content = document.getElementById(this.dataset.exp);
    if (content) content.classList.add('active');
  });
});


// .Projects
document.getElementById('moreProjectsBtn').onclick = function() {
    document.getElementById('moreProjectsModal').style.display = 'block';
};
document.getElementById('closeModalBtn').onclick = function() {
    document.getElementById('moreProjectsModal').style.display = 'none';
};
window.onclick = function(event) {
    var modal = document.getElementById('moreProjectsModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

// ...extracurricular section tabs
// Tabs Switching
const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".tab-panel");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    // Remove active classes
    tabs.forEach(t => t.classList.remove("active"));
    panels.forEach(p => p.classList.remove("active"));

    // Add active to clicked tab and its panel
    tab.classList.add("active");
    document.getElementById(tab.dataset.target).classList.add("active");
  });
});

// Image Popup (Lightbox style)
document.querySelectorAll(".gallery img").forEach(img => {
  img.addEventListener("click", () => {
    const overlay = document.createElement("div");
    overlay.classList.add("img-overlay");
    overlay.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;
    document.body.appendChild(overlay);

    overlay.addEventListener("click", () => {
      overlay.remove();
    });
  });
});

// EmailJS integration for contact form
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm("service_1gpjbga", "template_byzubve", this)
    .then(() => {
      alert("✅ Message sent successfully!");
      this.reset();
    }, (error) => {
      alert("❌ Failed to send message. " + JSON.stringify(error));
    });
});