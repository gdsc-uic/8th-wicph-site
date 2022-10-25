export default defineEventHandler(({ req, res }) => {
  const host = req.headers.host
  const url = req.url
  const env = process.env.NODE_ENV;
  const forceDomain = process.env.SITE_URL;

  if (env === 'production' && host !== process.env.TARGET_HOST) {
    res.writeHead(301, { Location: forceDomain + url });
    return res.end();
  }
});