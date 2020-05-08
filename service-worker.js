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

var precacheConfig = [["/2018/09/16/认知机器人：感知物体位置和状态/index.html","b2f0d744ae990a900c1a410633bf5eb4"],["/2019/08/22/Hello_World/index.html","1d7ea6f722913059d293d3e0c9d6187f"],["/2019/08/24/Hexo建站相关文章收藏汇总/index.html","d331ad9c4fcbaaf8a0addfc5cf5c3f83"],["/2019/08/24/在Mac上使用Hexo创建站点经验/index.html","ff0b8ec785c6de0c628b4efbf99baac1"],["/2019/08/25/\"意大利漫游：小小国梵蒂冈\"/index.html","9d69a75fe1134c598041a8f597741211"],["/2019/08/25/电影《降临》联想/index.html","f87f6c5fe72af3ba3f0d25c46a30c326"],["/2019/10/24/快速掌握NumPy/index.html","400ca50dad6a88769a12213075df225d"],["/2020/01/29/图形学笔记：变换Transformations/index.html","72be5312d98ebd11a295800e4ad5320a"],["/2020/02/04/Mac软件推荐1/index.html","f3cc8bf54784cedf8caa2dd7b73b063e"],["/2020/02/12/番茄工作法自制表格分享/index.html","cc962e3e91329de458bce5791e7f4841"],["/2020/02/17/为博客添加新特性记录/index.html","d0e1b6214966720c2145c56435a4103d"],["/2020/02/22/小程序UI组件推荐/index.html","38f7a0b3e7ce8133f2545a008775f55c"],["/2020/02/22/小程序功能组件推荐/index.html","c05e06f0efe1401b23911195360e4bab"],["/2020/03/02/2020搬家记录/index.html","1f3f16767bfb9dac0554777e46ad6735"],["/2020/03/02/微信小程序-找地儿住-官方文档/index.html","9bade0ce83f9c658f9aeadc3781e1547"],["/2020/04/17/手臂机器人:机器人检测物体与运动规划/index.html","dbbdb07ffab0bdd6cdce5c1448e4e295"],["/2020/04/23/数据可视化：把玩一下seaborn-一/index.html","eeb2f5251d09b27379923b8abed8173d"],["/2020/04/29/岛屿-个人网站博客搜集页/index.html","022c924bbefd649010aa7167cec660ef"],["/2020/05/01/借りぐらしのアリエッティ/index.html","e58048045731ee849f3726654b34133d"],["/2020/05/08/给自己搞个Logo/index.html","6653f21b6ed5f0f9f286be895327810c"],["/404.html","efb7a061504e9c9fbcbbb39a20df7227"],["/about/index.html","c00c0e63c601c7aaf82d5ec56cbfc679"],["/about/link/index.html","1daf09a936a6892165a797e91baa2a89"],["/archives/2018/09/index.html","8b31791c53a522a812f45345141d8d94"],["/archives/2018/index.html","ec8641c002e28a822469b6af6e1d01c7"],["/archives/2019/08/index.html","9d176590cfd981e5d5c09899a547cb06"],["/archives/2019/10/index.html","8d499974088ddedd5361cdb0551d4468"],["/archives/2019/index.html","d2ebef643d3cd7da5854726cd1f57da9"],["/archives/2020/01/index.html","c3c3f117c40eb4096c51216caac56f68"],["/archives/2020/02/index.html","f43ee6aceae94c211a26d9f0006b55c4"],["/archives/2020/03/index.html","0b7f440181d59bda8673f442acea70da"],["/archives/2020/04/index.html","6342a547cd7e28c994260b99cdf96508"],["/archives/2020/05/index.html","10e9b81f474b6ca882ff88fbe5072892"],["/archives/2020/index.html","5299a8aac9ac0dfd90115a08b6607c61"],["/archives/2020/page/2/index.html","aa2b53b6bd582784e570befe3975a126"],["/archives/index.html","3a87346f888fe62ad223cc6245359026"],["/archives/page/2/index.html","effe4e9656d0df6b47bdd40e4ad6c5d4"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/index.html","082cf4e328ff1e729610bb882fec54c5"],["/categories/技术/index.html","6b741910bd2246160fa1ca552257d6ad"],["/categories/技术/理论/CG/index.html","696b1447e1fa85d2ec02bd75141c44fe"],["/categories/技术/理论/index.html","f02acdac185d4c4aa8df6b745219f943"],["/categories/技术/笔记/Python/Numpy/index.html","58aa31509aa5effbf71cd58e2c535d9f"],["/categories/技术/笔记/Python/index.html","4bfe298d5fe33b5e1995d2a0254b2e94"],["/categories/技术/笔记/Python/seaborn/index.html","be80938188924f304bf5e8cd33778155"],["/categories/技术/笔记/Web/index.html","32ddbf9e1270f3f8424e3da80c699f3e"],["/categories/技术/笔记/index.html","f85f1758332d7e6daf7bf6112e019e46"],["/categories/技术/笔记/小程序/index.html","5ffec8ced77c158a2d08f46dbe067381"],["/categories/生活/index.html","5b6d96298b0dd12d37b31d148ebade14"],["/categories/生活/旅行/index.html","c7a1f34376086320bdc0b52bca27c53c"],["/categories/生活/测评/index.html","5d133d226ee7f94034cf9a42a1d5456b"],["/categories/生活/测评/影评/index.html","e6095521eeced7be35b4bd485f717dea"],["/categories/生活/测评/软件/index.html","4cdb4a1a1e29022ba563d5795a5f5a62"],["/categories/生活/记事/index.html","3a2ed8a09dbc16386d5ead42f733f85d"],["/categories/项目/index.html","dc02ae9e615d1179a0339b11bc165f2c"],["/categories/项目/前端/index.html","ee68e81ca2c2d857066466d3f26e268d"],["/categories/项目/机器人/index.html","81a2135126feed1e23796f03acdf39e3"],["/charts/area-line/index.html","cc60c2769101cf5b2a4073c85ee552dd"],["/charts/area-line/js/highcharts.js","4e034b8fc51eff1f2668bed5e0189c95"],["/charts/area-line/js/index.js","522bde8bb3a7b44e372391625a543924"],["/charts/area-line/js/jquery.js","218fe419241debafdfaefbd20dceeba9"],["/charts/circle.html","b1564cbf45d27a7fe1c616081d0ac180"],["/charts/css/default.css","f7c1d59c436a9b87e0c4b7aaef96dc0d"],["/charts/gantt/css/style.css","1f71c8bd18a0f64e11dd1123d8833ec2"],["/charts/gantt/index.html","63ab3cfac2c31453170c3156a3bf7526"],["/charts/js/init.js","c1fcb7da69831fc21bc9d35c38d0d941"],["/charts/js/jquery.js","e59f0efb75947456d24645744b90e7dd"],["/charts/js/raphael.js","36397a952e188e363303c9dd5ef122ce"],["/charts/radar/js/Chart.js","3d9055e69acd17fe0e8e3050883a2fb1"],["/charts/radar/js/Chart.min.js","7d8fd0c1dc6732675a1bd453a3f643a1"],["/charts/radar/radar.html","54095795851a5765257444b2b5fdc689"],["/copyright/index.html","502b5e8a4eb4e708e61e5f6259326ad7"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","5d4cbf8d82c8feb25d5355450e61922f"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fm/index.html","b57fa545601d29f76930a94aa1da9895"],["/fmplayer/css/style.css","7630338e8112c902b23962c341b48fcf"],["/fmplayer/img/1.jpg","f59f7d6dfa68d9db969680a66f242f1a"],["/fmplayer/img/2.jpg","e9e9cd95ea1ba72d7de58be3166504ef"],["/fmplayer/img/3.jpg","ca0213b1e648fb98bb2182e9f43e7eb3"],["/fmplayer/index.html","9e16932f41e28b8108c6cddf21024121"],["/fmplayer/js/script.js","2169ea0685adec735b1fa322fa0095bc"],["/fmplayer/js/vue.min.js","17e942ea0854bd9dce2070bae6826937"],["/gitalk.html","c1a214575327a09f808fc95adb16628f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/KP.png","f82cf7f25cfca71e3e2cf9ca941775f4"],["/img/KP_icon.png","cdc02407507f7d7c016756d4444337de"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/alipay.jpg","b82de31d15eb69088017e89f450c9b4c"],["/img/avatar.jpg","8305bacee539c969b816f5f6acfc39a5"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/curioso/1.jpg","ba1052709dc4f3ba2e1032f7b3ee8ad3"],["/img/curioso/11.jpg","30300d427de62f55323b1d12d0eed8cd"],["/img/curioso/12.jpg","4b83707163e9be5d0ac7a3bc2390519c"],["/img/curioso/2.jpg","e3124b67ce6e28f9bc529152fab228d9"],["/img/curioso/3.jpg","d0a5341063be6d6d136c02c9ef473e4b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/hexoicon.png","6ab8b9e0c76abc942ca6fbee6bad7e54"],["/img/icp.png","60a3057441ba9776a5b8760717d2c646"],["/img/index.jpg","34c46ffca49095dccb77aa4485cc897e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/paypal.jpg","45e044daf5bdbe4cfce2b8c74cf8ac86"],["/img/planet.png","ed6ae9c2eade0ee758fe690a13ee90c0"],["/img/post.jpg","8fb7d10986b67a1dcba885f50a5de3a9"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/img/pwa/images/icons/icon-128x128.png","5291f255374fbdca1d18269ba172d305"],["/img/pwa/images/icons/icon-144x144.png","ea22b6e2c3f18c16d5153d99e4e268f5"],["/img/pwa/images/icons/icon-152x152.png","fa3bdadb4816aaa426cf85dbf0b5480f"],["/img/pwa/images/icons/icon-192x192.png","0c56f0b7599845c2b0a061dd16a30f90"],["/img/pwa/images/icons/icon-384x384.png","93410a06dbce476b1868e1310c8b40c8"],["/img/pwa/images/icons/icon-512x512.png","26a288a7e53d0968d7845633036bdeee"],["/img/pwa/images/icons/icon-72x72.png","52b2d0de819e42a4ce54cc7afd67f0d7"],["/img/pwa/images/icons/icon-96x96.png","7849b49515e00173127a3eca28879a7c"],["/img/speak.png","2c8d006a565d1385a913b8e6a2c615e4"],["/img/tencentcloud.png","0afb8ab976401227e90b1d043efdec0a"],["/img/theme.png","057fa877a332b40f1ea9ae6f1bfbc172"],["/img/top-img-1.jpg","082a00cdcdaceefaabcbb2ec43c39e8e"],["/img/top-img-2.jpg","22a0827c5716f28534398540a7eaf2e5"],["/img/top-img-3.jpg","207ea3614dfbe4db3e97f7545e71f9a8"],["/img/wechat.jpg","6728dee478a4cc7bbe9e48706e3c4a30"],["/img/whale.png","a0fc3e5591e6bed58be6b64156369c53"],["/index.html","84a57cfd11a7ac4fb4b7b7316a05d90b"],["/js/main.js","0cd0cf0fdb710ba9b7d96caa04c2dfaf"],["/js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["/js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/life/douban/index.html","b6d3d7006c88475da64c6975c77be769"],["/life/footprint/index.html","f92506c26d47dfd3a9b3843ec827adfe"],["/life/gallery/cloud/index.html","9bc9f026f6cfb9be5b784c924d7f294b"],["/life/gallery/cover/index.html","0aeabb3b85017efbf7a83b7196f03c6e"],["/life/gallery/food/index.html","d7f2e906cfd276f94948f595b776e991"],["/life/gallery/index.html","ade24fe5710d6a44b54ae86940ebfb8f"],["/life/gallery/life/index.html","16cdc9106ba1d2db3bee0abfc96e9acd"],["/life/gallery/photos/index.html","89f3079f02351f742c904cc4682ffc97"],["/life/gallery/qingdao/index.html","c0610315c26871c17cce858b5b81e8f2"],["/life/gallery/sketching/index.html","8ff64d0e0f4978c5050570edd620d780"],["/life/gallery/transcribe/index.html","0c349409df7c7d3fc02a41c90a20e73b"],["/life/index.html","9ab991a029581172a83f2789cf0c227c"],["/page/2/index.html","1b4092dc16b733c98be201bc5d9fd8b7"],["/page/3/index.html","454bda3aea860568e9ce08d01d88fe55"],["/page/4/index.html","d1e1644b79765092160c0adb01e535fe"],["/tags/CG/index.html","cb1ba9bc8fdf08963e31844f168e9ae9"],["/tags/Hexo/index.html","6b16694585ac322dd7de1f19b96700d4"],["/tags/Logo/index.html","913b0e8cca4cf311663f0a9238463e59"],["/tags/Mac/index.html","f60a8fa0826313a37e237b00d65bb5cf"],["/tags/Python/index.html","801b5dcb0ea115a356aeafec6c251806"],["/tags/Ros/index.html","debcbbdbdf9a2f0bb77c4b0d116c0b08"],["/tags/UI/index.html","1646ee1695c333e68ade73773893bbeb"],["/tags/Web/index.html","0b7f1c049975b8f802642c8e56748d19"],["/tags/index.html","4be47c9e073b9b7392e963defccfc32d"],["/tags/numpy/index.html","3d5dfe1c0ddd3b9b07e523be25a8db20"],["/tags/seaborn/index.html","11c3d9b3e20e9790a7aefefa6144936d"],["/tags/入门/index.html","2459033d1dfb80c3627a03a941eea580"],["/tags/动画/index.html","6240b5d7f828bba584442ded97a3af03"],["/tags/小程序/index.html","0e587ecdeb0e98c791c3e10ae9078273"],["/tags/影评/index.html","0d02bdd4087afbe88aae6e29c2108f16"],["/tags/意大利/index.html","41147baea5d39488c9aa7429f39cb2f9"],["/tags/推荐/index.html","e7ebf0b53cb5dc45007689ab714d9bd1"],["/tags/效率/index.html","f02fc6963d5a52ff323e1ed718d69ca7"],["/tags/数据可视化/index.html","e4d2b26cb39a39464faa756a0a236643"],["/tags/旅行/index.html","2f874a6f147c8e8e889e20ec9e17a8f1"],["/tags/机器人/index.html","acd35d709eefd8fc1ba0555a4e147156"],["/tags/梵蒂冈/index.html","6c4b511a98cc7f9e4b04a70835f7a141"],["/tags/理论/index.html","43573d051b740a38232d6f59c1508bbd"],["/tags/生活/index.html","07b7a09c9bc4429498e007c3c16b75d3"],["/tags/电影/index.html","404d9e044bf72cacdb5ced22c07b8a70"],["/tags/番茄工作法/index.html","dd151f07106d27c5c25336398e178317"],["/tags/科幻/index.html","8a3fa499fcdf62f1d9504391783e4c09"],["/tags/笔记/index.html","5d0d1b1c236e8b3cd63c40ef14cf390c"],["/tags/网站/index.html","103d54a7874b230a441a7c1432cb4147"],["/tags/计算机视觉/index.html","3a3c6b7cfb158c6703ca0f35c87dba14"],["/tags/记事/index.html","df373d6c75f9967759f12d57936a5cf3"],["/tags/设计/index.html","fe2320056489ae3fe094095936e23531"],["/tags/软件/index.html","da199d38f21ffda0269c385dbf3ce7b7"],["/tags/运动规划/index.html","f3264c0db4d181788209fa6f375cc5dd"],["/tags/项目/index.html","66a656bd74bfd989908ec93062da5f6a"],["/things/css/main.css","ec96a2de3a97baec46d86c3e9da28b5d"],["/things/dist/sortable.css","6b6b3d6f85a3497ee9e71b16b7223f60"],["/things/dist/sortable.js","d199f4ab84617e894975f4757dbb3c17"],["/things/dist/sortable.min.css","a4c7bddbdc32317dbb63a31244a82556"],["/things/dist/sortable.min.js","0351fbccf2faed49062495990e32a14f"],["/things/images/item-1.png","3a3878c1d9ca69c9c9301a380f60c483"],["/things/images/item-2.png","f53f4ad6dc0c3bd51cbff61d19d5fd17"],["/things/images/item-3.png","54cae647a46cef2dbdf1040437fba451"],["/things/images/item-4.png","b4a0582ac027ea9daa59545c216cb242"],["/things/images/item-5.png","b3348202f5af893abd6bcc0ba5ae3eab"],["/things/images/item-6.png","6d4448530f03aa161b4fc62ab3fcad41"],["/things/images/item-7.png","4669f3e9d9d1d3983b6ff10e2f093813"],["/things/images/item-8.png","a18e11ef3c1b702673ebea6693d04998"],["/things/images/item-9.png","d8359617ce1f0b8318e866cc9bfa50ec"],["/things/index.html","67c4d33454c0994fc69ac6cbe2981773"],["/webpushr-sw.js","f6f7ff6d6b7b7b652cb92a25eb2cef5b"]];
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




