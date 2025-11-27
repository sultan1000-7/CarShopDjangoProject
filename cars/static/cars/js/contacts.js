document.addEventListener("scroll", () => {
    document.querySelectorAll(".fade-up").forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 60) {
            el.style.animationPlayState = "running";
        }
    });
});
