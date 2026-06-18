import app from './server/index.js';

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
  console.log(`📁 Serving static files from: ${app.get('staticPath') || 'default path'}`);
});