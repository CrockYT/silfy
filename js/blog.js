// blog.js

// 検索ボックスの要素を取得
const searchBox = document.getElementById('search-date');

// ブログ記事を格納する要素を取得
const blogPosts = document.querySelectorAll('.blog-post');

// 検索ボックスに入力がある度に実行される処理
searchBox.addEventListener('input', function() {
    const searchTerm = searchBox.value.trim().toLowerCase();

    // ブログ記事をフィルタリング
    blogPosts.forEach(post => {
        const title = post.querySelector('h3').textContent.toLowerCase();
        const date = post.querySelector('p:nth-of-type(1)').textContent.toLowerCase();
        const content = post.querySelector('p:nth-of-type(2)').textContent.toLowerCase();

        // 検索語句がどれかに含まれている場合は表示、そうでなければ非表示にする
        if (title.includes(searchTerm) || date.includes(searchTerm) || content.includes(searchTerm)) {
            post.style.display = 'block';
        } else {
            post.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const blogPosts = document.querySelectorAll('.blog-post');
    const overlay = document.getElementById('overlay');
    const overlayArticle = document.getElementById('overlay-article');
    const closeOverlay = document.getElementById('close-overlay');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    let currentPostIndex = 0;
    let posts = [];

    blogPosts.forEach((post, index) => {
        posts.push(post);
        post.addEventListener('click', () => {
            currentPostIndex = index;
            showOverlay();
        });

        const readMoreLink = post.querySelector('.read-more');
        readMoreLink.addEventListener('click', function(e) {
            e.preventDefault();
            currentPostIndex = index;
            showOverlay();
        });
    });

    function showOverlay() {
        const post = posts[currentPostIndex];
        const title = post.querySelector('h3').innerText;
        const date = post.querySelector('p:nth-of-type(1)').innerText;
        const content = post.querySelector('p:nth-of-type(2)').innerText;

        overlayArticle.innerHTML = `
            <h3 class="blog-title">${title}</h3>
            <p class="blog-content">${date}</p>
            <p class="blog-content full-content">${content}</p>
        `;
        overlay.classList.add('show');

        prevBtn.style.display = currentPostIndex > 0 ? 'block' : 'none';
        nextBtn.style.display = currentPostIndex < posts.length - 1 ? 'block' : 'none';
    }

    closeOverlay.addEventListener('click', () => {
        overlay.classList.remove('show');
    });

    prevBtn.addEventListener('click', () => {
        if (currentPostIndex > 0) {
            currentPostIndex--;
            showOverlay();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentPostIndex < posts.length - 1) {
            currentPostIndex++;
            showOverlay();
        }
    });
});
