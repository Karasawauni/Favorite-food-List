document.addEventListener('DOMContentLoaded', function () {
    /*
    document.getElementById('url-form').addEventListener('submit', async (event) => {
        event.preventDefault();
        const url = document.getElementById('google-url').value;
        console.log(url);
        // サーバーサイドにリクエストを送る
        const response = await fetch(`/api/fetchPlace?url=${encodeURIComponent(url)}`);
        const data = await response.json();

        if (data.error) {
            alert('エラーが発生しました: ' + data.error);
        } else {
            // 受け取ったデータを画面に表示
            document.getElementById('place-name').innerText = '名前: ' + data.name;
            document.getElementById('place-address').innerText = '住所: ' + data.address;
            document.getElementById('place-image').src = data.image_url || '';
        }
    });


    let map;

function initMap(apiKey) {
  const script = document.createElement('script');
  script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=startMap&libraries=places`;
  script.async = true;
  document.head.appendChild(script);
}

function startMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 35.6812, lng: 139.7671 },  // 東京駅
    zoom: 14,
  });
}

/*サーバーからAPIキーを取ってくる
fetch('/api/mapsApiKey')
  .then(response => response.json())
  .then(data => {
    initMap(data.apiKey);
  })
  .catch(error => {
    console.error('APIキーの取得に失敗しました:', error);
  });
  */
    let map;

    function initMap() {
        // 地図の初期位置（例：東京駅付近）
        map = new google.maps.Map(document.getElementById("map"), {
            center: { lat:38.26062846, lng: 140.88118916 },
            zoom: 14,
            
        });
        secondProc()
    }
    window.initMap = initMap;

    function secondProc(){
        const input = document.getElementById('search-input');
        const autocomplete = new google.maps.places.Autocomplete(input);
        autocomplete.bindTo('bounds', map);
    }



});

