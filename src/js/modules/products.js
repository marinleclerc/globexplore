const items = document.querySelectorAll('.products .item');

items.forEach(item => {
    item.addEventListener('mouseenter', () => {
        items.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.add('hovered');
            }
        });
    });

    item.addEventListener('mouseleave', () => {
        items.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('hovered');
            }
        });
    });
});