(() => {
    if (!document.querySelector('.product-page-seciton')) return

    const productVariations = [...document.querySelectorAll('.product-page--views--element')];
    const productVariationsPic = [...document.querySelectorAll('.product-page__inner-pic')];
    productVariations.forEach((variation, index) => {
        variation.addEventListener('click', (e) => {
            productVariations.forEach((variation) => {
                variation.classList.remove('_active');
            })
            productVariationsPic.forEach((pic) => {
                pic.classList.remove('_active')
            })
            variation.classList.add('_active')
            productVariationsPic[index].classList.add('_active');
        });
    });
})();
