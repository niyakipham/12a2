fetch('/data/hoahoc.json')
  .then(response => response.json())
  .then(data => {
    const titleContainer = document.getElementById('title-container');

    //data.files.forEach(item => { //sửa lỗi data.files.forEach is not a function
     for (const item of data.files){   
          const file = item.file;     
           fetch(file)
            .then(response => response.text())
           .then(html => {
            {    
                 const parser = new DOMParser();
                 const doc = parser.parseFromString(html, 'text/html');             
                const title = doc.title;                
                 const link = item.link;     
               // Tạo element <a> chứa tiêu đề và link
               const a = document.createElement('a');
               a.href = link;          
              a.textContent = title;     
             a.style.border = '1px solid #007bff';
                a.style.padding = '8px 12px';
                 a.style.margin = '5px';
                 a.style.display = 'inline-block';
              a.style.borderRadius = '5px';
               a.style.backgroundColor = '#f0f0f5';
               a.style.textDecoration = 'none'; // Loại bỏ gạch chân mặc định của link
             a.style.color = '#007bff';   // thêm màu cho chữ           
            titleContainer.appendChild(a);
            }
        })
      .catch(error => console.error(`Lỗi khi tải tiêu đề của file ${file}:`, error));

     };  
  })
 .catch(error => console.error('Lỗi khi đọc file JSON:', error));