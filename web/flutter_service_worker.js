'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "684be3df3772eb79eecf18b9b9bf9619",
"version.json": "4d1863095f4661148e99a40b888011fa",
"index.html": "230393a60d9d4390d85375f0b21c93df",
"/": "230393a60d9d4390d85375f0b21c93df",
"main.dart.js": "8859d197a899d4c4cd67c9dbaff2962f",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "7e9919e5ab1f5f32d9e06fee5367ca9b",
"assets/AssetManifest.json": "de591d8944c25b8a557e344da85a7f96",
"assets/NOTICES": "b59577a65bf76bf0cbb43ee5d5a21f74",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "28038feff0071f284ede92b042fd1ee0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "84696a3ba129d3cebf5c03b385e73088",
"assets/fonts/MaterialIcons-Regular.otf": "cc8d6a7b43af66f5cb975e3d8eb5ec1e",
"assets/Assets/second3.png": "d5f92cc40f8482d45dc0e02004d1d2f3",
"assets/Assets/ground3.png": "8ea064d1bfe94f4ca5406251dfff4b2d",
"assets/Assets/DSC03026.JPG": "4a158fbde0cad9c0fc970b599607ce7b",
"assets/Assets/IMG_5971.JPG": "e1a8954b4ca202a884c4ca42da139980",
"assets/Assets/committee.jpg": "0a65443b66296aa086818c7d3c38740c",
"assets/Assets/first3.png": "ea4c2614d2c960225bf40c8077c57236",
"assets/Assets/IMG_7360.heic": "fc6f3477ee4c0216b759ba2b81bad3f7",
"assets/Assets/Schermafbeelding%25202022-10-07%2520om%252016.26.27.png": "b30506eed166bd24e07e0ba5015d62a6",
"assets/Assets/IMG_9632%2520kopie.jpg": "743b85087780a39ef30d44b657b723d6",
"assets/Assets/IMG_5915.JPG": "0c04374acc97ab91aa46eec13fb14fff",
"assets/Assets/First%2520Floor%2520Map.png": "5b9fb860b92242dc8bbe1b17852e5e32",
"assets/Assets/DSC_2132.JPG": "2aec59b8d8e585a64fd2648c19bfccde",
"assets/Assets/HomeScreenImage.JPG": "8186213872f34143ed2c91cd64a41c47",
"assets/Assets/LmunA%2520logo%2520vierkant%2520Zwart%2520kopie.png": "12acee2a9efbb0af9c5b78af194cee32",
"assets/Assets/Third%2520Floor%2520kopie.png": "194f91cbbbe4c998ac5522aa1b70d5dd",
"assets/Assets/Foto%2520voor%2520achter%2520Thema%2520.jpg": "8a40028353c4d5de9bfb00c6c0c4583d",
"assets/Assets/DSC02019.JPG": "9ae21f445c788795a01de520bca85d0b",
"assets/Assets/Booklet%2520Image%2520kopie.png": "989449da3b8e52b062d4f99f047146d1",
"assets/Assets/Location.png": "b257587b0dc6ff5118644d3ea9ee5304",
"assets/Assets/C45FB46E-3802-4CDF-B5F7-F09D6AD219EE%2520-%2520Lila.jpeg": "3238e6891e6b648372972ea8360623bc",
"assets/Assets/Second%2520floor%2520Map.png": "a1d7aedab15db8a868f56c3f069a783c",
"assets/Assets/TimesImage.jpeg": "864f8bd7619523a6e9cedc24ef720cc8",
"assets/Assets/HomeImage.png": "fe62dcc04ef70c30b802f6f8055a8602",
"assets/Assets/Ground%2520floor%2520Map.png": "057daca159d022a2dd7d4920e2735f86",
"assets/Assets/DSC02860.JPG": "920bae5936671d6c4e42642fb2528f68",
"assets/Assets/IMG_5943.JPG": "476c5fd6f7c1e1d0e7583e7d01422845",
"assets/Assets/IMG_4079%2520-%2520Siebe%2520Boerboom%2520kopie.HEIC": "5a24bd82a8f5c4511734fc8e88a4ba2e",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
".idea/workspace.xml": "65331327623d1ca30f35054b8d06c048",
".idea/modules.xml": "1eb3b065c55895e347308e50cd717dee",
".idea/web.iml": "52db5efd0fe9f576a1302b8c4b5eac6c"};
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
