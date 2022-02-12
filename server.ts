import {serve} from 'https://deno.land/std@0.62.0/http/server.ts';

const s = serve({port:8000});

for await (const req of s) {
  const body = 'Hello world';

  const enc = new TextEncoder();
  const data = enc.encode(body);

  await Deno.writeFile('hello.txt', data);

  req.respond({body});
}