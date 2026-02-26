const faders = document.querySelectorAll(".fade-in");

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("active");
    observer.unobserve(entry.target);
  });
}, { threshold: 0.2 });

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

window.addEventListener("scroll", function() {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

document.querySelectorAll(".toggleDetails").forEach(button => {
  button.addEventListener("click", function() {
    const details = this.nextElementSibling;
    details.classList.toggle("open");
  });
});

const guideModal = document.getElementById("guideModal");
const guideContent = document.getElementById("guideContent");
const guideTitle = document.getElementById("guideTitle");
const guideClose = document.querySelector(".guideClose");

document.querySelectorAll(".guideTrigger").forEach(card => {
  card.addEventListener("click", () => {

    const type = card.getAttribute("data-guide");

    const guides = {

      besttime: {
        title: "Best Time for Char Dham",
        content: `
          <p>The Char Dham Yatra usually opens in late April and continues until October.</p>

          <h4>🟢 Most Recommended Months</h4>
          <p><b>May & June</b> – Pleasant weather, smooth road conditions and comfortable darshan for senior citizens.</p>

          <h4>🟡 Peaceful Travel Season</h4>
          <p><b>September & early October</b> – Less crowd and beautiful mountain views after monsoon.</p>

          <h4>🔴 Months to Avoid</h4>
          <p><b>July & August</b> – Monsoon season with landslide risks and possible travel delays.</p>
        `
      },

      packing: {
        title: "Packing Checklist for Seniors",
        content: `
          <p>Smart packing ensures safe and stress-free travel in the Himalayas.</p>

          <h4>🧥 Clothing</h4>
          <p>Thermals, warm jacket, gloves, woolen cap, comfortable walking shoes.</p>

          <h4>💊 Medicines</h4>
          <p>Personal prescriptions, BP/sugar medicines, first aid kit, ORS.</p>

          <h4>📄 Documents</h4>
          <p>ID proof, registration papers, medical prescriptions.</p>

          <h4>👜 Essentials</h4>
          <p>Water bottle, sunscreen, sunglasses, light backpack for temple visits.</p>
        `
      },

      health: {
        title: "Health & Altitude Tips",
        content: `
          <p>Char Dham includes high-altitude locations. Seniors should travel calmly and steadily.</p>

          <h4>💧 Stay Hydrated</h4>
          <p>Drink water regularly even if you don’t feel thirsty.</p>

          <h4>🚶 Move Slowly</h4>
          <p>Avoid rushing. Take frequent breaks to prevent fatigue.</p>

          <h4>🩺 Monitor Symptoms</h4>
          <p>Headache, nausea, dizziness or breathlessness require immediate rest.</p>

          <h4>📞 Inform Support</h4>
          <p>Always inform your coordinator if you feel discomfort.</p>
        `
      }

    };

    guideTitle.innerText = guides[type].title;
    guideContent.innerHTML = guides[type].content;

    guideModal.style.display = "flex";
  });
});

guideClose.addEventListener("click", () => {
  guideModal.style.display = "none";
});

guideModal.addEventListener("click", (e) => {
  if (e.target === guideModal) {
    guideModal.style.display = "none";
  }
});
function sendWhatsApp() {

  const tour = document.getElementById("tourType").value;
  const city = document.getElementById("startingCity").value;
  const travellers = document.getElementById("travellers").value;

  const message =
    `Hello Dhoni Travels,%0A%0A` +
    `I want to plan a Yatra:%0A` +
    `Tour Type: ${tour}%0A` +
    `Starting City: ${city}%0A` +
    `Number of Travellers: ${travellers}%0A%0A` +
    `Please guide me.`;

  const phoneNumber = "917830874755";

  window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
}