self.addEventListener('fetch', function(event) {
    if (event.request.url.includes('https://games.1games.io/lib/gmsoftsdk_v4.js')) {
      event.respondWith(fetch('https://cdn.jsdelivr.net/gh/genizy/braybray@74e044bc1b240fdd8b70ef6acaa0af81138f585e/my-perfect-hotel/gmsoftsdk_v4.js'));
      return;
    }
    event.respondWith(fetch(event.request));
  });
  