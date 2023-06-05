/*global Ultraviolet*/
self.__uv$config = {
    prefix: '/service/',
    bare: 'https://artclass.site/bare/',
    encodeUrl: Ultraviolet.codec.base64.encode,
    decodeUrl: Ultraviolet.codec.base64.decode,
    handler: 'https://unpkg.com/@titaniumnetwork-dev/ultraviolet@1.0.11/dist/uv.handler.js',
    client: 'https://unpkg.com/@titaniumnetwork-dev/ultraviolet@1.0.11/dist/uv.client.js',
    bundle: 'https://unpkg.com/@titaniumnetwork-dev/ultraviolet@1.0.11/dist/uv.bundle.js',
    config: './js/uv.js',
    sw: 'https://unpkg.com/@titaniumnetwork-dev/ultraviolet@1.0.11/dist/uv.sw.js',
};

navigator.serviceWorker.register('./loadsw.js', {
    scope: __uv$config.prefix
}).then(() => {
    console.log("Registered service worker!")
}).catch(e => {
    throw e;
})