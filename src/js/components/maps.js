//import { data } from '/data_map.json';
if (document.querySelector('.map-block') && ymaps != undefined) {
    document.querySelectorAll('.map-block').forEach(el => {
        ymaps.ready(init);

        function init() {
            // let myMap = new ymaps.Map(el.id, {
            //         center: [55.74002, 38.015319],
            //         zoom: 10
            //     }, {
            //         searchControlProvider: 'yandex#search'
            //     }),

            //     myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            //         balloonContent: 'г. Балашиха, ул юбилейная 24'
            //     }, {
            //         // Опции.
            //         // Необходимо указать данный тип макета.
            //         iconLayout: 'default#image',
            //         // Своё изображение иконки метки.
            //         iconImageHref: 'img/map/icon.svg',
            //         // Размеры метки.
            //         iconImageSize: [46, 45],
            //         // Смещение левого верхнего угла иконки относительно
            //         // её "ножки" (точки привязки).
            //         iconImageOffset: [-5, -38]
            //     });


            // myMap.geoObjects
            //     .add(myPlacemark)

            adress_out(el.closest('.block-parent-map').querySelector('.contacts-map__adress--text').innerText, el.id);



            function adress_out(adress, element) {
                // myMap.container.fitToViewport();
                //  myMap.destroy();
                let myMap = new ymaps.Map(element, {
                    center: [55.76, 37.64],
                    zoom: 7
                });

                ymaps.geocode(adress, {
                    /**
                     * Опции запроса
                     * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/geocode.xml
                     */
                    // Сортировка результатов от центра окна карты.
                    // boundedBy: myMap.getBounds(),
                    // strictBounds: true,
                    // Вместе с опцией boundedBy будет искать строго внутри области, указанной в boundedBy.
                    // Если нужен только один результат, экономим трафик пользователей.
                    results: 1
                }).then(function(res) {
                    let firstGeoObject = res.geoObjects.get(0),
                        // Координаты геообъекта.
                        coords = firstGeoObject.geometry.getCoordinates(),
                        // Область видимости геообъекта.
                        bounds = firstGeoObject.properties.get('boundedBy');

                    // firstGeoObject.options.set('preset', 'islands#darkBlueDotIconWithCaption');
                    // // Получаем строку с адресом и выводим в иконке геообъекта.
                    // firstGeoObject.properties.set('iconCaption', firstGeoObject.getAddressLine());

                    // Добавляем первый найденный геообъект на карту.
                    // myMap.geoObjects.add(firstGeoObject);
                    // Масштабируем карту на область видимости геообъекта.
                    myMap.setCenter(coords, 10, {
                        // Проверяем наличие тайлов на данном масштабе.
                        checkZoomRange: true
                    });

                    let myPlacemark = new ymaps.Placemark(coords, {
                        //  iconContent: 'моя метка',
                        balloonContent: firstGeoObject.getAddressLine()
                    }, {
                        // Тип макета.
                        iconLayout: 'default#image',
                        // Своё изображение иконки метки.
                        iconImageHref: 'img/map/icon.svg',
                        // Размеры метки.
                        iconImageSize: [46, 45],
                        // Смещение левого верхнего угла иконки относительно
                        // её "ножки" (точки привязки).
                        iconImageOffset: [-5, -38]
                    });

                    myMap.geoObjects.add(myPlacemark);


                });
            }


        }
    });



}