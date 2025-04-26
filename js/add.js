
document.addEventListener('DOMContentLoaded', function () {
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
});