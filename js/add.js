document.addEventListener('DOMContentLoaded', function () {
  let map;
  let marker;
  let placesService;
  let autocomplete;

  function initMap() {
    // 地図の初期位置
    const initialLocation = { lat: 38.26062846, lng: 140.88118916 }; // 東京の座標

    // 地図を作成
    map = new google.maps.Map(document.getElementById("map"), {
      center: initialLocation,
      zoom: 13,
    });

    // マーカーを作成
    marker = new google.maps.Marker({
      map: map,
      position: initialLocation,
      draggable: true,
    });

    // Placesサービスを作成
    placesService = new google.maps.places.PlacesService(map);

    // オートコンプリートの設定
    autocomplete = new google.maps.places.Autocomplete(document.getElementById("search-input"));
    autocomplete.setFields(["place_id", "name", "formatted_address", "photos"]);

    autocomplete.addListener("place_changed", onPlaceChanged);
  }

  // 場所が変更されたときに呼ばれる関数
  function onPlaceChanged() {
    const place = autocomplete.getPlace();

    if (!place.place_id) {
      return;
    }

    // マーカーの位置を変更
    marker.setPosition(place.geometry.location);
    map.setCenter(place.geometry.location);

    // 場所の情報を表示
    displayPlaceDetails(place);
  }

  // 場所の詳細情報を表示する関数
  function displayPlaceDetails(place) {
    const name = place.name || "場所名はありません";
    const address = place.formatted_address || "住所はありません";
    const photo = place.photos ? place.photos[0].getUrl({ maxWidth: 300 }) : "";

    document.getElementById("place-name").textContent = `名前: ${name}`;
    document.getElementById("place-address").textContent = `住所: ${address}`;
    document.getElementById("place-image").src = photo;
  }
});

