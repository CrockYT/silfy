document.addEventListener("DOMContentLoaded", function() {
    const searchBox = document.getElementById('search-date');
    const blogPosts = document.querySelectorAll('.blog-post');
    const overlay = document.getElementById('overlay');
    const overlayContent = document.getElementById('overlay-article');
    const closeOverlayBtn = document.getElementById('close-overlay');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    let currentIndex = -1;

    searchBox.addEventListener('input', function() {
        const searchTerm = searchBox.value.trim().toLowerCase();

        blogPosts.forEach(post => {
            const title = post.querySelector('h3').textContent.toLowerCase();
            const date = post.querySelector('p:nth-of-type(1)').textContent.toLowerCase();
            const content = post.querySelector('p:nth-of-type(2)').textContent.toLowerCase();

            if (title.includes(searchTerm) || date.includes(searchTerm) || content.includes(searchTerm)) {
                post.style.display = 'block';
            } else {
                post.style.display = 'none';
            }
        });
    });

    blogPosts.forEach((post, index) => {
        post.addEventListener('click', function() {
            currentIndex = index;
            showOverlay(post);
        });

        const readMoreLink = post.querySelector('.read-more');
        readMoreLink.addEventListener('click', function(e) {
            e.preventDefault();
            currentIndex = index;
            showOverlay(post);
        });
    });

    closeOverlayBtn.addEventListener('click', function() {
        hideOverlay();
    });

    prevBtn.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            showOverlay(blogPosts[currentIndex]);
        }
    });

    nextBtn.addEventListener('click', function() {
        if (currentIndex < blogPosts.length - 1) {
            currentIndex++;
            showOverlay(blogPosts[currentIndex]);
        }
    });

    function showOverlay(post) {
        const title = post.querySelector('h3').textContent;
        const date = post.querySelector('p:nth-of-type(1)').textContent;
        const content = post.querySelector('p:nth-of-type(2)').innerHTML;

        overlayContent.innerHTML = `
            <h3>${title}</h3>
            <p>${date}</p>
            <p>${content}</p>
        `;

        overlay.classList.add('show');
    }

    function hideOverlay() {
        overlay.classList.remove('show');
    }
});
