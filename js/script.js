
  var link = document.querySelector(".contacts__link");
  var popup = document.querySelector(".feedback");
  var close = document.querySelector(".feedback-close")
  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("feedback-show");
  });
  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("feedback-show");
  });


  ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
      center: [59.939135, 30.321534],
      zoom: 17
  },{
     searchControlProvider: 'yandex#search'
  }),

       MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),

      myPlacemarkWithContent = new ymaps.Placemark([59.938690, 30.323200], {
         hintContent: 'NЁRDS DESIGN STUDIO',
         balloonContent: '191186, Санкт-Петербург, ул. Б. Конюшенная, д. 19/8',
         iconContent: '15'
      }, {
         iconLayout: 'default#imageWithContent',
         iconImageHref: 'img/map-marker.png',
         iconImageSize: [231, 190],
         iconImageOffset: [-54, -200],
         iconContentOffset: [15, 15],
         iconContentLayout: MyIconContentLayout
      });

      myMap.geoObjects
        .add(myPlacemarkWithContent);
      });
