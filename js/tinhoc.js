fetch('/12a2/data/tinhoc.json') // Thay đổi đường dẫn đến file JSON
  .then(response => response.json())
  .then(data => {
    const titleContainer = document.getElementById('title-container');

    for (const item of data.files) {
      const file = item.file;
      // Đường dẫn file cần được tính toán dựa trên vị trí của file js và file html
          const adjustedFile = `../${file}`; // điều chỉnh đường dẫn để bắt đầu từ thư mục gốc

      fetch(adjustedFile)
        .then(response => response.text())
        .then(html => {
          {
            const a = document.createElement('a');
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const title = doc.title;
            const link = item.link;


            // Kiểm tra xem link là tuyệt đối hay tương đối
                        if (!link.startsWith('http')) {    
                            // Điều chỉnh nếu là link tương đối                
                           a.href = `../${link}`;    
                          } else {            
                        a.href = link;     
                           }




            a.textContent = title;
            a.style.border = '1px solid #007bff';
            a.style.padding = '8px 12px';
            a.style.margin = '5px';
            a.style.display = 'inline-block';
            a.style.borderRadius = '5px';
            a.style.backgroundColor = '#f0f0f5';
            a.style.textDecoration = 'none';
            a.style.color = '#007bff';
            titleContainer.appendChild(a);
          }
        })
        .catch(error => console.error(`Lỗi khi tải tiêu đề của file ${adjustedFile}:`, error)); // Hiển thị adjustedFile trong thông báo lỗi
    }
  })
  .catch(error => console.error('Lỗi khi đọc file JSON:', error));