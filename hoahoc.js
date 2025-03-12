fetch('hoahoc.json')
  .then(response => response.json())
  .then(data => {
    const titleContainer = document.getElementById('title-container');

    data.files.forEach(file => {
      fetch(file) // Đường dẫn tương đối so với file js
        .then(response => response.text())
        .then(html => {
          // Giới hạn scope của p trong khối này
          {
            const p = document.createElement('p');
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const title = doc.title;            
            p.textContent = title;
            p.style.border = '1px solid #007bff';
            p.style.padding = '8px 12px';
            p.style.margin = '5px';
            p.style.display = 'inline-block';
            p.style.borderRadius = '5px';
            p.style.backgroundColor = '#f0f0f5';
            titleContainer.appendChild(p);
          }
        })
        .catch(error => console.error(`Lỗi khi tải tiêu đề của file ${file}:`, error));
    });
  })
  .catch(error => console.error('Lỗi khi đọc file JSON:', error));