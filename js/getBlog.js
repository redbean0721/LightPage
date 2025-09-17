document.addEventListener('DOMContentLoaded', function() {
  const blogUrl = "https://blog.redbean0721.com";
  const blogsContainer = document.querySelector('.blogs');
  const archiveUrl = '/archives';

  if (!blogsContainer) {
    console.error('找不到指定的 .blogs 容器。');
    return;
  }

  fetch(blogUrl + archiveUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.text();
    })
    .then(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const articleElements = doc.querySelectorAll('.timeline-content > a'); // 修改後的選擇器

      if (articleElements.length > 0) {
        // 清空舊內容
        blogsContainer.innerHTML = '';
        articleElements.forEach(article => {
          const title = article.textContent.trim();
          const link = blogUrl + article.getAttribute('href');
          if (title && link) {
            const blogItem = document.createElement('p');
            blogItem.className = 'blog-item';
            const linkElement = document.createElement('a');
            linkElement.href = link;
            linkElement.textContent = title;
            linkElement.target = '_blank';
            blogItem.appendChild(linkElement);
            blogsContainer.appendChild(blogItem);
          }
        });
        // 超過 5 篇才啟用橫向捲動
        if (articleElements.length > 5) {
          blogsContainer.classList.add('scrollable');
        } else {
          blogsContainer.classList.remove('scrollable');
        }
      } else {
        blogsContainer.innerHTML = '<p>無法載入文章。</p>';
        console.warn('沒有找到符合條件的文章標題連結。請檢查選擇器是否正確。');
      }
    })
    .catch(error => {
      console.error('抓取部落格內容時發生錯誤:', error);
      blogsContainer.innerHTML = '<p>載入文章時發生錯誤。</p>';
    });
});