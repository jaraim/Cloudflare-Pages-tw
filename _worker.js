async fetch(request, env) {
    let url = new URL(request.url);
    if (url.pathname.startsWith('/')) {
      url.hostname = 'tw.wupg.eu.org'
      let new_request = new Request(url, request);
      return fetch(new_request);
    }
