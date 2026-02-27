// =============================================
// DHONI TRAVELS - PROFESSIONAL JAVASCRIPT
// Senior-Friendly Char Dham Yatra
// =============================================

// ========== FADE-IN ANIMATION ON SCROLL ==========
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.15,
  rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    
    entry.target.classList.add("active");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// ========== STICKY HEADER ON SCROLL ==========
let lastScroll = 0;
const header = document.getElementById('header');

window.addEventListener("scroll", function() {
  const currentScroll = window.pageYOffset;
  
  // Add scrolled class after 50px
  if (currentScroll > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
  
  lastScroll = currentScroll;
});

// ========== SMOOTH SCROLL FOR ANCHOR LINKS ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    
    // Skip if it's just "#"
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      e.preventDefault();
      
      const headerHeight = header.offsetHeight;
      const targetPosition = targetElement.offsetTop - headerHeight - 20;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ========== WHATSAPP FORM SUBMISSION ==========
function sendWhatsApp() {
  // Get form values
  const tourType = document.getElementById("tourType").value;
  const startingCity = document.getElementById("startingCity").value;
  const travellers = document.getElementById("travellers").value;

  // Validate travellers
  if (!travellers || travellers < 1) {
    alert("Please enter a valid number of travellers");
    return;
  }

  // Create WhatsApp message
  const message = 
    `🕉️ *Namaste from Dhoni Travels*\n\n` +
    `I want to plan a Char Dham Yatra:\n\n` +
    `📍 *Tour Type:* ${tourType}\n` +
    `🏙️ *Starting City:* ${startingCity}\n` +
    `👥 *Number of Travellers:* ${travellers}\n\n` +
    `Please share the itinerary and pricing details.\n\n` +
    `Thank you! 🙏`;

  // Encode message for URL
  const encodedMessage = encodeURIComponent(message);
  
  // WhatsApp number
  const phoneNumber = "917830874755";
  
  // WhatsApp URL
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  // Open WhatsApp in new tab
  window.open(whatsappURL, "_blank");
  
  // Optional: Track conversion (Google Analytics)
  if (typeof gtag !== 'undefined') {
    gtag('event', 'whatsapp_enquiry', {
      'event_category': 'engagement',
      'event_label': tourType
    });
  }
}

// ========== GUIDE MODAL SYSTEM ==========
const guideModal = document.getElementById("guideModal");
const guideContent = document.getElementById("guideContent");
const guideTitle = document.getElementById("guideTitle");
const guideClose = document.querySelector(".guideClose");

// Guide content data
const guides = {
  besttime: {
    title: "Best Time for Char Dham Yatra",
    content: `
      <p>The Char Dham Yatra usually opens in late April/early May and continues until Diwali (October/November). Weather and road conditions vary significantly throughout the season.</p>

      <h4>🟢 Most Recommended Months</h4>
      <p><strong>May & June</strong> – Pleasant weather with temperatures ranging from 15-25°C during the day. Roads are in excellent condition, snow has cleared, and darshan timings are comfortable for senior citizens. This is peak season, so book accommodations early.</p>

      <h4>🟡 Peaceful Travel Season</h4>
      <p><strong>September & Early October</strong> – Post-monsoon period offers crystal-clear mountain views and fewer crowds. Weather is cool but comfortable (10-20°C). Excellent for seniors who prefer calm, uncrowded temples. Roads are generally safe after monsoon repairs.</p>

      <h4>🔴 Months to Avoid</h4>
      <p><strong>July & August (Monsoon Season)</strong> – Heavy rainfall increases landslide risks significantly. Roads can be blocked for hours or days. Travel delays are common. Not recommended for senior citizens due to safety concerns and unpredictable conditions.</p>

      <h4>📌 Important Notes for Seniors</h4>
      <ul style="margin-top: 12px; padding-left: 20px;">
        <li>Early May can still have snow at high altitudes – carry warm layers</li>
        <li>June can get crowded during school holidays</li>
        <li>Late October onwards, temperatures drop significantly (5-15°C)</li>
        <li>Always check official opening/closing dates before booking</li>
      </ul>

      <p style="margin-top: 20px; padding: 16px; background: #f0f9ff; border-left: 4px solid #0ea5e9; border-radius: 8px;">
        <strong>💡 Pro Tip:</strong> For the most comfortable senior-friendly experience, we recommend mid-May to mid-June or mid-September. Weather is stable, crowds are manageable, and all facilities operate smoothly.
      </p>
    `
  },

  packing: {
    title: "Essential Packing Checklist for Seniors",
    content: `
      <p>Smart packing ensures safe, comfortable, and stress-free travel in the Himalayas. Here's a comprehensive checklist designed specifically for senior pilgrims.</p>

      <h4>🧥 Clothing Essentials</h4>
      <ul style="padding-left: 20px; margin-top: 10px;">
        <li><strong>Thermal innerwear</strong> (2-3 sets) – Even in summer, high altitudes get cold</li>
        <li><strong>Warm fleece jacket</strong> or sweater</li>
        <li><strong>Windproof outer jacket</strong> – Essential for windy temple areas</li>
        <li><strong>Comfortable walking pants</strong> (avoid jeans – not comfortable for long drives)</li>
        <li><strong>Woolen cap, gloves, and socks</strong> – Mornings and evenings are chilly</li>
        <li><strong>Light cotton clothes</strong> for lower altitudes</li>
        <li><strong>Comfortable walking shoes</strong> with good grip (already broken-in, not new)</li>
        <li><strong>Slippers/sandals</strong> for hotel rooms</li>
        <li><strong>Rain poncho or umbrella</strong></li>
      </ul>

      <h4>💊 Medical & Health Items</h4>
      <ul style="padding-left: 20px; margin-top: 10px;">
        <li><strong>All regular prescription medicines</strong> (carry extra supply)</li>
        <li><strong>Blood pressure/diabetes monitoring devices</strong> if applicable</li>
        <li><strong>Basic first-aid kit:</strong> Band-aids, antiseptic cream, pain relief spray</li>
        <li><strong>Altitude sickness tablets</strong> (consult doctor before trip)</li>
        <li><strong>Digestive tablets</strong> (acidity, gas relief)</li>
        <li><strong>ORS packets</strong> for hydration</li>
        <li><strong>Personal inhaler</strong> if you have respiratory issues</li>
        <li><strong>Muscle pain relief balm</strong></li>
      </ul>

      <h4>📄 Documents & Essentials</h4>
      <ul style="padding-left: 20px; margin-top: 10px;">
        <li><strong>Original government ID proof</strong> (Aadhar card mandatory)</li>
        <li><strong>Photocopies of ID</strong> (keep separate from original)</li>
        <li><strong>Medical prescriptions</strong> (in case pharmacy verification needed)</li>
        <li><strong>Travel insurance documents</strong> (highly recommended)</li>
        <li><strong>Emergency contact numbers</strong> written on paper</li>
        <li><strong>Hotel booking confirmations</strong></li>
      </ul>

      <h4>👜 Daily Use Items</h4>
      <ul style="padding-left: 20px; margin-top: 10px;">
        <li><strong>Reusable water bottle</strong> (stay hydrated at altitude)</li>
        <li><strong>Small backpack</strong> for temple visits (keep valuables safe)</li>
        <li><strong>Sunscreen SPF 50+</strong> – High altitude sun is harsh</li>
        <li><strong>Sunglasses with UV protection</strong></li>
        <li><strong>Moisturizer and lip balm</strong> – Dry mountain air affects skin</li>
        <li><strong>Wet wipes and tissues</strong></li>
        <li><strong>Hand sanitizer</strong></li>
        <li><strong>Torch/flashlight</strong> with extra batteries</li>
        <li><strong>Power bank</strong> for mobile charging</li>
        <li><strong>Plastic bags</strong> for wet/dirty clothes</li>
      </ul>

      <h4>🙏 Temple Visit Items</h4>
      <ul style="padding-left: 20px; margin-top: 10px;">
        <li><strong>Small pooja items</strong> if you wish to carry</li>
        <li><strong>Shawl or dupatta</strong> for temple entry</li>
        <li><strong>Extra socks</strong> (temples require removing shoes)</li>
      </ul>

      <p style="margin-top: 20px; padding: 16px; background: #fef3c7; border-left: 4px solid #f59e0b; border-radius: 8px;">
        <strong>⚠️ Important:</strong> Pack light! You'll be moving between hotels frequently. One medium suitcase + one small carry bag is ideal. Avoid heavy luggage that becomes difficult to manage.
      </p>

      <p style="margin-top: 16px; padding: 16px; background: #f0fdf4; border-left: 4px solid #10b981; border-radius: 8px;">
        <strong>✅ Pro Tip:</strong> Create a checklist on your phone and tick items as you pack. Start packing 3-4 days before departure to avoid last-minute stress.
      </p>
    `
  },

  health: {
    title: "Health & Altitude Tips for Seniors",
    content: `
      <p>Char Dham involves travel to high-altitude locations (up to 3,100+ meters). Senior citizens should take proper precautions to ensure a safe and comfortable journey.</p>

      <h4>🏔️ Understanding Altitude Sickness</h4>
      <p>Altitude sickness (Acute Mountain Sickness - AMS) can affect anyone above 2,500 meters, regardless of fitness level. Common symptoms include:</p>
      <ul style="padding-left: 20px; margin-top: 10px;">
        <li>Headache (most common symptom)</li>
        <li>Nausea or loss of appetite</li>
        <li>Dizziness or lightheadedness</li>
        <li>Fatigue and weakness</li>
        <li>Difficulty sleeping</li>
        <li>Shortness of breath during exertion</li>
      </ul>

      <h4>💧 Stay Properly Hydrated</h4>
      <p><strong>Most Important Rule:</strong> Drink water regularly even if you don't feel thirsty. Dehydration worsens altitude symptoms significantly.</p>
      <ul style="padding-left: 20px; margin-top: 10px;">
        <li>Aim for 3-4 liters of water daily</li>
        <li>Avoid alcohol and caffeine (they dehydrate you)</li>
        <li>Carry ORS packets for electrolyte balance</li>
        <li>Sip water throughout the day, not just at meals</li>
      </ul>

      <h4>🚶 Move Slowly & Rest Frequently</h4>
      <p>Rushing at high altitude is dangerous. Follow these guidelines:</p>
      <ul style="padding-left: 20px; margin-top: 10px;">
        <li><strong>Walk slowly and steadily</strong> – No need to hurry</li>
        <li><strong>Take frequent breaks</strong> – Even if you feel fine</li>
        <li><strong>Breathe deeply</strong> – Conscious deep breathing helps oxygen intake</li>
        <li><strong>Don't exert yourself</strong> – Avoid climbing stairs quickly</li>
        <li><strong>Rest after arrival</strong> – Spend first 2-3 hours acclimatizing before temple visit</li>
      </ul>

      <h4>🩺 Monitor Symptoms Carefully</h4>
      <p><strong>Mild symptoms are normal</strong> and usually improve with rest and hydration. However, seek immediate help if you experience:</p>
      <ul style="padding-left: 20px; margin-top: 10px;">
        <li>Severe headache that doesn't improve with medicine</li>
        <li>Persistent vomiting</li>
        <li>Extreme fatigue or confusion</li>
        <li>Chest tightness or breathing difficulty at rest</li>
        <li>Irregular heartbeat</li>
      </ul>

      <h4>💊 Medical Preparation</h4>
      <ul style="padding-left: 20px; margin-top: 10px;">
        <li><strong>Consult your doctor</strong> before the trip, especially if you have heart/lung conditions</li>
        <li><strong>Carry altitude sickness medication</strong> (like Diamox) if prescribed</li>
        <li><strong>Keep regular medicines</strong> in original packaging with prescriptions</li>
        <li><strong>Monitor BP/sugar levels</strong> regularly if you're diabetic/hypertensive</li>
        <li><strong>Avoid heavy meals</strong> – Eat light, easily digestible food</li>
      </ul>

      <h4>🌡️ Dress in Layers</h4>
      <p>Temperature can vary 15-20°C between morning and afternoon:</p>
      <ul style="padding-left: 20px; margin-top: 10px;">
        <li>Wear multiple thin layers instead of one thick jacket</li>
        <li>Remove/add layers as temperature changes</li>
        <li>Protect head, hands, and feet from cold</li>
        <li>Mornings and evenings are coldest – dress warmly</li>
      </ul>

      <h4>😴 Sleep & Rest Well</h4>
      <ul style="padding-left: 20px; margin-top: 10px;">
        <li>Sleep with head slightly elevated (use extra pillow)</li>
        <li>Don't skip rest days in the itinerary</li>
        <li>Avoid sleeping pills at high altitude</li>
        <li>Light dinner helps better sleep</li>
      </ul>

      <h4>📞 Always Inform Your Coordinator</h4>
      <p><strong>Never hesitate</strong> to inform your tour coordinator if you feel unwell. They are trained to help and can arrange:</p>
      <ul style="padding-left: 20px; margin-top: 10px;">
        <li>Immediate medical assistance</li>
        <li>Oxygen cylinder if needed</li>
        <li>Alternative arrangements (descending to lower altitude)</li>
        <li>Doctor consultation via phone/in-person</li>
      </ul>

      <p style="margin-top: 20px; padding: 16px; background: #fef2f2; border-left: 4px solid #ef4444; border-radius: 8px;">
        <strong>🚨 Emergency Rule:</strong> If symptoms worsen or don't improve after 2-3 hours of rest, the safest solution is to descend to a lower altitude immediately. Don't delay this decision.
      </p>

      <p style="margin-top: 16px; padding: 16px; background: #f0fdf4; border-left: 4px solid #10b981; border-radius: 8px;">
        <strong>✅ Good News:</strong> With proper precautions, gradual acclimatization, and sensible pacing, 95% of seniors complete Char Dham Yatra safely and comfortably. Listen to your body and don't push limits.
      </p>

      <p style="margin-top: 16px; padding: 16px; background: #eff6ff; border-left: 4px solid #3b82f6; border-radius: 8px;">
        <strong>💡 Dhoni Travels Commitment:</strong> Our itineraries include acclimatization time, rest breaks, and 24/7 support. We prioritize your health and comfort over rushing through the yatra.
      </p>
    `
  }
};

// Open guide modal
document.querySelectorAll(".guideTrigger").forEach(card => {
  card.addEventListener("click", openGuide);
  
  // Keyboard accessibility
  card.addEventListener("keypress", function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openGuide.call(this);
    }
  });
});

function openGuide() {
  const type = this.getAttribute("data-guide");
  
  if (guides[type]) {
    guideTitle.innerText = guides[type].title;
    guideContent.innerHTML = guides[type].content;
    
    guideModal.style.display = "flex";
    guideModal.classList.add("show");
    guideModal.setAttribute("aria-hidden", "false");
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";
    
    // Focus trap
    guideClose.focus();
    
    // Track modal open (Google Analytics)
    if (typeof gtag !== 'undefined') {
      gtag('event', 'guide_view', {
        'event_category': 'engagement',
        'event_label': type
      });
    }
  }
}

// Close guide modal
function closeGuide() {
  guideModal.classList.remove("show");
  
  setTimeout(() => {
    guideModal.style.display = "none";
    guideModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "auto";
  }, 300);
}

guideClose.addEventListener("click", closeGuide);

// Close on backdrop click
guideModal.addEventListener("click", (e) => {
  if (e.target === guideModal) {
    closeGuide();
  }
});

// Close on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && guideModal.style.display === "flex") {
    closeGuide();
  }
});

// ========== CURRENT YEAR IN FOOTER ==========
document.getElementById("currentYear").textContent = new Date().getFullYear();

// ========== FORM VALIDATION ==========
const yatraForm = document.getElementById("yatraForm");

if (yatraForm) {
  yatraForm.addEventListener("submit", function(e) {
    e.preventDefault();
    sendWhatsApp();
  });
}

// ========== LAZY LOADING FOR IMAGES ==========
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        
        if (img.dataset.srcset) {
          img.srcset = img.dataset.srcset;
          img.removeAttribute('data-srcset');
        }
        
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// ========== PERFORMANCE OPTIMIZATION ==========
// Defer non-critical scripts
window.addEventListener('load', function() {
  // Add any third-party scripts here after page load
  console.log('Dhoni Travels website loaded successfully! 🕉️');
});

// ========== ACCESSIBILITY ENHANCEMENTS ==========
// Add keyboard navigation for cards
document.querySelectorAll('.card').forEach(card => {
  if (!card.hasAttribute('tabindex')) {
    card.setAttribute('tabindex', '0');
  }
});

// ========== SCROLL TO TOP BUTTON (Optional) ==========
let scrollTopBtn = document.getElementById("scrollTop");

if (!scrollTopBtn) {
  // Create scroll to top button if it doesn't exist
  scrollTopBtn = document.createElement("button");
  scrollTopBtn.id = "scrollTop";
  scrollTopBtn.innerHTML = "↑";
  scrollTopBtn.setAttribute("aria-label", "Scroll to top");
  scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 100px;
    right: 24px;
    width: 50px;
    height: 50px;
    border-radius: 12px;
    background: var(--navy);
    color: white;
    border: none;
    font-size: 24px;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 998;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  `;
  document.body.appendChild(scrollTopBtn);
}

window.addEventListener("scroll", function() {
  if (window.pageYOffset > 500) {
    scrollTopBtn.style.opacity = "1";
    scrollTopBtn.style.visibility = "visible";
  } else {
    scrollTopBtn.style.opacity = "0";
    scrollTopBtn.style.visibility = "hidden";
  }
});

scrollTopBtn.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// ========== CONSOLE MESSAGE ==========
console.log(`
%c🕉️ Dhoni Travels - Char Dham Yatra Specialists

%cWebsite by Professional Design Team
Senior-Friendly • Transparent • Trusted

📞 Call: +91-8273591472
💬 WhatsApp: +91-7830874755
`, 
'color: #ff6b35; font-size: 18px; font-weight: bold;',
'color: #0b1c2d; font-size: 12px;'
);

// ========== ERROR HANDLING ==========
window.addEventListener('error', function(e) {
  console.error('Error occurred:', e.error);
  // You can send errors to analytics here
});

// ========== PREVENT RIGHT CLICK ON IMAGES (Optional - Remove if not needed) ==========
// Uncomment below if you want to protect images
/*
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    return false;
  });
});
*/