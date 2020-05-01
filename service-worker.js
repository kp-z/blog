/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/2018/09/16/认知机器人：感知物体位置和状态/index.html","f481ac950dd2422921ae85b13e018512"],["/2019/08/22/Hello_World/index.html","6db906d854c8f9b58d306c12813f4d6a"],["/2019/08/24/Hexo建站相关文章收藏汇总/index.html","2c6f1b98dee1a22edaa8c015c4a6a82b"],["/2019/08/24/在Mac上使用Hexo创建站点经验/index.html","07c009a31f85a113a5a742c8bbd28561"],["/2019/08/25/\"意大利漫游：小小国梵蒂冈\"/index.html","1b1929129c46cef20206855deb8edd02"],["/2019/08/25/电影《降临》联想/index.html","04123c34c762b5c0f44a7ea17db1a29b"],["/2019/10/24/快速掌握NumPy/index.html","44ca75e1e794a4192d35abc9a6a1cf1e"],["/2020/01/29/图形学笔记：变换Transformations/index.html","965a517be32761f21bd08b652e2adf9e"],["/2020/02/04/Mac软件推荐1/index.html","31e21773ef50d287bc80a2dccc1ba1c9"],["/2020/02/12/番茄工作法自制表格分享/index.html","3e96c516bf4bd57ddd64c6f88b9d2bea"],["/2020/02/17/为博客添加新特性记录/index.html","2c40af107aa5401ff192547d80f101f8"],["/2020/02/22/小程序UI组件推荐/index.html","48f392a643b40a8558e32052e6769448"],["/2020/02/22/小程序功能组件推荐/index.html","c45c108c5427f2ecd8e701b0c71ca5bc"],["/2020/03/02/2020搬家记录/index.html","ffc29150092d83ed70c345c02018b2f8"],["/2020/03/02/微信小程序-找地儿住-官方文档/index.html","75d92278111b896bee79c1e6af0693f8"],["/2020/04/17/手臂机器人:机器人检测物体与运动规划/index.html","65ce7512933e5d2e7c887bfafb629622"],["/2020/04/23/数据可视化：把玩一下seaborn-一/index.html","eeb1bda8e50665b30f72011b5348e1aa"],["/2020/04/29/岛屿-个人网站博客搜集页/index.html","1b38c3a19c511a306b746bf1a469fc44"],["/404.html","32c1d06444d2e10061041120ada2e3e5"],["/about/index.html","c67947380a8879b4a67ea38d38a3b65e"],["/about/link/index.html","ff808dff8f4e85998864c86da748f656"],["/archives/2018/09/index.html","23a71bba2dfaa3962e13c2333ecc14ec"],["/archives/2018/index.html","799acb7de9adec546ff02c1aea547207"],["/archives/2019/08/index.html","87b384c0e8660f727f3135c9d47692d7"],["/archives/2019/10/index.html","e0e501a80d2068b8813ea8ca7087986d"],["/archives/2019/index.html","59e0fdb4276f2548f034a176eb4a1884"],["/archives/2020/01/index.html","9648811126c851afc3d6fe754d671b23"],["/archives/2020/02/index.html","2be5b77c611d7d2baed37aa92e6b1f62"],["/archives/2020/03/index.html","390cc4d5e46c9b6f96f20d56a32092c4"],["/archives/2020/04/index.html","b6b7f5c6d3256b2c616ae6a1842e0211"],["/archives/2020/index.html","b81c1aee976311a4c31427d159d75664"],["/archives/2020/page/2/index.html","becf549723f0b8afac0ef647b3d35e50"],["/archives/index.html","f8b64372fa12fdcc7613414dca220f01"],["/archives/page/2/index.html","ba9406578b5a1943319a4373fa07d4c0"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/index.html","cf035cdc333f7eea6f8a3a1aa689daf3"],["/categories/技术/index.html","67b7b78edf1dc30cf6da991a977c5ece"],["/categories/技术/理论/CG/index.html","6280582ef3855da7154d1803ff7543c3"],["/categories/技术/理论/index.html","ff5f72b9d65642a1add52299c489e262"],["/categories/技术/笔记/Python/Numpy/index.html","ed691c1b08fa959eb9f5bde99e3a870a"],["/categories/技术/笔记/Python/index.html","3ae1fe660c106de5e270e1cc76fa3592"],["/categories/技术/笔记/Python/seaborn/index.html","e3e68615e6558b6c0c5cfd8f30818fa7"],["/categories/技术/笔记/Web/index.html","860c5cc07a31142cb21b6d8539b49ccb"],["/categories/技术/笔记/index.html","ca333cb0e182f0c42cc9d7d7dfdf40bd"],["/categories/技术/笔记/小程序/index.html","2e1d2e43302b0f9ac5b02e0092192c67"],["/categories/生活/index.html","80c86a03021471abd1fabd4e1fac71ac"],["/categories/生活/旅行/index.html","68b14cd3739c84107a86591a9b3f9a2e"],["/categories/生活/测评/index.html","fd68905a9c5f8842432829c8664bfe73"],["/categories/生活/测评/影评/index.html","945b2f33bb694876e1b304a178c8c052"],["/categories/生活/测评/软件/index.html","5b8322c844507479bb6c3875e2175efe"],["/categories/生活/记事/index.html","5142223319fe6f106f61742b89e7ae26"],["/categories/项目/index.html","5baed142ded20516df8f9c4fe1d617a2"],["/categories/项目/前端/index.html","18a01dd5c944b3cd56f1c171e9cbdd60"],["/categories/项目/机器人/index.html","1052c2b38825b30005a5d6dc275065c7"],["/charts/area-line/index.html","cc60c2769101cf5b2a4073c85ee552dd"],["/charts/area-line/js/highcharts.js","4e034b8fc51eff1f2668bed5e0189c95"],["/charts/area-line/js/index.js","631f9389f11c101b71c0930ccbc43ea4"],["/charts/area-line/js/jquery.js","218fe419241debafdfaefbd20dceeba9"],["/charts/circle.html","5a4b48625c29194f0e674c75e291cac7"],["/charts/css/default.css","f7c1d59c436a9b87e0c4b7aaef96dc0d"],["/charts/gantt/css/style.css","1f71c8bd18a0f64e11dd1123d8833ec2"],["/charts/gantt/index.html","63ab3cfac2c31453170c3156a3bf7526"],["/charts/js/init.js","c1fcb7da69831fc21bc9d35c38d0d941"],["/charts/js/jquery.js","e59f0efb75947456d24645744b90e7dd"],["/charts/js/raphael.js","36397a952e188e363303c9dd5ef122ce"],["/charts/radar/js/Chart.js","3d9055e69acd17fe0e8e3050883a2fb1"],["/charts/radar/js/Chart.min.js","7d8fd0c1dc6732675a1bd453a3f643a1"],["/charts/radar/radar.html","54095795851a5765257444b2b5fdc689"],["/copyright/index.html","3b4f5165c1a2735e7cd637f762c642c8"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","2b35ecb54c70200294ed611f2083260f"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fm/index.html","1691979b864d2bfa7bb270117d2ae629"],["/fmplayer/css/style.css","60cd359981c8b3409c0dc99053883d4e"],["/fmplayer/img/1.jpg","f59f7d6dfa68d9db969680a66f242f1a"],["/fmplayer/img/2.jpg","e9e9cd95ea1ba72d7de58be3166504ef"],["/fmplayer/img/3.jpg","ca0213b1e648fb98bb2182e9f43e7eb3"],["/fmplayer/index.html","9e16932f41e28b8108c6cddf21024121"],["/fmplayer/js/script.js","274286c6b1dfc352f248a364d306cb26"],["/fmplayer/js/vue.min.js","17e942ea0854bd9dce2070bae6826937"],["/gitalk.html","c1a214575327a09f808fc95adb16628f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/alipay.jpg","b82de31d15eb69088017e89f450c9b4c"],["/img/avatar.jpg","8305bacee539c969b816f5f6acfc39a5"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/curioso/1.jpg","ba1052709dc4f3ba2e1032f7b3ee8ad3"],["/img/curioso/11.jpg","30300d427de62f55323b1d12d0eed8cd"],["/img/curioso/12.jpg","4b83707163e9be5d0ac7a3bc2390519c"],["/img/curioso/2.jpg","e3124b67ce6e28f9bc529152fab228d9"],["/img/curioso/3.jpg","d0a5341063be6d6d136c02c9ef473e4b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/hexoicon.png","6ab8b9e0c76abc942ca6fbee6bad7e54"],["/img/icp.png","60a3057441ba9776a5b8760717d2c646"],["/img/index.jpg","34c46ffca49095dccb77aa4485cc897e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/paypal.jpg","45e044daf5bdbe4cfce2b8c74cf8ac86"],["/img/post.jpg","8fb7d10986b67a1dcba885f50a5de3a9"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/img/pwa/images/icons/icon-128x128.png","70809e0f91f5605002b5e919614cd385"],["/img/pwa/images/icons/icon-144x144.png","f1dc0235e0dbbcea9b2908852d0ad462"],["/img/pwa/images/icons/icon-152x152.png","9c8b98770463b4bb1b2f67d294de979f"],["/img/pwa/images/icons/icon-192x192.png","2b7696a1b556047c16e966d906d98ce1"],["/img/pwa/images/icons/icon-384x384.png","cd0c0cb1848110c7243d4496a41fc342"],["/img/pwa/images/icons/icon-512x512.png","7ae3181e0e5c1bb210d4248a1547d036"],["/img/pwa/images/icons/icon-72x72.png","b33deb05d8a6a44728dabf719aa81b96"],["/img/pwa/images/icons/icon-96x96.png","9bf9148dd804f013913fe6192a36bf4c"],["/img/speak.png","2c8d006a565d1385a913b8e6a2c615e4"],["/img/tencentcloud.png","0afb8ab976401227e90b1d043efdec0a"],["/img/theme.png","057fa877a332b40f1ea9ae6f1bfbc172"],["/img/top-img-1.jpg","082a00cdcdaceefaabcbb2ec43c39e8e"],["/img/top-img-2.jpg","22a0827c5716f28534398540a7eaf2e5"],["/img/top-img-3.jpg","207ea3614dfbe4db3e97f7545e71f9a8"],["/img/wechat.jpg","6728dee478a4cc7bbe9e48706e3c4a30"],["/img/whale.png","a0fc3e5591e6bed58be6b64156369c53"],["/index.html","09b2033f8d8c092df9e45f2a4c6a2fa0"],["/js/main.js","0cd0cf0fdb710ba9b7d96caa04c2dfaf"],["/js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["/js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/life/douban/index.html","3751a6cb56ad937189d20737491ce782"],["/life/footprint/index.html","1ccb575aeec1097aff8007c2cdd5681e"],["/life/gallery/cloud/index.html","2fcf3ea6abbebdabea0f110e02932f45"],["/life/gallery/cover/index.html","ddbd271a87a2690cbecf9b5469b94d10"],["/life/gallery/food/index.html","b5cde74c4c729ae2867b353e8512d38b"],["/life/gallery/index.html","47f622bdecb311d824a339696adf914f"],["/life/gallery/life/index.html","01734088bd42c7149ef51303c986a0b0"],["/life/gallery/photos/index.html","89c271ed13c329e99bc512dd5977a8dc"],["/life/gallery/qingdao/index.html","04684248314c941d179b916ccb478bc8"],["/life/gallery/sketching/index.html","8b0d7f3891c01d78514d3d29aab2c288"],["/life/gallery/transcribe/index.html","801ed0dea7234cdaeae2ee042d531863"],["/life/index.html","7cb563d77d99e0195730e677438d5b2f"],["/page/2/index.html","babe2d68d6d5aeba999f50caaa16d41e"],["/page/3/index.html","19160a463d5fe5fb22eb88dce332773f"],["/page/4/index.html","2f2fafce92e9916a7d57b818237c9aec"],["/tags/CG/index.html","9ac26e48433f19393aee873ea83b2d73"],["/tags/Hexo/index.html","de92af7d4993be740501ce4268eeca50"],["/tags/Mac/index.html","0f9b6b9e5b48c7104a5ecfe48c553cb4"],["/tags/Python/index.html","bad05d321f876692320b9376c8cc3bf2"],["/tags/Ros/index.html","f1e9b73b7f27eeab7511a83fcef70cb5"],["/tags/UI/index.html","5d8548da68b6d40a6d7c252a93104032"],["/tags/Web/index.html","9335304462b5eed58d20ca9d7fc2d7cd"],["/tags/index.html","b21a606c24afb439e9cdc6bde03a98c3"],["/tags/numpy/index.html","c41bf28846ae360567f4d2521398097a"],["/tags/seaborn/index.html","b3fd4e5168bcf02258c283d2c22f2507"],["/tags/入门/index.html","caadd5acb81e71a59ede24618d0bded5"],["/tags/小程序/index.html","0ddf4c9f2a8251527f58a3e100fb3f35"],["/tags/影评/index.html","8f1f10c03bfc325c71fcb0385b928636"],["/tags/意大利/index.html","3ff15dbee96012ea82ddbbc2af090cdc"],["/tags/推荐/index.html","ba426e50126bc588d23423a100d117f1"],["/tags/效率/index.html","ea4177544f0bfdeb1ea7a91ece2b34c4"],["/tags/数据可视化/index.html","09c9608be08f0cbd01016009f3f8a54d"],["/tags/旅行/index.html","f9a8f7176663bf5b796befef6990cfc5"],["/tags/机器人/index.html","9c7ceba678dab97d2131d95e1a62b2fe"],["/tags/梵蒂冈/index.html","56d21c779a7ed42b28a6eb0b1d523b7c"],["/tags/理论/index.html","99ee51c66cf1e9f64abe0740167dc5f6"],["/tags/生活/index.html","754bb76dfcf67021db5e30ae44720f41"],["/tags/电影/index.html","91103376cb5054579bc935d6dc5b4531"],["/tags/番茄工作法/index.html","70429787c8d4d9ee15bb37fc3f1c0bc0"],["/tags/科幻/index.html","bcba010bcd5fa5ec58edd18c0e82c03a"],["/tags/笔记/index.html","a7ba0312f241b32fac617997c25f6c8f"],["/tags/网站/index.html","97cb1d88f9973bd6e939a1d92df37c29"],["/tags/计算机视觉/index.html","41e71ad56310f56bc40a560922650e33"],["/tags/记事/index.html","dd7cb277b0cf90491764fd0f27e13e09"],["/tags/软件/index.html","d835298916d5a1225d9f049a8d9f3aa6"],["/tags/运动规划/index.html","4164c87217950a221e25c7d7629c1e26"],["/tags/项目/index.html","fea7cc99d50a22c235f9fa1d7512f441"],["/webpushr-sw.js","f6f7ff6d6b7b7b652cb92a25eb2cef5b"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"at.alicdn.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.jsdelivr.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"img-1253324855.cos.ap-chengdu.myqcloud.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"code.jquery.com"});




