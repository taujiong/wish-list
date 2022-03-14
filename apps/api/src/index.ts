import Koa from 'koa';
import router from './routes';

const app = new Koa();

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);
console.log('server started on http://localhost:3000');
