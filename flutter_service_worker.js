'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "17270d76bdc3fafc316db39e500fba60",
".git/config": "4543e2f76ed745e20bf81680f0304bc7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "c4915bf4499afbcb43809d2ad741b525",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6c025cce2f4498ee554ba54a9a974961",
".git/logs/refs/heads/main": "7baacea9b892c08326bbcc44b129e7da",
".git/logs/refs/remotes/origin/main": "a0923f30a855cf53592a96bf67816b44",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/2f/7da1327da1e19fac24f49b7ff35a016bdaa5b8": "8d1da4c571ff81b00e2899a3a7bd8f65",
".git/objects/33/5fb8a1fb47df32205dc15ad6f13f975d1b9262": "528774a6c88196beed206a0ee4b73278",
".git/objects/33/ac6545583a4531f52349b0961974c9f5ae1184": "81197083c76e581d9820f614497c9627",
".git/objects/3d/097b5768beadc7a63516ba773305a2cda59aa2": "70fb6ab64ced58f8382db8f2a69b5d3b",
".git/objects/48/0c2c2227a036b08f63120f91bac1d17e375615": "fd4563d5a57f6533d6f571a16f95c95e",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/50/1da8938679974aa8d4c8b1d77f8b4c8c286c60": "7cbf5d2b41b09cb43586ebdb612a9aa6",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/55/b5aa4a0628e12e079f50b7ce95d8b015bb7fc6": "fff0454ef44e91c1425357cc54a2be97",
".git/objects/57/9d62d2c1282338bed6e424c18541a588936ede": "8d11a580b92f3eb85e5a0f6b9d56c925",
".git/objects/58/416b6128e0cd6a814489e7475db7b0cc9f8c42": "3b5c1f6ae4e463452b9cc351c870ac5b",
".git/objects/5d/bda21096543334cb74fbf04f692a707888c10c": "a7b6daee34c3b8a8d2390bcda529e03e",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6f/16ae2cc8b8ebd97424efde161dfcd19c3c1c66": "dba0e51f0e96debc7cdf8627e3a7b15e",
".git/objects/70/18d2457fd8df9c7627a2e52fda8e1ab75afadd": "4dfe5f12d6c1ba1ce070e1c823bcb4c5",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/78/801afdb3e854d0097db8261591c64608d2deb4": "ed2934b525ff1a97b3873f138ac97de5",
".git/objects/7a/f074b273d2e19ccea765f90af2ad8fa7178fc7": "bcfe9a7f79f851fe0d1ba3a9a6c18598",
".git/objects/7c/cfe657e2636eddc4b2854d3f8c3c0828507a70": "76044676e74dfb50e114a45d37f15f21",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/8e/4eaf64c97081efab3de3785a6d8deee16833ed": "087d64f8306af84bb9f49f0393e188d6",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/9f/a5968f6e8f166e47dedbaa1793434f20e33eb8": "e19dc99af2c6396e4d295b7084ee6bfc",
".git/objects/a0/23396bf0268f396920cbdd01e513afe0d76b5e": "278419decd1a0d918a9f3a028d74a0f0",
".git/objects/a7/51896305824979b0b9ac74bd0b6f502167c6b8": "99dea54272cdedc97b37c1ae37d0c762",
".git/objects/ab/cda98237c0eb616d739bf4f55b5f32342cd555": "c27179840a5e32f54962e8431fe16d6f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/ba/c7930ac7bdd2fcf70f838f5fd0b54752f2d7b2": "170abf1754c7da0d74e577e353adfbfe",
".git/objects/bc/55b3dc8293c0d11d870257c2279775a9a4896d": "2dace9d7c02ddd6582536b1cb803cfe0",
".git/objects/bd/3f59b9735150495dd91faddcd012c73d090666": "e786de03acd10e858b13d415be719deb",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/07954b4c31cb3eb6b645c86bf8535514cce304": "a93ecf46563ba755aff226dcc8a3b7de",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/a23ec22b4680f7043ed7cccb973baa85e20068": "e6838e429bce68b89af619f73072554a",
".git/objects/da/30b627e041466f7c0c368f6c1c9eef76222be5": "9a25e0545ff328c488ae51d3a13e24b7",
".git/objects/da/f3752edb53e777cf6edaa53e4d453b0e50670c": "ec95934f6ca0210fcf7ec3631c5691e4",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e7/55f74d2f15f18e6069eacd14e8d993dcd6b91f": "2ca04eb1ce58561c748331d026213c51",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/f985e9e1ebafe763292cc97c82cc6f8b19d191": "9a35862bcc74fa34cab9d2847c2b4ab6",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/8413d72e1356654f2c831ef1f94f3a8c388c24": "828e232efb3856627fbf2f2f8de499c8",
".git/objects/f9/0bf991a6b7318124e52356ee014a6d33b53d7e": "e758aefc1731f57a1d75a647929729c3",
".git/objects/ff/97386c87ee4c93faeafbddeca95583bb76c8a2": "99aa416f9912efcd263cba267c0eee12",
".git/refs/heads/main": "5428d2870e1d7ecca6303c91dee0b9a6",
".git/refs/remotes/origin/main": "5428d2870e1d7ecca6303c91dee0b9a6",
"assets/AssetManifest.bin": "adb5bee47ddf57beacddadf46c03d2a0",
"assets/AssetManifest.bin.json": "d84a93d009c5d5dcfe02cd3bec4ca1fe",
"assets/AssetManifest.json": "edad12a67189878d2af1d4985f9917e4",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/images/trigam_logo.png": "69e30f13a0c5d648035701a02b163a9d",
"assets/FontManifest.json": "ce9bb84706d7bc6a6549da012130b3a0",
"assets/fonts/MaterialIcons-Regular.otf": "8d3130462363efa2dec9d42488f00844",
"assets/NOTICES": "5718420f73f6811b2a241c603e80b9e1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b17b305d3195f2faf295b77afae0fe06",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "42182a96405058d72db3d599f4e21478",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6ee4a54ca5ff19631b1488a9b8b0571f",
"/": "6ee4a54ca5ff19631b1488a9b8b0571f",
"main.dart.js": "940f1e11c0e401f6b95cc4b2f8d038f8",
"manifest.json": "d7de1e1a3260af954bb3dc3a39ebac9f",
"README.md": "fbc5f59d3ae368b12add76d0382ce2e0",
"version.json": "4cf737e74b8e827f057888cc5837e857"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
