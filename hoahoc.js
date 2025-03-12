fetch('files.json')
  .then(response => response.json())
  .then(data => {
    const titleContainer = document.getElementById('title-container');

    data.files.forEach(file => {
        fetch(`hoa-hoc/${file}`)
        .then(response => response.text()) // Sửa lỗi tại đây: response.text()
            .then(html => {          
               const parser = new DOMParser();
               const doc = parser.parseFromString(html, 'text/html');
               const title = doc.title;

                const p = document.createElement('p');
                 p.textContent = title;


                  //Tạo element <p> với viền
                const p = document.createElement('p');
                 p.textContent = title;
                p.style.border = '1px solid #007bff';
                 p.style.padding = '8px 12px';
                p.style.margin = '5px';
               p.style.display = 'inline-block';
                p.style.borderRadius = '5px'; // Bo tròn góc
                  p.style.backgroundColor = '#f0f0f5';   


                  titleContainer.appendChild(p);
                })
                .catch(error => console.error(`Lỗi khi tải tiêu đề của file ${file}:`, error)); // Thêm xử lý lỗi cụ thể cho từng file
    
    
         });
      })
      .catch(error => console.error('Lỗi khi đọc file JSON:', error));