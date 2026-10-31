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

        const subject = encodeURIComponent(`MerlinNet Website Enquiry: ${service}`);
        const body = encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\nService: ${service}\n\nMessage:\n${message}`
        );

        window.location.href = `mailto:merlinnettechnology@gmail.com?subject=${subject}&body=${body}`;
    });
}


// 4. Emrys Chatbot Widget logic.
const chatToggle = document.getElementById("chat-toggle");
const chatWidget = document.getElementById("chat-widget");
const chatClose = document.getElementById("chat-close");
const chatForm = document.getElementById("chat-form");
const chatInput = document.getElementById("chat-input");
const chatMessages = document.getElementById("chat-messages");

function setChatOpen(isOpen) {
    if (!chatWidget || !chatToggle) return;

    chatWidget.hidden = !isOpen;
    chatToggle.setAttribute("aria-expanded", String(isOpen));
    chatToggle.setAttribute("aria-label", isOpen ? "Close chat with Emrys" : "Open chat with Emrys");

    if (isOpen && chatInput) {
        chatInput.focus();
    }
}

let hasDraggedOrb = false;

if (chatToggle && chatWidget) {
    chatToggle.addEventListener("click", (e) => {
        if (hasDraggedOrb) return;
        setChatOpen(chatWidget.hidden);
    });
}

if (chatClose) {
    chatClose.addEventListener("click", () => {
        setChatOpen(false);
    });
}

function addMessage(message, sender) {
    if (!chatMessages) return;

    const bubble = document.createElement("div");
    bubble.className = sender === "user" ? "user-message" : "bot-message";
    bubble.textContent = message;

    chatMessages.appendChild(bubble);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}


// 5. Emrys Knowledge Base.
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
    if (/\b(location|address|where are you|based|remote|in person|in-person|online|onsite)\b/.test(text)) {
        return "Remote and in-person services are available. Email merlinnettechnology@gmail.com with your location and needs to confirm suitable arrangements.";
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
        return "Email merlinnettechnology@gmail.com directly, or use the form to prepare an email. The form opens your email application; you must send the message there.";
    }
    if (/\b(thank|thanks|thank you)\b/.test(text)) {
        return "You're very welcome! Is there anything else I can assist you with regarding MerlinNet Technology?";
    }
    if (/\b(bye|goodbye|see you)\b/.test(text)) {
        return "Goodbye! Thanks for visiting MerlinNet Technology. Reach out anytime at merlinnettechnology@gmail.com.";
    }

    return "I'm Emrys! I can help with information about our web development, software tools, training, IT services, and pricing. For specific inquiries, email merlinnettechnology@gmail.com.";
}

if (chatForm && chatInput) {
    chatForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const message = chatInput.value.trim();
        if (!message) return;

        addMessage(message, "user");
        chatInput.value = "";
        addMessage(getBotResponse(message), "bot");
        chatInput.focus();
    });
}


// 6. 🌟 Magical Cursor Wand Sparkle Trail Effect.
let lastSparkleTime = 0;
document.addEventListener("mousemove", (e) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
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


// 7. Draggable & Movable Chat Widget Box
const chatWidgetElement = document.getElementById("chat-widget");
const chatHeaderElement = chatWidgetElement ? chatWidgetElement.querySelector(".chat-header") : null;

if (chatWidgetElement && chatHeaderElement) {
    let isDragging = false;
    let startX = 0, startY = 0;
    let currentX = 0, currentY = 0;

    function dragStart(e) {
        isDragging = true;
        const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
        const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
        
        startX = clientX - currentX;
        startY = clientY - currentY;
        
        chatWidgetElement.style.transition = 'none';
    }

    function drag(e) {
        if (!isDragging) return;
        if (e.type.includes('touch')) e.preventDefault();
        
        const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
        const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
        
        currentX = clientX - startX;
        currentY = clientY - startY;

        chatWidgetElement.style.transform = `translate(${currentX}px, ${currentY}px)`;
    }

    function dragEnd() {
        isDragging = false;
    }

    chatHeaderElement.addEventListener("mousedown", dragStart);
    document.addEventListener("mousemove", drag);
    document.addEventListener("mouseup", dragEnd);

    chatHeaderElement.addEventListener("touchstart", dragStart, { passive: false });
    document.addEventListener("touchmove", drag, { passive: false });
    document.addEventListener("touchend", dragEnd);
}


// 8. Freely Movable Floating Chat Orb (Draggable anywhere on screen)
if (chatToggle) {
    let isOrbDragging = false;
    let orbStartX, orbStartY;
    let orbInitialLeft, orbInitialTop;

    function orbPointerDown(e) {
        isOrbDragging = true;
        hasDraggedOrb = false;
        
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        
        orbStartX = clientX;
        orbStartY = clientY;

        const rect = chatToggle.getBoundingClientRect();
        orbInitialLeft = rect.left;
        orbInitialTop = rect.top;

        chatToggle.style.right = "auto";
        chatToggle.style.bottom = "auto";
        chatToggle.style.left = `${orbInitialLeft}px`;
        chatToggle.style.top = `${orbInitialTop}px`;

        document.addEventListener("mousemove", orbPointerMove);
        document.addEventListener("mouseup", orbPointerUp);
        document.addEventListener("touchmove", orbPointerMove, { passive: false });
        document.addEventListener("touchend", orbPointerUp);
    }

    function orbPointerMove(e) {
        if (!isOrbDragging) return;
        
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;

        const dx = clientX - orbStartX;
        const dy = clientY - orbStartY;

        if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
            hasDraggedOrb = true;
        }

        if (e.touches) e.preventDefault();

        chatToggle.style.left = `${orbInitialLeft + dx}px`;
        chatToggle.style.top = `${orbInitialTop + dy}px`;
    }

    function orbPointerUp() {
        if (isOrbDragging) {
            isOrbDragging = false;
            document.removeEventListener("mousemove", orbPointerMove);
            document.removeEventListener("mouseup", orbPointerUp);
            document.removeEventListener("touchmove", orbPointerMove);
            document.removeEventListener("touchend", orbPointerUp);
            
            setTimeout(() => {
                hasDraggedOrb = false;
            }, 100);
        }
    }

    chatToggle.addEventListener("mousedown", orbPointerDown);
    chatToggle.addEventListener("touchstart", orbPointerDown, { passive: true });
}