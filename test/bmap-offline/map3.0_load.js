// http://www.wmksj.com/map.html

// 缩放级别
// 4-球
// 5-国
// 8-省
// 12-市
// 17-街

// 经纬度（东北半球）
// 经度，左小、右大（远离本初子午线）
// 维度，上大、下小（靠近赤道）

var bMapOfflineConfig = {
    'imgext': '.png',
    'customstyle': '',
    'tiles_dir': '',
    'tiles_road_dir': '',
    'tiles_satellite_dir': '',
    'tiles_v_dir': ''
};

var JS__FILE__ = document.currentScript ? document.currentScript.src : document.scripts[document.scripts.length - 1].src;
bMapOfflineConfig.home = JS__FILE__.substr(0, JS__FILE__.lastIndexOf('/') + 1); //地图API主目录
(function() {
    window.BMap_loadScriptTime = (new Date).getTime();
    //加载地图API主文件
    document.write('<script type="text/javascript" src="' + bMapOfflineConfig.home + 'map3.0.min.js"></script>');
})();

