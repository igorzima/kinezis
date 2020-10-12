const ymaps = window.ymaps;

export default function init() {
  // Создание карты.
  const myMap = new ymaps.Map('map', {
    center: [53.863978, 27.562542],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 13,
  });

  myMap.controls.remove('searchControl');
  myMap.controls.remove('trafficControl');
  myMap.controls.remove('typeSelector');
  myMap.controls.remove('rulerControl');

  const coords = [
    [53.863978, 27.562542],
    [53.876127, 27.564958],
    [53.847824, 27.562524],
  ];
  const myCollection = new ymaps.GeoObjectCollection(
    {},
    {
      preset: 'islands#redIcon', // все метки красные
      draggable: false, // и их можно перемещать
    },
  );

  for (let i = 0; i < coords.length; i++) {
    myCollection.add(new ymaps.Placemark(coords[i]));
  }

  myMap.geoObjects.add(myCollection);
}
