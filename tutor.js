document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault(); // stop the default jump

        const targetId = this.getAttribute("href").substring(1); // remove '#'
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      });
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll(
    "#about h2, #about p, #about img, #about .icon, #about .buttons2"
  );
  const lastContainer = document.querySelector(".last-container");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // stagger children inside the same parent (like icons or paragraphs)
          if (entry.target.classList.contains("icon-stat")) {
            const icons = entry.target.querySelectorAll(".icon");
            icons.forEach((icon, index) => {
              setTimeout(() => {
                icon.classList.add("show");
              }, index * 200);
            });
          } else {
            entry.target.classList.add("show");
          }

          // Special case: last-container → loop fade
          if (entry.target === lastContainer) {
            lastContainer.classList.add("fade-loop");
          }

          // stop observing once animated
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  // Prepare elements
  fadeElements.forEach(el => {
    el.classList.add("fade-in");
    observer.observe(el);
  });

  observer.observe(lastContainer);
});

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navLinks.classList.toggle("active");
});

 // Wait until the DOM is loaded
  document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section"); // your page sections
    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {
      let current = "";

      // find the section currently in view
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute("id");
        }
      });

      // remove and add active class
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
          link.classList.add("active");
        }
      });
    });
  });
