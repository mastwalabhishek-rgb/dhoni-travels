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



// ========== BLOG SYSTEM WITH TOGGLE ==========

const blogModal = document.getElementById("blogModal");
const blogContent = document.getElementById("blogContent");
const blogTitle = document.getElementById("blogTitle");
const blogDate = document.getElementById("blogDate");
const blogClose = document.querySelector(".blogClose");
const blogGrid = document.getElementById("blogGrid");

let blogsExpanded = false;

// Toggle Show More / Show Less Blogs
function toggleBlogs() {
  const toggleBtn = document.getElementById("blogToggleBtn");
  
  if (!blogsExpanded) {
    blogGrid.classList.add("blogsExpanded");
    toggleBtn.innerHTML = '📕 Show Less Articles';
    blogsExpanded = true;
    
    // Scroll to blog section smoothly
    document.getElementById("blog").scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    blogGrid.classList.remove("blogsExpanded");
    toggleBtn.innerHTML = '📚 View All Articles <span id="blogCount">(12)</span>';
    blogsExpanded = false;
    
    // Scroll to blog section
    setTimeout(() => {
      document.getElementById("blog").scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }
}

// Complete Blog Posts Data - All 12 Blogs with Full Content
const blogPosts = {

  // ============================================
  // BLOG 1: CHAR DHAM YATRA COMPLETE GUIDE
  // ============================================
  "chardham-guide": {
    title: "Char Dham Yatra Complete Guide 2025: Everything You Need to Know",
    date: "January 20, 2025",
    author: "Dhoni Travels Expert Team",
    readTime: "15 min read",
    category: "Complete Guide",
    content: `
      <div class="authorBox">
        <img src="images/author.jpg" alt="Dhoni Travels Team" onerror="this.src='https://ui-avatars.com/api/?name=DT&background=ff6b35&color=fff'">
        <div>
          <b>Dhoni Travels Expert Team</b>
          <span>Char Dham Yatra Specialists</span>
        </div>
      </div>

      <p style="font-size: 18px; line-height: 1.8; color: var(--text-light);">
        Char Dham Yatra is one of the most sacred Hindu pilgrimages, covering four divine shrines nestled in the majestic Garhwal Himalayas of Uttarakhand. This comprehensive guide covers everything you need to plan a successful and spiritually fulfilling yatra in 2025.
      </p>

      <div class="blogTOC">
        <h5>📑 In This Complete Guide</h5>
        <ul>
          <li>• What is Char Dham Yatra?</li>
          <li>• The Four Sacred Dhams</li>
          <li>• Spiritual Significance</li>
          <li>• Best Time to Visit</li>
          <li>• Route & Itinerary Planning</li>
          <li>• Physical & Medical Preparation</li>
          <li>• What to Carry</li>
          <li>• Temple Darshan Tips</li>
        </ul>
      </div>

      <h4>🕉️ What is Char Dham Yatra?</h4>
      <p>Char Dham (meaning "Four Abodes") refers to four sacred pilgrimage sites in the Indian state of Uttarakhand. These four temples are believed to be established by Adi Shankaracharya in the 8th century to revive Hinduism. Completing the Char Dham Yatra is considered one of the holiest achievements in a Hindu's lifetime.</p>

      <p>The four dhams are:</p>
      <ul>
        <li><strong>Yamunotri</strong> - Source of River Yamuna, dedicated to Goddess Yamuna</li>
        <li><strong>Gangotri</strong> - Source of River Ganga, dedicated to Goddess Ganga</li>
        <li><strong>Kedarnath</strong> - One of the 12 Jyotirlingas, dedicated to Lord Shiva</li>
        <li><strong>Badrinath</strong> - Dedicated to Lord Vishnu (Badri Narayan)</li>
      </ul>

      <div class="tipBox blue">
        <strong>📿 Spiritual Belief:</strong> It is believed that completing the Char Dham Yatra washes away all sins (paap) and grants moksha (liberation from the cycle of rebirth). The journey is considered a once-in-a-lifetime spiritual achievement.
      </div>

      <h4>🙏 The Four Sacred Dhams - Detailed Overview</h4>

      <p><strong>1. Yamunotri (3,293m / 10,804 ft)</strong></p>
      <ul>
        <li><strong>Deity:</strong> Goddess Yamuna (silver idol)</li>
        <li><strong>Location:</strong> Uttarkashi district, western Garhwal</li>
        <li><strong>Significance:</strong> Source of River Yamuna, daughter of Sun God (Surya)</li>
        <li><strong>Main Attraction:</strong> Surya Kund (hot spring) where pilgrims cook rice for prasad</li>
        <li><strong>Trek Required:</strong> 5 km from Janki Chatti (pony/palki available)</li>
        <li><strong>Best Feature:</strong> Natural thermal springs for holy bath</li>
      </ul>

      <p><strong>2. Gangotri (3,100m / 10,170 ft)</strong></p>
      <ul>
        <li><strong>Deity:</strong> Goddess Ganga (silver idol)</li>
        <li><strong>Location:</strong> Uttarkashi district, near Indo-China border</li>
        <li><strong>Significance:</strong> Where Ganga descended from heaven to earth</li>
        <li><strong>Main Attraction:</strong> Beautiful white marble temple, Bhagirathi river</li>
        <li><strong>Trek Required:</strong> None - temple is roadside (motorable)</li>
        <li><strong>Best Feature:</strong> Scenic location, evening Ganga aarti</li>
      </ul>

      <p><strong>3. Kedarnath (3,583m / 11,755 ft) - Highest Dham</strong></p>
      <ul>
        <li><strong>Deity:</strong> Lord Shiva (Jyotirlinga - self-manifested)</li>
        <li><strong>Location:</strong> Rudraprayag district, near Chorabari Glacier</li>
        <li><strong>Significance:</strong> One of 12 sacred Jyotirlingas of Lord Shiva</li>
        <li><strong>Main Attraction:</strong> Ancient stone temple, powerful spiritual energy</li>
        <li><strong>Trek Required:</strong> 16 km from Gaurikund (helicopter/pony/palki available)</li>
        <li><strong>Best Feature:</strong> Most challenging and spiritually intense of all dhams</li>
      </ul>

      <p><strong>4. Badrinath (3,133m / 10,279 ft)</strong></p>
      <ul>
        <li><strong>Deity:</strong> Lord Vishnu (Badri Narayan - black stone idol)</li>
        <li><strong>Location:</strong> Chamoli district, near Indo-Tibet border</li>
        <li><strong>Significance:</strong> One of the most sacred Vaishnavite pilgrimage sites</li>
        <li><strong>Main Attraction:</strong> Colorful temple, Tapt Kund (hot spring)</li>
        <li><strong>Trek Required:</strong> None - temple is roadside (motorable)</li>
        <li><strong>Best Feature:</strong> Grand temple architecture, nearby Mana village</li>
      </ul>

      <div class="keyPointsGrid">
        <div class="keyPoint">
          <div class="icon">⛰️</div>
          <b>Total Circuit</b>
          <span>~1,200-1,500 km</span>
        </div>
        <div class="keyPoint">
          <div class="icon">📅</div>
          <b>Recommended Days</b>
          <span>10-14 days</span>
        </div>
        <div class="keyPoint">
          <div class="icon">🏔️</div>
          <b>Max Altitude</b>
          <span>3,583m (Kedarnath)</span>
        </div>
        <div class="keyPoint">
          <div class="icon">🗓️</div>
          <b>Season</b>
          <span>May - November</span>
        </div>
      </div>

      <h4>📅 Best Time to Visit Char Dham (2025-26)</h4>
      
      <table class="infoTable">
        <tr>
          <th>Month</th>
          <th>Weather</th>
          <th>Crowd</th>
          <th>Recommendation</th>
        </tr>
        <tr>
          <td>May</td>
          <td>Pleasant (15-25°C)</td>
          <td>Moderate</td>
          <td>⭐ Highly Recommended</td>
        </tr>
        <tr>
          <td>June</td>
          <td>Warm (18-28°C)</td>
          <td>High (Peak)</td>
          <td>✅ Good (Book early)</td>
        </tr>
        <tr>
          <td>July-Aug</td>
          <td>Monsoon (Rain)</td>
          <td>Low</td>
          <td>❌ Avoid (Landslides)</td>
        </tr>
        <tr>
          <td>September</td>
          <td>Pleasant (12-22°C)</td>
          <td>Moderate</td>
          <td>⭐ Highly Recommended</td>
        </tr>
        <tr>
          <td>October</td>
          <td>Cool (8-18°C)</td>
          <td>Moderate</td>
          <td>✅ Good (Carry warm clothes)</td>
        </tr>
      </table>

      <div class="tipBox green">
        <strong>✅ Best for Seniors:</strong> Mid-May and mid-September are ideal for elderly pilgrims. Weather is comfortable, crowds are manageable, and road conditions are excellent.
      </div>

      <h4>🗺️ Traditional Yatra Route (Clockwise)</h4>
      <p>The traditional sequence follows the clockwise direction:</p>
      <p style="text-align: center; font-size: 18px; padding: 20px; background: #f8fafc; border-radius: 12px; margin: 20px 0;">
        <strong>Haridwar → Yamunotri → Gangotri → Kedarnath → Badrinath → Haridwar</strong>
      </p>

      <p><strong>Day-wise Overview:</strong></p>
      <ul>
        <li><strong>Day 1:</strong> Haridwar/Dehradun to Barkot (220 km)</li>
        <li><strong>Day 2:</strong> Barkot to Yamunotri and back</li>
        <li><strong>Day 3:</strong> Barkot to Uttarkashi (100 km)</li>
        <li><strong>Day 4:</strong> Uttarkashi to Gangotri and back</li>
        <li><strong>Day 5:</strong> Uttarkashi to Guptkashi (220 km)</li>
        <li><strong>Day 6:</strong> Kedarnath darshan (trek/helicopter)</li>
        <li><strong>Day 7:</strong> Guptkashi to Pipalkoti (90 km)</li>
        <li><strong>Day 8:</strong> Pipalkoti to Badrinath (75 km)</li>
        <li><strong>Day 9:</strong> Badrinath sightseeing, move to Joshimath</li>
        <li><strong>Day 10:</strong> Joshimath to Rishikesh (250 km)</li>
        <li><strong>Day 11:</strong> Rishikesh to Haridwar, departure</li>
      </ul>

      <h4>🏃‍♂️ Physical Preparation Required</h4>
      <ul>
        <li><strong>Yamunotri:</strong> 5 km trek (moderate difficulty)</li>
        <li><strong>Gangotri:</strong> No trek required</li>
        <li><strong>Kedarnath:</strong> 16 km trek (challenging) or helicopter</li>
        <li><strong>Badrinath:</strong> No trek required</li>
      </ul>

      <p><strong>Pre-trip preparation tips:</strong></p>
      <ul>
        <li>Start daily walking (30-45 minutes) 2-3 months before trip</li>
        <li>Practice stair climbing for temple steps</li>
        <li>Get complete medical check-up done</li>
        <li>If above 60, get doctor's fitness certificate</li>
        <li>Build stamina gradually - don't start intense exercise suddenly</li>
      </ul>

      <h4>📋 Essential Documents Required</h4>
      <ul>
        <li><strong>Aadhaar Card:</strong> Original + 2-3 photocopies (mandatory)</li>
        <li><strong>Secondary ID:</strong> Voter ID / Passport / Driving License</li>
        <li><strong>Photographs:</strong> 4-6 passport size photos</li>
        <li><strong>Medical Certificate:</strong> Mandatory for 70+ age group</li>
        <li><strong>Online Registration:</strong> Biometric registration on official portal</li>
      </ul>

      <h4>🎒 What to Carry - Quick Checklist</h4>
      <ul>
        <li>✓ Warm clothes (thermals, sweaters, jacket)</li>
        <li>✓ Comfortable walking shoes</li>
        <li>✓ Rain gear (poncho/umbrella)</li>
        <li>✓ All regular medicines with prescription</li>
        <li>✓ Sunscreen, sunglasses, lip balm</li>
        <li>✓ Power bank and torch</li>
        <li>✓ Reusable water bottle</li>
        <li>✓ Sufficient cash (ATMs unreliable)</li>
      </ul>

      <h4>🙏 Temple Darshan Tips</h4>
      <ul>
        <li><strong>Best time for darshan:</strong> Early morning (5-7 AM) - least crowded</li>
        <li><strong>Dress code:</strong> Modest clothing, remove leather items</li>
        <li><strong>Photography:</strong> Not allowed inside sanctum</li>
        <li><strong>Offerings:</strong> Can be purchased at temple or carried from home</li>
        <li><strong>Queue management:</strong> Be patient, don't push</li>
        <li><strong>Hot springs:</strong> Take dip if comfortable - believed to be purifying</li>
      </ul>

      <div class="tipBox green">
        <strong>🙏 Final Advice:</strong> Char Dham Yatra is not just a trip - it's a transformative spiritual journey. Go with devotion, patience, and an open heart. Accept whatever challenges come as part of the divine experience. The blessings received will last a lifetime!
      </div>
    `,
    related: ["kedarnath-guide", "senior-tips", "registration-guide"]
  },

  // ============================================
  // BLOG 2: KEDARNATH YATRA GUIDE
  // ============================================
  "kedarnath-guide": {
    title: "Kedarnath Yatra Guide 2025: Trek, Helicopter & Temple Darshan",
    date: "January 18, 2025",
    author: "Dhoni Travels Expert Team",
    readTime: "12 min read",
    category: "Kedarnath Special",
    content: `
      <div class="authorBox">
        <img src="images/author.jpg" alt="Dhoni Travels Team" onerror="this.src='https://ui-avatars.com/api/?name=DT&background=ff6b35&color=fff'">
        <div>
          <b>Dhoni Travels Expert Team</b>
          <span>Kedarnath Yatra Specialists</span>
        </div>
      </div>

      <p style="font-size: 18px; line-height: 1.8; color: var(--text-light);">
        Kedarnath, situated at 3,583 meters in the Garhwal Himalayas, is one of the most sacred and challenging pilgrimage destinations in India. Home to one of the 12 Jyotirlingas, this comprehensive guide covers everything about Kedarnath Yatra in 2025.
      </p>

      <div class="blogTOC">
        <h5>📑 In This Guide</h5>
        <ul>
          <li>• About Kedarnath Temple</li>
          <li>• How to Reach Kedarnath</li>
          <li>• Trek Route Details</li>
          <li>• Helicopter Services</li>
          <li>• Accommodation Options</li>
          <li>• Temple Darshan Information</li>
          <li>• Best Time to Visit</li>
          <li>• Tips for Seniors</li>
        </ul>
      </div>

      <h4>🕉️ About Kedarnath Temple</h4>
      <p>Kedarnath Temple is one of the holiest Hindu temples dedicated to Lord Shiva. It is one of the 12 Jyotirlingas (self-manifested lingas of light) and one of the Char Dham pilgrimage sites.</p>

      <div class="keyPointsGrid">
        <div class="keyPoint">
          <div class="icon">⛰️</div>
          <b>Altitude</b>
          <span>3,583m (11,755 ft)</span>
        </div>
        <div class="keyPoint">
          <div class="icon">🏛️</div>
          <b>Temple Age</b>
          <span>Over 1,000 years</span>
        </div>
        <div class="keyPoint">
          <div class="icon">🗓️</div>
          <b>Season</b>
          <span>May - November</span>
        </div>
        <div class="keyPoint">
          <div class="icon">🚶</div>
          <b>Trek Distance</b>
          <span>16 km one way</span>
        </div>
      </div>

      <p><strong>Historical Significance:</strong></p>
      <ul>
        <li>Temple built by Pandavas to seek Lord Shiva's blessings</li>
        <li>Revived by Adi Shankaracharya in 8th century</li>
        <li>Survived the devastating 2013 floods miraculously</li>
        <li>One of the Panch Kedar (five sacred Shiva temples)</li>
      </ul>

      <h4>🗺️ How to Reach Kedarnath</h4>

      <p><strong>Step 1: Reach Gaurikund (Base Point)</strong></p>
      <ul>
        <li><strong>From Haridwar:</strong> Haridwar → Rishikesh → Rudraprayag → Guptkashi → Gaurikund (250 km, 10-11 hours)</li>
        <li><strong>From Dehradun:</strong> Dehradun → Rishikesh → same route as above</li>
        <li><strong>Recommended:</strong> Break journey at Guptkashi/Sitapur (stay overnight)</li>
      </ul>

      <p><strong>Step 2: Gaurikund to Kedarnath</strong></p>
      <p>Three options available:</p>

      <div class="stepCard">
        <span class="stepNum">1</span>
        <h5>Trek (16 km)</h5>
        <p>Traditional route for those physically fit. Takes 6-8 hours uphill, 4-5 hours downhill. Paved path with rest stops every 2-3 km.</p>
      </div>

      <div class="stepCard">
        <span class="stepNum">2</span>
        <h5>Pony / Palki (Palanquin)</h5>
        <p>Comfortable option for seniors and those who cannot trek. Pony rides available throughout the route. Palki (carried by 4 people) available for elderly.</p>
      </div>

      <div class="stepCard">
        <span class="stepNum">3</span>
        <h5>Helicopter</h5>
        <p>Fastest option - just 10-15 minutes flight. Multiple operators from Phata, Sersi, Guptkashi. Highly recommended for seniors 60+.</p>
      </div>

      <h4>🚶 Trek Route Details</h4>
      <p><strong>Route: Gaurikund → Kedarnath (16 km)</strong></p>

      <table class="infoTable">
        <tr>
          <th>Section</th>
          <th>Distance</th>
          <th>Key Points</th>
        </tr>
        <tr>
          <td>Gaurikund to Jungle Chatti</td>
          <td>4 km</td>
          <td>Steep climb, forest area</td>
        </tr>
        <tr>
          <td>Jungle Chatti to Bhimbali</td>
          <td>3 km</td>
          <td>Moderate, tea shops available</td>
        </tr>
        <tr>
          <td>Bhimbali to Linchauli</td>
          <td>3 km</td>
          <td>Gradual climb, scenic views</td>
        </tr>
        <tr>
          <td>Linchauli to Base Camp</td>
          <td>4 km</td>
          <td>Relatively easier section</td>
        </tr>
        <tr>
          <td>Base Camp to Kedarnath</td>
          <td>2 km</td>
          <td>Final stretch, temple visible</td>
        </tr>
      </table>

      <p><strong>Trek Tips:</strong></p>
      <ul>
        <li>Start early morning (5-6 AM) to avoid afternoon heat</li>
        <li>Carry light backpack only - essentials only</li>
        <li>Take frequent breaks - don't exhaust yourself</li>
        <li>Stay hydrated - drink water every 30 minutes</li>
        <li>Wear comfortable trekking shoes with good grip</li>
        <li>Use walking stick for stability</li>
        <li>Don't rush - altitude sickness can occur</li>
      </ul>

      <h4>🚁 Helicopter Services</h4>
      <p><strong>Available Helipads:</strong></p>
      <ul>
        <li><strong>Phata:</strong> 25 km from Guptkashi (most popular)</li>
        <li><strong>Sersi:</strong> 20 km from Guptkashi</li>
        <li><strong>Guptkashi:</strong> Direct from Guptkashi town</li>
      </ul>

      <p><strong>Helicopter Booking Information:</strong></p>
      <ul>
        <li><strong>Flight time:</strong> 10-15 minutes one way</li>
        <li><strong>Weight limit:</strong> Typically 75-80 kg per person (varies by operator)</li>
        <li><strong>Baggage:</strong> Only small handbag allowed</li>
        <li><strong>Schedule:</strong> Flights from 6 AM to 4 PM (weather permitting)</li>
        <li><strong>Booking:</strong> Online through official UCADA portal or operators</li>
      </ul>

      <div class="tipBox green">
        <strong>✅ Senior Recommendation:</strong> Helicopter is strongly recommended for pilgrims above 60 years. It saves the 16 km trek, reduces altitude exposure time, and minimizes physical strain significantly.
      </div>

      <h4>🏨 Accommodation at Kedarnath</h4>
      <p><strong>Stay options near temple:</strong></p>
      <ul>
        <li><strong>GMVN Guest House:</strong> Government-run, basic facilities</li>
        <li><strong>Dharamshalas:</strong> Temple trust accommodation</li>
        <li><strong>Private lodges:</strong> Basic rooms near temple</li>
        <li><strong>Tents:</strong> Set up during season</li>
      </ul>

      <div class="tipBox yellow">
        <strong>⚠️ Important:</strong> For seniors, staying overnight at Kedarnath (3,583m) is NOT recommended due to extreme altitude. Complete darshan and return same day to lower altitude (Guptkashi).
      </div>

      <h4>🙏 Temple Darshan Information</h4>
      <p><strong>Temple Timings (Approximate):</strong></p>
      <ul>
        <li><strong>Morning:</strong> 4:00 AM - Temple opens</li>
        <li><strong>Morning Aarti:</strong> 4:00 AM - 6:00 AM</li>
        <li><strong>General Darshan:</strong> 6:00 AM - 3:00 PM</li>
        <li><strong>Break:</strong> 3:00 PM - 5:00 PM (Temple closes)</li>
        <li><strong>Evening Darshan:</strong> 5:00 PM - 7:00 PM</li>
        <li><strong>Evening Aarti:</strong> 7:00 PM - 8:30 PM</li>
      </ul>

      <p><strong>Darshan Tips:</strong></p>
      <ul>
        <li>Early morning darshan (4-6 AM) is most peaceful</li>
        <li>Pilgrims can touch the sacred Jyotirlinga</li>
        <li>Photography NOT allowed inside temple</li>
        <li>Remove shoes before entering temple complex</li>
        <li>Dress modestly - no shorts or sleeveless</li>
        <li>Evening aarti is a beautiful experience - try to attend</li>
      </ul>

      <h4>📅 Best Time to Visit Kedarnath</h4>
      <ul>
        <li><strong>May-June:</strong> Best weather, clear views, peak season</li>
        <li><strong>July-August:</strong> Monsoon - avoid due to landslides</li>
        <li><strong>September-October:</strong> Post-monsoon, clear skies, less crowded</li>
        <li><strong>November:</strong> Temple closes around Diwali</li>
      </ul>

      <h4>👴 Special Tips for Senior Pilgrims</h4>
      <ul>
        <li><strong>Helicopter mandatory:</strong> Don't attempt trek if above 65</li>
        <li><strong>Medical check-up:</strong> Get fitness certificate from doctor</li>
        <li><strong>Acclimatization:</strong> Spend night at Guptkashi (1,319m) before going up</li>
        <li><strong>Return same day:</strong> Don't stay overnight at Kedarnath</li>
        <li><strong>Carry medicines:</strong> All regular medicines plus altitude sickness pills</li>
        <li><strong>Oxygen:</strong> Portable oxygen cans available at temple</li>
        <li><strong>Companion:</strong> Always travel with younger family member</li>
      </ul>

      <div class="tipBox green">
        <strong>🙏 Spiritual Note:</strong> Kedarnath darshan is considered the most powerful among all four dhams. The energy at this sacred spot is indescribable. Despite the challenging journey, millions of devotees return with transformed hearts and blessed souls.
      </div>
    `,
    related: ["kedarnath-helicopter", "kedarnath-tips", "senior-tips"]
  },

  // ============================================
  // BLOG 3: SENIOR CITIZENS GUIDE
  // ============================================
  "senior-tips": {
    title: "Char Dham Yatra for Senior Citizens 60+: Complete Safety Guide",
    date: "January 15, 2025",
    author: "Dhoni Travels Expert Team",
    readTime: "8 min read",
    category: "Senior Special",
    content: `
      <div class="authorBox">
        <img src="images/author.jpg" alt="Dhoni Travels Team" onerror="this.src='https://ui-avatars.com/api/?name=DT&background=ff6b35&color=fff'">
        <div>
          <b>Dhoni Travels Expert Team</b>
          <span>Senior Travel Specialists</span>
        </div>
      </div>

      <p style="font-size: 18px; line-height: 1.8; color: var(--text-light);">
        Planning Char Dham Yatra for senior parents or elderly relatives? This comprehensive guide covers everything needed to ensure a safe, comfortable, and spiritually fulfilling journey for pilgrims aged 60 and above.
      </p>

      <div class="blogTOC">
        <h5>📑 In This Guide</h5>
        <ul>
          <li>• Pre-Trip Medical Preparation</li>
          <li>• Essential Medicines to Carry</li>
          <li>• Physical Fitness Requirements</li>
          <li>• Accommodation Tips for Seniors</li>
          <li>• Managing Altitude & Weather</li>
          <li>• Emergency Preparedness</li>
        </ul>
      </div>

      <h4>🏥 Pre-Trip Medical Preparation</h4>
      <p>Before booking the yatra, schedule a thorough medical check-up. This is absolutely essential for travelers above 60 years:</p>
      
      <ul>
        <li><strong>Cardio evaluation:</strong> ECG and blood pressure monitoring for seniors above 65</li>
        <li><strong>Lung function test:</strong> Especially important for high-altitude travel where oxygen is less</li>
        <li><strong>Diabetes check:</strong> Ensure blood sugar is well-controlled before the journey</li>
        <li><strong>Doctor consultation:</strong> Discuss altitude travel plans and get medical clearance certificate</li>
        <li><strong>Eye examination:</strong> High altitude sun exposure requires proper eye protection</li>
      </ul>

      <div class="tipBox blue">
        <strong>💡 Expert Tip:</strong> Carry a medical fitness certificate from your doctor. Some helicopter services and hotels may request it for senior travelers above 70 years.
      </div>

      <h4>💊 Essential Medicines to Carry</h4>
      <p>Create a comprehensive medical kit covering all possible scenarios:</p>
      
      <div class="keyPointsGrid">
        <div class="keyPoint">
          <div class="icon">💊</div>
          <b>Regular Medicines</b>
          <span>1.5x normal supply</span>
        </div>
        <div class="keyPoint">
          <div class="icon">🩹</div>
          <b>First Aid Kit</b>
          <span>Band-aids, antiseptic</span>
        </div>
        <div class="keyPoint">
          <div class="icon">🌡️</div>
          <b>Monitoring Devices</b>
          <span>BP monitor, glucometer</span>
        </div>
        <div class="keyPoint">
          <div class="icon">💨</div>
          <b>Respiratory Support</b>
          <span>Inhaler if needed</span>
        </div>
      </div>

      <p><strong>Complete Medicine Checklist:</strong></p>
      <ul>
        <li>Regular medications in original packaging with prescriptions</li>
        <li>Altitude sickness prevention (Diamox - consult doctor for dosage)</li>
        <li>Pain relief: Paracetamol, muscle pain balm</li>
        <li>Digestive aids: Antacids, anti-diarrheal, digestive enzymes</li>
        <li>Respiratory support: Inhaler if history of asthma/COPD</li>
        <li>First aid basics: Band-aids, antiseptic cream, bandage</li>
        <li>ORS packets for hydration</li>
      </ul>

      <h4>🚶‍♂️ Physical Demands at Each Dham</h4>
      <ul>
        <li><strong>Kedarnath:</strong> Most challenging - 16 km trek (helicopter recommended for 60+)</li>
        <li><strong>Yamunotri:</strong> Moderate - 5 km trek (pony/palki available)</li>
        <li><strong>Gangotri:</strong> Easy - Motorable, minimal walking</li>
        <li><strong>Badrinath:</strong> Easiest - Completely motorable</li>
      </ul>

      <div class="tipBox green">
        <strong>✅ Good News:</strong> Pony, palki (palanquin), and helicopter services are available. No senior needs to worry about physical limitations - alternatives exist for every dham.
      </div>

      <h4>🏨 Accommodation Selection for Seniors</h4>
      <ul>
        <li>Request ground floor or rooms with elevator access</li>
        <li>Western toilets preferred for comfort</li>
        <li>Ensure room has adequate heating</li>
        <li>24-hour hot water availability</li>
        <li>Hotels near medical facilities are safer</li>
        <li>Arrive early afternoon for proper rest</li>
      </ul>

      <h4>🌡️ Managing Altitude Challenges</h4>
      <p><strong>Altitude levels:</strong></p>
      <ul>
        <li>Yamunotri: 3,293m</li>
        <li>Gangotri: 3,100m</li>
        <li>Kedarnath: 3,583m (Highest)</li>
        <li>Badrinath: 3,133m</li>
      </ul>

      <p><strong>Acclimatization tips:</strong></p>
      <ul>
        <li>Spend first night at lower altitude (Haridwar/Rishikesh)</li>
        <li>Follow gradual ascent - don't rush</li>
        <li>Rest 2-3 hours upon arrival at high altitude before temple visit</li>
        <li>Monitor symptoms: headache, nausea, breathlessness</li>
        <li>Stay hydrated: 3-4 liters water daily</li>
      </ul>

      <h4>📱 Emergency Preparedness</h4>
      <ul>
        <li>Save emergency contacts: Local hospitals, tour coordinator, family</li>
        <li>Keep physical copies of important documents</li>
        <li>Share daily location updates with family</li>
        <li>Know nearest hospital at each stop</li>
        <li>Have travel insurance covering high-altitude emergencies</li>
      </ul>

      <div class="tipBox red">
        <strong>🚨 Critical Rule:</strong> If altitude sickness symptoms worsen or don't improve after 2-3 hours of rest, descend to lower altitude immediately. Health is more important than completing darshan.
      </div>

      <h4>🙏 Recommended Itinerary Duration</h4>
      <ul>
        <li><strong>Minimum duration:</strong> 11-13 days (rushing is dangerous)</li>
        <li><strong>Rest days:</strong> Include 2-3 buffer days</li>
        <li><strong>Daily driving:</strong> Maximum 5-6 hours</li>
        <li><strong>Temple visits:</strong> Early morning (5-7 AM) - least crowded</li>
      </ul>

      <div class="tipBox green">
        <strong>🙏 Remember:</strong> Char Dham is a spiritual journey, not a race. The divine presence values your devotion, not the speed of travel. Take your time, listen to your body, and enjoy the sacred experience.
      </div>
    `,
    related: ["health-altitude", "kedarnath-helicopter", "packing-checklist"]
  },

  // ============================================
  // BLOG 4: KEDARNATH HELICOPTER BOOKING
  // ============================================
  "kedarnath-helicopter": {
    title: "Kedarnath Helicopter Booking 2025: Complete Process & Tips",
    date: "January 16, 2025",
    author: "Dhoni Travels Expert Team",
    readTime: "10 min read",
    category: "Helicopter Guide",
    content: `
      <div class="authorBox">
        <img src="images/author.jpg" alt="Dhoni Travels Team" onerror="this.src='https://ui-avatars.com/api/?name=DT&background=ff6b35&color=fff'">
        <div>
          <b>Dhoni Travels Expert Team</b>
          <span>Kedarnath Helicopter Specialists</span>
        </div>
      </div>

      <p style="font-size: 18px; line-height: 1.8; color: var(--text-light);">
        The helicopter service to Kedarnath is a blessing for senior pilgrims and those who cannot undertake the challenging 16 km trek. This guide covers everything about booking, helipads, timings, and what to expect.
      </p>

      <div class="blogTOC">
        <h5>📑 In This Guide</h5>
        <ul>
          <li>• Why Choose Helicopter?</li>
          <li>• Available Helipads</li>
          <li>• Booking Process Step-by-Step</li>
          <li>• Weight & Baggage Limits</li>
          <li>• What to Expect on Flight Day</li>
          <li>• Important Tips</li>
        </ul>
      </div>

      <h4>🚁 Why Choose Helicopter for Kedarnath?</h4>
      
      <div class="keyPointsGrid">
        <div class="keyPoint">
          <div class="icon">⏱️</div>
          <b>Time Saved</b>
          <span>10-15 min vs 6-8 hr trek</span>
        </div>
        <div class="keyPoint">
          <div class="icon">💪</div>
          <b>Physical Effort</b>
          <span>Minimal exertion</span>
        </div>
        <div class="keyPoint">
          <div class="icon">👴</div>
          <b>Senior Friendly</b>
          <span>Ideal for 60+ age</span>
        </div>
        <div class="keyPoint">
          <div class="icon">🏔️</div>
          <b>Altitude Exposure</b>
          <span>Reduced duration</span>
        </div>
      </div>

      <p><strong>Benefits of Helicopter:</strong></p>
      <ul>
        <li>Avoids 16 km strenuous trek (32 km round trip)</li>
        <li>Significantly reduces altitude exposure time</li>
        <li>Same-day return possible (recommended for seniors)</li>
        <li>Less physical strain, more energy for darshan</li>
        <li>Breathtaking aerial views of Himalayas</li>
        <li>Safe and reliable service by authorized operators</li>
      </ul>

      <h4>📍 Available Helipad Locations</h4>

      <table class="infoTable">
        <tr>
          <th>Helipad</th>
          <th>Distance from Guptkashi</th>
          <th>Flight Time to Kedarnath</th>
        </tr>
        <tr>
          <td><strong>Phata</strong></td>
          <td>25 km</td>
          <td>~10 minutes</td>
        </tr>
        <tr>
          <td><strong>Sersi</strong></td>
          <td>20 km</td>
          <td>~8 minutes</td>
        </tr>
        <tr>
          <td><strong>Guptkashi</strong></td>
          <td>0 km (town itself)</td>
          <td>~12 minutes</td>
        </tr>
        <tr>
          <td><strong>Sitapur</strong></td>
          <td>3 km</td>
          <td>~10 minutes</td>
        </tr>
      </table>

      <div class="tipBox blue">
        <strong>💡 Recommendation:</strong> Phata helipad is most popular due to better facilities and availability. Book in advance during peak season (May-June).
      </div>

      <h4>📝 Helicopter Booking Process</h4>

      <div class="stepCard">
        <span class="stepNum">1</span>
        <h5>Choose Booking Method</h5>
        <p><strong>Option A:</strong> Official IRCTC portal (irctctourism.com)<br>
        <strong>Option B:</strong> Uttarakhand Civil Aviation Development Authority (UCADA)<br>
        <strong>Option C:</strong> Authorized private operators</p>
      </div>

      <div class="stepCard">
        <span class="stepNum">2</span>
        <h5>Select Date & Slot</h5>
        <p>Choose your preferred travel date and time slot. Morning slots (6-9 AM) are most popular. Booking opens typically 15-30 days in advance depending on operator.</p>
      </div>

      <div class="stepCard">
        <span class="stepNum">3</span>
        <h5>Enter Passenger Details</h5>
        <p>Provide complete information: Full name (as per ID), age, weight, mobile number, email, ID proof details. All passengers' details required.</p>
      </div>

      <div class="stepCard">
        <span class="stepNum">4</span>
        <h5>Make Payment</h5>
        <p>Complete online payment through available options. Keep transaction receipt and booking confirmation safe.</p>
      </div>

      <div class="stepCard">
        <span class="stepNum">5</span>
        <h5>Collect Boarding Pass</h5>
        <p>Report to helipad counter on travel day with booking confirmation and original ID proof. Collect boarding pass after verification and weight check.</p>
      </div>

      <h4>⚖️ Weight & Baggage Limits</h4>
      <ul>
        <li><strong>Passenger weight limit:</strong> Typically 75-80 kg (varies by operator)</li>
        <li><strong>Excess weight:</strong> May require additional seat booking</li>
        <li><strong>Baggage allowed:</strong> Only small handbag (1-2 kg)</li>
        <li><strong>Large bags:</strong> Must be left at helipad cloakroom</li>
        <li><strong>Essential items only:</strong> Phone, wallet, medicines, water bottle</li>
      </ul>

      <div class="tipBox yellow">
        <strong>⚠️ Important:</strong> Actual body weight is checked at helipad. Be honest while booking to avoid issues. If overweight, you may need to book extra seat or reschedule.
      </div>

      <h4>📅 What to Expect on Flight Day</h4>

      <p><strong>Timeline:</strong></p>
      <ul>
        <li><strong>2 hours before:</strong> Arrive at helipad for documentation</li>
        <li><strong>1.5 hours before:</strong> Weight verification and security check</li>
        <li><strong>1 hour before:</strong> Boarding pass collection</li>
        <li><strong>30 minutes before:</strong> Safety briefing</li>
        <li><strong>At scheduled time:</strong> Boarding and takeoff</li>
      </ul>

      <p><strong>At Kedarnath Helipad:</strong></p>
      <ul>
        <li>Landing at Kedarnath helipad (500m from temple)</li>
        <li>Short walk to temple (5-10 minutes)</li>
        <li>Typical ground time: 1.5 to 2 hours for darshan</li>
        <li>Return to helipad for scheduled return flight</li>
      </ul>

      <h4>✅ Important Tips for Helicopter Travel</h4>
      <ul>
        <li><strong>Weather dependent:</strong> Flights operate only in clear weather</li>
        <li><strong>Early slots preferred:</strong> Morning weather usually better</li>
        <li><strong>Carry warm clothes:</strong> Kedarnath is cold even in summer</li>
        <li><strong>Book in advance:</strong> Peak season slots fill up quickly</li>
        <li><strong>Keep documents safe:</strong> Original ID mandatory</li>
        <li><strong>Stay hydrated:</strong> Drink water before and after flight</li>
        <li><strong>Don't rush darshan:</strong> Take your time at temple</li>
        <li><strong>Return on time:</strong> Don't miss your return slot</li>
      </ul>

      <h4>❓ Frequently Asked Questions</h4>
      
      <p><strong>Q: What if flight is cancelled due to weather?</strong></p>
      <p>Full refund is provided or rescheduling option given. Weather cancellations are common - keep buffer days in itinerary.</p>

      <p><strong>Q: Can seniors with health issues take helicopter?</strong></p>
      <p>Yes, helicopter is actually recommended for seniors. However, those with serious cardiac or respiratory conditions should consult doctor first.</p>

      <p><strong>Q: How far in advance should I book?</strong></p>
      <p>During peak season (May-June), book 2-3 weeks in advance. September-October usually has better availability.</p>

      <div class="tipBox green">
        <strong>✅ Final Advice:</strong> Helicopter is the best option for seniors above 60. It makes Kedarnath darshan accessible to those who would otherwise not be able to undertake the challenging trek. The aerial views of the Himalayas are an added blessing!
      </div>
    `,
    related: ["kedarnath-guide", "kedarnath-tips", "senior-tips"]
  },

  // ============================================
  // BLOG 5: KEDARNATH TRAVEL TIPS
  // ============================================
  "kedarnath-tips": {
    title: "Kedarnath Travel Tips 2025: Insider Secrets for Smooth Yatra",
    date: "January 14, 2025",
    author: "Dhoni Travels Expert Team",
    readTime: "7 min read",
    category: "Travel Tips",
    content: `
      <div class="authorBox">
        <img src="images/author.jpg" alt="Dhoni Travels Team" onerror="this.src='https://ui-avatars.com/api/?name=DT&background=ff6b35&color=fff'">
        <div>
          <b>Dhoni Travels Expert Team</b>
          <span>Kedarnath Travel Specialists</span>
        </div>
      </div>

      <p style="font-size: 18px; line-height: 1.8; color: var(--text-light);">
        Based on years of experience guiding pilgrims to Kedarnath, we've compiled the most valuable insider tips that can make your yatra smooth, safe, and memorable. These are lessons learned from thousands of successful pilgrimages.
      </p>

      <div class="blogTOC">
        <h5>📑 In This Guide</h5>
        <ul>
          <li>• Best Time Secrets</li>
          <li>• Trek Preparation Tips</li>
          <li>• What to Carry (& What NOT to)</li>
          <li>• Darshan Insider Tips</li>
          <li>• Common Mistakes to Avoid</li>
          <li>• Money-Saving Tips</li>
        </ul>
      </div>

      <h4>📅 Best Time Insider Secrets</h4>
      <ul>
        <li><strong>Mid-May:</strong> Temple just opened, snow-capped peaks visible, moderate crowd</li>
        <li><strong>Early June:</strong> Best weather, but crowds increasing</li>
        <li><strong>Avoid June 15 - July 15:</strong> Peak crowd, school holidays</li>
        <li><strong>September 15 - October 15:</strong> SECRET BEST TIME - Clear skies, fewer crowds, pleasant weather</li>
        <li><strong>Weekdays vs Weekends:</strong> Always prefer weekdays - significantly less crowded</li>
      </ul>

      <div class="tipBox green">
        <strong>🤫 Insider Secret:</strong> The last week of September is often considered the "golden window" - crowds have reduced, weather is perfect, and mountain views are crystal clear post-monsoon.
      </div>

      <h4>🥾 Trek Preparation Tips</h4>
      <p><strong>Physical Preparation (Start 2 months before):</strong></p>
      <ul>
        <li>Daily walking: Start with 2 km, gradually increase to 5 km</li>
        <li>Stair climbing: 10-15 floors daily builds mountain stamina</li>
        <li>Practice with loaded backpack: Add 3-4 kg gradually</li>
        <li>Deep breathing exercises: Improves oxygen absorption at altitude</li>
      </ul>

      <p><strong>Trek Day Strategy:</strong></p>
      <ul>
        <li><strong>Start time:</strong> Leave by 5 AM from Gaurikund</li>
        <li><strong>Pace:</strong> Slow and steady - take 6-8 hours, not 4-5</li>
        <li><strong>Breaks:</strong> Every 2 km mandatory rest (10-15 minutes)</li>
        <li><strong>Hydration:</strong> Sip water every 20 minutes</li>
        <li><strong>Snacks:</strong> Light energy food every hour (dry fruits, glucose)</li>
      </ul>

      <h4>🎒 What to Carry (Essential Only)</h4>
      <p><strong>Must Have:</strong></p>
      <ul>
        <li>Comfortable trekking shoes (already broken in)</li>
        <li>Warm layers (thermal, fleece, windproof jacket)</li>
        <li>Rain poncho or waterproof jacket</li>
        <li>Woolen cap, gloves, warm socks</li>
        <li>Walking stick (can buy at Gaurikund)</li>
        <li>Small backpack (max 4-5 kg)</li>
        <li>Water bottle (1 liter minimum)</li>
        <li>Energy snacks and glucose</li>
        <li>Basic medicines and ORS</li>
        <li>Sunscreen and sunglasses</li>
        <li>Power bank and torch</li>
        <li>Original ID proof</li>
      </ul>

      <p><strong>What NOT to Carry:</strong></p>
      <ul>
        <li>❌ Heavy suitcase (leave at Guptkashi hotel)</li>
        <li>❌ Laptop or unnecessary electronics</li>
        <li>❌ Expensive jewelry</li>
        <li>❌ Too many clothes</li>
        <li>❌ Heavy pooja items (buy at temple)</li>
      </ul>

      <h4>🙏 Darshan Insider Tips</h4>
      <ul>
        <li><strong>Best darshan time:</strong> 4-6 AM (Abhishek time) - most powerful experience</li>
        <li><strong>Least crowded:</strong> Evening 6-7 PM (most pilgrims already left)</li>
        <li><strong>VIP darshan:</strong> Available through temple committee (enquire locally)</li>
        <li><strong>Special Rudrabhishek:</strong> Can be booked at temple - deeply spiritual experience</li>
        <li><strong>Photography:</strong> Outside temple only - not inside sanctum</li>
      </ul>

      <div class="tipBox blue">
        <strong>💡 Pro Tip:</strong> After darshan, walk behind the temple to see the massive rock that saved the temple during 2013 floods. It's a powerful reminder of divine protection.
      </div>

      <h4>❌ Common Mistakes to Avoid</h4>
      <ul>
        <li><strong>Rushing the trek:</strong> Many try to finish in 4 hours - leads to exhaustion and altitude sickness</li>
        <li><strong>Skipping acclimatization:</strong> Not resting at Guptkashi before trek is dangerous</li>
        <li><strong>Overpacking:</strong> Heavy bags make trek miserable</li>
        <li><strong>Ignoring weather:</strong> Not carrying rain gear - weather changes quickly</li>
        <li><strong>Not booking return:</strong> For helicopter - book round trip in advance</li>
        <li><strong>Staying overnight at Kedarnath:</strong> Not recommended for seniors - altitude is challenging</li>
        <li><strong>No cash:</strong> ATMs don't work properly - carry sufficient cash</li>
      </ul>

      <h4>💡 Money-Saving Tips</h4>
      <ul>
        <li>Book helicopter in advance - last-minute bookings are expensive</li>
        <li>Weekday travel - slightly lower prices and better availability</li>
        <li>Carry packed food - eating on trek route is expensive</li>
        <li>Share pony/palki - some pilgrims share to reduce cost</li>
        <li>Government accommodation - GMVN guest houses are economical</li>
        <li>Group travel - better rates for transport and accommodation</li>
      </ul>

      <h4>🏥 Health & Safety Tips</h4>
      <ul>
        <li>Carry Diamox (altitude sickness prevention) - consult doctor for dosage</li>
        <li>Know AMS symptoms: Headache, nausea, dizziness - rest immediately if any appear</li>
        <li>Don't ignore symptoms - descend if condition worsens</li>
        <li>Medical facilities available at Kedarnath - don't panic</li>
        <li>Oxygen cylinders available at temple area</li>
        <li>Stay with group - don't trek alone</li>
      </ul>

      <div class="tipBox green">
        <strong>🙏 Final Wisdom:</strong> Kedarnath darshan is not about reaching fast - it's about reaching with devotion. The journey itself is tapasya (spiritual effort). Accept whatever challenges come as part of Lord Shiva's blessings. The divine experience awaiting at the temple makes every step worthwhile.
      </div>
    `,
    related: ["kedarnath-guide", "kedarnath-helicopter", "packing-checklist"]
  },

  // ============================================
  // BLOG 6: CHAR DHAM REGISTRATION GUIDE
  // ============================================
  "registration-guide": {
    title: "Char Dham Registration Guide 2025: Online Process Step-by-Step",
    date: "January 12, 2025",
    author: "Dhoni Travels Expert Team",
    readTime: "6 min read",
    category: "Registration",
    content: `
      <div class="authorBox">
        <img src="images/author.jpg" alt="Dhoni Travels Team" onerror="this.src='https://ui-avatars.com/api/?name=DT&background=ff6b35&color=fff'">
        <div>
          <b>Dhoni Travels Expert Team</b>
          <span>Registration Process Specialists</span>
        </div>
      </div>

      <p style="font-size: 18px; line-height: 1.8; color: var(--text-light);">
        The Uttarakhand government has made registration mandatory for all Char Dham pilgrims. This biometric registration helps in tracking pilgrims for safety purposes and managing crowd flow at temples. Here's the complete step-by-step guide for 2025.
      </p>

      <div class="blogTOC">
        <h5>📑 In This Guide</h5>
        <ul>
          <li>• Why Registration is Mandatory</li>
          <li>• Online Registration Process</li>
          <li>• Required Documents</li>
          <li>• Biometric Enrollment</li>
          <li>• Common Issues & Solutions</li>
          <li>• Important Guidelines</li>
        </ul>
      </div>

      <h4>📋 Why Registration is Mandatory?</h4>
      <ul>
        <li><strong>Safety tracking:</strong> Government can track pilgrims in case of emergencies</li>
        <li><strong>Crowd management:</strong> Helps in managing daily pilgrim flow to temples</li>
        <li><strong>Medical record:</strong> Health information available for emergency response</li>
        <li><strong>Disaster management:</strong> Crucial after 2013 floods for pilgrim safety</li>
        <li><strong>Better planning:</strong> Helps authorities arrange adequate facilities</li>
      </ul>

      <div class="tipBox yellow">
        <strong>⚠️ Important:</strong> Without proper registration, you may be denied entry at checkpoints. Complete registration before starting your yatra.
      </div>

      <h4>🌐 Online Registration Process</h4>

      <div class="stepCard">
        <span class="stepNum">1</span>
        <h5>Visit Official Portal</h5>
        <p>Go to the official registration website: <strong>registrationandtouristcare.uk.gov.in</strong><br>
        This is the only authorized portal for Char Dham registration.</p>
      </div>

      <div class="stepCard">
        <span class="stepNum">2</span>
        <h5>Create Account / Login</h5>
        <p>If first time, create new account using mobile number and email. Existing users can login directly. OTP verification required.</p>
      </div>

      <div class="stepCard">
        <span class="stepNum">3</span>
        <h5>Select Yatra Details</h5>
        <p>Choose: Char Dham / Do Dham / Single Dham. Select travel dates, starting point, and mode of transport (own vehicle / taxi / bus).</p>
      </div>

      <div class="stepCard">
        <span class="stepNum">4</span>
        <h5>Enter Pilgrim Information</h5>
        <p>Fill details for all travelers: Full name (as per Aadhaar), age, gender, mobile number, address, emergency contact, medical conditions (if any).</p>
      </div>

      <div class="stepCard">
        <span class="stepNum">5</span>
        <h5>Upload Documents</h5>
        <p>Upload: Aadhaar card, passport size photograph, medical fitness certificate (for 70+ age). File size and format requirements must be followed.</p>
      </div>

      <div class="stepCard">
        <span class="stepNum">6</span>
        <h5>Submit & Get Registration ID</h5>
        <p>Review all information and submit. Registration ID will be generated - save/screenshot this. Also sent to registered mobile and email.</p>
      </div>

      <h4>📄 Required Documents</h4>
      <ul>
        <li><strong>Aadhaar Card:</strong> Mandatory for all pilgrims (original + photocopy)</li>
        <li><strong>Passport Size Photo:</strong> Recent photograph, white background</li>
        <li><strong>Mobile Number:</strong> Active number for OTP and updates</li>
        <li><strong>Medical Certificate:</strong> Required for pilgrims above 70 years</li>
        <li><strong>Vehicle Documents:</strong> If traveling in own vehicle (RC, license, insurance)</li>
      </ul>

      <h4>🔐 Biometric Enrollment</h4>
      <p>After online registration, biometric verification is done at designated centers:</p>

      <p><strong>Biometric Centers Location:</strong></p>
      <ul>
        <li>Haridwar - Multiple centers near bus stand and railway station</li>
        <li>Rishikesh - Near Triveni Ghat and bus stand</li>
        <li>Dehradun - ISBT and city center</li>
        <li>On Route - Various checkpoints (Barkot, Uttarkashi, Guptkashi, etc.)</li>
      </ul>

      <p><strong>What happens at biometric center:</strong></p>
      <ul>
        <li>Show your online registration ID</li>
        <li>Present original Aadhaar card</li>
        <li>Fingerprint scan and photograph taken</li>
        <li>Biometric card/slip issued</li>
        <li>Process takes 10-15 minutes</li>
      </ul>

      <div class="tipBox green">
        <strong>✅ Pro Tip:</strong> Complete biometric enrollment at Haridwar/Rishikesh before starting your yatra. Avoid rush by going early morning.
      </div>

      <h4>❓ Common Issues & Solutions</h4>

      <p><strong>Issue: Aadhaar details mismatch</strong></p>
      <p>Solution: Ensure name spelling matches exactly with Aadhaar. If different, carry other ID proofs as backup.</p>

      <p><strong>Issue: OTP not received</strong></p>
      <p>Solution: Check network connectivity. Try after few minutes. Use "Resend OTP" option.</p>

      <p><strong>Issue: Document upload failing</strong></p>
      <p>Solution: Reduce file size (under 500KB), use JPG/PDF format, ensure clear readable scan.</p>

      <p><strong>Issue: Website not working</strong></p>
      <p>Solution: Try during non-peak hours (early morning/late night). Clear browser cache. Try different browser.</p>

      <h4>📝 Important Guidelines</h4>
      <ul>
        <li>Registration should be done minimum 24-48 hours before travel</li>
        <li>Carry physical copy of registration confirmation</li>
        <li>Keep original Aadhaar card with you throughout yatra</li>
        <li>Registration is valid for entire yatra duration as mentioned</li>
        <li>Any changes in travel dates require fresh registration</li>
        <li>Group bookings can be done by one person for all travelers</li>
        <li>Children below 2 years don't need separate registration</li>
      </ul>

      <h4>📱 Helpful Apps</h4>
      <ul>
        <li><strong>Chardham Yatra App:</strong> Official Uttarakhand government app</li>
        <li><strong>Features:</strong> Registration, weather updates, route information, emergency contacts</li>
        <li><strong>Download:</strong> Available on Google Play Store and Apple App Store</li>
      </ul>

      <div class="tipBox blue">
        <strong>💡 Final Tip:</strong> Complete your registration as soon as your travel dates are confirmed. Peak season registrations fill up quickly, and last-minute registrations may face technical issues.
      </div>
    `,
    related: ["chardham-guide", "first-timer", "route-2025"]
  },

  // ============================================
  // BLOG 7: DO DHAM YATRA GUIDE
  // ============================================
  "dodham-guide": {
    title: "Do Dham Yatra Guide 2025: Kedarnath-Badrinath Complete Itinerary",
    date: "January 10, 2025",
    author: "Dhoni Travels Expert Team",
    readTime: "9 min read",
    category: "Do Dham Guide",
    content: `
      <div class="authorBox">
        <img src="images/author.jpg" alt="Dhoni Travels Team" onerror="this.src='https://ui-avatars.com/api/?name=DT&background=ff6b35&color=fff'">
        <div>
          <b>Dhoni Travels Expert Team</b>
          <span>Do Dham Yatra Specialists</span>
        </div>
      </div>

      <p style="font-size: 18px; line-height: 1.8; color: var(--text-light);">
        Do Dham Yatra, covering Kedarnath and Badrinath, is perfect for pilgrims with limited time or those who want to focus on the two most significant dhams. This guide covers complete planning for Kedarnath-Badrinath yatra in 2025.
      </p>

      <div class="blogTOC">
        <h5>📑 In This Guide</h5>
        <ul>
          <li>• What is Do Dham Yatra?</li>
          <li>• Do Dham Combinations</li>
          <li>• Complete 6-Day Itinerary</li>
          <li>• Route & Distance Details</li>
          <li>• Best Time to Visit</li>
          <li>• Tips for Seniors</li>
        </ul>
      </div>

      <h4>🕉️ What is Do Dham Yatra?</h4>
      <p>Do Dham (Two Dhams) Yatra covers any two of the four Char Dham temples. The most popular combination is <strong>Kedarnath + Badrinath</strong> due to:</p>
      <ul>
        <li>Both are the most spiritually significant (Shiva + Vishnu)</li>
        <li>Located in the same region (Garhwal)</li>
        <li>Can be completed in shorter duration (5-7 days)</li>
        <li>Route is relatively straightforward</li>
        <li>Suitable for pilgrims with limited time</li>
      </ul>

      <div class="keyPointsGrid">
        <div class="keyPoint">
          <div class="icon">🙏</div>
          <b>Kedarnath</b>
          <span>Lord Shiva (Jyotirlinga)</span>
        </div>
        <div class="keyPoint">
          <div class="icon">🙏</div>
          <b>Badrinath</b>
          <span>Lord Vishnu (Badri Narayan)</span>
        </div>
        <div class="keyPoint">
          <div class="icon">📅</div>
          <b>Duration</b>
          <span>5-7 Days</span>
        </div>
        <div class="keyPoint">
          <div class="icon">🚗</div>
          <b>Total Distance</b>
          <span>~600-700 km</span>
        </div>
      </div>

      <h4>🔄 Do Dham Combinations</h4>
      <p>Different Do Dham options available:</p>
      <ul>
        <li><strong>Kedarnath + Badrinath:</strong> Most popular - Lord Shiva & Lord Vishnu (5-7 days)</li>
        <li><strong>Yamunotri + Gangotri:</strong> Source of two holy rivers (4-5 days)</li>
        <li><strong>Badrinath + Gangotri:</strong> Vishnu dham + Ganga origin (4-5 days)</li>
        <li><strong>Kedarnath + Gangotri:</strong> Shiva dham + Ganga origin (5-6 days)</li>
      </ul>

      <h4>📅 Complete 6-Day Kedarnath-Badrinath Itinerary</h4>

      <p><strong>Day 1: Haridwar/Dehradun → Guptkashi</strong></p>
      <ul>
        <li><strong>Distance:</strong> 210 km | <strong>Duration:</strong> 8-9 hours</li>
        <li><strong>Route:</strong> Haridwar → Rishikesh → Devprayag → Rudraprayag → Guptkashi</li>
        <li><strong>Highlights:</strong> Scenic drive along Alaknanda river, Devprayag sangam</li>
        <li><strong>Stay:</strong> Guptkashi (1,319m altitude)</li>
        <li><strong>Evening:</strong> Visit Vishwanath Temple, rest for next day</li>
      </ul>

      <p><strong>Day 2: Kedarnath Darshan Day</strong></p>
      <ul>
        <li><strong>Option A - Helicopter:</strong> Guptkashi → Kedarnath helipad (10-15 min flight)</li>
        <li><strong>Option B - Trek:</strong> Drive to Gaurikund (30 km) → Trek 16 km to Kedarnath</li>
        <li><strong>Activities:</strong> Temple darshan, abhishek, aarti</li>
        <li><strong>Return:</strong> Same route back to Guptkashi</li>
        <li><strong>Stay:</strong> Guptkashi (don't stay at Kedarnath - too high altitude)</li>
      </ul>

      <div class="tipBox green">
        <strong>✅ Senior Recommendation:</strong> Take helicopter for Kedarnath. Saves 32 km of trekking and reduces altitude exposure time significantly.
      </div>

      <p><strong>Day 3: Guptkashi → Badrinath</strong></p>
      <ul>
        <li><strong>Distance:</strong> 170 km | <strong>Duration:</strong> 7-8 hours</li>
        <li><strong>Route:</strong> Guptkashi → Chopta → Joshimath → Badrinath</li>
        <li><strong>Alternate Route:</strong> Via Pipalkoti (longer but easier road)</li>
        <li><strong>Stay:</strong> Badrinath</li>
        <li><strong>Evening:</strong> Rest, acclimatization (3,133m altitude)</li>
      </ul>

      <p><strong>Day 4: Badrinath Darshan & Sightseeing</strong></p>
      <ul>
        <li><strong>Morning:</strong> Early darshan at Badrinath temple (4:30-5:00 AM opening)</li>
        <li><strong>Holy dip:</strong> Tapt Kund (natural hot spring near temple)</li>
        <li><strong>Sightseeing:</strong> Mana Village, Vyas Gufa, Ganesh Gufa, Bheem Pul</li>
        <li><strong>Evening:</strong> Attend beautiful Badrinath aarti</li>
        <li><strong>Stay:</strong> Badrinath or move to Joshimath</li>
      </ul>

      <p><strong>Day 5: Badrinath → Rishikesh</strong></p>
      <ul>
        <li><strong>Distance:</strong> 295 km | <strong>Duration:</strong> 9-10 hours</li>
        <li><strong>Route:</strong> Badrinath → Joshimath → Devprayag → Rishikesh</li>
        <li><strong>Stops:</strong> Photo stops at Devprayag sangam</li>
        <li><strong>Stay:</strong> Rishikesh</li>
        <li><strong>Evening:</strong> Attend Ganga aarti at Triveni Ghat (optional)</li>
      </ul>

      <p><strong>Day 6: Rishikesh → Haridwar → Departure</strong></p>
      <ul>
        <li><strong>Morning:</strong> Leisure time in Rishikesh</li>
        <li><strong>Optional:</strong> Temple visits, local sightseeing</li>
        <li><strong>Drive:</strong> Rishikesh to Haridwar (25 km, 1 hour)</li>
        <li><strong>Departure:</strong> Onward journey home</li>
      </ul>

      <h4>🚗 Route & Distance Summary</h4>
      <table class="infoTable">
        <tr>
          <th>Section</th>
          <th>Distance</th>
          <th>Time</th>
        </tr>
        <tr>
          <td>Haridwar to Guptkashi</td>
          <td>210 km</td>
          <td>8-9 hours</td>
        </tr>
        <tr>
          <td>Guptkashi to Gaurikund</td>
          <td>30 km</td>
          <td>1.5 hours</td>
        </tr>
        <tr>
          <td>Guptkashi to Badrinath</td>
          <td>170 km</td>
          <td>7-8 hours</td>
        </tr>
        <tr>
          <td>Badrinath to Rishikesh</td>
          <td>295 km</td>
          <td>9-10 hours</td>
        </tr>
        <tr>
          <td>Rishikesh to Haridwar</td>
          <td>25 km</td>
          <td>1 hour</td>
        </tr>
      </table>

      <h4>📅 Best Time for Do Dham Yatra</h4>
      <ul>
        <li><strong>May-June:</strong> Best weather, clear views, peak season</li>
        <li><strong>September-October:</strong> Post-monsoon, clear skies, less crowded</li>
        <li><strong>Avoid:</strong> July-August (monsoon, landslides)</li>
      </ul>

      <h4>👴 Do Dham Tips for Senior Citizens</h4>
      <ul>
        <li>Choose helicopter for Kedarnath - non-negotiable for 60+ age</li>
        <li>Don't stay overnight at Kedarnath - return to lower altitude</li>
        <li>Add one extra rest day if possible</li>
        <li>Start early each day, finish travel by 5-6 PM</li>
        <li>Keep medicines and emergency contacts handy</li>
        <li>Stay hydrated throughout the journey</li>
        <li>Don't rush - spiritual journey should be peaceful</li>
      </ul>

      <div class="tipBox green">
        <strong>🙏 Spiritual Significance:</strong> Do Dham Yatra covering Kedarnath and Badrinath is considered highly auspicious as it includes both Lord Shiva (the destroyer/transformer) and Lord Vishnu (the preserver). This combination represents the complete cycle of cosmic energy.
      </div>
    `,
    related: ["kedarnath-guide", "chardham-guide", "route-2025"]
  },

  // ============================================
  // BLOG 8: ROUTE GUIDE 2025
  // ============================================
  "route-2025": {
    title: "Char Dham Route Guide 2025-26: Complete Day-wise Itinerary",
    date: "January 8, 2025",
    author: "Dhoni Travels Route Planning Team",
    readTime: "10 min read",
    category: "Route Guide",
    content: `
      <div class="authorBox">
        <img src="images/author.jpg" alt="Dhoni Travels Team" onerror="this.src='https://ui-avatars.com/api/?name=DT&background=ff6b35&color=fff'">
        <div>
          <b>Dhoni Travels Route Planning Team</b>
          <span>Char Dham Route Specialists</span>
        </div>
      </div>

      <p style="font-size: 18px; line-height: 1.8; color: var(--text-light);">
        Planning your Char Dham Yatra route efficiently ensures maximum comfort and spiritual fulfillment. This detailed guide covers the complete 2025-26 circuit with distances, driving times, and practical recommendations.
      </p>

      <h4>🗺️ Traditional Char Dham Route (Clockwise)</h4>
      <p style="text-align: center; font-size: 18px; padding: 20px; background: #f8fafc; border-radius: 12px; margin: 20px 0;">
        <strong>Haridwar → Yamunotri → Gangotri → Kedarnath → Badrinath → Haridwar</strong>
      </p>

      <div class="keyPointsGrid">
        <div class="keyPoint">
          <div class="icon">🚗</div>
          <b>Total Distance</b>
          <span>~1,200-1,500 km</span>
        </div>
        <div class="keyPoint">
          <div class="icon">📅</div>
          <b>Recommended Days</b>
          <span>10-13 days</span>
        </div>
        <div class="keyPoint">
          <div class="icon">⛰️</div>
          <b>Max Altitude</b>
          <span>3,583m</span>
        </div>
        <div class="keyPoint">
          <div class="icon">🏨</div>
          <b>Night Stays</b>
          <span>9-11 nights</span>
        </div>
      </div>

      <h4>📅 11-Day Senior-Friendly Itinerary</h4>

      <p><strong>Day 1:</strong> Haridwar/Dehradun → Barkot (220 km, 7-8 hrs)</p>
      <p><strong>Day 2:</strong> Barkot → Yamunotri → Barkot (5 km trek each way)</p>
      <p><strong>Day 3:</strong> Barkot → Uttarkashi (100 km, 4 hrs)</p>
      <p><strong>Day 4:</strong> Uttarkashi → Gangotri → Uttarkashi (100 km each way)</p>
      <p><strong>Day 5:</strong> Uttarkashi → Guptkashi (220 km, 8-9 hrs)</p>
      <p><strong>Day 6:</strong> Kedarnath Darshan (Helicopter/Trek)</p>
      <p><strong>Day 7:</strong> Guptkashi → Pipalkoti (90 km, 4 hrs)</p>
      <p><strong>Day 8:</strong> Pipalkoti → Badrinath (75 km, 3 hrs)</p>
      <p><strong>Day 9:</strong> Badrinath Darshan & Sightseeing → Joshimath</p>
      <p><strong>Day 10:</strong> Joshimath → Rishikesh (250 km, 8-9 hrs)</p>
      <p><strong>Day 11:</strong> Rishikesh → Haridwar → Departure</p>

      <h4>🚗 Detailed Distance Chart</h4>
      <table class="infoTable">
        <tr>
          <th>Route Section</th>
          <th>Distance</th>
          <th>Time</th>
          <th>Road Condition</th>
        </tr>
        <tr>
          <td>Haridwar - Barkot</td>
          <td>220 km</td>
          <td>7-8 hrs</td>
          <td>Good</td>
        </tr>
        <tr>
          <td>Barkot - Janki Chatti</td>
          <td>42 km</td>
          <td>2 hrs</td>
          <td>Moderate</td>
        </tr>
        <tr>
          <td>Barkot - Uttarkashi</td>
          <td>100 km</td>
          <td>4 hrs</td>
          <td>Good</td>
        </tr>
        <tr>
          <td>Uttarkashi - Gangotri</td>
          <td>100 km</td>
          <td>4 hrs</td>
          <td>Good</td>
        </tr>
        <tr>
          <td>Uttarkashi - Guptkashi</td>
          <td>220 km</td>
          <td>8-9 hrs</td>
          <td>Mixed</td>
        </tr>
        <tr>
          <td>Guptkashi - Gaurikund</td>
          <td>30 km</td>
          <td>1.5 hrs</td>
          <td>Moderate</td>
        </tr>
        <tr>
          <td>Guptkashi - Pipalkoti</td>
          <td>90 km</td>
          <td>4 hrs</td>
          <td>Good</td>
        </tr>
        <tr>
          <td>Pipalkoti - Badrinath</td>
          <td>75 km</td>
          <td>3 hrs</td>
          <td>Good</td>
        </tr>
        <tr>
          <td>Badrinath - Joshimath</td>
          <td>45 km</td>
          <td>1.5 hrs</td>
          <td>Good</td>
        </tr>
        <tr>
          <td>Joshimath - Rishikesh</td>
          <td>250 km</td>
          <td>8-9 hrs</td>
          <td>Good</td>
        </tr>
      </table>

      <h4>🏨 Recommended Stay Locations</h4>
      <ul>
        <li><strong>Night 1-2:</strong> Barkot (comfortable hotels, moderate altitude)</li>
        <li><strong>Night 3-4:</strong> Uttarkashi (good facilities, medical support)</li>
        <li><strong>Night 5-6:</strong> Guptkashi/Sitapur (Kedarnath base)</li>
        <li><strong>Night 7:</strong> Pipalkoti (transit point)</li>
        <li><strong>Night 8-9:</strong> Badrinath or Joshimath</li>
        <li><strong>Night 10:</strong> Rishikesh (comfortable end to yatra)</li>
      </ul>

      <div class="tipBox green">
        <strong>✅ Senior Tip:</strong> This 11-day itinerary is designed with adequate rest. For pilgrims above 70 or with health concerns, add 2-3 more buffer days.
      </div>
    `,
    related: ["chardham-guide", "best-month", "senior-tips"]
  },

  // ============================================
  // BLOG 9: HEALTH & ALTITUDE TIPS
  // ============================================
  "health-altitude": {
    title: "Preventing Altitude Sickness: Complete Medical Guide for Pilgrims",
    date: "January 5, 2025",
    author: "Medical Advisory Team",
    readTime: "9 min read",
    category: "Health Guide",
    content: `
      <div class="authorBox">
        <img src="images/doctor.jpg" alt="Medical Team" onerror="this.src='https://ui-avatars.com/api/?name=MT&background=10b981&color=fff'">
        <div>
          <b>Medical Advisory Team</b>
          <span>Himalayan Travel Health Specialists</span>
        </div>
      </div>

      <p style="font-size: 18px; line-height: 1.8; color: var(--text-light);">
        Altitude sickness (Acute Mountain Sickness - AMS) is the most common health concern during Char Dham Yatra. This comprehensive medical guide explains symptoms, prevention strategies, and emergency response protocols.
      </p>

      <h4>🏔️ Understanding Altitude Sickness</h4>
      <p>When you ascend to high altitude (above 2,500 meters), atmospheric pressure decreases and oxygen levels drop. Your body needs time to adapt through acclimatization. If ascent is too rapid, altitude sickness can occur.</p>

      <div class="keyPointsGrid">
        <div class="keyPoint">
          <div class="icon">⛰️</div>
          <b>Yamunotri</b>
          <span>3,293m</span>
        </div>
        <div class="keyPoint">
          <div class="icon">⛰️</div>
          <b>Gangotri</b>
          <span>3,100m</span>
        </div>
        <div class="keyPoint">
          <div class="icon">🔺</div>
          <b>Kedarnath</b>
          <span>3,583m (Highest)</span>
        </div>
        <div class="keyPoint">
          <div class="icon">⛰️</div>
          <b>Badrinath</b>
          <span>3,133m</span>
        </div>
      </div>

      <h4>🩺 Recognizing Symptoms</h4>
      
      <p><strong>MILD Symptoms (Common):</strong></p>
      <ul>
        <li>Headache (most common - 75% of cases)</li>
        <li>Fatigue and weakness</li>
        <li>Loss of appetite</li>
        <li>Nausea</li>
        <li>Dizziness</li>
        <li>Difficulty sleeping</li>
        <li>Shortness of breath during exertion</li>
      </ul>

      <p><strong>SEVERE Symptoms (Emergency):</strong></p>
      <ul>
        <li>Confusion or altered mental state</li>
        <li>Difficulty breathing at rest</li>
        <li>Inability to walk straight</li>
        <li>Coughing up pink/frothy fluid</li>
        <li>Severe chest pain</li>
        <li>Blue lips or fingernails</li>
      </ul>

      <div class="tipBox red">
        <strong>🚨 Critical:</strong> Severe symptoms require IMMEDIATE descent and medical attention. Don't wait - these can be life-threatening.
      </div>

      <h4>💊 Prevention Strategies</h4>
      <ul>
        <li><strong>Gradual ascent:</strong> Don't rush to high altitude</li>
        <li><strong>Acclimatization:</strong> Rest at intermediate altitudes</li>
        <li><strong>Hydration:</strong> 3-4 liters water daily minimum</li>
        <li><strong>Avoid alcohol:</strong> Dehydrates and impairs judgment</li>
        <li><strong>Light meals:</strong> Easy to digest food</li>
        <li><strong>Medication:</strong> Diamox if prescribed by doctor</li>
        <li><strong>Rest:</strong> Don't overexert, take frequent breaks</li>
      </ul>

      <h4>🚑 Emergency Response</h4>
      <ul>
        <li><strong>If mild symptoms:</strong> Rest, hydrate, take paracetamol for headache</li>
        <li><strong>If not improving in 2-3 hours:</strong> Begin descent to lower altitude</li>
        <li><strong>If severe symptoms:</strong> Immediate descent + emergency medical care</li>
        <li><strong>Emergency number:</strong> 108 (Uttarakhand ambulance service)</li>
      </ul>

      <h4>🏥 Medical Facilities</h4>
      <ul>
        <li>Government health centers at all 4 dhams during season</li>
        <li>ITBP medical posts at key locations</li>
        <li>Oxygen cylinders available at temples</li>
        <li>Helicopter evacuation available (dial 108)</li>
      </ul>

      <div class="tipBox green">
        <strong>✅ Good News:</strong> 95% of altitude sickness cases are preventable with proper planning, gradual ascent, and adequate hydration. Follow guidelines and your yatra will be safe!
      </div>
    `,
    related: ["senior-tips", "kedarnath-tips", "packing-checklist"]
  },

  // ============================================
  // BLOG 10: BEST MONTH TO VISIT
  // ============================================
  "best-month": {
    title: "Best Month to Visit Char Dham in 2025-26: Weather & Crowd Analysis",
    date: "December 28, 2024",
    author: "Dhoni Travels Planning Team",
    readTime: "7 min read",
    category: "Planning Guide",
    content: `
      <div class="authorBox">
        <img src="images/author.jpg" alt="Dhoni Travels Team" onerror="this.src='https://ui-avatars.com/api/?name=DT&background=ff6b35&color=fff'">
        <div>
          <b>Dhoni Travels Planning Team</b>
          <span>Char Dham Season Experts</span>
        </div>
      </div>

      <p style="font-size: 18px; line-height: 1.8; color: var(--text-light);">
        Choosing the right month for your Char Dham Yatra can make a huge difference in your experience. This guide analyzes weather, crowds, and conditions for each month of the 2025-26 season.
      </p>

      <h4>📅 Season Overview 2025-26</h4>
      <p>Char Dham temples typically open in late April/early May and close around Diwali (October/November).</p>

      <h4>📊 Month-by-Month Analysis</h4>

      <table class="infoTable">
        <tr>
          <th>Month</th>
          <th>Weather</th>
          <th>Crowds</th>
          <th>Recommendation</th>
        </tr>
        <tr style="background: #f0fdf4;">
          <td><strong>May</strong></td>
          <td>Pleasant (15-25°C)</td>
          <td>Moderate</td>
          <td>⭐ Highly Recommended</td>
        </tr>
        <tr>
          <td><strong>June</strong></td>
          <td>Warm (18-28°C)</td>
          <td>High (Peak)</td>
          <td>✅ Good (Book early)</td>
        </tr>
        <tr style="background: #fef2f2;">
          <td><strong>July</strong></td>
          <td>Monsoon (Rain)</td>
          <td>Low</td>
          <td>❌ Avoid (Landslides)</td>
        </tr>
        <tr style="background: #fef2f2;">
          <td><strong>August</strong></td>
          <td>Monsoon (Rain)</td>
          <td>Low</td>
          <td>❌ Avoid (Unsafe)</td>
        </tr>
        <tr style="background: #f0fdf4;">
          <td><strong>September</strong></td>
          <td>Pleasant (12-22°C)</td>
          <td>Moderate</td>
          <td>⭐ Highly Recommended</td>
        </tr>
        <tr>
          <td><strong>October</strong></td>
          <td>Cool (8-18°C)</td>
          <td>Moderate</td>
          <td>✅ Good (Carry warm clothes)</td>
        </tr>
      </table>

      <h4>🌟 Best Months for Seniors</h4>
      <ol>
        <li><strong>Mid-September:</strong> Perfect weather, minimal crowds, clear views</li>
        <li><strong>Mid-May:</strong> Pleasant weather, moderate crowds, all services active</li>
        <li><strong>Early June:</strong> Warm weather (good for seniors), before peak rush</li>
        <li><strong>Early October:</strong> Cool but comfortable, beautiful autumn colors</li>
      </ol>

      <div class="tipBox red">
        <strong>❌ Avoid July-August:</strong> Monsoon months carry significant safety risks including landslides, road blocks, and flash floods. Not recommended for anyone, especially seniors.
      </div>

      <h4>🕉️ Temple Opening Dates 2025 (Expected)</h4>
      <ul>
        <li><strong>Yamunotri:</strong> Opens late April / early May</li>
        <li><strong>Gangotri:</strong> Opens Akshaya Tritiya (late April / early May)</li>
        <li><strong>Kedarnath:</strong> Opens late April / early May</li>
        <li><strong>Badrinath:</strong> Opens late April / early May</li>
      </ul>

      <p><strong>Closing:</strong> All temples close around Diwali (late October / early November)</p>

      <div class="tipBox blue">
        <strong>💡 Pro Tip:</strong> Check official dates on badrinath-kedarnath.gov.in before finalizing travel plans. Exact dates depend on Hindu calendar.
      </div>

      <h4>🧥 Weather-Based Packing</h4>
      <ul>
        <li><strong>May-June:</strong> Light woolens, one warm jacket, sunscreen</li>
        <li><strong>September-October:</strong> Heavy woolens, thermals, down jacket</li>
      </ul>

      <div class="tipBox green">
        <strong>🙏 Final Recommendation:</strong> For the most comfortable Char Dham experience, plan for mid-May to mid-June OR mid-September to early October. Avoid monsoon months completely.
      </div>
    `,
    related: ["route-2025", "packing-checklist", "senior-tips"]
  },

  // ============================================
  // BLOG 11: FIRST-TIMER GUIDE
  // ============================================
  "first-timer": {
    title: "First-Time Char Dham Pilgrim? Complete Planning Checklist 2025",
    date: "December 20, 2024",
    author: "Dhoni Travels Expert Team",
    readTime: "12 min read",
    category: "Beginner Guide",
    content: `
      <div class="authorBox">
        <img src="images/author.jpg" alt="Dhoni Travels Team" onerror="this.src='https://ui-avatars.com/api/?name=DT&background=ff6b35&color=fff'">
        <div>
          <b>Dhoni Travels Expert Team</b>
          <span>First-Time Pilgrim Specialists</span>
        </div>
      </div>

      <p style="font-size: 18px; line-height: 1.8; color: var(--text-light);">
        Embarking on your first Char Dham Yatra? This sacred journey can seem overwhelming. This comprehensive guide covers everything a first-time pilgrim needs to know - from documentation to darshan.
      </p>

      <h4>🕉️ Understanding Char Dham</h4>
      <p>Char Dham covers four sacred temples in Uttarakhand's Garhwal Himalayas:</p>
      <ul>
        <li><strong>Yamunotri:</strong> Source of Yamuna, Goddess Yamuna</li>
        <li><strong>Gangotri:</strong> Source of Ganga, Goddess Ganga</li>
        <li><strong>Kedarnath:</strong> Lord Shiva's Jyotirlinga</li>
        <li><strong>Badrinath:</strong> Lord Vishnu's abode</li>
      </ul>

      <h4>📄 Essential Documentation</h4>
      <ul>
        <li><strong>Aadhaar Card:</strong> Original + 2-3 photocopies (mandatory)</li>
        <li><strong>Photographs:</strong> 4-6 passport size</li>
        <li><strong>Medical Certificate:</strong> For 70+ age group</li>
        <li><strong>Online Registration:</strong> Complete before travel</li>
      </ul>

      <h4>🏃‍♂️ Physical Requirements</h4>
      <ul>
        <li><strong>Yamunotri:</strong> 5 km trek (pony/palki available)</li>
        <li><strong>Gangotri:</strong> No trek required</li>
        <li><strong>Kedarnath:</strong> 16 km trek (helicopter/pony available)</li>
        <li><strong>Badrinath:</strong> No trek required</li>
      </ul>

      <h4>❌ Common First-Timer Mistakes</h4>
      <ul>
        <li>Rushing the itinerary (plan minimum 10-12 days)</li>
        <li>Ignoring acclimatization</li>
        <li>Overpacking</li>
        <li>Not booking accommodation in advance</li>
        <li>Underestimating weather changes</li>
        <li>Not carrying enough cash</li>
      </ul>

      <h4>🙏 Spiritual Preparation</h4>
      <ul>
        <li>Approach with devotion, not as tourist trip</li>
        <li>Learn basic prayers and mantras</li>
        <li>Read about each dham's significance</li>
        <li>Set spiritual intentions for the journey</li>
        <li>Practice patience - challenges are part of tapasya</li>
      </ul>

      <h4>✅ First-Timer Checklist</h4>
      <ul>
        <li>✓ Medical check-up completed</li>
        <li>✓ Online registration done</li>
        <li>✓ Documents ready (ID, photos, certificates)</li>
        <li>✓ Accommodation booked</li>
        <li>✓ Transport arranged</li>
        <li>✓ Warm clothes packed</li>
        <li>✓ Medicines packed</li>
        <li>✓ Sufficient cash withdrawn</li>
        <li>✓ Travel insurance purchased</li>
        <li>✓ Family informed about itinerary</li>
      </ul>

      <div class="tipBox green">
        <strong>🙏 Final Advice:</strong> Char Dham Yatra is a transformative spiritual journey. Go with an open heart, accept challenges as divine blessings, and you'll return with memories that last a lifetime!
      </div>
    `,
    related: ["chardham-guide", "registration-guide", "packing-checklist"]
  },

  // ============================================
  // BLOG 12: PACKING CHECKLIST
  // ============================================
  "packing-checklist": {
    title: "Ultimate Char Dham Packing Checklist: What to Carry & What to Avoid",
    date: "December 15, 2024",
    author: "Dhoni Travels Planning Team",
    readTime: "6 min read",
    category: "Packing Guide",
    content: `
      <div class="authorBox">
        <img src="images/author.jpg" alt="Dhoni Travels Team" onerror="this.src='https://ui-avatars.com/api/?name=DT&background=ff6b35&color=fff'">
        <div>
          <b>Dhoni Travels Planning Team</b>
          <span>Char Dham Packing Experts</span>
        </div>
      </div>

      <p style="font-size: 18px; line-height: 1.8; color: var(--text-light);">
        Smart packing can make the difference between a comfortable yatra and a challenging one. This checklist is designed specifically for Char Dham pilgrims, with special attention to senior travelers.
      </p>

      <div class="tipBox blue">
        <strong>💡 Golden Rule:</strong> Pack light! One medium suitcase (15-20 kg) + one small backpack per person is ideal.
      </div>

      <h4>🧥 Clothing Essentials</h4>
      <ul>
        <li>Thermal innerwear (3-4 sets)</li>
        <li>Fleece jackets/sweaters (2-3)</li>
        <li>Windproof jacket with hood</li>
        <li>Rain poncho</li>
        <li>Comfortable track pants (3-4)</li>
        <li>Walking shoes (broken-in)</li>
        <li>Warm socks (5-6 pairs)</li>
        <li>Woolen cap, gloves, muffler</li>
        <li>Sunglasses</li>
      </ul>

      <h4>💊 Medical Kit</h4>
      <ul>
        <li>All regular medicines (1.5x supply)</li>
        <li>Pain relief (Paracetamol)</li>
        <li>Digestive aids (antacids, anti-diarrheal)</li>
        <li>First aid (band-aids, antiseptic)</li>
        <li>ORS packets</li>
        <li>BP monitor / glucometer (if needed)</li>
      </ul>

      <h4>📄 Documents</h4>
      <ul>
        <li>Aadhaar Card (original + copies)</li>
        <li>Passport photos (6)</li>
        <li>Medical certificate (if 70+)</li>
        <li>Insurance documents</li>
        <li>Booking confirmations</li>
        <li>Emergency contact list</li>
      </ul>

      <h4>👜 Daily Essentials</h4>
      <ul>
        <li>Toiletries (travel-sized)</li>
        <li>Sunscreen SPF 50+</li>
        <li>Lip balm</li>
        <li>Moisturizer</li>
        <li>Power bank (20,000 mAh)</li>
        <li>Torch with batteries</li>
        <li>Water bottle (1 liter)</li>
        <li>Dry fruits and snacks</li>
        <li>Walking stick</li>
      </ul>

      <h4>🙏 Temple Visit Items</h4>
      <ul>
        <li>Shawl/dupatta</li>
        <li>Extra socks (temples require barefoot)</li>
        <li>Small bag for valuables</li>
      </ul>

      <h4>❌ What NOT to Carry</h4>
      <ul>
        <li>Heavy suitcases</li>
        <li>Expensive jewelry</li>
        <li>Non-vegetarian food</li>
        <li>Alcohol</li>
        <li>Leather items (for temple)</li>
        <li>New shoes (wear broken-in only)</li>
        <li>Too many electronics</li>
      </ul>

      <div class="tipBox green">
        <strong>✅ Pro Tip:</strong> Start packing 3-4 days before. Roll clothes to save space. Keep medicines in hand baggage. Download this checklist and tick off items!
      </div>
    `,
    related: ["senior-tips", "first-timer", "kedarnath-tips"]
  }
};

// Open blog modal
document.querySelectorAll(".blogTrigger").forEach(card => {
  card.addEventListener("click", openBlog);
  
  card.addEventListener("keypress", function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openBlog.call(this);
    }
  });
});

function openBlog() {
  const type = this.getAttribute("data-blog");
  
  if (blogPosts[type]) {
    const post = blogPosts[type];
    
    blogTitle.innerText = post.title;
    blogDate.innerText = `📅 ${post.date} • ⏱️ ${post.readTime} • 📂 ${post.category}`;
    blogContent.innerHTML = post.content;
    
    loadRelatedPosts(post.related);
    
    blogModal.style.display = "flex";
    setTimeout(() => {
      blogModal.classList.add("show");
    }, 10);
    blogModal.setAttribute("aria-hidden", "false");
    
    document.body.style.overflow = "hidden";
    
    document.querySelector("#blogModal .guideModal").scrollTop = 0;
    
    blogClose.focus();
    
    window.currentBlog = type;
    
    if (typeof gtag !== 'undefined') {
      gtag('event', 'blog_view', {
        'event_category': 'blog',
        'event_label': type
      });
    }
  }
}

function loadRelatedPosts(relatedIds) {
  const relatedContainer = document.getElementById("relatedPosts");
  relatedContainer.innerHTML = "";
  
  relatedIds.forEach(id => {
    if (blogPosts[id]) {
      const post = blogPosts[id];
      const link = document.createElement("a");
      link.href = "#";
      link.innerHTML = `
        📄 ${post.title}
        <span style="display: block; font-size: 13px; color: var(--text-muted); margin-top: 4px; font-weight: 400;">
          ${post.readTime} • ${post.category}
        </span>
      `;
      link.onclick = function(e) {
        e.preventDefault();
        closeBlog();
        setTimeout(() => {
          const newCard = document.querySelector(`[data-blog="${id}"]`);
          if (newCard) newCard.click();
        }, 350);
      };
      relatedContainer.appendChild(link);
    }
  });
}

function closeBlog() {
  blogModal.classList.remove("show");
  
  setTimeout(() => {
    blogModal.style.display = "none";
    blogModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "auto";
  }, 300);
}

if (blogClose) {
  blogClose.addEventListener("click", closeBlog);
}

if (blogModal) {
  blogModal.addEventListener("click", (e) => {
    if (e.target === blogModal) {
      closeBlog();
    }
  });
}

function shareBlog(platform) {
  const currentBlog = window.currentBlog;
  if (!currentBlog || !blogPosts[currentBlog]) return;
  
  const post = blogPosts[currentBlog];
  const url = window.location.href.split('#')[0] + `#blog`;
  const title = post.title;
  const text = `${title} - Dhoni Travels Char Dham Blog`;
  
  let shareUrl = "";
  
  switch(platform) {
    case 'whatsapp':
      shareUrl = `https://wa.me/?text=${encodeURIComponent(text + '\n\n' + url)}`;
      break;
    case 'facebook':
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
      break;
    case 'twitter':
      shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
      break;
  }
  
  if (shareUrl) {
    window.open(shareUrl, '_blank', 'width=600,height=400');
  }
}

function copyBlogLink() {
  const url = window.location.href.split('#')[0] + '#blog';
  navigator.clipboard.writeText(url).then(() => {
    alert('Link copied to clipboard!');
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && blogModal && blogModal.style.display === "flex") {
    closeBlog();
  }
});

console.log("✅ Blog system with 12 articles loaded successfully!");