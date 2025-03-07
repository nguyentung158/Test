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

