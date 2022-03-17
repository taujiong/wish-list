import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import { createOrSeedDatabase } from './models';
import router from './routes';

const app = new Koa();

app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

createOrSeedDatabase()
  .then(() => {
    app.listen(3000);
    console.log('server started on http://localhost:3000');
  })
  .catch((error) => {
    console.error('create or seed data to database failed!');
    throw error;
  });
