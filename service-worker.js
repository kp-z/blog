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

var precacheConfig = [["/2018/09/16/认知机器人：感知物体位置和状态/index.html","facf938cc0717d7cb2acb44cb3dbbbd4"],["/2019/08/22/Hello_World/index.html","434e6ef919e839d99851908ea3f4f4e0"],["/2019/08/24/Hexo建站相关文章收藏汇总/index.html","5c959e4212f18f39847c8341db41999e"],["/2019/08/24/在Mac上使用Hexo创建站点经验/index.html","8099b097fa68d0d5869bb43a7ebbdc52"],["/2019/08/25/\"意大利漫游：小小国梵蒂冈\"/index.html","20ccc8922b2554ddcdb20c236a349025"],["/2019/08/25/电影《降临》联想/index.html","3ed8d37fa0904fdda11a8c4e0e1dd0d7"],["/2019/10/24/快速掌握NumPy/index.html","2d625eaec7ff3e7a069e50b4b1512dd9"],["/2020/01/29/图形学笔记：变换Transformations/index.html","5c5ea4f36f09e7667ad44951024fb609"],["/2020/02/04/Mac软件推荐1/index.html","59a176d4a05332f3fb3ca37f72081879"],["/2020/02/12/番茄工作法自制表格分享/index.html","daeb329d8e79e6bf6fe7710807eb732c"],["/2020/02/17/为博客添加新特性记录/index.html","bd353c0a8bffee388067df8ac116581c"],["/2020/02/22/小程序UI组件推荐/index.html","7da1455fe05592838c1e2b5e2077450a"],["/2020/02/22/小程序功能组件推荐/index.html","8cd3a7c769ac49043f5b57b9f5c91b6f"],["/2020/03/02/2020搬家记录/index.html","d0d690f8cde3f4a0c6f4b317c9a0ac02"],["/2020/03/02/微信小程序-找地儿住-官方文档/index.html","b93e883da35ad7d916b2f02e79107de5"],["/2020/04/17/手臂机器人:机器人检测物体与运动规划/index.html","1dfa8758fcfcd8108ade75add8dc9dd3"],["/2020/04/23/数据可视化：把玩一下seaborn-一/index.html","f22b9eb9914c36474e17f269c681a977"],["/2020/04/29/岛屿-个人网站博客搜集页/index.html","0b4e63c757e2bfc8209a7e1333d56cd2"],["/404.html","6249bbd848096172ba4b7860583a1f08"],["/about/index.html","0f2de97c3ed47c10392995e7583767e2"],["/about/link/index.html","751f5dc17adc8817fd56d7d3979cb70a"],["/archives/2018/09/index.html","c5c66f05d72b6c6b8a83290397d447a0"],["/archives/2018/index.html","63ada02661f8b4993fcce184b1795ad4"],["/archives/2019/08/index.html","d17f4d44c1b61541bc18fd8f08269607"],["/archives/2019/10/index.html","e5a6ea1133f1d724165c31c4bb360658"],["/archives/2019/index.html","7398c6aa82a424fb3ce7fff2adb01736"],["/archives/2020/01/index.html","161e4e8d89f1a0a227631b84d8615c88"],["/archives/2020/02/index.html","bc9e2d4b4095f657f78a7299f57d4735"],["/archives/2020/03/index.html","7074fd2da09be4062178f11721004d25"],["/archives/2020/04/index.html","05f74535153e73fe25d3651332132373"],["/archives/2020/index.html","7d4b221d243e6f8ee694a83c55a84c57"],["/archives/2020/page/2/index.html","eca40a1fb69e53d66d9dc836e65ae4d7"],["/archives/index.html","bfe6f37efa0ffcbb9e6b0714d17b3442"],["/archives/page/2/index.html","4bb2dd63956fecae9aa0be4407f52064"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/index.html","8a8409dbf4bbcf105d7b3713b4bc909d"],["/categories/技术/index.html","c8fd1e4572af6f59805295c030dc7bb9"],["/categories/技术/理论/CG/index.html","4730310fffc2278ec003d067f2ee8737"],["/categories/技术/理论/index.html","5d6c0642a974db86b665146c16afd3c8"],["/categories/技术/笔记/Python/Numpy/index.html","fe31e9d22b3fa2f7b0e211f1466a93d5"],["/categories/技术/笔记/Python/index.html","b639efb4aaa41592de09070ab6287ce3"],["/categories/技术/笔记/Python/seaborn/index.html","0e0773d80637cb9a759c94be1ac422ba"],["/categories/技术/笔记/Web/index.html","29f76d46dc035d763f67e76fbcb2b7dd"],["/categories/技术/笔记/index.html","1202ae5c28462aae9457fb5cde930bdc"],["/categories/技术/笔记/小程序/index.html","34023e376f3b9b917041ad971ec6dd93"],["/categories/生活/index.html","d310b2549f39e4faadd090c411a15498"],["/categories/生活/旅行/index.html","26480c894e31f94467e8812f131127b4"],["/categories/生活/测评/index.html","26b50880395ce016f4086b22a7fa88fa"],["/categories/生活/测评/影评/index.html","9222538fccd9947f37a9cc96b35d29ba"],["/categories/生活/测评/软件/index.html","49793504e9538fe1845adb7eb9c8358e"],["/categories/生活/记事/index.html","c96c778f349501143cf18fade141eb8e"],["/categories/项目/index.html","4b781978c9455c79bccdc81d7b433c78"],["/categories/项目/前端/index.html","cd4f1103145c43e7c893d1f266552a22"],["/categories/项目/机器人/index.html","5425a18bd7833d35c92c5e925a3c21b6"],["/charts/circle.html","a829459b800f592fbf7fc410ac4ce1be"],["/charts/css/default.css","b7c273a6e21eea9c9549f45ced369a4f"],["/charts/gantt/css/style.css","1f71c8bd18a0f64e11dd1123d8833ec2"],["/charts/gantt/index.html","5c7edeadf5c6c7ebc163c9d167ad06ea"],["/charts/js/init.js","faaafe8a2689915013022212fd516b1b"],["/charts/js/jquery.js","e59f0efb75947456d24645744b90e7dd"],["/charts/js/raphael.js","36397a952e188e363303c9dd5ef122ce"],["/charts/radar/js/Chart.js","3d9055e69acd17fe0e8e3050883a2fb1"],["/charts/radar/js/Chart.min.js","7d8fd0c1dc6732675a1bd453a3f643a1"],["/charts/radar/radar.html","467a0a1b42feb2f433b419c2a3a81d8c"],["/charts/scope/css/style.css","29afd5f4a0c85df3b791a6fc95f3dca4"],["/charts/scope/index.html","b0ee86adfc6ab59427422e97c6657929"],["/charts/scope/js/amcharts.js","42d17d98c5508087fc6b218dea2ee4bf"],["/charts/scope/js/images/dragIconRoundBig.svg","6b78699c2bca5d7bc13d333b1922fe40"],["/charts/scope/js/images/lens.svg","6398c3db8114871487c190e12b4e46bb"],["/charts/scope/js/index.js","f96b5eaf3626bce6f0ce0f88a9e6b516"],["/charts/scope/js/serial.js","ac3e3a4abe990fae9190d160fa5bea28"],["/copyright/index.html","bc6e11ef06d678a21910c49ad6d40a3d"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","dc81f5bffe9cd7878fafa0668143e0a6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fm/index.html","1d728a420550fa519a1e928ba53329a6"],["/fmplayer/css/style.css","9cadabb1c7ebc6596dac1c1ba5ee0195"],["/fmplayer/img/1.jpg","f59f7d6dfa68d9db969680a66f242f1a"],["/fmplayer/img/2.jpg","e9e9cd95ea1ba72d7de58be3166504ef"],["/fmplayer/img/3.jpg","ca0213b1e648fb98bb2182e9f43e7eb3"],["/fmplayer/index.html","9e16932f41e28b8108c6cddf21024121"],["/fmplayer/js/script.js","274286c6b1dfc352f248a364d306cb26"],["/fmplayer/js/vue.min.js","17e942ea0854bd9dce2070bae6826937"],["/gitalk.html","e8e6f8cba707143303bfecd46a680de7"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/alipay.jpg","b82de31d15eb69088017e89f450c9b4c"],["/img/avatar.jpg","8305bacee539c969b816f5f6acfc39a5"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/curioso/1.jpg","ba1052709dc4f3ba2e1032f7b3ee8ad3"],["/img/curioso/11.jpg","30300d427de62f55323b1d12d0eed8cd"],["/img/curioso/12.jpg","4b83707163e9be5d0ac7a3bc2390519c"],["/img/curioso/2.jpg","e3124b67ce6e28f9bc529152fab228d9"],["/img/curioso/3.jpg","d0a5341063be6d6d136c02c9ef473e4b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/hexoicon.png","6ab8b9e0c76abc942ca6fbee6bad7e54"],["/img/icp.png","60a3057441ba9776a5b8760717d2c646"],["/img/index.jpg","34c46ffca49095dccb77aa4485cc897e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/paypal.jpg","45e044daf5bdbe4cfce2b8c74cf8ac86"],["/img/post.jpg","8fb7d10986b67a1dcba885f50a5de3a9"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/img/pwa/images/icons/icon-128x128.png","e3650b2a5a28f6b7038691546aedc1d4"],["/img/pwa/images/icons/icon-144x144.png","0e0a53ec5b55267b8dad7b0fa63e9e55"],["/img/pwa/images/icons/icon-152x152.png","aaf20516611ba34ce56c44bbab0856fd"],["/img/pwa/images/icons/icon-192x192.png","4db68be53c2c41ac46b34379269d5c31"],["/img/pwa/images/icons/icon-384x384.png","cc6e8bddf9a55687f36072d4115344df"],["/img/pwa/images/icons/icon-512x512.png","cc6e8bddf9a55687f36072d4115344df"],["/img/pwa/images/icons/icon-72x72.png","da3d7807ac7f4dfb53208fce4eb95a84"],["/img/pwa/images/icons/icon-96x96.png","16bcfcdf312a5c7ab9a9c2f2d1aa5731"],["/img/speak.png","2c8d006a565d1385a913b8e6a2c615e4"],["/img/tencentcloud.png","0afb8ab976401227e90b1d043efdec0a"],["/img/theme.png","057fa877a332b40f1ea9ae6f1bfbc172"],["/img/top-img-1.jpg","082a00cdcdaceefaabcbb2ec43c39e8e"],["/img/top-img-2.jpg","22a0827c5716f28534398540a7eaf2e5"],["/img/top-img-3.jpg","207ea3614dfbe4db3e97f7545e71f9a8"],["/img/wechat.jpg","6728dee478a4cc7bbe9e48706e3c4a30"],["/img/whale.png","a0fc3e5591e6bed58be6b64156369c53"],["/index.html","8b881b93b32a8b41b410d2aee138f8de"],["/js/main.js","0cd0cf0fdb710ba9b7d96caa04c2dfaf"],["/js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["/js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/life/douban/index.html","f5c8ee25d1865838a94c54aa28ccc7e8"],["/life/footprint/index.html","7f160721fcc66be2bd50e818957863a2"],["/life/gallery/cloud/index.html","68b786b880881c7d5cced45d617e4920"],["/life/gallery/cover/index.html","7e069ad632a1cf3aaaf109b89489c52e"],["/life/gallery/food/index.html","3f595f520f7c1bb8997a4c2dea9706a9"],["/life/gallery/index.html","0e0badef8a094a228e09175d02e8c862"],["/life/gallery/life/index.html","8944243a748da19ff1dca1a70efa9d99"],["/life/gallery/photos/index.html","01ccc94cb91ed3987c24f13c711bb713"],["/life/gallery/qingdao/index.html","8be244b09100fa863aaec15f17691af3"],["/life/gallery/sketching/index.html","dfc381d3dd42c5eea603a83bc0f560ce"],["/life/gallery/transcribe/index.html","28b22fc1e1a0d4ca5e8f1cfcf9db6ba4"],["/life/index.html","582068072f514193fc311ed06a48b0da"],["/page/2/index.html","4e326a278280cacf973803d87d00982d"],["/page/3/index.html","1a55f3c9758e54c6c92afe17c83d60ab"],["/page/4/index.html","44487237ae18809ed2692c6f1c1731d9"],["/tags/CG/index.html","c34d43829d87972793677a0c837397d6"],["/tags/Hexo/index.html","7a5f14152fb0c4e811b81dd3c86c3d28"],["/tags/Mac/index.html","de1764ed0b06bde6ab7ccd2274521360"],["/tags/Python/index.html","b5bfeeacfbf64acf1963b252a6588175"],["/tags/Ros/index.html","eecf199e87c27a1a0cfa48b1c8121e23"],["/tags/UI/index.html","fe477d0e12875c318695cb31b6af2ed0"],["/tags/Web/index.html","786c0aa69624145c5dd593f218638a0e"],["/tags/index.html","ba8b0082532b6979f2da562967ab4db0"],["/tags/numpy/index.html","5658555406246b3eae1b175051c8f8f0"],["/tags/seaborn/index.html","bde1dd06137c8d04ef771a5f0130833d"],["/tags/入门/index.html","7c63561a9febab8c9a33d7794137f991"],["/tags/小程序/index.html","d0ef844c278191fb313cba3ca840eb83"],["/tags/影评/index.html","20e1b87acf4db344e3945cae9887b9db"],["/tags/意大利/index.html","3fe59d887bf9cc5325cb370d9369f028"],["/tags/推荐/index.html","db8b407d82f49d59b7dfdd92db3ffbea"],["/tags/效率/index.html","9328ccbf2ce32d70d9f56f9ed74516d7"],["/tags/数据可视化/index.html","f1420f0308fb05049d8b325268c865d6"],["/tags/旅行/index.html","3919cb37045fe7d18816a106dc383825"],["/tags/机器人/index.html","1fbbfe3a265f63867460dbad724add31"],["/tags/梵蒂冈/index.html","a21b6885672c2e8aca2b6c791a031b94"],["/tags/理论/index.html","3c3801b02eec772ccf96fa10d39697a8"],["/tags/生活/index.html","418e7462c43612a1be137a623111d503"],["/tags/电影/index.html","27f8139a8926024a05ce76c39ffe07a9"],["/tags/番茄工作法/index.html","5c432e6c3df286d7e1e31336e353f4f5"],["/tags/科幻/index.html","b3cd17dfeedf9047715f959f6da655b0"],["/tags/笔记/index.html","31d210d4763d91ae87598b652c7432a4"],["/tags/网站/index.html","d74e6487c9095cad0a04b8e562f1f684"],["/tags/计算机视觉/index.html","342d822c44ed26bd9af15e0d6fbe7bc7"],["/tags/记事/index.html","57a37cc582726bf6cc0abfc45cad1515"],["/tags/软件/index.html","9d5fb1698c8f443e45165ecd36201c0f"],["/tags/运动规划/index.html","636468bd5013752c979deedff545adb4"],["/tags/项目/index.html","96dbf8e9477f5268011d219ad6ab22b2"],["/webpushr-sw.js","f6f7ff6d6b7b7b652cb92a25eb2cef5b"]];
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

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"your_websie_url"});




