
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  assets: {
    'index.csr.html': {size: 966, hash: '8bff4e7e55bc4afed4c673c315a7af81406ec39d0a6605e06367afa20ae67cf6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1484, hash: '8576d7fd9e28854b3c820f60b3121b1bfbcf860e48b4abe30c88f29ed1654fa7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 38973, hash: '6e48dda10bcc0146ccab638b9c1e77bbe06b792ed3f217213325f41282d09e95', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
