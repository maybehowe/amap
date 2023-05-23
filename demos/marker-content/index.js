var marker,
  map = new AMap.Map("container", {
    resizeEnable: true,
    center: [116.397428, 39.90923],
    zoom: 13,
  });

// 实例化点标记
function addMarker() {
  marker = new AMap.Marker({
    icon: "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png",
    position: [116.406315, 39.908775],
    offset: new AMap.Pixel(-13, -30),
  });
  marker.setMap(map);
}
function updateIcon() {
  marker.setIcon(
    "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-red.png"
  );
}

function updateContent() {
  if (!marker) {
    return;
  }

  // 自定义点标记内容
  var markerContent = document.createElement("div");

  // 点标记中的图标
  var markerImg = document.createElement("img");
  markerImg.className = "markerlnglat";
  markerImg.src =
    "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-red.png";
  markerImg.setAttribute("width", "25px");
  markerImg.setAttribute("height", "34px");
  markerContent.appendChild(markerImg);

  // 点标记中的文本
  var markerSpan = document.createElement("span");
  markerSpan.className = "marker";
  markerSpan.innerHTML = "Hi，我被更新啦！";
  markerContent.appendChild(markerSpan);

  marker.setContent(markerContent); //更新点标记内容
  marker.setPosition([116.391467, 39.927761]); //更新点标记位置
}

// 清除 marker
function clearMarker() {
  if (marker) {
    marker.setMap(null);
    marker = null;
  }
}
