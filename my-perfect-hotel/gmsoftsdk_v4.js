(function (_0x34408f, _0x410b09) {
    const _0x16c97e = _0x34408f();
    while (true) {
      try {
        const _0x5114f4 = -parseInt(_0x545d(1606, 0x27a)) / 0x1 * (parseInt(_0x545d(1121, 0x3cc)) / 0x2) + -parseInt(_0x545d(301, 0x36)) / 0x3 + -parseInt(_0x545d(519, -0x2c8)) / 0x4 * (-parseInt(_0x545d(1651, 0x3cd)) / 0x5) + parseInt(_0x545d(304, -0x375)) / 0x6 * (parseInt(_0x545d(1509, 0x5a5)) / 0x7) + parseInt(_0x545d(803, -0xfb)) / 0x8 * (-parseInt(_0x545d(1268, 0x128)) / 0x9) + -parseInt(_0x545d(1673, 0x6c3)) / 0xa + parseInt(_0x545d(1024, 0x313)) / 0xb;
        if (_0x5114f4 === _0x410b09) {
          break;
        } else {
          _0x16c97e.push(_0x16c97e.shift());
        }
      } catch (_0x75281) {
        _0x16c97e.push(_0x16c97e.shift());
      }
    }
  })(_0x3f4a, 0xb17fe);
  let _0x5c82cf = ["https://api.azgames.io/", "https://api.1games.io/"];
  function _0x2f71a5(_0x4884f7, _0x4413c9, _0x563479, _0x547ca6, _0x58c55e) {
    return _0x545d(_0x547ca6 + 0x114, _0x4413c9);
  }
  let _0x5897d5 = _0x5c82cf[1];
  let _0x1d164f = config.gameId;
  function _0x545d(_0x1b851c, _0x18f710) {
    const _0x3f4a73 = _0x3f4a();
    _0x545d = function (_0x545d87, _0x5b0cf2) {
      _0x545d87 = _0x545d87 - 0x127;
      let _0x262a63 = _0x3f4a73[_0x545d87];
      return _0x262a63;
    };
    return _0x545d(_0x1b851c, _0x18f710);
  }
  window.GMDEBUG = {};
  function _0x149ac3(_0x37ab87, _0x194b06, _0x544cbc, _0x4980ed, _0xf6fdfe) {
    return _0x545d(_0x544cbc - 0x189, _0xf6fdfe);
  }
  window.GMDEBUG["LOADED SDK"] = Date.now();
  const _0x32f1d5 = {
    enableAds: false,
    debug: false,
    gameId: _0x1d164f,
    pubId: '',
    unlockTimer: 0x3c,
    timeShowInter: 0x3c,
    hostindex: 0x2
  };
  function _0x32cbb7(_0x485c0c, _0x57e370, _0x385bef, _0x51322b, _0x400f62) {
    return _0x545d(_0x385bef + 0x31d, _0x485c0c);
  }
  window.GMSOFT_OPTIONS = _0x32f1d5;
  window.GMSOFT_OPTIONS.domainHost = "1games.io";
  window.GMSOFT_OPTIONS.sourceHtml = "RHhrUUVRZGJid2xBUVF4ZEZSTUtBQmtBRkVNTkRsc0FNRThPVmdnQUd3OFpFaEFPT0J0UVR4NFM=";
  window.GMSOFT_OPTIONS.sdkversion = 0x4;
  window.GMSOFT_OPTIONS.adsDebug = true;
  window.GMSOFT_OPTIONS.game = null;
  window.GMSOFT_OPTIONS.promotion = null;
  window.GMSOFT_OPTIONS.allow_play = "yes";
  let _0x2469d5 = window.GMSOFT_OPTIONS.gameId;
  function _0xd707f1(_0x21fc19, _0x44ec46, _0x5a58f1, _0x2911a3, _0x23fff8) {
    return _0x545d(_0x23fff8 - 0x18d, _0x21fc19);
  }
  function _0x194a1a() {
    let _0x1ab643 = new Date();
    let _0x3d9fc8 = _0x1ab643.getTime() + _0x1ab643.getTimezoneOffset() * 0xea60;
    let _0x5dc97d = "1games.io";
    window.GMSOFT_OPTIONS.domainHost = "1games.io";
    let _0x1129a7 = _0x5897d5 + "api/infov2";
    let _0x1a9316 = 'no';
    if (_0x5df1dc()) {
      if (document.referrer) {
        let _0x344dae = document.referrer;
        _0x5dc97d = _0x344dae.match(/:\/\/(.[^/]+)/)[0x1];
      }
      _0x1a9316 = "yes";
    }
    let _0x2b9539 = 'd=' + _0x5dc97d + "&gid=" + _0x2469d5 + "&hn=" + "1games.io" + "&ts=" + _0x3d9fc8 + "&ie=" + _0x1a9316;
    let _0x4467a9 = btoa(_0x2b9539);
    let _0x3923df = _0x1129a7 + "?params=" + _0x4467a9;
    let _0x4c34a0 = _0x27b53f(_0x3923df);
    const _0x8aaa17 = JSON.parse(_0x4c34a0);
    window.GMDEBUG.LOADED_SDK_SUCCESS = Date.now();
    window.GMSOFT_MSG = _0x4c34a0;
    window.GMDEBUG.site_info = _0x8aaa17;
    if (typeof _0x8aaa17.enable_ads !== "undefined" && _0x8aaa17.enable_ads !== '') {
      window.GMSOFT_OPTIONS.enableAds = !!(_0x8aaa17.enable_ads == "yes");
    }
    if (typeof _0x8aaa17.hostindex !== "undefined" && _0x8aaa17.hostindex !== '') {
      window.GMSOFT_OPTIONS.hostindex = _0x8aaa17.hostindex;
    }
    if (typeof _0x8aaa17.adsDebug !== "undefined" && _0x8aaa17.adsDebug !== '') {
      window.GMSOFT_OPTIONS.adsDebug = !!(_0x8aaa17.adsDebug == "yes");
    }
    if (typeof _0x8aaa17.debug_mode !== "undefined" && _0x8aaa17.debug_mode !== '') {
      window.GMSOFT_OPTIONS.enableDebug = _0x8aaa17.debug_mode;
      if (window.GMSOFT_OPTIONS.enableDebug != "yes") {
        console.log = function () {};
      }
    }
    if (typeof _0x8aaa17.unlock_time !== "undefined" && _0x8aaa17.unlock_timer >= 0x0) {
      window.GMSOFT_OPTIONS.unlockTimer = _0x8aaa17.unlock_timer;
    }
    if (typeof _0x8aaa17.pub_id !== "undefined" && _0x8aaa17.pub_id !== '') {
      window.GMSOFT_OPTIONS.pubId = _0x8aaa17.pub_id;
    }
    if (typeof _0x8aaa17.timeShowInter !== "undefined" && _0x8aaa17.timeShowInter >= 0x0) {
      window.GMSOFT_OPTIONS.timeShowInter = _0x8aaa17.timeShowInter;
    }
    if (typeof _0x8aaa17.timeShowReward !== "undefined" && _0x8aaa17.timeShowReward >= 0x0) {
      window.GMSOFT_OPTIONS.timeShowReward = _0x8aaa17.timeShowReward;
    }
    if (typeof _0x8aaa17.game !== "undefined") {
      window.GMSOFT_OPTIONS.game = _0x8aaa17.game;
    }
    if (typeof _0x8aaa17.promotion !== "undefined") {
      window.GMSOFT_OPTIONS.promotion = _0x8aaa17.promotion;
    }
    if (typeof _0x8aaa17.sdkType !== "undefined" && _0x8aaa17.pub_id !== '') {
      window.GMSOFT_OPTIONS.sdkType = _0x8aaa17.sdkType;
    }
    if (_0x8aaa17.promotion) {
      window.GMSOFT_OPTIONS.promotion = _0x8aaa17.promotion;
    }
    if (_0x8aaa17.allow_embed) {
      window.GMSOFT_OPTIONS.allow_embed = _0x8aaa17.allow_embed;
    }
    if (_0x8aaa17.allow_host) {
      window.GMSOFT_OPTIONS.allow_host = _0x8aaa17.allow_host;
    }
    window.GMSOFT_OPTIONS.allow_play = 'no';
    if (window.GMSOFT_OPTIONS.allow_host == "yes" && _0x1a9316 != "yes") {
      window.GMSOFT_OPTIONS.allow_play = "yes";
    }
    if (window.GMSOFT_OPTIONS.allow_embed == "yes" && _0x1a9316 == "yes") {
      window.GMSOFT_OPTIONS.allow_play = "yes";
    }
    if (_0x8aaa17.game) {
      let _0x2c090d = _0x8aaa17.game;
      window.GMSOFT_OPTIONS.game = _0x2c090d;
      let _0x141c71 = "<style>#theGameBox,body,html{position:absolute;top:0;left:0;width:100%;height:100%;padding:0;margin:0}.gamePlayerContentSafeSize{width:1598px;height:841px;max-width:100%;position:relative}@-webkit-keyframes gamePlayerMoveRight{to{-webkit-transform:translateX(20px)}}@keyframes gamePlayerMoveRight{to{transform:translateX(20px)}}@-webkit-keyframes gamePlayerMoveLeft{to{-webkit-transform:translateX(-20px)}}@keyframes gamePlayerMoveLeft{to{transform:translateX(-20px)}}.gamePlayerPageLoader svg{z-index:-1}.gamePlayerLoadingAnim{width:100%;height:100%;display:flex;align-items:center;justify-content:center;position:absolute;top:0;left:0;z-index:100000000;background:rgba(0,0,0,.7)}.gamePlayerLoadingAnim div{box-sizing:border-box;display:block;position:absolute;width:64px;height:64px;margin:4px;animation:gamePlayerLoadingAnim 1s infinite;border-style:solid;border-color:#fff transparent transparent transparent;border-width:3px;border-radius:50%}.gamePlayerLoadingAnim div:nth-child(1){animation-delay:-.9s}.gamePlayerLoadingAnim div:nth-child(2){animation-delay:-.8s}.gamePlayerLoadingAnim div:nth-child(3){animation-delay:-.1s}@keyframes gamePlayerLoadingAnim{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.gamePlayerLoadingAnim span{font-family:roboto,sans-serif;width:100%;text-align:center;color:#fff;padding-top:150px;position:absolute;z-index:99999999999999999999}.gamePlayerTable>div{display:table-cell;vertical-align:middle;padding:10px;text-align:left;width:auto;background:#fff;color:#272727}.gamePlayerTable>div:first-child{width:1%;white-space:nowrap;font-size:22px;font-weight:600;vertical-align:top}[data-gamePlayerplayer] div video{width:100%!important;height:100%!important}[data-gamePlayerplayer] div lima-video{width:100%!important;height:100%!important}.gamePlayerContent video{left:0;top:0}.gamePlayerContent{top:0;left:0}.gamePlayerHidden{display:none!important;visibility:hidden}.gamePlayerCenterTable>div{display:table-cell;text-align:left;vertical-align:middle;font-size:22px}.gamePlayerCenterTable>div:nth-child(2){padding:10px 30px;text-align:center;display:inline-block}#gamePlayermw1jclueedb9wbbpdztq{width:100%;height:100%}#gamePlayermw1jclueedb9wbbpdztq{background-color:#000;overflow:hidden}#gamePlayermw1jclueedb9wbbpdztq{padding:inherit;box-sizing:border-box;overflow:hidden;position:relative;z-index:9999}body>#gamePlayermw1jclueedb9wbbpdztq{position:fixed!important}#gamePlayermw1jclueedb9wbbpdztq.gamePlayerMidroll{background:rgba(0,0,0,1)}#gamePlayermw1jclueedb9wbbpdztq>div:first-child{z-index:2147483647}#gamePlayermw1jclueedb9wbbpdztq.gamePlayerNoClick>div:first-child{z-index:2147483646}#gamePlayermw1jclueedb9wbbpdztq:not(.gamePlayerAdLoaded)>div:not([class]){pointer-events:none}.gamePlayerContent{position:relative}#gamePlayermw1jclueedb9wbbpdztq .gamePlayerLoadingContainer>div{display:none}#gamePlayermw1jclueedb9wbbpdztq .gamePlayerLoadingContainer>div{width:25px;height:25px;position:absolute;top:50%;left:50%;margin-left:-15px;margin-top:-15px;animation:circle .75s linear infinite;border-width:2px;border-style:solid;border-color:rgba(252,12,12,0) #fff rgba(201,62,201,0) #fff;border-image:initial;border-radius:100%;-webkit-animation:spin 1s linear infinite;animation:spin 1s linear infinite;transform-origin:center!important}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0)}100%{-webkit-transform:rotate(360deg)}}@keyframes spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes gamePlayerTicTac{0%{transform:scale(1,1)}50%{transform:scale(1.2,1.2)}100%{transform:scale(1,1)}}.gamePlayerInstallFlash>div{display:table-cell;text-align:center;vertical-align:middle;width:100%;height:100%;color:#fff;font-family:\"open sans\";font-size:18px;letter-spacing:-1px}.gamePlayerInstallFlash>div>a{display:block;text-align:center;color:#ff0;padding:10px}.gamePlayerContextMenu li{border-bottom:1px solid rgba(255,255,255,.8);padding:5px;color:rgba(255,555,255,.6);list-style-type:none;padding:10px 0;font-family:roboto;font-size:11px;text-align:left}.gamePlayerContextMenu li a{color:rgba(255,555,255,.6);font-family:roboto;font-size:11px;text-align:left;text-decoration:none}.gamePlayerContextMenu li a:hover{text-decoration:underline}.gamePlayerContextMenu li:last-child{border-bottom:none}.gamePlayerContextMenu li span{cursor:pointer;font-size:12px;display:block;text-align:left;font-weight:400;font-family:roboto}#gamePlayermw1jclueedb9wbbpdztq iframe:first-of-type{display:block!important;background:0 0!important;border:none!important}#gamePlayermw1jclueedb9wbbpdztq .gamePlayerFlashSplash embed{transform:scale(100)}.loadingButton span{opacity:0;transition:.2s}@keyframes bounceHorizontal{0%{left:-4px}100%{left:4px}}@keyframes openChest{from{background-position-x:0}to{background-position-x:-294px}}@keyframes popIn{0%{-webkit-transform:scale(0);transform:scale(0);opacity:1}70%{-webkit-transform:scale(1.2);transform:scale(1.2);opacity:1}100%{-webkit-transform:scale(1);transform:scale(1);opacity:1}}:root{--min5050:50px;--min202:20px;--min203:20px;--min405:40px;--min255:25px;--min143:14px;--min22040:150px;--min15015:150px;--min505:50px;--min364:36px;--min202:20px}@supports (padding:min(12px,13vw)){:root{--min5050:min(50px, 5vw);--min202:min(20px, 2vw);--min405:40px;--min203:min(20px, 3vh);--min405:min(40px, 5vw);--min255:min(25px, 5vw);--min143:min(14px, 3vw);--min22040:min(220px, 40vw);--min15015:min(150px, 15vw);--min505:min(50px, 5vw);--min364:min(36px, 4vh);--min202:min(20px, 2vw)}}.gamePlayerSplash *{box-sizing:border-box;font-family:Roboto,sans-serif!important;font-weight:300}.gamePlayerSplash{display:block;padding:var(--min5050);overflow:hidden;width:100%;height:100%;box-sizing:border-box;position:relative;background-color:#000;outline:0!important;transition:opacity .4s;background-repeat:no-repeat;background-position:center}.gamePlayerSplash .gamePlayerBg{display:block;width:100%;height:100%;position:absolute;top:0;left:0;z-index:1}.gamePlayerSplash .gamePlayerBg .gamePlayerBgImage{position:absolute;top:0;left:0;width:100%;height:100%;filter:blur(45px);background-size:cover;transform:scale(1.3)}.gamePlayerSplash .gamePlayerSplashContent{background:rgba(255,255,255,.4);border-radius:50px;display:block;width:100%;height:100%;z-index:10;box-shadow:0 0 0 0 #fff,10px 20px 21px rgba(0,0,0,.4);position:relative;transition:box-shadow .2s}.gamePlayerSplash .gamePlayerSplashContent:hover{box-shadow:-2px -2px 10px 1px #fff,10px 20px 21px rgba(0,0,0,.4)}.gamePlayerSplashContent .gamePlayerCenterContent{display:grid;width:100%;height:100%;grid-template-columns:2fr 1fr;box-sizing:border-box;place-items:center;padding:var(--min202)}.gamePlayerSplashContent .gamePlayerCenterContent>div{text-align:center;padding:var(--min202);width:100%}.gamePlayerSplashContent .gamePlayerCenterContent .gamePlayerPrerollInfo{display:grid;width:100%;text-align:left;row-gap:20px}.gamePlayerSplashContent .gamePlayerCenterContent .gamePlayerButtons{display:inline-block;text-align:center;display:grid;row-gap:20px;width:max-content;padding:20px}.gamePlayerSplashContent .gamePlayerCenterContent .gamePlayerPrerollCTA{transition:.2s;position:relative;cursor:pointer}.gamePlayerSplashContent .gamePlayerCenterContent .gamePlayerPrerollCTA:hover{transform:scale(1.1)}.gamePlayerSplashContent .gamePlayerCenterContent .gamePlayerPrerollCTA span{display:grid;grid-template-columns:auto auto;grid-gap:10px;background-color:#1c1c1c;color:#fff;border-radius:100px;padding:var(--min203) var(--min405);font-weight:400;font-size:var(--min255);box-shadow:0 0 20px rgba(0,0,0,.8);align-items:center;cursor:pointer;transition:.3s;text-transform:uppercase;user-select:none;pointer-events:none}.gamePlayerSplashContent .gamePlayerCenterContent .gamePlayerPrerollCTA:hover span{background-color:#91000a}.gamePlayerSplashContent .gamePlayerCenterContent .gamePlayerPrerollCTA span:before{display:block;content:\" \";background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAPCAYAAADUFP50AAABKklEQVQokY2TvyvEcRjHX75dDFIGFhmuFFaLC7NFERkNBvInuCubhdtsBsUimVx28iPJarHSme4kAyU/6qVPPur6du7uqc+zPJ/3834/7+fzQR1Un9RzNavSykmAXaAMVIB7YAvopVmoFXU9skypD+qbuqZm/mMPqaxupAp59V2tqrNqkgYmUVBbSlgR6Ab2gBJwBeRqLyQNJvkA8kBPnP8GOAGyzYB/8QzMARNAF3AGTLcC7I+s11HuKXDQCBi6bwMXcd5O4BCYAVbrAYNRi8Aj0AesAMvAKzAcZIaGmTrAfWASWIim7ESp89Hh34h73KzZ0ai6pJbUF7gamePlayerdqT3GBjbga/YZwQoAGPAETAEVOs6oN6ql2pR/VaP1YFmDz2kcfVTvVNzLf0O5QcZKy4YNKUs+wAAAABJRU5ErkJggg==);background-repeat:no-repeat;background-position:center;width:15px;height:15px}.gamePlayerSplashContent .gamePlayerCenterContent .gamePlayerPrerollCTA:hover span:before{animation:gamePlayerKnock .3s infinite}@keyframes gamePlayerKnock{0%{transform:translateX(0)}100%{transform:translateX(-10px)}}.gamePlayerSplashContent .gamePlayerCenterContent .gamePlayerPrerollWb span{display:inline-block;border:2px solid #1c1c1c;color:#1c1c1c;border-radius:100px;padding:15px 20px;text-transform:uppercase;font-weight:500;font-size:var(--min143);box-shadow:0 0 20px rgba(0,0,0,.8);cursor:pointer;user-select:none}.gamePlayerThumb{display:block;position:relative;border-radius:50%;overflow:hidden;box-shadow:0 5px 20px rgba(0,0,0,.4);width:var(--min22040);height:var(--min22040);transition:.3s;cursor:pointer;margin:auto}.gamePlayerThumb:hover{transform:scale(1.1);box-shadow:-2px -2px 10px 1px #fff,0 5px 40px rgba(0,0,0,.4)}.gamePlayerThumb>div{position:absolute;border-radius:50%;top:0;left:0;width:100%;height:100%;background-size:cover;background-repeat:no-repeat;background-position:center}.gamePlayerTitle{font-weight:300;font-size:var(--min364);user-select:none;color:#1c1c1c;line-height:normal}.gamePlayerTitle:after{content:\"\"!important}.gamePlayerPrerollDescription{font-weight:400;font-size:15px;user-select:none;color:#1c1c1c}.gamePlayerSplash{opacity:0}.gamePlayerPrerollCTA{position:relative}.gamePlayerSplash{opacity:1}.gamePlayerBg .gamePlayerBgImage{background-image:url(" + _0x2c090d.image + ")!important}.gamePlayerThumb>div{background-image:url(" + _0x2c090d.image + ")}@media only screen and (max-width:480px){.gamePlayerThumb{display:none}}</style> <div class=\"gamePlayerContent gamePlayerContentSafeSize\"id=theGameBox><div id=gamePlayermw1jclueedb9wbbpdztq data-gameplayerplayer=true><div class=\"gamePlayerSplash gamePlayerSplashPreroll\"><div class=gamePlayerBg><div class=gamePlayerBgImage></div></div><div class=gamePlayerSplashContent><div class=gamePlayerCenterContent><div><div class=gamePlayerPrerollInfo><div class=gamePlayerButtons><div class=gamePlayerPrerollCTA onclick=\"window.open('" + _0x2c090d.redirect_url + "', '_blank')\" id=btn_playgame><span>Play game</span></div></div><div class=gamePlayerTitle>" + _0x2c090d.name + "</div><div class=gamePlayerPrerollDescription>" + _0x2c090d.description + "</div></div></div><div><div class=gamePlayerThumb><div></div></div></div></div></div></div></div></div>";
      if (false) {
        console.log("NEU GAME DUOC EMBED");
        const _0x3b0985 = {
          timeZone: "Asia/Ho_Chi_Minh"
        };
        const _0x4b7a8f = new Date(new Date().toLocaleString('en', _0x3b0985));
        let _0x5ab7b4 = new Date(_0x4b7a8f.getFullYear(), _0x4b7a8f.getMonth(), _0x4b7a8f.getDate(), _0x4b7a8f.getHours(), _0x4b7a8f.getMinutes(), _0x4b7a8f.getSeconds());
        let _0x576a02 = new Date(_0x4b7a8f.getFullYear(), _0x4b7a8f.getMonth(), _0x4b7a8f.getDate(), 0x6, 0x0, 0x0);
        let _0xd7b1c0 = new Date(_0x4b7a8f.getFullYear(), _0x4b7a8f.getMonth(), _0x4b7a8f.getDate(), 0x14, 0x0, 0x0);
        if (_0x576a02.getTime() <= _0x5ab7b4.getTime() && _0x5ab7b4.getTime() <= _0xd7b1c0.getTime()) {}
        if (_0x8aaa17.allow_embed != "yes") {
          let _0x550a23 = window.GMSOFT_OPTIONS.unlockTimer * 0x3e8;
          setTimeout(function () {
            document.body.innerHTML = _0x141c71;
          }, _0x550a23);
        }
      } else {
        console.log("site_info_parse.allow_host ==>" + _0x8aaa17.allow_host);
        if (_0x8aaa17.allow_host != "yes") {
          console.log("site_info_parse.allo 22");
          let _0x48768b = window.GMSOFT_OPTIONS.unlockTimer * 0x3e8;
          setTimeout(function () {
            document.body.innerHTML = _0x141c71;
          }, _0x48768b);
        }
      }
    }
    document.dispatchEvent(new CustomEvent("gmsoftSdkReady"));
  }
  _0x194a1a();
  if (window.GMSOFT_OPTIONS.enableAds == true) {
    if (window.GMSOFT_OPTIONS.sdkType == 'h5') {
      window.GMDEBUG.ADS = "H5 SDK integration.";
      var _0xd72c90 = document.createElement("script");
      _0xd72c90.setAttribute("crossorigin", "anonymous");
      if (typeof window.GMSOFT_OPTIONS.adsDebug !== "undefined" && window.GMSOFT_OPTIONS.adsDebug == true) {
        _0xd72c90.setAttribute("data-adbreak-test", 'on');
      }
      _0xd72c90.setAttribute("data-ad-frequency-hint", "30s");
      if (typeof _0x2469d5 !== "undefined" && _0x2469d5 != '') {
        _0xd72c90.setAttribute("data-ad-channel", _0x2469d5);
      }
      _0xd72c90.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" + window.GMSOFT_OPTIONS.pubId;
      document.head.appendChild(_0xd72c90);
      this._showRewardAdFn = null;
      window.adsbygoogle = window.adsbygoogle || [];
      var _0x261eac = {
        adBreak: window.adConfig = function (_0xa7cf7) {
          adsbygoogle.push(_0xa7cf7);
        },
        ready: false
      };
      var _0x25fc27 = function () {
        _0x261eac.ready = true;
      };
      const _0x2417df = {
        preloadAdBreaks: 'on',
        onReady: _0x25fc27
      };
      adConfig(_0x2417df);
      var _0x42c70a = false;
      _0x261eac.onBeforeAd = function () {
        _0x42c70a = true;
      };
      _0x261eac.onAfterAd = function () {
        _0x42c70a = false;
      };
      window.afg = _0x261eac;
    } else {
      if (window.GMSOFT_OPTIONS.sdkType == "wgplayer") {
        window.GMDEBUG.ADS = "wgplayer";
        var _0x41c1c6 = document.createElement("script");
        _0x41c1c6.addEventListener("load", function (_0x2d9457) {
          var _0x24bfd0 = document.createElement("script");
          _0x24bfd0.addEventListener("load", function (_0x4cf7ab) {
            console.log("WGSDK: Development resources loaded.");
          }.bind(this));
          document.getElementsByTagName("head")[0x0].appendChild(_0x24bfd0);
          _0x24bfd0.src = "https://afg.wgplayer.com/1games.io/js/wnlvUzqr01_UmhONvHscTg/88126564825/wgAds.js";
        }.bind(this));
        document.getElementsByTagName("head")[0x0].appendChild(_0x41c1c6);
        _0x41c1c6.src = "https://afg.wgplayer.com/1games.io/wgAds.iframe.conf.js";
        this._showRewardAdFn = null;
      }
    }
  }
  function _0x5df1dc() {
    return false;
  }
  function _0x32e46f(_0x2a56cb, _0x3b3a70, _0x2ee7ee, _0x274a92, _0x477acf) {
    return _0x545d(_0x3b3a70 - 0x23d, _0x2a56cb);
  }
  function _0x3f4a() {
    const _0x1aec35 = ['rue><', " tran", '=game', 'lock;', '5385485NrYVVb', '}}@ke', 'a/YZw', '65648', '/styl', 'ready', "5px, ", 'curso', 'AAAAB', ':400;', ');pos', 'iptio', 'ositi', 'iv{di', 'open', "ock .", 'x,13v', 'ion', 'match', 'on:.2', 'erCen', 'AXaAM', '-sele', 'ottom', "iv id", 'frame', 'descr', ';tran', 'hCont', 'ext-a', 'T_MSG', "ent .", 't;bor', 'ock;p', 'suppo', ');fon', 'ent>d', 'inear', 'Image', 'r:blu', 'hadow', 'color', 'rgin:', 'or:#9', 'r-bot', 'timeZ', 'te(0)', 'nd:rg', ':game', '-inde', 'QoAGP', 'nth', 'f,10p', 'Jid2x', 'orati', 'Conta', 'rAfWA', '!impo', 'empla', 'U/6qV', '99999', 'DAjKV', "im di", '505:m', 'wbbpd', 'egrat', 'hild{', "im 1s", 'ht:no', '#fff,', 'mbed{', ';anim', 'hPIEG', 'ABKkl', 'flow:', 'r:#1c', ';left', 'mport', 'ty:1}', 'iddle', ';font', 'px;he', 'on:re', 'it-tr', " -2px", "')\" i", 'xt-al', 'n(150', " and ", 'ock;c', '555,2', 'weigh', '{widt', 'mage:', 'T_OPT', 'ive}.', 'le(0)', '16290sTKCXF', 'IaGmT', ':no-r', '-min1', 'nt><d', 'rid;g', '4)}.g', 'lativ', 'on:ab', 'root{', '.com/', '/7+fz', 'ay:gr', '1598p', 'er{co', '_SUCC', 'sAMvA', 'rerol', '(252,', "q .ga", 'Z0ai6', 'rm:tr', 'ing-t', 'jHX75', 'h-chi', " 22", "', '_", 'k!imp', 'solid', 'shCon', 'site_', 'rflow', " li:l", ':-15p', 'tml{p', 'opaci', ';line', "es ga", 'den;b', 'io/', '20px,', 'le;pa', 'form:', 'eDebu', 'on:un', '5tTVsBP', '%;hei', 'uJVYF', '.8);c', ':11px', 'g{dis', 'ollCT', 'le(1)', 'ayerL', 'kgrou', "ass=\"", '&ts=', 'adBre', ':var(', "px so", 'fff;c', " 1s l", ',0,.8', 's;pos', 'ation', 'e>#th', 'ition', '5724850YBvsdU', '18px;', 'ksfdj', '1game', 'e;col', '{posi', '#2727', 'ThPVm', 'rdqT3', 'middl', 'ame', 'MPqax', "3) va", 'e:sol', "nly s", '12px;', 'rkJgg', 'ar(--', 'LXVOq', '&hn=', 'origi', '00;fo', 'iv{ba', "3s in", '-styl', 'tion', 'er{tr', 'rSpla', 'tchEv', 'idrol', 'idth:', 'n405:', 'nt}@-', 'debug', 'ortan', '647}#', ');box', '255,5', 'nterT', 'AvopV', 'margi', 'mes.i', 'rmw1j', 'top', 'aqqTB', 'mw1jc', 'to}.g', '{font', 'nt;bo', 'x;mar', 'getHo', '4AAAA', '0)}10', 'y:0}.', 'yer=t', 'GET', 'adsDe', ',1)}5', '100px', 'ayerS', 'd=btn', 'P50AA', 'ff;bo', 'l;tex', 'lette', ':bloc', 'backg', 'd!imp', '1}.ga', 'db9wb', '-radi', 'getDa', ':0;le', '15:mi', 'AAAAN', 'nsiti', 'ter', ');pad', 't;row', "21px ", 'urs', '(20px', 'ayerM', 'info_', 'ily:r', 'n:4px', 'HscTg', 'gap:2', 'eady', 'ayerP', '}}:ro', 'tion-', "sh .g", 'oaded', 'nseTe', 'om{ba', 'y:blo', "enu l", 'font-', 'esour', '5050:', 'x:-29', 'boto}', 'k;bor', 'at;ba', 'ng:in', 'enChe', " rgba", 'ox;ov', '://ap', 'KUs+w', '3OFpF', 'in405', 'block', '10000', 'lign:', 'bSlgR', '47483', 'cC7I+', 'op:-1', 'ox-sh', 'getMi', 'rCont', 'Ho_Ch', 'ity:1', 'inner', 'ion:r', 'colum', 'blank', '}.loa', 'P8GOA', 'yerCo', 'ashCo', 'RHhrU', 'selec', 'div><', 'x){.g', 'ad-fr', 'ct:no', "UOC E", 'lity:', 'dztq{', 'ne;po', '--min', 'nth-c', ':tran', 'th:au', 'op:0;', ':20px', ';grid', 'oboto', 'ent:c', 'y:inl', 'left;', 'ztq.g', 'er-ra', '_play', 'reaks', '5,.4)', 'ak-te', 'lay:f', 'rid-t', 'pperc', 'ase;f', 'ter;u', 'ow:-2', '.allo', ':50px', 'ble>d', 'n></d', '2655447QMpLLK', 'le>di', "AME D", '6VpyUVu', 'uCubh', 'i.1ga', '9999}', 'P1YFm', 're{an', 'AETAE', 'entLi', 'e_ads', '36px;', 'yvEcR', 'cross', 'tive;', 'onRea', 'ght:2', 'er;ba', 'ock;t', '0px}@', 'e;wid', 'eLeft', 'ackgr', 'arent', "s bou", 'game>', 'yerSp', "x, 4v", 'eo{wi', 'n2204', 'rButt', '7game', 'R4NFM', '_embe', 'eElem', 'eX(0)', '#game', 'O5QcZ', 'UtBQm', 'ect_u', 'Ads.j', 'g;bas', 'nutes', 'js?cl', 'imati', 'ion.c', 'g==);', 'yerCe', 'erPre', 'x}100', 'gin-t', 'dingB', 'ius:5', " clas", '0,0,0', 'ontex', 'argin', 'pR/Va', 'gAAAA', 'r:#00', " 5vw)", 'ion-d', 'in:au', 'iv{bo', 'dhkXK', 'rLoad', '00%;h', 'JRU5E', '202:2', '-alig', '-anim', "0 0 2", 'ge/pn', ':init', 'ght:1', "q dat", 'lay:g', '-.8s}', ':box-', ')}}.g', 'orm:s', "div l", 'hostn', 'WGSDK', 'n:.3s', '1.2);', 'ock;w', 'dingA', 'pacit', 'h:25p', 'utton', 'ont-s', 'sByTa', '0%{tr', '{to{-', 'acity', 'ght:8', 'x;--m', "l\"><d", 'iMJdB', 'teX(2', 'WmoBh', "s spi", 'a-gam', 'ntext', 'rollC', 'ize:c', 'vw);-', 'ayerC', 'lick=', 'z-ind', "0 #ff", 't-dec', 'erThu', '0;out', 'lvUzq', '646}#', 'ring', 'l{bac', ':hove', 'ursor', 'famil', 'aleSt', '20px}', '2px;f', 'nslat', 'h:1%;', '364);', 'aEFPT', 'a(0,0', 'on:op', 'ant;h', 'Prero', '_host', 'ARNAF', ');--m', '25/wg', ':befo', 'fore{', 'redir', 'child', '55,.6', '0KGgo', 'rPrer', 'arHSm', 'dnQUd', "pen s", 'send', 'X(-10', 'e:now', 'of-ty', 'n(12p', 'llDes', ':-2px', 'ne}}<', 'sform', 'cal-a', 'ash{d', 'getEl', '-heig', '0%;ov', '{back', 'n(36p', 'ansla', "px 40", 'rizon', 'us:10', 'line:', 'OIIzq', '@keyf', 'erif!', "nd:0 ", 'ms=', ": Dev", '1c1c;', '-box;', 'YmUVB', 'one!i', '-cell', " infi", ':500;', '1000a', 'y:non', 'sbygo', 'appen', 'rCent', '7ESp8', '-repe', 'Ky4YN', 'x-sha', 'finit', 'nspar', 'cluee', 'le:so', 'e:non', 'der-w', "v vid", "0) #f", 'displ', 'idden', 'nter;', '2040)', '60deg', 'orm:t', 'ent{b', 'dtsBs', 'able>', '-bloc', 'yes', '<span', 'ical-', '1jclu', 'Patzg', 'n;wid', 'body', 'anima', 'play:', '4845704YgMeVR', 'v{dis', '4px}}', ':scal', 'gba(0', ':auto', 'parse', 'oreAd', ':rota', '_mode', 'min22', 'lign-', 'erAd', 'rtant', 'e:aft', " .gam", 'iv:fi', 'taine', 'gameI', 'id;wi', 'eAds', ',0,.4', 'O4BCY', 'on-de', 'rer', 'r-rad', 'class', 'n:.2s', ':#fff', 'sitio', 'in{0%', 'er;di', 'FhmuF', 'sizin', 'ASInw', "g .ga", 'equen', 'nimat', 'q{pos', '%{tra', 'gmsof', ':bord', "en('", '}70%{', 'relat', 'ts:no', 'posit', 'tBRkV', '27}.g', 't:300', "yer] ", '15015', ')!imp', 'humb:', 'x;hei', '-fami', 'i_Min', '143:m', '6Ab2g', ",0) #", "20px ", 'white', 'rst-c', 'erpla', 'ogle.', '8kBPn', '(2){a', 'rm:sc', 'm:sca', "0px r", " 1px ", 'llYea', 'setAt', 't:100', '-size', 't;tex', "Menu ", ')}@me', 'dAdFn', 'ly:ro', 'Conte', 's.io/', 'sdkve', 'n}.ga', 'rNoCl', " 10px", 'derli', '/8QzM', 'er!im', ';curs', "0px, ", 't;wid', 'erMov', "t:\" \"", 'm:rot', 'iner>', '255,2', " .75s", 'r01_U', 't-wei', 'nite;', 'dPkLi', 'DbcmE', '0;ove', 'ngCon', ':480p', 'adsby', 'w1jcl', 'f0;pa', 'vDwOG', 'UimVx', 'VOs6o', 'moFXU', 'und:#', 'delay', 'url(', 'd-siz', ';user', '0%}#g', 'SUhEU', 'k;pos', 'gead/', 'ex:1}', 'lumns', 'impor', 'NTkRs', 'und-r', '43:14', '40px,', 'boto,', ':0;ma', 'span{', ';bord', 'AADUF', 'ba(0,', 'ck;pa', ':grid', 't-key', "div c", ')}}@-', '0px;p', 'div:f', 'ntent', 'shado', 'top}[', 'items', 'getSe', '-webk', 'h:var', 'https', 'lueed', '0,0,1', ';marg', 'KYJur', 'creen', 'px;--', 'UGLZB', '3:min', '10px;', 'gAnim', "spin ", 'box-s', ':-.1s', 'min(5', 'onten', '/div>', 'D+qbu', "<div ", 'HTML', 'afg', ':fixe', 'e(1.1', 'ion:c', 'r;dis', '12,12', 'undef', "m div", 'respo', 'h{opa', 'on:ce', 'ient=', 'ize{w', 'der:n', 'ize:2', 'iv></', 'dth:1', '0,.4)', ':nth-', 'x:-1}', '&gid=', '0px;w', "nim d", 'dow:0', 'yZqyz', 'hover', 'yerKn', 'pJbUF', '(0,0,', 'ant;v', 'om/pa', 'ebkit', 'MmCcJ', 'js/wn', 'orm-o', "ize\"i", 'NJvkA', "es op", 'escri', 'ames.', 'GBjbg', 's11Hu', 'und-i', 'adbre', 'ueedb', 'tive}', ':min(', '202:m', 'ayerB', '100%;', 'min50', 'i{bor', 'Aj0Ae', 'in(20', 'erCon', 'w:hid', 'h73Kz', 'keiKN', 'one}.', 'pubId', 'd(3){', 'ZQAyJ', "r 1fr", '0,0,.', '0;z-i', 'vSykm', '2px;b', 'ideo{', 'playe', 't{to{', 'nf.js', '50%;m', 'r:poi', 'howRe', 'e}@ke', 'tent{', ';row-', 'LEjbL', 'VBORw', 'll;te', 'MtBmJ', 'v></d', 'trans', '-posi', '<div>', '-1px}', ',201,', 'mous', 'UVRZG', 'ktYaA', '-temp', 'api/i', 'FaLC7', 'iv>', 'humb>', '55,.8', 'lashP', 'LOADE', 'iv>a{', 'terTa', '0);he', 'e-cel', 'sans-', "dia o", 'r-sty', '/8812', 'ign:m', '0%}.g', 'at:no', 'toLoc', 'eGame', 'terCo', 'eedb9', '0%;pa', 'r(45p', '3143432OzxWZu', 'op:15', 'ng:mi', '-tran', '0%!im', 'ign:c', 'ransp', 'rigin', 'b9wbb', '-chil', 'or:#f', 'MXcd5', '0000;', 'epeat', "iv cl", ':uppe', 'r-spa', '.2);t', '2040:', 'ons{d', '64:mi', 'n:lef', 'D_SDK', 'ld(2)', 'elay:', "5px 2", 't}#ga', 'cugyt', 'pdztq', '43);b', 'iv:nt', 'qZm/m', '05:40', 'user-', 'rNqkg', 'ward', "t vid", 'adius', "x rgb", 'nline', 't;tra', 'ement', 'id;bo', ", 3vh", 'image', 'IKGay', ';box-', '}@key', "K int", '0,.7)', 'eHtml', 'dding', 'A{tra', 'enter', 'stene', '-min2', 'ash>d', 'fVTvV', 'lex;a', 'js/ad', 'tribu', 'elopm', '00%}.', 'or:#1', 'IONS', 'der-r', '.game', '040:1', 'left:', 'Asia/', '-left', '-min3', " span", 'div{d', 'te(36', '/3834', "li a{", 'ock{0', '1){an', 'ading', "q ifr", 'eo{le', 'heigh', 'ale(0', 'e:cov', 'in(50', '&ie=', '0}to{', '}[dat', 'rTitl', 'ox><d', 'th:64', 'ht:10', 'IBoUm', '50px;', ':tabl', 'eX(-2', 'allFl', 'tal{0', ':not(', 'ex:21', ':cent', "H5 SD", 'ageLo', 'ght:4', 'adow:', 'rgba(', ':midd', ':hidd', '-colo', 'orm:u', 'l(dat', 'PCAYA', ':0}.g', 'on:no', 'GMSOF', 'erflo', '{padd', 'RqLyQ', '_show', '00%;p', 'howIn', " game", 'yerLo', 'on-x:', 'nHost', '5px;-', '0px)}', 'elect', ';padd', '5050)', 'w_hos', 'er;ju', '{tran', 'und-s', 'ast-c', '://af', 'gameP', '5vw);', 'ser-s', 'th:10', 'to;ba', ':poin', 'onAft', ';widt', 'data-', 't:4px', ':600;', 'rcase', 'px)}}', 'herit', 'GameB', ';--mi', '><div', ';over', 'tKZch', 'ing:v', 'BUVF4', '(--mi', '</div', 'rsion', '}.gam', 'dius:', '0%;he', 'over;', 'tion:', " .4s;", 'tMenu', 'ingAn', '(255,', 'ima-v', 'h);--', 'r{tex', '</spa', 'ht:15', 'svg{z', '%;z-i', 'VFJee', "ans\";", 't:400', 'tate(', 'mezon', "x 20p", '0;wid', 'erLoa', 'dDFIG', 'in203', ':0;wi', '40px;', '-20px', 'tems:', " li a", "x 21p", 'ined', 'ertic', 'in150', 'duzcy', '%;tex', 'YToMC', 'max-c', 'oto,s', '.1)}.', 'annel', 'lInfo', 'r(--m', "1s li", '9Hh34', '5,.6)', '2);wi', ':100%', 't-ali', "px, 1", 'cTac{', ';opac', '9RzNa', 'ollWb', '%{lef', ';back', 'grid;', 'ransf', '5px;c', '16642978OaxMhQ', 'ESS', 'nDjjI', 'ems:c', 'Loadi', 'QNOMM', ';disp', 'amePl', 'prelo', "A onc", "fff r", 'src', ');tra', 'ispla', 'gName', 't;bac', 'e:url', 'a:ima', '9skyp', 'VIB7Y', ';posi', 'kY2Tv', 'i.azg', 'rm:ro', 'le-ce', 'ne}.g', 'oadin', '></di', 'adCon', 'ay:bl', '64px;', 'gn:ce', 'ot{--', 'width', 'in255', 'sdkTy', 'gead2', 'gba(2', 'r:#ff', 'e-blo', '9V2tq', 'eRigh', "NEU G", 'aded)', 'PPur6', 'cy-hi', 'al-al', 'ansfo', 'Cente', 'ale(1', 't}.ga', '0px;t', 'SWIim', 'n{0%{', '-min4', 'irst-', 'borde', 'order', ':spin', 'isibi', 'me.co', 'lid;b', "ly:\"o", 'n364:', "0px 3", '>div:', 'du7uq', ')}#ga', 'nsfor', 'or:po', '01,62', 'd=the', 'Splas', '0!imp', 'ns:2f', 'nt-si', 'tons>', 'YNRi8', 'd-pos', "sh ga", 'refer', 'adAdB', 'pe{di', ';list', 'ateX(', '-gap:', 'body>', 'ngAni', 'gn-it', '00%!i', 'lateX', 'kTime', 'ransl', 'var(-', 'ash{o', '(max-', 'log', '16NUgRgv', 'rollD', 'locat', 't:non', 'mage{', 've}@-', 's=gam', '0}.ga', 'name', ", 2vw", 'c+zPJ', 'rames', 'filte', 'hidde', 'ant}.', '41px;', 't-tra', 'er-bo', '-imag', "px -2", 'NFERk', 'Box,b', 'over{', 'ing:b', 'upAp5', "es sp", 'serif', '>Play', " 40vw", 'spare', 'EQVQo', 'LzngN', "nt .g", 'g:bor', "TA sp", 'rmal}', "near ", 'd-ima', ';heig', 'ztq>d', 'head', 'ircle', 'der-b', 'cript', 'e64,i', 'DBjft', 'infin', 'NBvIn', 'KXDQC', '1c1c1', '10;bo', 'ute;t', '{opac', 'wgpla', 'ent', "px rg", ':15px', "ent t", 'ign:l', 'ity:0', 'YHsNq', '0J0UV', 'e}#ga', 'ss=ga', 'align', ':none', "px 1p", 'anony', 'eft;v', 'lesyn', '255:2', 'ite;t', "w .2s", 'promo', 'e;pad', "ader ", 'ZEZST', 'stify', 't{pos', 'lay:n', 'ound:', 'hild(', '?para', '55,25', '50:50', 'not([', "f tra", 'erBgI', ':50%;', 'push', 'erFla', ',1)}}', 'eplay', 'k_tim', 'porta', 'ption', '-cont', '0%{-w', 'ayerT', '}100%', 'erSpl', 'ayerm', 'nim{0', 'layer', 'pub_i', 'ans-s', 'y:tab', 'hosti', 'umb>d', 'nter}', 'in505', 'A:hov', '100%{', 'ial;b', 'yerBg', '0;fon', 'cente', 'ft:0;', "10px ", 'scale', "nt ga", 'SafeS', '-shad', 'e-typ', 'cale(', ":1px ", 'in(14', 'solut', 'c0FNR', "px, 5", 'plash', 'iv><d', 'ge:ur', ',0,0,', 'c1c1c', 'izing', " auto", '28iPJ', 'dicat', '02)}.', 'Playe', 'ndex', 'paddi', 'max-w', 'splay', 'en}#g', 'w)){:', '27LfWKae', ')}100', 'ion.', 'creat', 'info', '2:min', 'ding:', 'ing:1', 'timeS', 'ion{f', 'ext-t', 'c;col', 'ulFxx', 'im{wi', 'getFu', '://pa', 'eight', 'tom:n', '.2,1.', 'ight:', 'UZVNp', 'mePla', 'te-co', 'enabl', ':150p', 'mhONv', 'lay:-', 'table', "D SDK", 'rAdLo', " *{bo", 'ndex:', '0deg)', 'ine-b', 'AVbrA', 'olor:', ':rgba', 'g><di', "f,0 5", 'llCTA', 'st{fr', ':22px', 'erTab', 'inlin', 'onBef', 'der:2', 'ENOjW', '(100)', 'load', "ow:0 ", "\"wind", 'tant;', 'px}.g', 'top:0', '5px;a', 'ckgro', 'ADS', 'BJwBe', 'min20', 'dChil', " 0 0 ", 'rap;f', 'e;z-i', 'ame:f', '9wbbp', 'late-', 'erBut', 'ont-w', 'ate(3', 'ayerH', 'ck}#g', "ces l", 'itle{', ',.4)}', 'absol', 'NzLf0', 'er}.g', " 20px", '30s', 'nceHo', 'KzAcZ', 'lay:i', "ar in", 'ePlay', 'dispa', 'inter', 'lass=', "px, 2", 'addEv', 'webki', "x #ff", 'div{p', "r] di", 'h:100', 'und-p', '.goog', 'x;pos', '(1.3)', 'slate', 'nt}.g', 'ace-i', 'Dz2kc', 'nfov2', 'text-', 'den;p', ':3px;', 't;pad', 'now', 'ody,h', "\"game", "0 5px", 'sourc', 'yfram', 't-fam', "ash .", 'y:Rob', 'x);ba', 'g.wgp', 'xtMen', 'RTeGt', '0%;-w', "s gam", 'ate(0', "ash e", 'lCTA:', 'ent:h', ']){po', 'r;col', 'yer', 'JkFYn', "ent r", 'WttNf', 'Title', 'getMo', 'size:', 'x-siz', 'e;bor', '2)}10', 'yerTh', 'yermw', "px 10", 'fig', 'OPmLX', 'ZUgjm', 'googl', 'e4kAy', 'RAAiO', 'ze:va', 'tJSTY', 'ow.op', 'QR1Un', "px, 3", '{disp', 'yerTi', 'game', 'r>div', "v cla", 'round', '.ifra', 'bug', 'rInst', 'NzovO', ');ali', 'an:be', "u li ", 'shSpl', "rts (", 'city:', 'humb{', 'groun', " div:", '{to{t', '<styl', 'e;top', 'ick>d', '-spac', 'ass=g', 'n255:', "lid #", ';text', 'ox;pl', 'm:tra', ":\"\"!i", 'scrip', 'ant}#', 'ay:no', " line", 't:-4p', "t ==>", 'rder-', 'verti', 'eOffs', 'elati', 'domai', '.9s}.', 'cing:', 'conds', "tent ", 'GyzYB', "ztq .", 'GMDEB', 'JPXOk', "0 20p", 'd-col', 'iv{te', '-even', '15px;', 'min(2', 'Rewar', 'allow', 'wgAds', 'MBED', '3AGTL', 'N6ql2', 'getTi', 'textM', ':rela', 'one', 'v:nth', 'on:ga', ':10px', 'bpdzt', 'r;pad', 'JsZUo', 'ad-ch', 'llInf', '2:20p', 'bind', 'tSdkR', ';vert', " popI", 'o{dis', 'mb{di', 'Bi6bw', '5px;p', 'unloc', "e> <d"];
    _0x3f4a = function () {
      return _0x1aec35;
    };
    return _0x3f4a();
  }
  var _0x348aac = "1games.io";
  function _0x27b53f(_0x387c7e) {
    var _0xd2d33c = new XMLHttpRequest();
    _0xd2d33c.open("GET", _0x387c7e, false);
    _0xd2d33c.send('');
    return _0xd2d33c.responseText;
  }