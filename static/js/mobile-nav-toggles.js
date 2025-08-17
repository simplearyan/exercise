document.addEventListener('DOMContentLoaded', () => {
    // Get all the necessary elements from the DOM
    const menuToggleBtn = document.getElementById('menu-toggle-btn');
    const tocToggleBtn = document.getElementById('toc-toggle-btn');
    const lessonSidebar = document.getElementById('course-lesson-sidebar');
    const tocContainer = document.getElementById('mobile-toc-container');
    const backdrop = document.getElementById('mobile-sidebar-backdrop');

    // Helper to close the slide-in menu
    const closeMenuSidebar = () => {
        if (lessonSidebar) lessonSidebar.classList.remove('is-open');
        if (backdrop) backdrop.classList.remove('is-active');
        document.body.classList.remove('sidebar-open');
    };

    // Helper to close the TOC dropdown
    const closeTocDropdown = () => {
        if (tocContainer && tocToggleBtn) {
            tocContainer.classList.remove('is-open');
            tocContainer.style.maxHeight = null;
            tocToggleBtn.setAttribute('aria-expanded', 'false');
            tocToggleBtn.querySelector('i').style.transform = 'rotate(0deg)';
        }
    };

    // Handle Menu (Lesson List) Toggle
    if (menuToggleBtn && lessonSidebar) {
        menuToggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isAlreadyOpen = lessonSidebar.classList.contains('is-open');
            closeTocDropdown(); // Close TOC if it's open
            
            if (!isAlreadyOpen) {
                lessonSidebar.classList.add('is-open');
                backdrop.classList.add('is-active');
                document.body.classList.add('sidebar-open');
            } else {
                closeMenuSidebar();
            }
        });
    }

    // Handle TOC Dropdown Toggle
    if (tocToggleBtn && tocContainer) {
        tocToggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isExpanded = tocContainer.classList.toggle('is-open');
            tocToggleBtn.setAttribute('aria-expanded', isExpanded);
            
            if (isExpanded) {
                closeMenuSidebar(); // Close menu if it's open
                // tocContainer.style.maxHeight = tocContainer.scrollHeight + 'px';
                tocToggleBtn.querySelector('i').style.transform = 'rotate(180deg)';
            } else {
                tocContainer.style.maxHeight = null;
                tocToggleBtn.querySelector('i').style.transform = 'rotate(0deg)';
            }
        });
    }

    // --- UPDATED FEATURE ---
    // Add click listeners to links inside the mobile TOC
    if (tocContainer) {
        const tocLinks = tocContainer.querySelectorAll('a');
        tocLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Close the dropdown immediately when a link is clicked
                closeTocDropdown(); 
            });
        });
    }

    // Close slide-in menu if backdrop is clicked
    if (backdrop) {
        backdrop.addEventListener('click', closeMenuSidebar);
    }
});
