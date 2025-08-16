document.addEventListener('DOMContentLoaded', () => {
    // Select all Table of Contents containers (for both mobile and desktop)
    const tocContainers = document.querySelectorAll('.m-lesson-toc');
    const content = document.querySelector('.m-lesson-content');

    // If there's no content or no TOCs, do nothing.
    if (!content || tocContainers.length === 0) {
        return;
    }

    // Get all headings from the content that have an ID. These are the targets.
    const headings = Array.from(content.querySelectorAll('h2[id], h3[id], h4[id]'));
    // Get all links from all TOCs.
    const tocLinks = Array.from(document.querySelectorAll('.m-lesson-toc a'));

    // Function to remove the 'active' class from all TOC links
    const removeActiveStates = () => {
        tocLinks.forEach(link => {
            link.classList.remove('active');
        });
    };

    // --- NEW: Add click event listeners to all TOC links ---
    tocLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Get the target ID from the link's href
            const targetId = link.getAttribute('href');
            // Find all links that point to this same ID (for mobile and desktop)
            const correspondingLinks = document.querySelectorAll(`.m-lesson-toc a[href="${targetId}"]`);
            
            // Immediately set the clicked links to active
            removeActiveStates();
            correspondingLinks.forEach(corrLink => {
                corrLink.classList.add('active');
            });
        });
    });

    // The observer callback function for scrolling
    const observerCallback = (entries) => {
        let lastVisibleEntry = null;

        // Find the last entry that is intersecting (visible)
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                lastVisibleEntry = entry;
            }
        });

        // If a heading is visible, highlight its link in the TOC
        if (lastVisibleEntry) {
            const id = lastVisibleEntry.target.getAttribute('id');
            // Find all links that point to this ID (for mobile and desktop)
            const correspondingLinks = document.querySelectorAll(`.m-lesson-toc a[href="#${id}"]`);
            
            removeActiveStates();
            correspondingLinks.forEach(link => {
                link.classList.add('active');
            });
        }
    };

    // Observer options: trigger when a heading is 20% from the top of the viewport
    const observerOptions = {
        rootMargin: '-20% 0px -80% 0px',
        threshold: 0
    };

    // Create and start the observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    headings.forEach(heading => {
        observer.observe(heading);
    });
});
