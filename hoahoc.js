// Hàm lấy tiêu đề từ nội dung HTML
function getTitleFromHtml(htmlContent) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');
    return doc.querySelector('title').textContent;
}

// Hàm định dạng tiêu đề với viền
function formatTitle(title) {
    return `<div class="title-box">${title}</div>`;
}

// Hàm chính để tải và hiển thị tiêu đề
async function loadTitles() {
    try {
        // Lấy danh sách tệp từ files.json
        const response = await fetch('files.json');
        const data = await response.json();
        const hoaHoc = data.hoaHoc;

        // Lấy tiêu đề từ từng tệp HTML
        const titlesContainer = document.getElementById('titles-container');
        for (const file of hoaHoc) {
            const fileResponse = await fetch(file);
            const htmlContent = await fileResponse.text();
            const title = getTitleFromHtml(htmlContent);
            const formattedTitle = formatTitle(title);
            titlesContainer.innerHTML += formattedTitle;
        }
    } catch (error) {
        console.error('Lỗi khi tải tiêu đề:', error);
    }
}

// Chạy hàm khi trang tải xong
window.onload = loadTitles;