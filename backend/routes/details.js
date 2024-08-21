import express from 'express';
import https from 'https';

const router = express.Router();

// Endpoint to get user info from Instagram Scraper API
router.get('/get/:username', (req, res) => {
    const username = req.params.username;

    const options = {
        method: 'GET',
        hostname: 'instagram-scraper-api2.p.rapidapi.com',
        port: null,
        path: `/v1/info?username_or_id_or_url=${username}&url_embed_safe=true`,
        headers: {
            'x-rapidapi-key': 'd82150835dmsh72953dd6c86e45dp1c0328jsnf8d50047154d',
            'x-rapidapi-host': 'instagram-scraper-api2.p.rapidapi.com'
        }
    };

    const apiReq = https.request(options, function (apiRes) {
        const chunks = [];

        apiRes.on('data', function (chunk) {
            chunks.push(chunk);
        });

        apiRes.on('end', function () {
            const body = Buffer.concat(chunks);
            res.status(200).send(body.toString());
        });
    });

    apiReq.on('error', (e) => {
        console.error(e);
        res.status(500).send({ error: 'Error fetching user info' });
    });

    apiReq.end();
});

export default router;
