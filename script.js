// =========================================================
// MERLINNET TECHNOLOGY
// Website Interactions & Magical Scripting
// =========================================================


// 1. Automatically update copyright year.

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// 2. Mobile navigation menu handler.

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });
}


// 3. Contact form email preparation handler.

const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(contactForm);

        const name = formData.get("name");
        const email = formData.get("email");
        const service = formData.get("service");
        const message = formData.get("message");

        const subject = encodeURIComponent(
            `MerlinNet Website Enquiry: ${service}`
        );

        const body = encodeURIComponent(
            `Name: ${name}\n` +
            `Email: ${email}\n` +
            `Service: ${service}\n\n` +
            `Message:\n${message}`
        );

        window.location.href =
            `mailto:merlinnettechnology@gmail.com?subject=${subject}&body=${body}`;
    });
}


// 4. Emeris Chatbot Widget logic.

const chatToggle = document.getElementById("chat-toggle");
const chatWidget = document.getElementById("chat-widget");
const chatClose = document.getElementById("chat-close");
const chatForm = document.getElementById("chat-form");
const chatInput = document.getElementById("chat-input");
const chatMessages = document.getElementById("chat-messages");

function setChatOpen(isOpen) {
    if (!chatWidget || !chatToggle) {
        return;
    }

    chatWidget.hidden = !isOpen;
    chatToggle.setAttribute("aria-expanded", String(isOpen));
    chatToggle.setAttribute("aria-label", isOpen ? "Close chat with Emeris" : "Open chat with Emeris");

    if (isOpen && chatInput) {
        chatInput.focus();
    }
}

if (chatToggle && chatWidget) {
    chatToggle.addEventListener("click", () => {
        setChatOpen(chatWidget.hidden);
    });
}

if (chatClose) {
    chatClose.addEventListener("click", () => {
        setChatOpen(false);
    });
}

function addMessage(message, sender) {
    if (!chatMessages) {
        return;
    }

    const bubble = document.createElement("div");
    bubble.className = sender === "user" ? "user-message" : "bot-message";
    bubble.textContent = message;

    chatMessages.appendChild(bubble);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}


// 5. Emeris's Intelligent Knowledge Base.

function getBotResponse(message) {
    const text = message.toLowerCase().trim().replace(/\s+/g, " ");

    if (/\b(hello|hi|hey|good morning|good afternoon|good evening)\b/.test(text)) {
        return "Hello! I'm Emrys, MerlinNet Technology's virtual assistant. What digital magic can I assist you with today?";
    }

    if (/\b(help|what can you do|who are you|what are you)\b/.test(text)) {
        return "I'm Emrys, your virtual guide. I can answer questions regarding our web development, software solutions, computer training, IT services, pricing, and contact information.";
    }

    if (/\b(price|prices|pricing|cost|costs|quote|quotation|estimate|how much)\b/.test(text)) {
        return "Project costs depend on your specific requirements. Send us a message using the contact form on this page, and our team will discuss a tailored quotation with you.";
    }

    if (/\b(web|website|websites|web development|web design)\b/.test(text)) {
        return "MerlinNet builds modern, high-speed, responsive websites tailored to establish a commanding online presence. Fill out the contact form to share your website goals!";
    }

    if (/\b(software|application|applications|app|apps|digital tool)\b/.test(text)) {
        return "We craft tailored software tools and custom applications to simplify operations. Share your idea through our contact form to learn more.";
    }

    if (/\b(training|train|learn|learning|computer lesson|computer classes|digital skills)\b/.test(text)) {
        return "MerlinNet offers practical digital-skills development and computer literacy training. Get in touch via the form to ask about training arrangements.";
    }

    if (/\b(it support|it service|it services|technical support|troubleshoot|troubleshooting|computer problem)\b/.test(text)) {
        return "We provide comprehensive technology support, troubleshooting, and IT consultancy. Describe what assistance you need in the contact form!";
    }

    if (/\b(iot|internet of things|automation|connected devices)\b/.test(text)) {
        return "MerlinNet explores connected devices, smart automation, and IoT innovations to tackle modern challenges. Let's discuss your concept via the contact form.";
    }

    if (/\b(consult|consulting|consultancy|digital growth|digital strategy)\b/.test(text)) {
        return "Our digital consulting identifies tech opportunities to propel your growth. Reach out to discuss your vision with us!";
    }

    if (/\b(service|services|what do you do|what do you offer|offerings)\b/.test(text)) {
        return "MerlinNet Technology offers: Web Development, Software Solutions, Computer Training, IT Services, Innovation & IoT, and Digital Consulting. Which service interests you?";
    }

    if (/\b(project|projects|portfolio|our work|examples)\b/.test(text)) {
        return "We are building websites, software applications, and IoT innovations. Reach out through the contact form to discuss your upcoming project!";
    }

    if (/\b(contact|email|reach|write to|talk to|speak to)\b/.test(text)) {
        return "You can reach us directly at merlinnettechnology@gmail.com or send an enquiry through the contact form on this page.";
    }

    if (/\b(location|address|where are you|based)\b/.test(text)) {
        return "Please email merlinnettechnology@gmail.com for location details and service arrangements.";
    }

    if (/\b(thank|thanks|thank you)\b/.test(text)) {
        return "You're very welcome! Is there anything else I can assist you with regarding MerlinNet Technology?";
    }

    if (/\b(bye|goodbye|see you)\b/.test(text)) {
        return "Goodbye! Thanks for visiting MerlinNet Technology. Reach out anytime at merlinnettechnology@gmail.com.";
    }

    return "I'm Emeris! I can help with information about our web development, software tools, training, IT services, and pricing. For specific inquiries, email merlinnettechnology@gmail.com.";
}

if (chatForm && chatInput) {
    chatForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const message = chatInput.value.trim();

        if (!message) {
            return;
        }

        addMessage(message, "user");
        chatInput.value = "";
        addMessage(getBotResponse(message), "bot");
        chatInput.focus();
    });
}


// 6. 🌟 Magical Cursor Wand Sparkle Trail Effect.

let lastSparkleTime = 0;
document.addEventListener("mousemove", (e) => {
    const now = Date.now();
    if (now - lastSparkleTime > 45) {
        lastSparkleTime = now;
        
        const sparkle = document.createElement("div");
        sparkle.className = "magic-sparkle";
        sparkle.style.left = `${e.clientX}px`;
        sparkle.style.top = `${e.clientY}px`;
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.remove();
        }, 700);
    }
});


// 7. 🌟 Scroll-Reveal Animation Trigger (Spellcasting Effect).

document.addEventListener("DOMContentLoaded", () => {
    const elementsToReveal = document.querySelectorAll(".service-card, .about-card, .section-heading, .project-placeholder, .contact-grid > div");
    
    elementsToReveal.forEach((el) => {
        el.classList.add("reveal-spell");
    });

    const observer = new IntersectionObserver((entries, observerInstance) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observerInstance.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12
    });

    document.querySelectorAll(".reveal-spell").forEach((el) => {
        observer.observe(el);
    });
});