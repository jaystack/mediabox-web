import Router from 'next/router';

export default function redirect(ctx, path, status = 302) {

  const isClient = typeof document !== 'undefined';

  if (isClient) {
    Router.push(path);
  } else if (ctx.res) {
    ctx.res.writeHead(status, { Location: path });
    ctx.res.end();
  }
}
