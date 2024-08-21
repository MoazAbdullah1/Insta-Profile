import express from 'express';
import https from 'https';

const router = express.Router();

router.get('/get/:username', (req, res) => {
    const options = {
        method: 'GET',
        hostname: 'instagram-scraper-api2.p.rapidapi.com',
        port: null,
        path: `/v1/stories?username_or_id_or_url=${req.params.username}&url_embed_safe=true`,
        headers: {
            'x-rapidapi-key': 'd82150835dmsh72953dd6c86e45dp1c0328jsnf8d50047154d',
            'x-rapidapi-host': 'instagram-scraper-api2.p.rapidapi.com'
        }
    };

    const apiReq = https.request(options, (apiRes) => {
        const chunks = [];

        apiRes.on('data', (chunk) => {
            chunks.push(chunk);
        });

        apiRes.on('end', () => {
            const body = Buffer.concat(chunks);
            res.send(body.toString());
        });
    });

    apiReq.on('error', (e) => {
        console.error(e);
        res.status(500).send('Error with API request');
    });

    apiReq.end();
});

export default router;
