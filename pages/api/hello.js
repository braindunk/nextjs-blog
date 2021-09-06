//example of an api endpoint
// req is an instance of http.IncomingMessage, plus some pre-built middlewares you can see here: https://nextjs.org/docs/api-routes/api-middlewares
// res is an instance of http.ServerResponse, plus some helper functions you can see here: https://nextjs.org/docs/api-routes/response-helpers
export default function handler(req, res) {
  res.status(200).json({ text: 'Hello' })
}