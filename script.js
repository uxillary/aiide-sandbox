
const faqButtons = document.querySelectorAll(".faq-question");

faqButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");

    item.classList.toggle("open");
  });
});

const signupForm = document.querySelector("#signup-form");
const emailInput = document.querySelector("#email");
const formMessage = document.querySelector("#form-message");

signupForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = emailInput.value.trim();

  if (!email) {
    formMessage.textContent = "You forgot the email bit 👀";
    return;
  }

  if (!email.includes("@")) {
    formMessage.textContent = "That email looks a wee bit suspicious.";
    return;
  }

  formMessage.textContent =
    "You're in. Unfortunately the product is completely imaginary.";

  emailInput.value = "";
});

const counters = document.querySelectorAll("[data-count]");

function animateCounter(element) {
  const target = Number(element.dataset.count);

  let current = 0;

  const increment = Math.max(1, Math.floor(target / 80));

  const timer = setInterval(() => {
    current += increment;

    if (current >= target) {
      current = target;
      clearInterval(timer);
    }

    element.textContent = current.toLocaleString();
  }, 20);
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      animateCounter(entry.target);
      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.5,
  }
);

counters.forEach((counter) => observer.observe(counter));

document.querySelector("#year").textContent = new Date().getFullYear();