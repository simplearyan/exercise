document.addEventListener('DOMContentLoaded', () => {
    // Get all the necessary elements from the DOM
    const menuToggleBtn = document.getElementById('menu-toggle-btn');
    const tocToggleBtn = document.getElementById('toc-toggle-btn');
    const lessonSidebar = document.getElementById('course-lesson-sidebar');
    const tocContainer = document.getElementById('mobile-toc-container');
    const backdrop = document.getElementById('mobile-sidebar-backdrop');

    // Helper function to close all open mobile menus
    const closeAll = () => {
        // Close lesson sidebar (Menu)
        if (lessonSidebar) {
            lessonSidebar.classList.remove('is-open');
        }
        // Close TOC dropdown
        if (tocContainer) {
            tocContainer.classList.remove('is-open');
            tocToggleBtn.setAttribute('aria-expanded', 'false');
            tocToggleBtn.querySelector('i').style.transform = 'rotate(0deg)';
        }
        // Hide the backdrop
        if (backdrop) {
            backdrop.classList.remove('is-active');
        }
        // Re-enable scrolling on the page
        document.body.classList.remove('sidebar-open');
    };

    // --- Event Listener for the "Menu" (Lesson List) Toggle ---
    if (menuToggleBtn && lessonSidebar) {
        menuToggleBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent click from bubbling up
            const isAlreadyOpen = lessonSidebar.classList.contains('is-open');
            
            // Close everything first to handle switching between menus
            closeAll();

            // If it wasn't already open, open it now
            if (!isAlreadyOpen) {
                lessonSidebar.classList.add('is-open');
                backdrop.classList.add('is-active');
                document.body.classList.add('sidebar-open');
            }
        });
    }

    // --- Event Listener for the "On this page" (TOC) Toggle ---
    if (tocToggleBtn && tocContainer) {
        tocToggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isExpanded = tocContainer.classList.toggle('is-open');
            
            tocToggleBtn.setAttribute('aria-expanded', isExpanded);
            
            if (isExpanded) {
                // Set max-height to its scroll height to animate open
                // tocContainer.style.maxHeight = tocContainer.scrollHeight + 'px';
                tocToggleBtn.querySelector('i').style.transform = 'rotate(180deg)';
                // Close the main menu if it's open
                if (lessonSidebar && lessonSidebar.classList.contains('is-open')) {
                    lessonSidebar.classList.remove('is-open');
                    backdrop.classList.remove('is-active');
                    document.body.classList.remove('sidebar-open');
                }
            } else {
                // Collapse the dropdown
                tocContainer.style.maxHeight = null;
                tocToggleBtn.querySelector('i').style.transform = 'rotate(0deg)';
            }
        });
    }

    // --- Event Listener for the Backdrop ---
    // Closes any open menu when the user clicks outside of it
    if (backdrop) {
        backdrop.addEventListener('click', closeAll);
    }
});
