const fastify = require('fastify')({
    logger: true,
});
const axios = require('axios').default;

const PORT = process.env.PORT || 5000;
const BASE_API_URL = 'https://api.spaceflightnewsapi.net/v3';
const ARTICLES_ROUTE = '/articles';
const REPORTS_ROUTE = '/reports';
const BLOGS_ROUTE = '/blogs';
const DASHBOARD_ROUTE = '/dashboard'

fastify.get(ARTICLES_ROUTE, (req, res) => {
    try {
        axios.get(`${BASE_API_URL}${ARTICLES_ROUTE}`).then(async (response) => {
            res.send(response.data);
        });
    } catch (error) {
        console.error(error);
    }
});

fastify.get(REPORTS_ROUTE, (req, res) => {
    try {
        axios.get(`${BASE_API_URL}${REPORTS_ROUTE}`).then(async (response) => {
            res.send(response.data);
        });
    } catch (error) {
        console.error(error);
    }
});

fastify.get(BLOGS_ROUTE, (req, res) => {
    try {
        axios.get(`${BASE_API_URL}${BLOGS_ROUTE}`).then(async (response) => {
            res.send(response.data);
        });
    } catch (error) {
        console.error(error);
    }
});

fastify.get(DASHBOARD_ROUTE, async (req, res) => {
    try {
        const articlesPromise = axios.get(`${BASE_API_URL}${ARTICLES_ROUTE}`);
        const blogsPromise = axios.get(`${BASE_API_URL}${BLOGS_ROUTE}`);
        const reportsPromise = axios.get(`${BASE_API_URL}${REPORTS_ROUTE}`);

        const [articles, blogs, reports] = await Promise.all([
            articlesPromise,
            blogsPromise,
            reportsPromise,
        ]);

        const response = {
            articles: articles.data,
            blogs: blogs.data,
            reports: reports.data,
        };
        res.send(response);
    } catch (error) {
        console.error(error);
    }
})

fastify.listen(PORT, function (err, port) {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
    console.log(`Server is now listening on ${port}`);
});
