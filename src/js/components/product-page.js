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

import {isClickedBeyond} from "../utils/helpers.js";
const hotspotCircles = document.querySelectorAll('.product-page--circle');

hotspotCircles.forEach((hotspot, index) => {
    const hotspotClass = `hotspot-${index}`
    hotspot.classList.add(hotspotClass);
    window.addEventListener("click", (e) => {
        if (hotspot.classList.contains('_active')) {
            hotspot.classList.remove('_active');
            return;
        }

        if (isClickedBeyond(e, hotspotClass)) {
            hotspot.classList.remove('_active');
        } else {
            hotspot.classList.add('_active');
        }
    })
});