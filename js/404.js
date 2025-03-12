function fetchAndHandle404(file, link) {
    const adjustedFile = `../${file}`; // điều chỉnh đường dẫn để bắt đầu từ thư mục gốc
    const adjustedLink = link.startsWith('http') ? link : `../${link}` ;

  return fetch(adjustedFile)
    .then(response => {

            if (!response.ok) {        
            if (response.status === 404) {            
            window.location.href = "404.html";     
                  }         
            throw new Error(`HTTP error! status: ${response.status}`);        
                }           
              return response.text();         
            })
    .then(html => {
      const a = document.createElement('a');
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const title = doc.title;
        a.href = adjustedLink; // sử dụng adjustedLink
      a.textContent = title;
      a.style.border = '1px solid #007bff';
      a.style.padding = '8px 12px';
      a.style.margin = '5px';
      a.style.display = 'inline-block';
      a.style.borderRadius = '5px';
      a.style.backgroundColor = '#f0f0f5';
      a.style.textDecoration = 'none';
      a.style.color = '#007bff';
      return a; // Trả về element <a>
    });
}


fetch('../data/hoahoc.json')
  .then(response => response.json())
  .then(data => {
    const titleContainer = document.getElementById('title-container');

    for (const item of data.files) {      
       fetchAndHandle404(item.file, item.link)        
         .then(a => titleContainer.appendChild(a))        
          .catch(error => console.error(`Lỗi khi tải tiêu đề của file ${item.file}:`, error));  
        }

  })
  .catch(error => console.error('Lỗi khi đọc file JSON:', error));