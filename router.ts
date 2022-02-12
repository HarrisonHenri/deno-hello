import {Router} from 'https://deno.land/x/oak/mod.ts';

const router = new Router();

router.get('/', ({response}) => {
  response.body={msg: 'Hello world'}
});

export {router}