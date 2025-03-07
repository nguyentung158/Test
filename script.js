function showHeart() {
    for (let i = 0; i < 15; i++) {
        let heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = "❤️";  // Thêm ký tự trái tim vào
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
        document.body.appendChild(heart);

        // Xóa trái tim sau khi bay lên trên
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}
document.addEventListener("DOMContentLoaded", function () {
    let images = document.querySelectorAll(".gallery .image-container");

    images.forEach((img, index) => {
        let delay = Math.random() * 2; // Tạo độ trễ ngẫu nhiên
        img.style.animationDelay = `${delay}s`;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const music = document.getElementById("background-music");
    const playButton = document.createElement("button");
    playButton.innerText = "Bấm để bật nhạc 🎵";
    playButton.style.position = "fixed";
    playButton.style.bottom = "20px";
    playButton.style.right = "20px";
    playButton.style.padding = "10px";
    playButton.style.borderRadius = "10px";
    playButton.style.background = "pink";
    playButton.style.border = "none";
    playButton.style.cursor = "pointer";

    document.body.appendChild(playButton);

    playButton.addEventListener("click", function () {
        music.play();
        playButton.style.display = "none"; // Ẩn nút sau khi nhạc phát
    });
});

