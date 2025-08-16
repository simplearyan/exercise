document.addEventListener('DOMContentLoaded', () => {
    const tocDropdown = document.querySelector('.toc-dropdown');
    if (!tocDropdown) return;

    const toggleButton = tocDropdown.querySelector('.toc-dropdown-toggle');
    const tocList = tocDropdown.querySelector('.m-lesson-toc');
    const toggleIcon = toggleButton.querySelector('i');

    toggleButton.addEventListener('click', () => {
        const isExpanded = tocDropdown.classList.toggle('is-open');
        toggleButton.setAttribute('aria-expanded', isExpanded);
        
        if (isExpanded) {
            tocList.style.maxHeight = tocList.scrollHeight + 'px';
            toggleIcon.style.transform = 'rotate(180deg)';
        } else {
            tocList.style.maxHeight = '0px';
            toggleIcon.style.transform = 'rotate(0deg)';
        }
    });
});
