const fastify = require('fastify')({
    logger: true,
});
const axios = require('axios').default;

const PORT = process.env.PORT || 5000;
const BASE_API_URL = 'https://api.spaceflightnewsapi.net/v3';
const ARTICLES_ROUTE = '/articles';
const REPORTS_ROUTE = '/reports';
const BLOGS_ROUTE = '/blogs';

fastify.get('/articles', (req, res) => {
    try {
        axios.get(`${BASE_API_URL}${ARTICLES_ROUTE}`).then(async (response) => {
            res.send(response.data);
        });
    } catch (error) {
        console.error(error);
    }
});

fastify.get('/reports', (req, res) => {
    try {
        axios.get(`${BASE_API_URL}${REPORTS_ROUTE}`).then(async (response) => {
            res.send(response.data);
        });
    } catch (error) {
        console.error(error);
    }
});

fastify.get('/blogs', (req, res) => {
    try {
        axios.get(`${BASE_API_URL}${BLOGS_ROUTE}`).then(async (response) => {
            res.send(response.data);
        });
    } catch (error) {
        console.error(error);
    }
});

fastify.listen(PORT, function (err, port) {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
    console.log(`Server is now listening on ${port}`);
});
