import express from 'express';

const main = async () => {
  const app = express();
  app.use(express.json());

  app.get('/', (_, res) => {
    res.send('🌎 Space is cool! 🚀');
  });
};

main();
