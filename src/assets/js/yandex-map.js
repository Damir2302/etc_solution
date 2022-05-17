function addYaMaps () {
    var myMap;
    ymaps.ready(init);
    function init () {
        myMap = new ymaps.Map('map', {
            center: [47.225609, 39.623367],
            zoom: 11,
            controls: []
        }),
        myPlacemark = new ymaps.Placemark([47.225609, 39.623367], {
        balloonContentHeader: 'ETC-Solution',
        balloonContentBody: "Ростов-на-Дону, 344015, Ростовская область,  ул. 339-й Стрелковой Дивизии, д. 17, к. 103 "

    }, {
        iconLayout: 'default#image',
        iconImageHref: 'assets/images/map-marker-alt.svg',
        iconImageSize: [28, 37],
        iconImageOffset: [-37, -45],
        balloonOffset:[-25, -5]
    });
    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable('scrollZoom');
    }
}

if ($('#map').length != 0) {
    addYaMaps ();
}