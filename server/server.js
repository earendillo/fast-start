const fastify = require('fastify')({
    logger: true,
});
const path = require('path');
const axios = require('axios').default;

const BASE_API_URL = 'https://api.spaceflightnewsapi.net/v3';
const ARTICLES_ROUTE = '/articles';
const REPORTS_ROUTE = '/reports';
const BLOGS_ROUTE = '/blogs';
const DASHBOARD_ROUTE = '/dashboard';
const ABOUTPAGE_ROUTE = '/about-page';

fastify.register(require('fastify-static'), {
    root: path.join(__dirname, '..', './build')
});

fastify.get('/', async (request, reply) => {
    try {
        reply.sendFile('index.html');
    }
    catch (e) { console.log(e) }
});

fastify.get(ARTICLES_ROUTE, (req, reply) => {
    try {
        axios.get(`${BASE_API_URL}${ARTICLES_ROUTE}`).then(async (response) => {
            reply.send(response.data);
        });
    } catch (error) {
        console.error(error);
    }
});

fastify.get(REPORTS_ROUTE, (req, reply) => {
    try {
        axios.get(`${BASE_API_URL}${REPORTS_ROUTE}`).then(async (response) => {
            reply.send(response.data);
        });
    } catch (error) {
        console.error(error);
    }
});

fastify.get(BLOGS_ROUTE, (req, reply) => {
    try {
        axios.get(`${BASE_API_URL}${BLOGS_ROUTE}`).then(async (response) => {
            reply.send(response.data);
        });
    } catch (error) {
        console.error(error);
    }
});

fastify.get(DASHBOARD_ROUTE, async (req, reply) => {
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
        reply.send(response);
    } catch (error) {
        console.error(error);
    }
})

fastify.get(ABOUTPAGE_ROUTE, (req, reply) => {
    try {
        reply.send();
    } catch (error) {
        console.error(error);
    }
});

fastify.listen(process.env.PORT || 5000, '0.0.0.0', function (err, port) {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
    console.log(`Server is now listening on ${port}`);
});
