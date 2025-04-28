<<<<<<< HEAD
// Vercelのサーバーレス関数
export default async function handler(req, res) {
    const { url } = req.query;
    console.log(url);
    if (!url) {
        return res.status(400).json({ error: 'URLが必要です。' });
    }

    // ここでGoogle Places APIのキーを環境変数から取得
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;
    console.log(apiKey);

    if (!apiKey) {
        return res.status(500).json({ error: 'APIキーが設定されていません。' });
    }

    try {
        // Google Places APIのURL
        const googlePlaceUrl = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${url}&key=${apiKey}`;
        console.log(googlePlaceUrl);
        // Google Places APIにリクエスト
        const response = await fetch(googlePlaceUrl);
        const data = await response.json();
        console.log(response+'---'+data);

        // 必要な情報を抽出
        if (data.status === 'OK') {
            const place = {
                name: data.result.name,
                address: data.result.formatted_address,
                image_url: data.result.photos ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${data.result.photos[0].photo_reference}&key=${apiKey}` : ''
            };
            return res.status(200).json(place);
        } else {
            return res.status(400).json({ error: 'Google Places APIからのデータ取得に失敗しました。' });
        }
    } catch (error) {
        return res.status(500).json({ error: 'サーバーエラーが発生しました。' });
    }
}
=======
/*Vercelのサーバーレス関数
export default async function handler(req, res) {
    const { url } = req.query;
    console.log(url);
    if (!url) {
        return res.status(400).json({ error: 'URLが必要です。' });
    }

    // ここでGoogle Places APIのキーを環境変数から取得
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;
    console.log(apiKey);

    if (!apiKey) {
        return res.status(500).json({ error: 'APIキーが設定されていません。' });
    }

    try {
        // Google Places APIのURL
        const googlePlaceUrl = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${url}&key=${apiKey}`;
        console.log(googlePlaceUrl);
        // Google Places APIにリクエスト
        const response = await fetch(googlePlaceUrl);
        const data = await response.json();
        console.log(response+'---'+data);

        // 必要な情報を抽出
        if (data.status === 'OK') {
            const place = {
                name: data.result.name,
                address: data.result.formatted_address,
                image_url: data.result.photos ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${data.result.photos[0].photo_reference}&key=${apiKey}` : ''
            };
            return res.status(200).json(place);
        } else {
            return res.status(400).json({ error: 'Google Places APIからのデータ取得に失敗しました。' });
        }
    } catch (error) {
        return res.status(500).json({ error: 'サーバーエラーが発生しました。' });
    }
}
    */

export default function handler(req, res) {
    const apiKey = process.env.GOOGLE_MAPS_API_KEY; // Vercelの環境変数から取得
    res.status(200).json({ apiKey });
  }
>>>>>>> master
