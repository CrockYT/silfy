document.addEventListener('DOMContentLoaded', function() {
    const privacyBtn = document.getElementById('privacy-btn');
    const termsBtn = document.getElementById('terms-btn');
    const privacyPolicy = document.getElementById('privacy-policy');
    const termsOfUse = document.getElementById('terms-of-use');

    privacyBtn.addEventListener('click', function() {
        privacyPolicy.style.display = 'block';
        termsOfUse.style.display = 'none';
    });

    termsBtn.addEventListener('click', function() {
        privacyPolicy.style.display = 'none';
        termsOfUse.style.display = 'block';
    });
});
