# Icon 图标 

### 基本用法

```html
<template>
  <div>
    <div>
    <w-icon size="1rem" name="home"></w-icon>
    <w-icon size="1rem" name="home" color="#996633"></w-icon>
    <w-icon size="1rem" name="home" size="1rem" color="#6633FF"></w-icon>
  </div>
  </div>
</template>
```

###  Icon 属性介绍 props

| 参数           | 说明         | 类型       | 可选值        | 默认值     |
|---------------|--------------|-----------|--------------|-----------|
| name          | 名称          | String    |              |          |
| color         | 字体颜色       | String    |              |          | 
| size          | 字体大小       | String    |              |          | 
| custom        | 是否自定义图标  | String    |              |   false  | 



###  Icon

<template>
    <div class="icon-section">
	    <div class="icon-section">
			<h3>Arrows &amp; Direction Icons </h3>
			<div class="icon-container">
				<span class="ti-arrow-up"></span><span class="icon-name"> arrow-up</span>
			</div>
			<div class="icon-container">
				<span class="ti-arrow-right"></span><span class="icon-name"> arrow-right</span>
			</div>
			<div class="icon-container">
				<span class="ti-arrow-left"></span><span class="icon-name"> arrow-left</span>
			</div>
			<div class="icon-container">
				<span class="ti-arrow-down"></span><span class="icon-name"> arrow-down</span>
			</div>
			<div class="icon-container">
				<span class="ti-arrows-vertical"></span><span class="icon-name"> arrows-vertical</span>
			</div>
			<div class="icon-container">
				<span class="ti-arrows-horizontal"></span><span class="icon-name"> arrows-horizontal</span>
			</div>
			<div class="icon-container">
				<span class="ti-angle-up"></span><span class="icon-name"> angle-up</span>
			</div>
			<div class="icon-container">
				<span class="ti-angle-right"></span><span class="icon-name"> angle-right</span>
			</div>
			<div class="icon-container">
				<span class="ti-angle-left"></span><span class="icon-name"> angle-left</span>
			</div>
			<div class="icon-container">
				<span class="ti-angle-down"></span><span class="icon-name"> angle-down</span>
			</div>	
			<div class="icon-container">
				<span class="ti-angle-double-up"></span><span class="icon-name"> angle-double-up</span>
			</div>
			<div class="icon-container">
				<span class="ti-angle-double-right"></span><span class="icon-name"> angle-double-right</span>
			</div>
			<div class="icon-container">
				<span class="ti-angle-double-left"></span><span class="icon-name"> angle-double-left</span>
			</div>
			<div class="icon-container">
				<span class="ti-angle-double-down"></span><span class="icon-name"> angle-double-down</span>
			</div>					
			<div class="icon-container">
				<span class="ti-move"></span><span class="icon-name"> move</span>
			</div>
			<div class="icon-container">
				<span class="ti-fullscreen"></span><span class="icon-name"> fullscreen</span>
			</div>
			<div class="icon-container">
				<span class="ti-arrow-top-right"></span><span class="icon-name"> arrow-top-right</span>
			</div>
			<div class="icon-container">
				<span class="ti-arrow-top-left"></span><span class="icon-name"> arrow-top-left</span>
			</div>
			<div class="icon-container">
				<span class="ti-arrow-circle-up"></span><span class="icon-name"> arrow-circle-up</span>
			</div>
			<div class="icon-container">
				<span class="ti-arrow-circle-right"></span><span class="icon-name"> arrow-circle-right</span>
			</div>
			<div class="icon-container">
				<span class="ti-arrow-circle-left"></span><span class="icon-name"> arrow-circle-left</span>
			</div>
			<div class="icon-container">
				<span class="ti-arrow-circle-down"></span><span class="icon-name"> arrow-circle-down</span>
			</div>
			<div class="icon-container">
				<span class="ti-arrows-corner"></span><span class="icon-name"> arrows-corner</span>
			</div>
			<div class="icon-container">
				<span class="ti-split-v"></span><span class="icon-name"> split-v</span>
			</div>
			<div class="icon-container">
				<span class="ti-split-v-alt"></span><span class="icon-name"> split-v-alt</span>
			</div>
			<div class="icon-container">
				<span class="ti-split-h"></span><span class="icon-name"> split-h</span>
			</div>
			<div class="icon-container">
				<span class="ti-hand-point-up"></span><span class="icon-name"> hand-point-up</span>
			</div>
			<div class="icon-container">
				<span class="ti-hand-point-right"></span><span class="icon-name"> hand-point-right</span>
			</div>
			<div class="icon-container">
				<span class="ti-hand-point-left"></span><span class="icon-name"> hand-point-left</span>
			</div>
			<div class="icon-container">
				<span class="ti-hand-point-down"></span><span class="icon-name"> hand-point-down</span>
			</div>
			<div class="icon-container">
				<span class="ti-back-right"></span><span class="icon-name"> back-right</span>
			</div>
			<div class="icon-container">
				<span class="ti-back-left"></span><span class="icon-name"> back-left</span>
			</div>
			<div class="icon-container">
				<span class="ti-exchange-vertical"></span><span class="icon-name"> exchange-vertical</span>
			</div>
		</div> <!-- Arrows Icons -->
		<h3>Web App Icons</h3>
		<div class="icon-section">
			<div class="icon-container">
				<span class="ti-wand"></span><span class="icon-name"> wand</span>
			</div>
			<div class="icon-container">
				<span class="ti-save"></span><span class="icon-name"> save</span>
			</div>
			<div class="icon-container">
				<span class="ti-save-alt"></span><span class="icon-name"> save-alt</span>
			</div>
			<div class="icon-container">
				<span class="ti-direction"></span><span class="icon-name"> direction</span>
			</div>
			<div class="icon-container">
				<span class="ti-direction-alt"></span><span class="icon-name"> direction-alt</span>
			</div>
			<div class="icon-container">
				<span class="ti-user"></span><span class="icon-name"> user</span>
			</div>
			<div class="icon-container">
				<span class="ti-link"></span><span class="icon-name"> link</span>
			</div>
			<div class="icon-container">
				<span class="ti-unlink"></span><span class="icon-name"> unlink</span>
			</div>
			<div class="icon-container">
				<span class="ti-trash"></span><span class="icon-name"> trash</span>
			</div>
			<div class="icon-container">
				<span class="ti-target"></span><span class="icon-name"> target</span>
			</div>
			<div class="icon-container">
				<span class="ti-tag"></span><span class="icon-name"> tag</span>
			</div>
			<div class="icon-container">
				<span class="ti-desktop"></span><span class="icon-name"> desktop</span>
			</div>
			<div class="icon-container">
				<span class="ti-tablet"></span><span class="icon-name"> tablet</span>
			</div>
			<div class="icon-container">
				<span class="ti-mobile"></span><span class="icon-name"> mobile</span>
			</div>
			<div class="icon-container">
				<span class="ti-email"></span><span class="icon-name"> email</span>
			</div>	
			<div class="icon-container">
				<span class="ti-star"></span><span class="icon-name"> star</span>
			</div>
			<div class="icon-container">
				<span class="ti-spray"></span><span class="icon-name"> spray</span>
			</div>
			<div class="icon-container">
				<span class="ti-signal"></span><span class="icon-name"> signal</span>
			</div>
			<div class="icon-container">
				<span class="ti-shopping-cart"></span><span class="icon-name"> shopping-cart</span>
			</div>
			<div class="icon-container">
				<span class="ti-shopping-cart-full"></span><span class="icon-name"> shopping-cart-full</span>
			</div>
			<div class="icon-container">
				<span class="ti-settings"></span><span class="icon-name"> settings</span>
			</div>
			<div class="icon-container">
				<span class="ti-search"></span><span class="icon-name"> search</span>
			</div>
			<div class="icon-container">
				<span class="ti-zoom-in"></span><span class="icon-name"> zoom-in</span>
			</div>
			<div class="icon-container">
				<span class="ti-zoom-out"></span><span class="icon-name"> zoom-out</span>
			</div>
			<div class="icon-container">
				<span class="ti-cut"></span><span class="icon-name"> cut</span>
			</div>
			<div class="icon-container">
				<span class="ti-ruler"></span><span class="icon-name"> ruler</span>
			</div>
			<div class="icon-container">
				<span class="ti-ruler-alt-2"></span><span class="icon-name"> ruler-alt-2</span>
			</div>			
			<div class="icon-container">
				<span class="ti-ruler-pencil"></span><span class="icon-name"> ruler-pencil</span>
			</div>
			<div class="icon-container">
				<span class="ti-ruler-alt"></span><span class="icon-name"> ruler-alt</span>
			</div>
			<div class="icon-container">
				<span class="ti-bookmark"></span><span class="icon-name"> bookmark</span>
			</div>
			<div class="icon-container">
				<span class="ti-bookmark-alt"></span><span class="icon-name"> bookmark-alt</span>
			</div>
			<div class="icon-container">
				<span class="ti-reload"></span><span class="icon-name"> reload</span>
			</div>
			<div class="icon-container">
				<span class="ti-plus"></span><span class="icon-name"> plus</span>
			</div>
			<div class="icon-container">
				<span class="ti-minus"></span><span class="icon-name"> minus</span>
			</div>
			<div class="icon-container">
				<span class="ti-close"></span><span class="icon-name"> close</span>
			</div>			
			<div class="icon-container">
				<span class="ti-pin"></span><span class="icon-name"> pin</span>
			</div>
			<div class="icon-container">
				<span class="ti-pencil"></span><span class="icon-name"> pencil</span>
			</div>
		  	<div class="icon-container">
				<span class="ti-pencil-alt"></span><span class="icon-name"> pencil-alt</span>
			</div>
			<div class="icon-container">
				<span class="ti-paint-roller"></span><span class="icon-name"> paint-roller</span>
			</div>
			<div class="icon-container">
				<span class="ti-paint-bucket"></span><span class="icon-name"> paint-bucket</span>
			</div>
			<div class="icon-container">
				<span class="ti-na"></span><span class="icon-name"> na</span>
			</div>
			<div class="icon-container">
				<span class="ti-medall"></span><span class="icon-name"> medall</span>
			</div>
			<div class="icon-container">
				<span class="ti-medall-alt"></span><span class="icon-name"> medall-alt</span>
			</div>
			<div class="icon-container">
				<span class="ti-marker"></span><span class="icon-name"> marker</span>
			</div>
			<div class="icon-container">
				<span class="ti-marker-alt"></span><span class="icon-name"> marker-alt</span>
			</div>
			<div class="icon-container">
				<span class="ti-lock"></span><span class="icon-name"> lock</span>
			</div>
			<div class="icon-container">
				<span class="ti-unlock"></span><span class="icon-name"> unlock</span>
			</div>
			<div class="icon-container">
				<span class="ti-location-arrow"></span><span class="icon-name"> location-arrow</span>
			</div>
			<div class="icon-container">
				<span class="ti-layout"></span><span class="icon-name"> layout</span>
			</div>
			<div class="icon-container">
				<span class="ti-layers"></span><span class="icon-name"> layers</span>
			</div>
			<div class="icon-container">
				<span class="ti-layers-alt"></span><span class="icon-name"> layers-alt</span>
			</div>
			<div class="icon-container">
				<span class="ti-key"></span><span class="icon-name"> key</span>
			</div>
			<div class="icon-container">
				<span class="ti-image"></span><span class="icon-name"> image</span>
			</div>
			<div class="icon-container">
				<span class="ti-heart"></span><span class="icon-name"> heart</span>
			</div>
			<div class="icon-container">
				<span class="ti-heart-broken"></span><span class="icon-name"> heart-broken</span>
			</div>
			<div class="icon-container">
				<span class="ti-hand-stop"></span><span class="icon-name"> hand-stop</span>
			</div>
			<div class="icon-container">
				<span class="ti-hand-open"></span><span class="icon-name"> hand-open</span>
			</div>
			<div class="icon-container">
				<span class="ti-hand-drag"></span><span class="icon-name"> hand-drag</span>
			</div>
			<div class="icon-container">
				<span class="ti-flag"></span><span class="icon-name"> flag</span>
			</div>
			<div class="icon-container">
				<span class="ti-flag-alt"></span><span class="icon-name"> flag-alt</span>
			</div>
			<div class="icon-container">
				<span class="ti-flag-alt-2"></span><span class="icon-name"> flag-alt-2</span>
			</div>
			<div class="icon-container">
				<span class="ti-eye"></span><span class="icon-name"> eye</span>
			</div>
			<div class="icon-container">
				<span class="ti-import"></span><span class="icon-name"> import</span>
			</div>			
			<div class="icon-container">
				<span class="ti-export"></span><span class="icon-name"> export</span>
			</div>
			<div class="icon-container">
				<span class="ti-cup"></span><span class="icon-name"> cup</span>
			</div>
			<div class="icon-container">
				<span class="ti-crown"></span><span class="icon-name"> crown</span>
			</div>
			<div class="icon-container">
				<span class="ti-comments"></span><span class="icon-name"> comments</span>
			</div>
			<div class="icon-container">
				<span class="ti-comment"></span><span class="icon-name"> comment</span>
			</div>
			<div class="icon-container">
				<span class="ti-comment-alt"></span><span class="icon-name"> comment-alt</span>
			</div>
			<div class="icon-container">
				<span class="ti-thought"></span><span class="icon-name"> thought</span>
			</div>			
			<div class="icon-container">
				<span class="ti-clip"></span><span class="icon-name"> clip</span>
			</div>
			<div class="icon-container">
				<span class="ti-check"></span><span class="icon-name"> check</span>
			</div>
			<div class="icon-container">
				<span class="ti-check-box"></span><span class="icon-name"> check-box</span>
			</div>
			<div class="icon-container">
				<span class="ti-camera"></span><span class="icon-name"> camera</span>
			</div>
			<div class="icon-container">
				<span class="ti-announcement"></span><span class="icon-name"> announcement</span>
			</div>
			<div class="icon-container">
				<span class="ti-brush"></span><span class="icon-name"> brush</span>
			</div>
			<div class="icon-container">
				<span class="ti-brush-alt"></span><span class="icon-name"> brush-alt</span>
			</div>
			<div class="icon-container">
				<span class="ti-palette"></span><span class="icon-name"> palette</span>
			</div>			
			<div class="icon-container">
				<span class="ti-briefcase"></span><span class="icon-name"> briefcase</span>
			</div>
			<div class="icon-container">
				<span class="ti-bolt"></span><span class="icon-name"> bolt</span>
			</div>
			<div class="icon-container">
				<span class="ti-bolt-alt"></span><span class="icon-name"> bolt-alt</span>
			</div>
			<div class="icon-container">
				<span class="ti-blackboard"></span><span class="icon-name"> blackboard</span>
			</div>
			<div class="icon-container">
				<span class="ti-bag"></span><span class="icon-name"> bag</span>
			</div>
			<div class="icon-container">
				<span class="ti-world"></span><span class="icon-name"> world</span>
			</div>
			<div class="icon-container">
				<span class="ti-wheelchair"></span><span class="icon-name"> wheelchair</span>
			</div>
			<div class="icon-container">
				<span class="ti-car"></span><span class="icon-name"> car</span>
			</div>
			<div class="icon-container">
				<span class="ti-truck"></span><span class="icon-name"> truck</span>
			</div>
			<div class="icon-container">
				<span class="ti-timer"></span><span class="icon-name"> timer</span>
			</div>
			<div class="icon-container">
				<span class="ti-ticket"></span><span class="icon-name"> ticket</span>
			</div>
			<div class="icon-container">
				<span class="ti-thumb-up"></span><span class="icon-name"> thumb-up</span>
			</div>
			<div class="icon-container">
				<span class="ti-thumb-down"></span><span class="icon-name"> thumb-down</span>
			</div>
			<div class="icon-container">
				<span class="ti-stats-up"></span><span class="icon-name"> stats-up</span>
			</div>
			<div class="icon-container">
				<span class="ti-stats-down"></span><span class="icon-name"> stats-down</span>
			</div>
			<div class="icon-container">
				<span class="ti-shine"></span><span class="icon-name"> shine</span>
			</div>
			<div class="icon-container">
				<span class="ti-shift-right"></span><span class="icon-name"> shift-right</span>
			</div>
			<div class="icon-container">
				<span class="ti-shift-left"></span><span class="icon-name"> shift-left</span>
			</div>
			<div class="icon-container">
				<span class="ti-shift-right-alt"></span><span class="icon-name"> shift-right-alt</span>
			</div>
			<div class="icon-container">
				<span class="ti-shift-left-alt"></span><span class="icon-name"> shift-left-alt</span>
			</div>
			<div class="icon-container">
				<span class="ti-shield"></span><span class="icon-name"> shield</span>
			</div>
			<div class="icon-container">
				<span class="ti-notepad"></span><span class="icon-name"> notepad</span>
			</div>
			<div class="icon-container">
				<span class="ti-server"></span><span class="icon-name"> server</span>
			</div>
			<div class="icon-container">
				<span class="ti-pulse"></span><span class="icon-name"> pulse</span>
			</div>
			<div class="icon-container">
				<span class="ti-printer"></span><span class="icon-name"> printer</span>
			</div>
			<div class="icon-container">
				<span class="ti-power-off"></span><span class="icon-name"> power-off</span>
			</div>
			<div class="icon-container">
				<span class="ti-plug"></span><span class="icon-name"> plug</span>
			</div>
			<div class="icon-container">
				<span class="ti-pie-chart"></span><span class="icon-name"> pie-chart</span>
			</div>
			<div class="icon-container">
				<span class="ti-panel"></span><span class="icon-name"> panel</span>
			</div>
			<div class="icon-container">
				<span class="ti-package"></span><span class="icon-name"> package</span>
			</div>
			<div class="icon-container">
				<span class="ti-music"></span><span class="icon-name"> music</span>
			</div>
			<div class="icon-container">
				<span class="ti-music-alt"></span><span class="icon-name"> music-alt</span>
			</div>
			<div class="icon-container">
				<span class="ti-mouse"></span><span class="icon-name"> mouse</span>
			</div>
			<div class="icon-container">
				<span class="ti-mouse-alt"></span><span class="icon-name"> mouse-alt</span>
			</div>
			<div class="icon-container">
				<span class="ti-money"></span><span class="icon-name"> money</span>
			</div>
			<div class="icon-container">
				<span class="ti-microphone"></span><span class="icon-name"> microphone</span>
			</div>
			<div class="icon-container">
				<span class="ti-menu"></span><span class="icon-name"> menu</span>
			</div>
			<div class="icon-container">
				<span class="ti-menu-alt"></span><span class="icon-name"> menu-alt</span>
			</div>
			<div class="icon-container">
				<span class="ti-map"></span><span class="icon-name"> map</span>
			</div>
			<div class="icon-container">
				<span class="ti-map-alt"></span><span class="icon-name"> map-alt</span>
			</div>
			<div class="icon-container">
				<span class="ti-location-pin"></span><span class="icon-name"> location-pin</span>
			</div>
			<div class="icon-container">
				<span class="ti-light-bulb"></span><span class="icon-name"> light-bulb</span>
			</div>
			<div class="icon-container">
				<span class="ti-info"></span><span class="icon-name"> info</span>
			</div>
			<div class="icon-container">
				<span class="ti-infinite"></span><span class="icon-name"> infinite</span>
			</div>
			<div class="icon-container">
				<span class="ti-id-badge"></span><span class="icon-name"> id-badge</span>
			</div>
			<div class="icon-container">
				<span class="ti-hummer"></span><span class="icon-name"> hummer</span>
			</div>
			<div class="icon-container">
				<span class="ti-home"></span><span class="icon-name"> home</span>
			</div>
			<div class="icon-container">
				<span class="ti-help"></span><span class="icon-name"> help</span>
			</div>
			<div class="icon-container">
				<span class="ti-headphone"></span><span class="icon-name"> headphone</span>
			</div>
			<div class="icon-container">
				<span class="ti-harddrives"></span><span class="icon-name"> harddrives</span>
			</div>
			<div class="icon-container">
				<span class="ti-harddrive"></span><span class="icon-name"> harddrive</span>
			</div>
			<div class="icon-container">
				<span class="ti-gift"></span><span class="icon-name"> gift</span>
			</div>
			<div class="icon-container">
				<span class="ti-game"></span><span class="icon-name"> game</span>
			</div>
			<div class="icon-container">
				<span class="ti-filter"></span><span class="icon-name"> filter</span>
			</div>
			<div class="icon-container">
				<span class="ti-files"></span><span class="icon-name"> files</span>
			</div>
			<div class="icon-container">
				<span class="ti-file"></span><span class="icon-name"> file</span>
			</div>
			<div class="icon-container">
				<span class="ti-zip"></span><span class="icon-name"> zip</span>
			</div>
			<div class="icon-container">
				<span class="ti-folder"></span><span class="icon-name"> folder</span>
			</div>			
			<div class="icon-container">
				<span class="ti-envelope"></span><span class="icon-name"> envelope</span>
			</div>
			<div class="icon-container">
				<span class="ti-dashboard"></span><span class="icon-name"> dashboard</span>
			</div>
			<div class="icon-container">
				<span class="ti-cloud"></span><span class="icon-name"> cloud</span>
			</div>
			<div class="icon-container">
				<span class="ti-cloud-up"></span><span class="icon-name"> cloud-up</span>
			</div>
			<div class="icon-container">
				<span class="ti-cloud-down"></span><span class="icon-name"> cloud-down</span>
			</div>
			<div class="icon-container">
				<span class="ti-clipboard"></span><span class="icon-name"> clipboard</span>
			</div>
			<div class="icon-container">
				<span class="ti-calendar"></span><span class="icon-name"> calendar</span>
			</div>
			<div class="icon-container">
				<span class="ti-book"></span><span class="icon-name"> book</span>
			</div>
			<div class="icon-container">
				<span class="ti-bell"></span><span class="icon-name"> bell</span>
			</div>
			<div class="icon-container">
				<span class="ti-basketball"></span><span class="icon-name"> basketball</span>
			</div>
			<div class="icon-container">
				<span class="ti-bar-chart"></span><span class="icon-name"> bar-chart</span>
			</div>
			<div class="icon-container">
				<span class="ti-bar-chart-alt"></span><span class="icon-name"> bar-chart-alt</span>
			</div>
			<div class="icon-container">
				<span class="ti-archive"></span><span class="icon-name"> archive</span>
			</div>
			<div class="icon-container">
				<span class="ti-anchor"></span><span class="icon-name"> anchor</span>
			</div>
			<div class="icon-container">
				<span class="ti-alert"></span><span class="icon-name"> alert</span>
			</div>
			<div class="icon-container">
				<span class="ti-alarm-clock"></span><span class="icon-name"> alarm-clock</span>
			</div>
			<div class="icon-container">
				<span class="ti-agenda"></span><span class="icon-name"> agenda</span>
			</div>
			<div class="icon-container">
				<span class="ti-write"></span><span class="icon-name"> write</span>
			</div>
			<div class="icon-container">
				<span class="ti-wallet"></span><span class="icon-name"> wallet</span>
			</div>
			<div class="icon-container">
				<span class="ti-video-clapper"></span><span class="icon-name"> video-clapper</span>
			</div>
			<div class="icon-container">
				<span class="ti-video-camera"></span><span class="icon-name"> video-camera</span>
			</div>
			<div class="icon-container">
				<span class="ti-vector"></span><span class="icon-name"> vector</span>
			</div>
			<div class="icon-container">
				<span class="ti-support"></span><span class="icon-name"> support</span>
			</div>
			<div class="icon-container">
				<span class="ti-stamp"></span><span class="icon-name"> stamp</span>
			</div>
			<div class="icon-container">
				<span class="ti-slice"></span><span class="icon-name"> slice</span>
			</div>
			<div class="icon-container">
				<span class="ti-shortcode"></span><span class="icon-name"> shortcode</span>
			</div>
			<div class="icon-container">
				<span class="ti-receipt"></span><span class="icon-name"> receipt</span>
			</div>
			<div class="icon-container">
				<span class="ti-pin2"></span><span class="icon-name"> pin2</span>
			</div>
			<div class="icon-container">
				<span class="ti-pin-alt"></span><span class="icon-name"> pin-alt</span>
			</div>
			<div class="icon-container">
				<span class="ti-pencil-alt2"></span><span class="icon-name"> pencil-alt2</span>
			</div>
			<div class="icon-container">
				<span class="ti-eraser"></span><span class="icon-name"> eraser</span>
			</div>			
			<div class="icon-container">
				<span class="ti-more"></span><span class="icon-name"> more</span>
			</div>
			<div class="icon-container">
				<span class="ti-more-alt"></span><span class="icon-name"> more-alt</span>
			</div>
			<div class="icon-container">
				<span class="ti-microphone-alt"></span><span class="icon-name"> microphone-alt</span>
			</div>
			<div class="icon-container">
				<span class="ti-magnet"></span><span class="icon-name"> magnet</span>
			</div>
			<div class="icon-container">
				<span class="ti-line-double"></span><span class="icon-name"> line-double</span>
			</div>
			<div class="icon-container">
				<span class="ti-line-dotted"></span><span class="icon-name"> line-dotted</span>
			</div>
			<div class="icon-container">
				<span class="ti-line-dashed"></span><span class="icon-name"> line-dashed</span>
			</div>
			<div class="icon-container">
				<span class="ti-ink-pen"></span><span class="icon-name"> ink-pen</span>
			</div>
			<div class="icon-container">
				<span class="ti-info-alt"></span><span class="icon-name"> info-alt</span>
			</div>
			<div class="icon-container">
				<span class="ti-help-alt"></span><span class="icon-name"> help-alt</span>
			</div>
			<div class="icon-container">
				<span class="ti-headphone-alt"></span><span class="icon-name"> headphone-alt</span>
			</div>
			<div class="icon-container">
				<span class="ti-gallery"></span><span class="icon-name"> gallery</span>
			</div>
			<div class="icon-container">
				<span class="ti-face-smile"></span><span class="icon-name"> face-smile</span>
			</div>
			<div class="icon-container">
				<span class="ti-face-sad"></span><span class="icon-name"> face-sad</span>
			</div>
			<div class="icon-container">
				<span class="ti-credit-card"></span><span class="icon-name"> credit-card</span>
			</div>
			<div class="icon-container">
				<span class="ti-comments-smiley"></span><span class="icon-name"> comments-smiley</span>
			</div>
			<div class="icon-container">
				<span class="ti-time"></span><span class="icon-name"> time</span>
			</div>
			<div class="icon-container">
				<span class="ti-share"></span><span class="icon-name"> share</span>
			</div>
			<div class="icon-container">
				<span class="ti-share-alt"></span><span class="icon-name"> share-alt</span>
			</div>
			<div class="icon-container">
				<span class="ti-rocket"></span><span class="icon-name"> rocket</span>
			</div>
			<div class="icon-container">
				<span class="ti-new-window"></span><span class="icon-name"> new-window</span>
			</div>
			<div class="icon-container">
				<span class="ti-rss"></span><span class="icon-name"> rss</span>
			</div>
			<div class="icon-container">
				<span class="ti-rss-alt"></span><span class="icon-name"> rss-alt</span>
			</div>
		</div>
		<div class="icon-section">
			<h3>Control Icons</h3>
			<div class="icon-container">
				<span class="ti-control-stop"></span><span class="icon-name"> control-stop</span>
			</div>
			<div class="icon-container">
				<span class="ti-control-shuffle"></span><span class="icon-name"> control-shuffle</span>
			</div>
			<div class="icon-container">
				<span class="ti-control-play"></span><span class="icon-name"> control-play</span>
			</div>
			<div class="icon-container">
				<span class="ti-control-pause"></span><span class="icon-name"> control-pause</span>
			</div>
			<div class="icon-container">
				<span class="ti-control-forward"></span><span class="icon-name"> control-forward</span>
			</div>
			<div class="icon-container">
				<span class="ti-control-backward"></span><span class="icon-name"> control-backward</span>
			</div>	
			<div class="icon-container">
				<span class="ti-volume"></span><span class="icon-name"> volume</span>
			</div>
			<div class="icon-container">
				<span class="ti-control-skip-forward"></span><span class="icon-name"> control-skip-forward</span>
			</div>
			<div class="icon-container">
				<span class="ti-control-skip-backward"></span><span class="icon-name"> control-skip-backward</span>
			</div>
			<div class="icon-container">
				<span class="ti-control-record"></span><span class="icon-name"> control-record</span>
			</div>
			<div class="icon-container">
				<span class="ti-control-eject"></span><span class="icon-name"> control-eject</span>
			</div>			
		</div>
		<div class="icon-section">
			<h3>Text Editor</h3>
			<div class="icon-container">
				<span class="ti-paragraph"></span><span class="icon-name"> paragraph</span>
			</div>
			<div class="icon-container">
				<span class="ti-uppercase"></span><span class="icon-name"> uppercase</span>
			</div>
			<div class="icon-container">
				<span class="ti-underline"></span><span class="icon-name"> underline</span>
			</div>
			<div class="icon-container">
				<span class="ti-text"></span><span class="icon-name"> text</span>
			</div>
			<div class="icon-container">
				<span class="ti-Italic"></span><span class="icon-name"> ti-Italic</span>
			</div>
			<div class="icon-container">
				<span class="ti-smallcap"></span><span class="icon-name"> smallcap</span>
			</div>
			<div class="icon-container">
				<span class="ti-list"></span><span class="icon-name"> list</span>
			</div>
			<div class="icon-container">
				<span class="ti-list-ol"></span><span class="icon-name"> list-ol</span>
			</div>
			<div class="icon-container">
				<span class="ti-align-right"></span><span class="icon-name"> align-right</span>
			</div>
			<div class="icon-container">
				<span class="ti-align-left"></span><span class="icon-name"> align-left</span>
			</div>
			<div class="icon-container">
				<span class="ti-align-justify"></span><span class="icon-name"> align-justify</span>
			</div>
			<div class="icon-container">
				<span class="ti-align-center"></span><span class="icon-name"> align-center</span>
			</div>
			<div class="icon-container">
				<span class="ti-quote-right"></span><span class="icon-name"> quote-right</span>
			</div>
			<div class="icon-container">
				<span class="ti-quote-left"></span><span class="icon-name"> quote-left</span>
			</div>
		</div> <!-- Text Editor -->
		<div class="icon-section">
			<h3>Layout Icons</h3>
			<div class="icon-container">
				<span class="ti-layout-width-full"></span><span class="icon-name"> layout-width-full</span>
			</div>
			<div class="icon-container">
				<span class="ti-layout-width-default"></span><span class="icon-name"> layout-width-default</span>
			</div>
			<div class="icon-container">
				<span class="ti-layout-width-default-alt"></span><span class="icon-name"> layout-width-default-alt</span>
			</div>
			<div class="icon-container">
				<span class="ti-layout-tab"></span><span class="icon-name"> layout-tab</span>
			</div>
			<div class="icon-container">
				<span class="ti-layout-tab-window"></span><span class="icon-name"> layout-tab-window</span>
			</div>
			<div class="icon-container">
				<span class="ti-layout-tab-v"></span><span class="icon-name"> layout-tab-v</span>
			</div>
			<div class="icon-container">
				<span class="ti-layout-tab-min"></span><span class="icon-name"> layout-tab-min</span>
			</div>
			<div class="icon-container">
				<span class="ti-layout-slider"></span><span class="icon-name"> layout-slider</span>
			</div>
			<div class="icon-container">
				<span class="ti-layout-slider-alt"></span><span class="icon-name"> layout-slider-alt</span>
			</div>
			<div class="icon-container">
				<span class="ti-layout-sidebar-right"></span><span class="icon-name"> layout-sidebar-right</span>
			</div>
			<div class="icon-container">
				<span class="ti-layout-sidebar-none"></span><span class="icon-name"> layout-sidebar-none</span>
			</div>
			<div class="icon-container">
				<span class="ti-layout-sidebar-left"></span><span class="icon-name"> layout-sidebar-left</span>
			</div>
			<div class="icon-container">
				<span class="ti-layout-placeholder"></span><span class="icon-name"> layout-placeholder</span>
			</div>
			<div class="icon-container">
				<span class="ti-layout-menu"></span><span class="icon-name"> layout-menu</span>
			</div>
			<div class="icon-container">
				<span class="ti-layout-menu-v"></span><span class="icon-name"> layout-menu-v</span>
			</div>
			<div class="icon-container">
				<span class="ti-layout-menu-separated"></span><span class="icon-name"> layout-menu-separated</span>
			</div>
			<div class="icon-container">
				<span class="ti-layout-menu-full"></span><span class="icon-name"> layout-menu-full</span>
			</div>
			<div class="icon-container">
				<span class="ti-layout-media-right"></span><span class="icon-name"> layout-media-right</span>
			</div>
			<div class="icon-container">
				<span class="ti-layout-media-right-alt"></span><span class="icon-name"> layout-media-right-alt</span>
			</div>
			<div class="icon-container">
				<span class="ti-layout-media-overlay"></span><span class="icon-name"> layout-media-overlay</span>
			</div>
			<div class="icon-container">
				<span class="ti-layout-media-overlay-alt"></span><span class="icon-name"> layout-media-overlay-alt</span>
			</div>
			<div class="icon-container">
				<span class="ti-layout-media-overlay-alt-2"></span><span class="icon-name"> layout-media-overlay-alt-2</span>
			</div>
			<div class="icon-container">
				<span class="ti-layout-media-left"></span><span class="icon-name"> layout-media-left</span>
			</div>
			<div class="icon-container">
				<span class="ti-layout-media-left-alt"></span><span class="icon-name"> layout-media-left-alt</span>
			</div>
			<div class="icon-container">
				<span class="ti-layout-media-center"></span><span class="icon-name"> layout-media-center</span>
			</div>
			<div class="icon-container">
				<span class="ti-layout-media-center-alt"></span><span class="icon-name"> layout-media-center-alt</span>
			</div>
			<div class="icon-container">
				<span class="ti-layout-list-thumb"></span><span class="icon-name"> layout-list-thumb</span>
			</div>
			<div class="icon-container">
				<span class="ti-layout-list-thumb-alt"></span><span class="icon-name"> layout-list-thumb-alt</span>
			</div>
			<div class="icon-container">
				<span class="ti-layout-list-post"></span><span class="icon-name"> layout-list-post</span>
			</div>
			<div class="icon-container">
				<span class="ti-layout-list-large-image"></span><span class="icon-name"> layout-list-large-image</span>
			</div>
			<div class="icon-container">
				<span class="ti-layout-line-solid"></span><span class="icon-name"> layout-line-solid</span>
			</div>
			<div class="icon-container">
				<span class="ti-layout-grid4"></span><span class="icon-name"> layout-grid4</span>
			</div>
			<div class="icon-container">
				<span class="ti-layout-grid3"></span><span class="icon-name"> layout-grid3</span>
			</div>
			<div class="icon-container">
				<span class="ti-layout-grid2"></span><span class="icon-name"> layout-grid2</span>
			</div>
			<div class="icon-container">
				<span class="ti-layout-grid2-thumb"></span><span class="icon-name"> layout-grid2-thumb</span>
			</div>
			<div class="icon-container">
				<span class="ti-layout-cta-right"></span><span class="icon-name"> layout-cta-right</span>
			</div>
			<div class="icon-container">
				<span class="ti-layout-cta-left"></span><span class="icon-name"> layout-cta-left</span>
			</div>
			<div class="icon-container">
				<span class="ti-layout-cta-center"></span><span class="icon-name"> layout-cta-center</span>
			</div>
			<div class="icon-container">
				<span class="ti-layout-cta-btn-right"></span><span class="icon-name"> layout-cta-btn-right</span>
			</div>
			<div class="icon-container">
				<span class="ti-layout-cta-btn-left"></span><span class="icon-name"> layout-cta-btn-left</span>
			</div>
			<div class="icon-container">
				<span class="ti-layout-column4"></span><span class="icon-name"> layout-column4</span>
			</div>
			<div class="icon-container">
				<span class="ti-layout-column3"></span><span class="icon-name"> layout-column3</span>
			</div>
			<div class="icon-container">
				<span class="ti-layout-column2"></span><span class="icon-name"> layout-column2</span>
			</div>
			<div class="icon-container">
				<span class="ti-layout-accordion-separated"></span><span class="icon-name"> layout-accordion-separated</span>
			</div>
			<div class="icon-container">
				<span class="ti-layout-accordion-merged"></span><span class="icon-name"> layout-accordion-merged</span>
			</div>
			<div class="icon-container">
				<span class="ti-layout-accordion-list"></span><span class="icon-name"> layout-accordion-list</span>
			</div>
			<div class="icon-container">
				<span class="ti-widgetized"></span><span class="icon-name"> widgetized</span>
			</div>
			<div class="icon-container">
				<span class="ti-widget"></span><span class="icon-name"> widget</span>
			</div>
			<div class="icon-container">
				<span class="ti-widget-alt"></span><span class="icon-name"> widget-alt</span>
			</div>
			<div class="icon-container">
				<span class="ti-view-list"></span><span class="icon-name"> view-list</span>
			</div>
			<div class="icon-container">
				<span class="ti-view-list-alt"></span><span class="icon-name"> view-list-alt</span>
			</div>
			<div class="icon-container">
				<span class="ti-view-grid"></span><span class="icon-name"> view-grid</span>
			</div>
			<div class="icon-container">
				<span class="ti-upload"></span><span class="icon-name"> upload</span>
			</div>
			<div class="icon-container">
				<span class="ti-download"></span><span class="icon-name"> download</span>
			</div>	
			<div class="icon-container">
				<span class="ti-loop"></span><span class="icon-name"> loop</span>
			</div>
			<div class="icon-container">
				<span class="ti-layout-sidebar-2"></span><span class="icon-name"> layout-sidebar-2</span>
			</div>
			<div class="icon-container">
				<span class="ti-layout-grid4-alt"></span><span class="icon-name"> layout-grid4-alt</span>
			</div>
			<div class="icon-container">
				<span class="ti-layout-grid3-alt"></span><span class="icon-name"> layout-grid3-alt</span>
			</div>
			<div class="icon-container">
				<span class="ti-layout-grid2-alt"></span><span class="icon-name"> layout-grid2-alt</span>
			</div>
			<div class="icon-container">
				<span class="ti-layout-column4-alt"></span><span class="icon-name"> layout-column4-alt</span>
			</div>
			<div class="icon-container">
				<span class="ti-layout-column3-alt"></span><span class="icon-name"> layout-column3-alt</span>
			</div>
			<div class="icon-container">
				<span class="ti-layout-column2-alt"></span><span class="icon-name"> layout-column2-alt</span>
			</div>		
		</div> <!-- Layout Icons -->
		<div class="icon-section">
			<h3>Brand Icons</h3>
			<div class="icon-container">
				<span class="ti-flickr"></span><span class="icon-name"> flickr</span>
			</div>
			<div class="icon-container">
				<span class="ti-flickr-alt"></span><span class="icon-name"> flickr-alt</span>
			</div>			
			<div class="icon-container">
				<span class="ti-instagram"></span><span class="icon-name"> instagram</span>
			</div>
			<div class="icon-container">
				<span class="ti-google"></span><span class="icon-name"> google</span>
			</div>
			<div class="icon-container">
				<span class="ti-github"></span><span class="icon-name"> github</span>
			</div>
			<div class="icon-container">
				<span class="ti-facebook"></span><span class="icon-name"> facebook</span>
			</div>
			<div class="icon-container">
				<span class="ti-dropbox"></span><span class="icon-name"> dropbox</span>
			</div>
			<div class="icon-container">
				<span class="ti-dropbox-alt"></span><span class="icon-name"> dropbox-alt</span>
			</div>
			<div class="icon-container">
				<span class="ti-dribbble"></span><span class="icon-name"> dribbble</span>
			</div>
			<div class="icon-container">
				<span class="ti-apple"></span><span class="icon-name"> apple</span>
			</div>
			<div class="icon-container">
				<span class="ti-android"></span><span class="icon-name"> android</span>
			</div>
			<div class="icon-container">
				<span class="ti-yahoo"></span><span class="icon-name"> yahoo</span>
			</div>
			<div class="icon-container">
				<span class="ti-trello"></span><span class="icon-name"> trello</span>
			</div>
			<div class="icon-container">
				<span class="ti-stack-overflow"></span><span class="icon-name"> stack-overflow</span>
			</div>
			<div class="icon-container">
				<span class="ti-soundcloud"></span><span class="icon-name"> soundcloud</span>
			</div>
			<div class="icon-container">
				<span class="ti-sharethis"></span><span class="icon-name"> sharethis</span>
			</div>
			<div class="icon-container">
				<span class="ti-sharethis-alt"></span><span class="icon-name"> sharethis-alt</span>
			</div>
			<div class="icon-container">
				<span class="ti-reddit"></span><span class="icon-name"> reddit</span>
			</div>
			<div class="icon-container">
				<span class="ti-microsoft"></span><span class="icon-name"> microsoft</span>
			</div>
			<div class="icon-container">
				<span class="ti-microsoft-alt"></span><span class="icon-name"> microsoft-alt</span>
			</div>
			<div class="icon-container">
				<span class="ti-linux"></span><span class="icon-name"> linux</span>
			</div>
			<div class="icon-container">
				<span class="ti-jsfiddle"></span><span class="icon-name"> jsfiddle</span>
			</div>
			<div class="icon-container">
				<span class="ti-joomla"></span><span class="icon-name"> joomla</span>
			</div>
			<div class="icon-container">
				<span class="ti-html5"></span><span class="icon-name"> html5</span>
			</div>
			<div class="icon-container">
				<span class="ti-css3"></span><span class="icon-name"> css3</span>
			</div>	
			<div class="icon-container">
				<span class="ti-drupal"></span><span class="icon-name"> drupal</span>
			</div>
			<div class="icon-container">
				<span class="ti-wordpress"></span><span class="icon-name"> wordpress</span>
			</div>		
			<div class="icon-container">
				<span class="ti-tumblr"></span><span class="icon-name"> tumblr</span>
			</div>
			<div class="icon-container">
				<span class="ti-tumblr-alt"></span><span class="icon-name"> tumblr-alt</span>
			</div>
			<div class="icon-container">
				<span class="ti-skype"></span><span class="icon-name"> skype</span>
			</div>
			<div class="icon-container">
				<span class="ti-youtube"></span><span class="icon-name"> youtube</span>
			</div>
			<div class="icon-container">
				<span class="ti-vimeo"></span><span class="icon-name"> vimeo</span>
			</div>
			<div class="icon-container">
				<span class="ti-vimeo-alt"></span><span class="icon-name"> vimeo-alt</span>
			</div>			
			<div class="icon-container">
				<span class="ti-twitter"></span><span class="icon-name"> twitter</span>
			</div>
			<div class="icon-container">
				<span class="ti-twitter-alt"></span><span class="icon-name"> twitter-alt</span>
			</div>
			<div class="icon-container">
				<span class="ti-linkedin"></span><span class="icon-name"> linkedin</span>
			</div>
			<div class="icon-container">
				<span class="ti-pinterest"></span><span class="icon-name"> pinterest</span>
			</div>
			<div class="icon-container">
				<span class="ti-pinterest-alt"></span><span class="icon-name"> pinterest-alt</span>
			</div>
			<div class="icon-container">
				<span class="ti-themify-logo"></span><span class="icon-name"> themify-logo</span>
			</div>
			<div class="icon-container">
				<span class="ti-themify-favicon"></span><span class="icon-name"> themify-favicon</span>
			</div>
			<div class="icon-container">
				<span class="ti-themify-favicon-alt"></span><span class="icon-name"> themify-favicon-alt</span>
			</div>
		</div> <!-- brand Icons -->
	</div>
  </div>
</template>

<script>
import '../../packages/icon/src/icons.less';
</script>

<style lang="less">
	.icon-container{
		display: inline-block;
		width: 220px;
	}
</style>