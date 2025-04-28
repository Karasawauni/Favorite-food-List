import fetch from 'node-fetch';

export default async function handler(req, res) {
    const { placeId } = req.query;

    if (!placeId) {
        return res.status(400).json({ error: 'placeId is required' });
    }

    const apiKey = process.env.GOOGLE_PLACES_API_KEY; // Vercelの環境変数からAPIキーを取得

    try {
        // Google Places APIのURL
        const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${apiKey}`;

        // APIリクエスト
        const response = await fetch(url);
        const data = await response.json();

        if (data.status !== 'OK') {
            return res.status(400).json({ error: 'Failed to fetch place details' });
        }

        // 取得したデータを返す
        return res.status(200).json(data.result);
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
