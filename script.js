const groupButtons = document.querySelectorAll(".button[data-link]");
const video = document.querySelector("video");

if (video) {
    video.muted = false;
    video.volume = 1;

    video.addEventListener("play", () => {
        video.muted = false;
        video.volume = 10;
    });
}

groupButtons.forEach((button) => {
    button.addEventListener("click", () => {
        window.location.href = button.dataset.link;
    });

    button.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            window.location.href = button.dataset.link;
        }
    });
});
