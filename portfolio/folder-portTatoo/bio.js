document.addEventListener('DOMContentLoaded', (event) => {
    const bioContent = document.querySelector('#bio-full .section-content');

    if (bioContent) {
        setTimeout(() => {
            bioContent.classList.add('visible');
        }, 200);
    }
});