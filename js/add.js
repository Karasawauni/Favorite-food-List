/*APIキー
AIzaSyBQT9VcrV5MDd1gyV40UfmFQRpoJ1gUoK8


export default async function handler(req, res) {
    const { query } = req.query;

    const apiKey = process.env.GOOGLE_PLACES_API_KEY; // 環境変数から取得

    const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(query)}&key=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    res.status(200).json(data);
}

*/

