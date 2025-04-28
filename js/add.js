document.addEventListener('DOMContentLoaded', function () {


  let map;
  let marker;
  let autocomplete;

  function initMap() {
    // 地図の初期設定
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 38.26062846, lng: 140.88118916 }, // 東京の座標
      zoom: 14,
    });

    // マーカーの初期設定
    marker = new google.maps.Marker({
      map: map,
      draggable: true,
    });

    // Places Autocompleteを検索バーに適用
    const input = document.getElementById("search-input");
    autocomplete = new google.maps.places.Autocomplete(input);

    // 検索結果が選択されたときに呼ばれるイベント
    autocomplete.addListener("place_changed", function () {
      const place = autocomplete.getPlace();

      if (!place.geometry) {
        // 不正な場所が選ばれた場合の処理
        console.log("選択した場所が地図に表示できません。");
        return;
      }

      // 新しい場所を地図の中央に設定
      map.setCenter(place.geometry.location);
      map.setZoom(14); // ズームレベル

      // 既存のマーカーを新しい場所に移動
      marker.setPosition(place.geometry.location);

      // 必要に応じて、placeIdを取得することも可能
      const placeId = place.place_id;
      console.log("Place ID:", placeId);

      // 取得したPlace IDを使ってサーバーレス関数から詳細を取得することもできます
      // 例: fetch(`/api/places?placeId=${placeId}`)
    });
  }


});

