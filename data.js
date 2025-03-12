// Fetch dữ liệu từ file JSON
fetch('/12a2/data/ly.json') // Thay đổi đường dẫn đến file JSON
  .then(response => {
    if (!response.ok) {
      throw new Error(`Không thể tải file JSON: ${response.statusText}`);
    }
    return response.json();
  })
  .then(data => {
    const titleContainer = document.getElementById('ly');

    // Kiểm tra xem titleContainer có tồn tại không
    if (!titleContainer) {
      console.error('Không tìm thấy phần tử #ly trong DOM');
      return;
    }

    // Duyệt qua từng mục trong mảng files
    data.files.forEach((item, index) => {
      const { title, link } = item; // Lấy title và link từ JSON

      // Tạo phần tử <a> để hiển thị tiêu đề và link
      const a = document.createElement('a');
      a.href = link.startsWith('http') ? link : `../${link}`; // Điều chỉnh link tương đối hoặc tuyệt đối
      a.textContent = title || `Tiêu đề không có (File ${index + 1})`; // Sử dụng title từ JSON
      a.style.border = '1px solid #007bff';
      a.style.padding = '8px 12px';
      a.style.margin = '5px';
      a.style.display = 'inline-block';
      a.style.borderRadius = '5px';
      a.style.backgroundColor = '#f0f0f5';
      a.style.textDecoration = 'none';
      a.style.color = '#007bff';
      a.target = '_blank'; // Mở link trong tab mới

      // Thêm phần tử vào container
      titleContainer.appendChild(a);
    });
  })
  .catch(error => console.error('Lỗi khi đọc file JSON:', error));

///// hóa học

// Fetch dữ liệu từ file JSON
fetch('/12a2/data/hoahoc.json') // Thay đổi đường dẫn đến file JSON
  .then(response => {
    if (!response.ok) {
      throw new Error(`Không thể tải file JSON: ${response.statusText}`);
    }
    return response.json();
  })
  .then(data => {
    const titleContainer = document.getElementById('hoa-hoc');

    // Kiểm tra xem titleContainer có tồn tại không
    if (!titleContainer) {
      console.error('Không tìm thấy phần tử #ly trong DOM');
      return;
    }

    // Duyệt qua từng mục trong mảng files
    data.files.forEach((item, index) => {
      const { title, link } = item; // Lấy title và link từ JSON

      // Tạo phần tử <a> để hiển thị tiêu đề và link
      const a = document.createElement('a');
      a.href = link.startsWith('http') ? link : `../${link}`; // Điều chỉnh link tương đối hoặc tuyệt đối
      a.textContent = title || `Tiêu đề không có (File ${index + 1})`; // Sử dụng title từ JSON
      a.style.border = '1px solid #007bff';
      a.style.padding = '8px 12px';
      a.style.margin = '5px';
      a.style.display = 'inline-block';
      a.style.borderRadius = '5px';
      a.style.backgroundColor = '#f0f0f5';
      a.style.textDecoration = 'none';
      a.style.color = '#007bff';
      a.target = '_blank'; // Mở link trong tab mới

      // Thêm phần tử vào container
      titleContainer.appendChild(a);
    });
  })
  .catch(error => console.error('Lỗi khi đọc file JSON:', error));

////////// TIN HỌC

// Fetch dữ liệu từ file JSON
fetch('/12a2/data/tinhoc.json') // Thay đổi đường dẫn đến file JSON
  .then(response => {
    if (!response.ok) {
      throw new Error(`Không thể tải file JSON: ${response.statusText}`);
    }
    return response.json();
  })
  .then(data => {
    const titleContainer = document.getElementById('tin-hoc');

    // Kiểm tra xem titleContainer có tồn tại không
    if (!titleContainer) {
      console.error('Không tìm thấy phần tử #ly trong DOM');
      return;
    }

    // Duyệt qua từng mục trong mảng files
    data.files.forEach((item, index) => {
      const { title, link } = item; // Lấy title và link từ JSON

      // Tạo phần tử <a> để hiển thị tiêu đề và link
      const a = document.createElement('a');
      a.href = link.startsWith('http') ? link : `../${link}`; // Điều chỉnh link tương đối hoặc tuyệt đối
      a.textContent = title || `Tiêu đề không có (File ${index + 1})`; // Sử dụng title từ JSON
      a.style.border = '1px solid #007bff';
      a.style.padding = '8px 12px';
      a.style.margin = '5px';
      a.style.display = 'inline-block';
      a.style.borderRadius = '5px';
      a.style.backgroundColor = '#f0f0f5';
      a.style.textDecoration = 'none';
      a.style.color = '#007bff';
      a.target = '_blank'; // Mở link trong tab mới

      // Thêm phần tử vào container
      titleContainer.appendChild(a);
    });
  })
  .catch(error => console.error('Lỗi khi đọc file JSON:', error));

  //// Tiếng anh

  // Fetch dữ liệu từ file JSON
fetch('/12a2/data/anh.json') // Thay đổi đường dẫn đến file JSON
.then(response => {
  if (!response.ok) {
    throw new Error(`Không thể tải file JSON: ${response.statusText}`);
  }
  return response.json();
})
.then(data => {
  const titleContainer = document.getElementById('anh');

  // Kiểm tra xem titleContainer có tồn tại không
  if (!titleContainer) {
    console.error('Không tìm thấy phần tử #ly trong DOM');
    return;
  }

  // Duyệt qua từng mục trong mảng files
  data.files.forEach((item, index) => {
    const { title, link } = item; // Lấy title và link từ JSON

    // Tạo phần tử <a> để hiển thị tiêu đề và link
    const a = document.createElement('a');
    a.href = link.startsWith('http') ? link : `../${link}`; // Điều chỉnh link tương đối hoặc tuyệt đối
    a.textContent = title || `Tiêu đề không có (File ${index + 1})`; // Sử dụng title từ JSON
    a.style.border = '1px solid #007bff';
    a.style.padding = '8px 12px';
    a.style.margin = '5px';
    a.style.display = 'inline-block';
    a.style.borderRadius = '5px';
    a.style.backgroundColor = '#f0f0f5';
    a.style.textDecoration = 'none';
    a.style.color = '#007bff';
    a.target = '_blank'; // Mở link trong tab mới

    // Thêm phần tử vào container
    titleContainer.appendChild(a);
  });
})
.catch(error => console.error('Lỗi khi đọc file JSON:', error));

//// TOÁN

// Fetch dữ liệu từ file JSON
fetch('/12a2/data/toan.json') // Thay đổi đường dẫn đến file JSON
  .then(response => {
    if (!response.ok) {
      throw new Error(`Không thể tải file JSON: ${response.statusText}`);
    }
    return response.json();
  })
  .then(data => {
    const titleContainer = document.getElementById('toan');

    // Kiểm tra xem titleContainer có tồn tại không
    if (!titleContainer) {
      console.error('Không tìm thấy phần tử #ly trong DOM');
      return;
    }

    // Duyệt qua từng mục trong mảng files
    data.files.forEach((item, index) => {
      const { title, link } = item; // Lấy title và link từ JSON

      // Tạo phần tử <a> để hiển thị tiêu đề và link
      const a = document.createElement('a');
      a.href = link.startsWith('http') ? link : `../${link}`; // Điều chỉnh link tương đối hoặc tuyệt đối
      a.textContent = title || `Tiêu đề không có (File ${index + 1})`; // Sử dụng title từ JSON
      a.style.border = '1px solid #007bff';
      a.style.padding = '8px 12px';
      a.style.margin = '5px';
      a.style.display = 'inline-block';
      a.style.borderRadius = '5px';
      a.style.backgroundColor = '#f0f0f5';
      a.style.textDecoration = 'none';
      a.style.color = '#007bff';
      a.target = '_blank'; // Mở link trong tab mới

      // Thêm phần tử vào container
      titleContainer.appendChild(a);
    });
  })
  .catch(error => console.error('Lỗi khi đọc file JSON:', error));