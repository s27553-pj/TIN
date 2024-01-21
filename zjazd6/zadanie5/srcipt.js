document.addEventListener('DOMContentLoaded', function () {
    const akItems = document.querySelectorAll('.ak-item');

    akItems.forEach(item => {
        const header = item.querySelector('.ak-header');

        header.addEventListener('click', function () {
            akItems.forEach(innerItem => {
                if (innerItem !== item) {
                    innerItem.querySelector('.ak-content').style.display = 'none';
                }
            });

            const content = item.querySelector('.ak-content');
            content.style.display = content.style.display === 'none' ? 'block' : 'none';
        });
    });
});
