if (document.querySelector('.product-page-seciton')) {
    document.querySelector('.product-page-seciton').addEventListener('click', function(e) {
        if ((e.target.closest('.product-page--views--element') || e.target.classList.contains('product-page--views--element'))) {
            e.target.closest('.product-page-seciton').querySelector('.product-page--views--element._active').classList.remove('_active');
            !e.target.closest('.product-page--views--element') ? e.target.classList.add('_active') : e.target.closest('.product-page--views--element').classList.add('_active');
            [...document.querySelectorAll('.product-page--views--element')].filter((el, index) => {
                if (el.classList.contains('_active')) {
                    document.querySelector('.product-page--views--block-text-descr._active').classList.remove('_active');
                    document.querySelectorAll('.product-page--views--block-text-descr')[index].classList.add('_active');
                }
            });
        }
    });
}