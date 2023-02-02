"use strict";

// import { removeAllClasses, bodyLock } from "./utils/functions.js";
// import DismalModules, { acc } from "./utils/modules.js";


import "./components/header.js"
import "./components/controls.js"
// import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";

// Fancybox.bind('[data-fancybox]', {
//   Toolbar: {
//     display: [
//       "close",
//     ],
//   },
// });

import './sliders.js';
import "./components/element_position.js";
import "./components/maps.js";
import "./components/contacts_map.js";
import "./components/product-page.js";
import "./components/swiper_thumbs.js";
import "./components/delivery.js";

import "./unstable/inputster/input-tel-mask.js";


/**
 * Poppa
 */
import "./poppa.js";

/**
 * Lazy Load
 */
import "./libs/lazyload.min.js";
let lazyLoadInstance = new LazyLoad();


// import "./libs/rellax.js";
// let rellax = new Rellax('.proud-card')
// setTimeout(() => {
//   rellax.refresh();
// }, 5000)

// let rellax = new Rellax('.proud-card', {
//     speed: 1,
//     center: false,
//     wrapper: null,
//     round: true,
//     vertical: true,
//     horizontal: false
//   });


import "./unstable/tabs.js";
import "./unstable/inputster/input.js";

/**
 * Smooth anchors
 **/
import "./utils/smooth-anchors.js";

/**
 * Smooth anchors
 **/
import "./unstable/bayan.js";


/*
 * Переключает в мобильной версии видимость сайдбара с контактами
 * При клике за пределами сайдара закрывает его
 */
/*
const servicesLeadButton = document.querySelector('.services__sidebar-toggler');
if (servicesLeadButton) {
  servicesLeadButton.addEventListener('click', () => {
    document.querySelector('.services__sidebar').classList.add('services__sidebar--active');
  });
  window.addEventListener('click', (e) => {
    if (!e.target == sideNav || e.target == servicesLeadButton) return;

    document.querySelector('.services__sidebar').classList.remove('services__sidebar--active');
  })
}
*/
import "./components/carousels.js";
import "./unstable/scroll-mouse.js";
import "./libs/masonry.pkgd.min.js";
import "./components/grid-masonry.js"
import "./components/otzyvi_block.js";



// Фильтры в кейсах
const casesFilterCategories = document.querySelectorAll(
  ".tabs-7p__category"
);
const casesFilterIndustriesInner = document.querySelector(
  ".tabs-7p__industries-inner"
);
const casesFilterIndustries = document.querySelectorAll(
  ".tabs-7p__industries--clickable .tabs-7p__industry"
);
const casesFilterMore = document.querySelector(
  ".tabs-7p__industries-more"
);
const casesFilterDropdown = document.querySelector(
  ".tabs-7p__industries-dropdown"
);

if ([...casesFilterIndustries].length > 0) {
  casesFilterIndustries.forEach((industry) => {
    industry.addEventListener("click", () => {
      industry.classList.toggle("tabs-7p__industry--active");

      if (industry.classList.contains("tabs-7p__industry--total")) {
        casesFilterIndustries.forEach((industry) => {
          industry.classList.remove("tabs-7p__industry--active");
          if (industry.classList.contains("tabs-7p__industry--total")) {
            industry.classList.add("tabs-7p__industry--active");
          }
        });
      } else {
        casesFilterIndustriesInner
          .querySelector(".tabs-7p__industry--total")
          .classList.remove("tabs-7p__industry--active");
      }
    });
  });

  function moveFiltersToDropdown() {
    casesFilterIndustries.forEach((item, index) => {
      if (index === 0) return;
      casesFilterDropdown.appendChild(item);
    });
  }
  function moveFiltersToScrollbar() {
    casesFilterIndustries.forEach((item, index) => {
      if (index === 0) return;
      casesFilterIndustriesInner.appendChild(item);
    });
  }

  // Перемещает фильтры между дропдауном и скроллбаром
  function relocateFilterItems() {
    let filtersMaxWidth =
      document
        .querySelector(".tabs-7p__industries")
        .getBoundingClientRect().width - 360;
    let filtersWidth = document
      .querySelector(".tabs-7p__industries-inner")
      .getBoundingClientRect().width;
    let filtersToSkip = [];

    casesFilterIndustries.forEach((item, index, arr) => {
      // Чтобы убрать все большие кнопки, которые больше половины
      if (item.innerText.length > 16) {
        filtersToSkip.push(item);
        // console.log("Сразу убрать", item.innerText);
      }
    });
    
    casesFilterIndustries.forEach((item, index, arr) => {
      if (index === 0 || filtersToSkip.includes(item)) return;

      if (filtersWidth <= filtersMaxWidth - 100) {
        casesFilterIndustriesInner.appendChild(item);
        filtersWidth += item.getBoundingClientRect().width;
      }
    });
  }

  function changeFiltersPosition() {
    if (window.innerWidth < 576) {
      moveFiltersToScrollbar();
    } else {
      moveFiltersToDropdown();
    }
    relocateFilterItems();
  }

  window.addEventListener("resize", () => {
    debounce(changeFiltersPosition(), 200);
  });
  changeFiltersPosition();

  casesFilterMore.addEventListener("click", () => {
    casesFilterDropdown.classList.toggle(
      "tabs-7p__industries-dropdown--visible"
    );
  });
  document.addEventListener("click", (e) => {
    if (
      !e.target.closest(".tabs-7p__industries-dropdown") &&
      !e.target.closest(".tabs-7p__industries-more")
    ) {
      casesFilterDropdown.classList.remove(
        "tabs-7p__industries-dropdown--visible"
      );
    }
  });
}
