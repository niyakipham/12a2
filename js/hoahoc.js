fetch('/12a2/data/hoahoc.json')
  .then(response => response.json())
  .then(data => {
    const titleContainer = document.getElementById('title-container');

    for (const item of data.websites) { // Sử dụng data.websites
        {    
            const a = document.createElement('a');
                a.href = item.link;          
                a.textContent = item.title;
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
 .catch(error => console.error('Lỗi khi đọc file JSON:', error));