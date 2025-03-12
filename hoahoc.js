// Đọc nội dung file files.json
fetch('files.json')
  .then(response => response.json())
  .then(data => {
    const titleContainer = document.getElementById('title-container');

        // Duyệt qua từng file trong files.json
        data.files.forEach(file => {
          // Đọc nội dung của từng file HTML
           fetch(`hoa-hoc/${file}`)
            .then(response => response.text())
                .then(html => {
                // Sử dụng DOMParser để parse HTML string
                   const parser = new DOMParser();
                   const doc = parser.parseFromString(html, 'text/html');


                // Lấy tiêu đề từ file html     
                   const title = doc.title;


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




            });
        });
  })
  .catch(error => console.error('Lỗi khi đọc file JSON:', error));


// Trong file index.html, bạn cần có một element div để chứa danh sách tiêu đề:
//<div id="title-container"></div>