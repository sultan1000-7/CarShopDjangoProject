document.addEventListener("scroll", () => {
    document.querySelectorAll(".fade-up").forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            el.style.animationPlayState = "running";
        }
    });
});
