# Icon 图标 

### 基本用法

```javascript
<template>
  <div>
    <div>
    <w-icon name="home"></w-icon>
    <w-icon name="home" color="#996633"></w-icon>
    <w-icon name="home" size="1rem" color="#6633FF"></w-icon>
  </div>
  </div>
</template>
```


###  Icon 属性介绍 attribute

| 参数           | 说明         | 类型       | 可选值        | 默认值     |
|---------------|--------------|-----------|--------------|-----------|
| name          | 名称          | String    |              |          |
| color         | 字体颜色       | String    |              |          | 
| size          | 字体大小       | String    |              |          | 
| custom        | 是否自定义图标  | String    |              |   false  | 



###  Icon

<template>
  <div>
    <div class="all-icon">
        <div class="items">
            <w-icon name="chart"></w-icon>
            <span class="mls"> chart</span>
        </div>
        <div class="items">
            <w-icon name="plus"></w-icon>
            <span class="mls"> plus</span>
        </div>
        <div class="items">
            <w-icon name="minus"></w-icon>
            <span class="mls"> minus</span>
        </div>
        <div class="items">
            <w-icon name="bug"></w-icon>
            <span class="mls"> bug</span>
        </div>
        <div class="items">
            <w-icon name="pointer"></w-icon>
            <span class="mls"> pointer</span>
        </div>
        <div class="items">
            <w-icon name="checkmark"></w-icon>
            <span class="mls"> checkmark</span>
        </div>
        <div class="items">
            <w-icon name="cancel"></w-icon>
            <span class="mls"> cancel</span>
        </div>
        <div class="items">
            <w-icon name="list"></w-icon>
            <span class="mls"> list</span>
        </div>
        <div class="items">
            <w-icon name="grid"></w-icon>
            <span class="mls"> grid</span>
        </div>
        <div class="items">
            <w-icon name="stats"></w-icon>
            <span class="mls"> stats</span>
        </div>
        <div class="items">
            <w-icon name="paperclip"></w-icon>
            <span class="mls"> paperclip</span>
        </div>
        <div class="items">
            <w-icon name="floppy"></w-icon>
            <span class="mls"> floppy</span>
        </div>
        <div class="items">
            <w-icon name="filter"></w-icon>
            <span class="mls"> filter</span>
        </div>
        <div class="items">
            <w-icon name="diary"></w-icon>
            <span class="mls"> diary</span>
        </div>
        <div class="items">
            <w-icon name="addressbook"></w-icon>
            <span class="mls"> addressbook</span>
        </div>
        <div class="items">
            <w-icon name="stop"></w-icon>
            <span class="mls"> stop</span>
        </div>
        <div class="items">
            <w-icon name="shit"></w-icon>
            <span class="mls"> shit</span>
        </div>
        <div class="items">
            <w-icon name="camera"></w-icon>
            <span class="mls"> camera</span>
        </div>
        <div class="items">
            <w-icon name="lamp"></w-icon>
            <span class="mls"> lamp</span>
        </div>
        <div class="items">
            <w-icon name="database"></w-icon>
            <span class="mls"> database</span>
        </div>
        <div class="items">
            <w-icon name="atom"></w-icon>
            <span class="mls"> atom</span>
        </div>
        <div class="items">
            <w-icon name="battery"></w-icon>
            <span class="mls"> battery</span>
        </div>
        <div class="items">
            <w-icon name="code"></w-icon>
            <span class="mls"> code</span>
        </div>
        <div class="items">
            <w-icon name="home"></w-icon>
            <span class="mls"> home</span>
        </div>
        <div class="items">
            <w-icon name="home2"></w-icon>
            <span class="mls"> home2</span>
        </div>
        <div class="items">
            <w-icon name="home3"></w-icon>
            <span class="mls"> home3</span>
        </div>
        <div class="items">
            <w-icon name="office"></w-icon>
            <span class="mls"> office</span>
        </div>
        <div class="items">
            <w-icon name="newspaper"></w-icon>
            <span class="mls"> newspaper</span>
        </div>
        <div class="items">
            <w-icon name="pencil"></w-icon>
            <span class="mls"> pencil</span>
        </div>
        <div class="items">
            <w-icon name="pencil2"></w-icon>
            <span class="mls"> pencil2</span>
        </div>
        <div class="items">
            <w-icon name="eyedropper"></w-icon>
            <span class="mls"> eyedropper</span>
        </div>
        <div class="items">
            <w-icon name="droplet"></w-icon>
            <span class="mls"> droplet</span>
        </div>
        <div class="items">
            <w-icon name="paint-format"></w-icon>
            <span class="mls"> paint-format</span>
        </div>
        <div class="items">
            <w-icon name="image"></w-icon>
            <span class="mls"> image</span>
        </div>
        <div class="items">
            <w-icon name="images"></w-icon>
            <span class="mls"> images</span>
        </div>
        <div class="items">
            <w-icon name="camera2"></w-icon>
            <span class="mls"> camera2</span>
        </div>
        <div class="items">
            <w-icon name="headphones"></w-icon>
            <span class="mls"> headphones</span>
        </div>
        <div class="items">
            <w-icon name="music"></w-icon>
            <span class="mls"> music</span>
        </div>
        <div class="items">
            <w-icon name="play"></w-icon>
            <span class="mls"> play</span>
        </div>
        <div class="items">
            <w-icon name="film"></w-icon>
            <span class="mls"> film</span>
        </div>
        <div class="items">
            <w-icon name="video-camera"></w-icon>
            <span class="mls"> video-camera</span>
        </div>
        <div class="items">
            <w-icon name="dice"></w-icon>
            <span class="mls"> dice</span>
        </div>
        <div class="items">
            <w-icon name="bullhorn"></w-icon>
            <span class="mls"> bullhorn</span>
        </div>
        <div class="items">
            <w-icon name="connection"></w-icon>
            <span class="mls"> connection</span>
        </div>
        <div class="items">
            <w-icon name="podcast"></w-icon>
            <span class="mls"> podcast</span>
        </div>
        <div class="items">
            <w-icon name="feed"></w-icon>
            <span class="mls"> feed</span>
        </div>
        <div class="items">
            <w-icon name="mic"></w-icon>
            <span class="mls"> mic</span>
        </div>
        <div class="items">
            <w-icon name="book"></w-icon>
            <span class="mls"> book</span>
        </div>
        <div class="items">
            <w-icon name="books"></w-icon>
            <span class="mls"> books</span>
        </div>
        <div class="items">
            <w-icon name="library"></w-icon>
            <span class="mls"> library</span>
        </div>
        <div class="items">
            <w-icon name="file-text"></w-icon>
            <span class="mls"> file-text</span>
        </div>
        <div class="items">
            <w-icon name="profile"></w-icon>
            <span class="mls"> profile</span>
        </div>
        <div class="items">
            <w-icon name="file-empty"></w-icon>
            <span class="mls"> file-empty</span>
        </div>
        <div class="items">
            <w-icon name="files-empty"></w-icon>
            <span class="mls"> files-empty</span>
        </div>
        <div class="items">
            <w-icon name="file-text2"></w-icon>
            <span class="mls"> file-text2</span>
        </div>
        <div class="items">
            <w-icon name="file-picture"></w-icon>
            <span class="mls"> file-picture</span>
        </div>
        <div class="items">
            <w-icon name="file-music"></w-icon>
            <span class="mls"> file-music</span>
        </div>
        <div class="items">
            <w-icon name="file-play"></w-icon>
            <span class="mls"> file-play</span>
        </div>
        <div class="items">
            <w-icon name="file-video"></w-icon>
            <span class="mls"> file-video</span>
        </div>
        <div class="items">
            <w-icon name="file-zip"></w-icon>
            <span class="mls"> file-zip</span>
        </div>
        <div class="items">
            <w-icon name="copy"></w-icon>
            <span class="mls"> copy</span>
        </div>
        <div class="items">
            <w-icon name="paste"></w-icon>
            <span class="mls"> paste</span>
        </div>
        <div class="items">
            <w-icon name="stack"></w-icon>
            <span class="mls"> stack</span>
        </div>
        <div class="items">
            <w-icon name="folder"></w-icon>
            <span class="mls"> folder</span>
        </div>
        <div class="items">
            <w-icon name="folder-open"></w-icon>
            <span class="mls"> folder-open</span>
        </div>
        <div class="items">
            <w-icon name="folder-plus"></w-icon>
            <span class="mls"> folder-plus</span>
        </div>
        <div class="items">
            <w-icon name="folder-minus"></w-icon>
            <span class="mls"> folder-minus</span>
        </div>
        <div class="items">
            <w-icon name="folder-download"></w-icon>
            <span class="mls"> folder-download</span>
        </div>
        <div class="items">
            <w-icon name="folder-upload"></w-icon>
            <span class="mls"> folder-upload</span>
        </div>
        <div class="items">
            <w-icon name="price-tag"></w-icon>
            <span class="mls"> price-tag</span>
        </div>
        <div class="items">
            <w-icon name="price-tags"></w-icon>
            <span class="mls"> price-tags</span>
        </div>
        <div class="items">
            <w-icon name="barcode"></w-icon>
            <span class="mls"> barcode</span>
        </div>
        <div class="items">
            <w-icon name="qrcode"></w-icon>
            <span class="mls"> qrcode</span>
        </div>
        <div class="items">
            <w-icon name="ticket"></w-icon>
            <span class="mls"> ticket</span>
        </div>
        <div class="items">
            <w-icon name="cart"></w-icon>
            <span class="mls"> cart</span>
        </div>
        <div class="items">
            <w-icon name="credit-card"></w-icon>
            <span class="mls"> credit-card</span>
        </div>
        <div class="items">
            <w-icon name="calculator"></w-icon>
            <span class="mls"> calculator</span>
        </div>
        <div class="items">
            <w-icon name="lifebuoy"></w-icon>
            <span class="mls"> lifebuoy</span>
        </div>
        <div class="items">
            <w-icon name="phone"></w-icon>
            <span class="mls"> phone</span>
        </div>
        <div class="items">
            <w-icon name="phone-hang-up"></w-icon>
            <span class="mls"> phone-hang-up</span>
        </div>
        <div class="items">
            <w-icon name="address-book"></w-icon>
            <span class="mls"> address-book</span>
        </div>
        <div class="items">
            <w-icon name="envelop"></w-icon>
            <span class="mls"> envelop</span>
        </div>
        <div class="items">
            <w-icon name="pushpin"></w-icon>
            <span class="mls"> pushpin</span>
        </div>
        <div class="items">
            <w-icon name="location"></w-icon>
            <span class="mls"> location</span>
        </div>
        <div class="items">
            <w-icon name="location2"></w-icon>
            <span class="mls"> location2</span>
        </div>
        <div class="items">
            <w-icon name="compass"></w-icon>
            <span class="mls"> compass</span>
        </div>
        <div class="items">
            <w-icon name="compass2"></w-icon>
            <span class="mls"> compass2</span>
        </div>
        <div class="items">
            <w-icon name="map"></w-icon>
            <span class="mls"> map</span>
        </div>
        <div class="items">
            <w-icon name="map2"></w-icon>
            <span class="mls"> map2</span>
        </div>
        <div class="items">
            <w-icon name="history"></w-icon>
            <span class="mls"> history</span>
        </div>
        <div class="items">
            <w-icon name="clock"></w-icon>
            <span class="mls"> clock</span>
        </div>
        <div class="items">
            <w-icon name="clock2"></w-icon>
            <span class="mls"> clock2</span>
        </div>
        <div class="items">
            <w-icon name="alarm"></w-icon>
            <span class="mls"> alarm</span>
        </div>
        <div class="items">
            <w-icon name="bell"></w-icon>
            <span class="mls"> bell</span>
        </div>
        <div class="items">
            <w-icon name="stopwatch"></w-icon>
            <span class="mls"> stopwatch</span>
        </div>
        <div class="items">
            <w-icon name="calendar"></w-icon>
            <span class="mls"> calendar</span>
        </div>
        <div class="items">
            <w-icon name="printer"></w-icon>
            <span class="mls"> printer</span>
        </div>
        <div class="items">
            <w-icon name="keyboard"></w-icon>
            <span class="mls"> keyboard</span>
        </div>
        <div class="items">
            <w-icon name="display"></w-icon>
            <span class="mls"> display</span>
        </div>
        <div class="items">
            <w-icon name="laptop"></w-icon>
            <span class="mls"> laptop</span>
        </div>
        <div class="items">
            <w-icon name="mobile"></w-icon>
            <span class="mls"> mobile</span>
        </div>
        <div class="items">
            <w-icon name="mobile2"></w-icon>
            <span class="mls"> mobile2</span>
        </div>
        <div class="items">
            <w-icon name="tablet"></w-icon>
            <span class="mls"> tablet</span>
        </div>
        <div class="items">
            <w-icon name="tv"></w-icon>
            <span class="mls"> tv</span>
        </div>
        <div class="items">
            <w-icon name="drawer"></w-icon>
            <span class="mls"> drawer</span>
        </div>
        <div class="items">
            <w-icon name="drawer2"></w-icon>
            <span class="mls"> drawer2</span>
        </div>
        <div class="items">
            <w-icon name="box-add"></w-icon>
            <span class="mls"> box-add</span>
        </div>
        <div class="items">
            <w-icon name="box-remove"></w-icon>
            <span class="mls"> box-remove</span>
        </div>
        <div class="items">
            <w-icon name="upload"></w-icon>
            <span class="mls"> upload</span>
        </div>
        <div class="items">
            <w-icon name="floppy-disk"></w-icon>
            <span class="mls"> floppy-disk</span>
        </div>
        <div class="items">
            <w-icon name="drive"></w-icon>
            <span class="mls"> drive</span>
        </div>
        <div class="items">
            <w-icon name="database2"></w-icon>
            <span class="mls"> database2</span>
        </div>
        <div class="items">
            <w-icon name="undo"></w-icon>
            <span class="mls"> undo</span>
        </div>
        <div class="items">
            <w-icon name="redo"></w-icon>
            <span class="mls"> redo</span>
        </div>
        <div class="items">
            <w-icon name="undo2"></w-icon>
            <span class="mls"> undo2</span>
        </div>
        <div class="items">
            <w-icon name="redo2"></w-icon>
            <span class="mls"> redo2</span>
        </div>
        <div class="items">
            <w-icon name="forward"></w-icon>
            <span class="mls"> forward</span>
        </div>
        <div class="items">
            <w-icon name="reply"></w-icon>
            <span class="mls"> reply</span>
        </div>
        <div class="items">
            <w-icon name="bubbles"></w-icon>
            <span class="mls"> bubbles</span>
        </div>
        <div class="items">
            <w-icon name="user"></w-icon>
            <span class="mls"> user</span>
        </div>
        <div class="items">
            <w-icon name="users"></w-icon>
            <span class="mls"> users</span>
        </div>
        <div class="items">
            <w-icon name="user-plus"></w-icon>
            <span class="mls"> user-plus</span>
        </div>
        <div class="items">
            <w-icon name="user-minus"></w-icon>
            <span class="mls"> user-minus</span>
        </div>
        <div class="items">
            <w-icon name="user-check"></w-icon>
            <span class="mls"> user-check</span>
        </div>
        <div class="items">
            <w-icon name="user-tie"></w-icon>
            <span class="mls"> user-tie</span>
        </div>
        <div class="items">
            <w-icon name="quotes-left"></w-icon>
            <span class="mls"> quotes-left</span>
        </div>
        <div class="items">
            <w-icon name="quotes-right"></w-icon>
            <span class="mls"> quotes-right</span>
        </div>
        <div class="items">
            <w-icon name="hour-glass"></w-icon>
            <span class="mls"> hour-glass</span>
        </div>
        <div class="items">
            <w-icon name="spinner"></w-icon>
            <span class="mls"> spinner</span>
        </div>
        <div class="items">
            <w-icon name="spinner2"></w-icon>
            <span class="mls"> spinner2</span>
        </div>
        <div class="items">
            <w-icon name="spinner3"></w-icon>
            <span class="mls"> spinner3</span>
        </div>
        <div class="items">
            <w-icon name="spinner4"></w-icon>
            <span class="mls"> spinner4</span>
        </div>
        <div class="items">
            <w-icon name="spinner5"></w-icon>
            <span class="mls"> spinner5</span>
        </div>
        <div class="items">
            <w-icon name="spinner6"></w-icon>
            <span class="mls"> spinner6</span>
        </div>
        <div class="items">
            <w-icon name="spinner7"></w-icon>
            <span class="mls"> spinner7</span>
        </div>
        <div class="items">
            <w-icon name="spinner8"></w-icon>
            <span class="mls"> spinner8</span>
        </div>
        <div class="items">
            <w-icon name="spinner11"></w-icon>
            <span class="mls"> spinner11</span>
        </div>
        <div class="items">
            <w-icon name="binoculars"></w-icon>
            <span class="mls"> binoculars</span>
        </div>
        <div class="items">
            <w-icon name="search"></w-icon>
            <span class="mls"> search</span>
        </div>
        <div class="items">
            <w-icon name="zoom-in"></w-icon>
            <span class="mls"> zoom-in</span>
        </div>
        <div class="items">
            <w-icon name="zoom-out"></w-icon>
            <span class="mls"> zoom-out</span>
        </div>
        <div class="items">
            <w-icon name="enlarge"></w-icon>
            <span class="mls"> enlarge</span>
        </div>
        <div class="items">
            <w-icon name="shrink"></w-icon>
            <span class="mls"> shrink</span>
        </div>
        <div class="items">
            <w-icon name="enlarge2"></w-icon>
            <span class="mls"> enlarge2</span>
        </div>
        <div class="items">
            <w-icon name="shrink2"></w-icon>
            <span class="mls"> shrink2</span>
        </div>
        <div class="items">
            <w-icon name="key"></w-icon>
            <span class="mls"> key</span>
        </div>
        <div class="items">
            <w-icon name="key2"></w-icon>
            <span class="mls"> key2</span>
        </div>
        <div class="items">
            <w-icon name="lock"></w-icon>
            <span class="mls"> lock</span>
        </div>
        <div class="items">
            <w-icon name="unlocked"></w-icon>
            <span class="mls"> unlocked</span>
        </div>
        <div class="items">
            <w-icon name="wrench"></w-icon>
            <span class="mls"> wrench</span>
        </div>
        <div class="items">
            <w-icon name="equalizer"></w-icon>
            <span class="mls"> equalizer</span>
        </div>
        <div class="items">
            <w-icon name="equalizer2"></w-icon>
            <span class="mls"> equalizer2</span>
        </div>
        <div class="items">
            <w-icon name="cog"></w-icon>
            <span class="mls"> cog</span>
        </div>
        <div class="items">
            <w-icon name="cogs"></w-icon>
            <span class="mls"> cogs</span>
        </div>
        <div class="items">
            <w-icon name="hammer"></w-icon>
            <span class="mls"> hammer</span>
        </div>
        <div class="items">
            <w-icon name="magic-wand"></w-icon>
            <span class="mls"> magic-wand</span>
        </div>
        <div class="items">
            <w-icon name="aid-kit"></w-icon>
            <span class="mls"> aid-kit</span>
        </div>
        <div class="items">
            <w-icon name="bug2"></w-icon>
            <span class="mls"> bug2</span>
        </div>
        <div class="items">
            <w-icon name="pie-chart"></w-icon>
            <span class="mls"> pie-chart</span>
        </div>
        <div class="items">
            <w-icon name="stats-dots"></w-icon>
            <span class="mls"> stats-dots</span>
        </div>
        <div class="items">
            <w-icon name="stats-bars"></w-icon>
            <span class="mls"> stats-bars</span>
        </div>
        <div class="items">
            <w-icon name="stats-bars2"></w-icon>
            <span class="mls"> stats-bars2</span>
        </div>
        <div class="items">
            <w-icon name="trophy"></w-icon>
            <span class="mls"> trophy</span>
        </div>
        <div class="items">
            <w-icon name="gift"></w-icon>
            <span class="mls"> gift</span>
        </div>
        <div class="items">
            <w-icon name="glass"></w-icon>
            <span class="mls"> glass</span>
        </div>
        <div class="items">
            <w-icon name="glass2"></w-icon>
            <span class="mls"> glass2</span>
        </div>
        <div class="items">
            <w-icon name="mug"></w-icon>
            <span class="mls"> mug</span>
        </div>
        <div class="items">
            <w-icon name="spoon-knife"></w-icon>
            <span class="mls"> spoon-knife</span>
        </div>
        <div class="items">
            <w-icon name="leaf"></w-icon>
            <span class="mls"> leaf</span>
        </div>
        <div class="items">
            <w-icon name="rocket"></w-icon>
            <span class="mls"> rocket</span>
        </div>
        <div class="items">
            <w-icon name="meter"></w-icon>
            <span class="mls"> meter</span>
        </div>
        <div class="items">
            <w-icon name="meter2"></w-icon>
            <span class="mls"> meter2</span>
        </div>
        <div class="items">
            <w-icon name="hammer2"></w-icon>
            <span class="mls"> hammer2</span>
        </div>
        <div class="items">
            <w-icon name="fire"></w-icon>
            <span class="mls"> fire</span>
        </div>
        <div class="items">
            <w-icon name="lab"></w-icon>
            <span class="mls"> lab</span>
        </div>
        <div class="items">
            <w-icon name="magnet"></w-icon>
            <span class="mls"> magnet</span>
        </div>
        <div class="items">
            <w-icon name="bin"></w-icon>
            <span class="mls"> bin</span>
        </div>
        <div class="items">
            <w-icon name="bin2"></w-icon>
            <span class="mls"> bin2</span>
        </div>
        <div class="items">
            <w-icon name="briefcase"></w-icon>
            <span class="mls"> briefcase</span>
        </div>
        <div class="items">
            <w-icon name="airplane"></w-icon>
            <span class="mls"> airplane</span>
        </div>
        <div class="items">
            <w-icon name="truck"></w-icon>
            <span class="mls"> truck</span>
        </div>
        <div class="items">
            <w-icon name="road"></w-icon>
            <span class="mls"> road</span>
        </div>
        <div class="items">
            <w-icon name="accessibility"></w-icon>
            <span class="mls"> accessibility</span>
        </div>
        <div class="items">
            <w-icon name="target"></w-icon>
            <span class="mls"> target</span>
        </div>
        <div class="items">
            <w-icon name="shield"></w-icon>
            <span class="mls"> shield</span>
        </div>
        <div class="items">
            <w-icon name="power"></w-icon>
            <span class="mls"> power</span>
        </div>
        <div class="items">
            <w-icon name="switch"></w-icon>
            <span class="mls"> switch</span>
        </div>
        <div class="items">
            <w-icon name="power-cord"></w-icon>
            <span class="mls"> power-cord</span>
        </div>
        <div class="items">
            <w-icon name="clipboard"></w-icon>
            <span class="mls"> clipboard</span>
        </div>
        <div class="items">
            <w-icon name="list-numbered"></w-icon>
            <span class="mls"> list-numbered</span>
        </div>
        <div class="items">
            <w-icon name="list2"></w-icon>
            <span class="mls"> list2</span>
        </div>
        <div class="items">
            <w-icon name="list22"></w-icon>
            <span class="mls"> list22</span>
        </div>
        <div class="items">
            <w-icon name="tree"></w-icon>
            <span class="mls"> tree</span>
        </div>
        <div class="items">
            <w-icon name="menu"></w-icon>
            <span class="mls"> menu</span>
        </div>
        <div class="items">
            <w-icon name="menu2"></w-icon>
            <span class="mls"> menu2</span>
        </div>
        <div class="items">
            <w-icon name="menu3"></w-icon>
            <span class="mls"> menu3</span>
        </div>
        <div class="items">
            <w-icon name="menu4"></w-icon>
            <span class="mls"> menu4</span>
        </div>
        <div class="items">
            <w-icon name="cloud"></w-icon>
            <span class="mls"> cloud</span>
        </div>
        <div class="items">
            <w-icon name="cloud-download"></w-icon>
            <span class="mls"> cloud-download</span>
        </div>
        <div class="items">
            <w-icon name="cloud-upload"></w-icon>
            <span class="mls"> cloud-upload</span>
        </div>
        <div class="items">
            <w-icon name="cloud-check"></w-icon>
            <span class="mls"> cloud-check</span>
        </div>
        <div class="items">
            <w-icon name="download2"></w-icon>
            <span class="mls"> download2</span>
        </div>
        <div class="items">
            <w-icon name="upload2"></w-icon>
            <span class="mls"> upload2</span>
        </div>
        <div class="items">
            <w-icon name="download3"></w-icon>
            <span class="mls"> download3</span>
        </div>
        <div class="items">
            <w-icon name="upload3"></w-icon>
            <span class="mls"> upload3</span>
        </div>
        <div class="items">
            <w-icon name="sphere"></w-icon>
            <span class="mls"> sphere</span>
        </div>
        <div class="items">
            <w-icon name="earth"></w-icon>
            <span class="mls"> earth</span>
        </div>
        <div class="items">
            <w-icon name="link"></w-icon>
            <span class="mls"> link</span>
        </div>
        <div class="items">
            <w-icon name="flag"></w-icon>
            <span class="mls"> flag</span>
        </div>
        <div class="items">
            <w-icon name="attachment"></w-icon>
            <span class="mls"> attachment</span>
        </div>
        <div class="items">
            <w-icon name="eye"></w-icon>
            <span class="mls"> eye</span>
        </div>
        <div class="items">
            <w-icon name="eye-plus"></w-icon>
            <span class="mls"> eye-plus</span>
        </div>
        <div class="items">
            <w-icon name="eye-minus"></w-icon>
            <span class="mls"> eye-minus</span>
        </div>
        <div class="items">
            <w-icon name="eye-blocked"></w-icon>
            <span class="mls"> eye-blocked</span>
        </div>
        <div class="items">
            <w-icon name="bookmark"></w-icon>
            <span class="mls"> bookmark</span>
        </div>
        <div class="items">
            <w-icon name="bookmarks"></w-icon>
            <span class="mls"> bookmarks</span>
        </div>
        <div class="items">
            <w-icon name="sun"></w-icon>
            <span class="mls"> sun</span>
        </div>
        <div class="items">
            <w-icon name="contrast"></w-icon>
            <span class="mls"> contrast</span>
        </div>
        <div class="items">
            <w-icon name="brightness-contrast"></w-icon>
            <span class="mls"> brightness-contrast</span>
        </div>
        <div class="items">
            <w-icon name="star-empty"></w-icon>
            <span class="mls"> star-empty</span>
        </div>
        <div class="items">
            <w-icon name="star-half"></w-icon>
            <span class="mls"> star-half</span>
        </div>
        <div class="items">
            <w-icon name="star-full"></w-icon>
            <span class="mls"> star-full</span>
        </div>
        <div class="items">
            <w-icon name="heart"></w-icon>
            <span class="mls"> heart</span>
        </div>
        <div class="items">
            <w-icon name="heart-broken"></w-icon>
            <span class="mls"> heart-broken</span>
        </div>
        <div class="items">
            <w-icon name="man"></w-icon>
            <span class="mls"> man</span>
        </div>
        <div class="items">
            <w-icon name="woman"></w-icon>
            <span class="mls"> woman</span>
        </div>
        <div class="items">
            <w-icon name="man-woman"></w-icon>
            <span class="mls"> man-woman</span>
        </div>
        <div class="items">
            <w-icon name="happy"></w-icon>
            <span class="mls"> happy</span>
        </div>
        <div class="items">
            <w-icon name="happy2"></w-icon>
            <span class="mls"> happy2</span>
        </div>
        <div class="items">
            <w-icon name="smile"></w-icon>
            <span class="mls"> smile</span>
        </div>
        <div class="items">
            <w-icon name="smile2"></w-icon>
            <span class="mls"> smile2</span>
        </div>
        <div class="items">
            <w-icon name="tongue"></w-icon>
            <span class="mls"> tongue</span>
        </div>
        <div class="items">
            <w-icon name="tongue2"></w-icon>
            <span class="mls"> tongue2</span>
        </div>
        <div class="items">
            <w-icon name="sad"></w-icon>
            <span class="mls"> sad</span>
        </div>
        <div class="items">
            <w-icon name="sad2"></w-icon>
            <span class="mls"> sad2</span>
        </div>
        <div class="items">
            <w-icon name="wink"></w-icon>
            <span class="mls"> wink</span>
        </div>
        <div class="items">
            <w-icon name="wink2"></w-icon>
            <span class="mls"> wink2</span>
        </div>
        <div class="items">
            <w-icon name="grin"></w-icon>
            <span class="mls"> grin</span>
        </div>
        <div class="items">
            <w-icon name="grin2"></w-icon>
            <span class="mls"> grin2</span>
        </div>
        <div class="items">
            <w-icon name="cool"></w-icon>
            <span class="mls"> cool</span>
        </div>
        <div class="items">
            <w-icon name="cool2"></w-icon>
            <span class="mls"> cool2</span>
        </div>
        <div class="items">
            <w-icon name="angry"></w-icon>
            <span class="mls"> angry</span>
        </div>
        <div class="items">
            <w-icon name="angry2"></w-icon>
            <span class="mls"> angry2</span>
        </div>
        <div class="items">
            <w-icon name="evil"></w-icon>
            <span class="mls"> evil</span>
        </div>
        <div class="items">
            <w-icon name="evil2"></w-icon>
            <span class="mls"> evil2</span>
        </div>
        <div class="items">
            <w-icon name="shocked"></w-icon>
            <span class="mls"> shocked</span>
        </div>
        <div class="items">
            <w-icon name="shocked2"></w-icon>
            <span class="mls"> shocked2</span>
        </div>
        <div class="items">
            <w-icon name="baffled"></w-icon>
            <span class="mls"> baffled</span>
        </div>
        <div class="items">
            <w-icon name="baffled2"></w-icon>
            <span class="mls"> baffled2</span>
        </div>
        <div class="items">
            <w-icon name="wondering"></w-icon>
            <span class="mls"> wondering</span>
        </div>
        <div class="items">
            <w-icon name="wondering2"></w-icon>
            <span class="mls"> wondering2</span>
        </div>
        <div class="items">
            <w-icon name="sleepy"></w-icon>
            <span class="mls"> sleepy</span>
        </div>
        <div class="items">
            <w-icon name="sleepy2"></w-icon>
            <span class="mls"> sleepy2</span>
        </div>
        <div class="items">
            <w-icon name="frustrated"></w-icon>
            <span class="mls"> frustrated</span>
        </div>
        <div class="items">
            <w-icon name="frustrated2"></w-icon>
            <span class="mls"> frustrated2</span>
        </div>
        <div class="items">
            <w-icon name="crying"></w-icon>
            <span class="mls"> crying</span>
        </div>
        <div class="items">
            <w-icon name="crying2"></w-icon>
            <span class="mls"> crying2</span>
        </div>
        <div class="items">
            <w-icon name="point-up"></w-icon>
            <span class="mls"> point-up</span>
        </div>
        <div class="items">
            <w-icon name="point-right"></w-icon>
            <span class="mls"> point-right</span>
        </div>
        <div class="items">
            <w-icon name="point-down"></w-icon>
            <span class="mls"> point-down</span>
        </div>
        <div class="items">
            <w-icon name="point-left"></w-icon>
            <span class="mls"> point-left</span>
        </div>
        <div class="items">
            <w-icon name="warning"></w-icon>
            <span class="mls"> warning</span>
        </div>
        <div class="items">
            <w-icon name="notification"></w-icon>
            <span class="mls"> notification</span>
        </div>
        <div class="items">
            <w-icon name="question"></w-icon>
            <span class="mls"> question</span>
        </div>
        <div class="items">
            <w-icon name="plus2"></w-icon>
            <span class="mls"> plus2</span>
        </div>
        <div class="items">
            <w-icon name="minus2"></w-icon>
            <span class="mls"> minus2</span>
        </div>
        <div class="items">
            <w-icon name="info"></w-icon>
            <span class="mls"> info</span>
        </div>
        <div class="items">
            <w-icon name="cancel-circle"></w-icon>
            <span class="mls"> cancel-circle</span>
        </div>
        <div class="items">
            <w-icon name="blocked"></w-icon>
            <span class="mls"> blocked</span>
        </div>
        <div class="items">
            <w-icon name="cross"></w-icon>
            <span class="mls"> cross</span>
        </div>
        <div class="items">
            <w-icon name="checkmark2"></w-icon>
            <span class="mls"> checkmark2</span>
        </div>
        <div class="items">
            <w-icon name="checkmark22"></w-icon>
            <span class="mls"> checkmark22</span>
        </div>
        <div class="items">
            <w-icon name="spell-check"></w-icon>
            <span class="mls"> spell-check</span>
        </div>
        <div class="items">
            <w-icon name="enter"></w-icon>
            <span class="mls"> enter</span>
        </div>
        <div class="items">
            <w-icon name="exit"></w-icon>
            <span class="mls"> exit</span>
        </div>
        <div class="items">
            <w-icon name="play2"></w-icon>
            <span class="mls"> play2</span>
        </div>
        <div class="items">
            <w-icon name="pause"></w-icon>
            <span class="mls"> pause</span>
        </div>
        <div class="items">
            <w-icon name="stop2"></w-icon>
            <span class="mls"> stop2</span>
        </div>
        <div class="items">
            <w-icon name="previous"></w-icon>
            <span class="mls"> previous</span>
        </div>
        <div class="items">
            <w-icon name="next"></w-icon>
            <span class="mls"> next</span>
        </div>
        <div class="items">
            <w-icon name="backward"></w-icon>
            <span class="mls"> backward</span>
        </div>
        <div class="items">
            <w-icon name="forward2"></w-icon>
            <span class="mls"> forward2</span>
        </div>
        <div class="items">
            <w-icon name="play3"></w-icon>
            <span class="mls"> play3</span>
        </div>
        <div class="items">
            <w-icon name="pause2"></w-icon>
            <span class="mls"> pause2</span>
        </div>
        <div class="items">
            <w-icon name="stop22"></w-icon>
            <span class="mls"> stop22</span>
        </div>
        <div class="items">
            <w-icon name="backward2"></w-icon>
            <span class="mls"> backward2</span>
        </div>
        <div class="items">
            <w-icon name="forward3"></w-icon>
            <span class="mls"> forward3</span>
        </div>
        <div class="items">
            <w-icon name="first"></w-icon>
            <span class="mls"> first</span>
        </div>
        <div class="items">
            <w-icon name="last"></w-icon>
            <span class="mls"> last</span>
        </div>
        <div class="items">
            <w-icon name="previous2"></w-icon>
            <span class="mls"> previous2</span>
        </div>
        <div class="items">
            <w-icon name="next2"></w-icon>
            <span class="mls"> next2</span>
        </div>
        <div class="items">
            <w-icon name="eject"></w-icon>
            <span class="mls"> eject</span>
        </div>
        <div class="items">
            <w-icon name="volume-high"></w-icon>
            <span class="mls"> volume-high</span>
        </div>
        <div class="items">
            <w-icon name="volume-medium"></w-icon>
            <span class="mls"> volume-medium</span>
        </div>
        <div class="items">
            <w-icon name="volume-low"></w-icon>
            <span class="mls"> volume-low</span>
        </div>
        <div class="items">
            <w-icon name="volume-mute"></w-icon>
            <span class="mls"> volume-mute</span>
        </div>
        <div class="items">
            <w-icon name="volume-mute2"></w-icon>
            <span class="mls"> volume-mute2</span>
        </div>
        <div class="items">
            <w-icon name="volume-increase"></w-icon>
            <span class="mls"> volume-increase</span>
        </div>
        <div class="items">
            <w-icon name="volume-decrease"></w-icon>
            <span class="mls"> volume-decrease</span>
        </div>
        <div class="items">
            <w-icon name="loop"></w-icon>
            <span class="mls"> loop</span>
        </div>
        <div class="items">
            <w-icon name="loop2"></w-icon>
            <span class="mls"> loop2</span>
        </div>
        <div class="items">
            <w-icon name="infinite"></w-icon>
            <span class="mls"> infinite</span>
        </div>
        <div class="items">
            <w-icon name="shuffle"></w-icon>
            <span class="mls"> shuffle</span>
        </div>
        <div class="items">
            <w-icon name="arrow-up-left"></w-icon>
            <span class="mls"> arrow-up-left</span>
        </div>
        <div class="items">
            <w-icon name="arrow-up"></w-icon>
            <span class="mls"> arrow-up</span>
        </div>
        <div class="items">
            <w-icon name="arrow-up-right"></w-icon>
            <span class="mls"> arrow-up-right</span>
        </div>
        <div class="items">
            <w-icon name="arrow-right"></w-icon>
            <span class="mls"> arrow-right</span>
        </div>
        <div class="items">
            <w-icon name="arrow-down-right"></w-icon>
            <span class="mls"> arrow-down-right</span>
        </div>
        <div class="items">
            <w-icon name="arrow-down"></w-icon>
            <span class="mls"> arrow-down</span>
        </div>
        <div class="items">
            <w-icon name="arrow-down-left"></w-icon>
            <span class="mls"> arrow-down-left</span>
        </div>
        <div class="items">
            <w-icon name="arrow-left"></w-icon>
            <span class="mls"> arrow-left</span>
        </div>
        <div class="items">
            <w-icon name="arrow-up-left2"></w-icon>
            <span class="mls"> arrow-up-left2</span>
        </div>
        <div class="items">
            <w-icon name="arrow-up2"></w-icon>
            <span class="mls"> arrow-up2</span>
        </div>
        <div class="items">
            <w-icon name="arrow-up-right2"></w-icon>
            <span class="mls"> arrow-up-right2</span>
        </div>
        <div class="items">
            <w-icon name="arrow-right2"></w-icon>
            <span class="mls"> arrow-right2</span>
        </div>
        <div class="items">
            <w-icon name="arrow-down-right2"></w-icon>
            <span class="mls"> arrow-down-right2</span>
        </div>
        <div class="items">
            <w-icon name="arrow-down2"></w-icon>
            <span class="mls"> arrow-down2</span>
        </div>
        <div class="items">
            <w-icon name="arrow-down-left2"></w-icon>
            <span class="mls"> arrow-down-left2</span>
        </div>
        <div class="items">
            <w-icon name="arrow-left2"></w-icon>
            <span class="mls"> arrow-left2</span>
        </div>
        <div class="items">
            <w-icon name="circle-up"></w-icon>
            <span class="mls"> circle-up</span>
        </div>
        <div class="items">
            <w-icon name="circle-right"></w-icon>
            <span class="mls"> circle-right</span>
        </div>
        <div class="items">
            <w-icon name="circle-down"></w-icon>
            <span class="mls"> circle-down</span>
        </div>
        <div class="items">
            <w-icon name="circle-left"></w-icon>
            <span class="mls"> circle-left</span>
        </div>
        <div class="items">
            <w-icon name="tab"></w-icon>
            <span class="mls"> tab</span>
        </div>
        <div class="items">
            <w-icon name="move-up"></w-icon>
            <span class="mls"> move-up</span>
        </div>
        <div class="items">
            <w-icon name="move-down"></w-icon>
            <span class="mls"> move-down</span>
        </div>
        <div class="items">
            <w-icon name="sort-alpha-asc"></w-icon>
            <span class="mls"> sort-alpha-asc</span>
        </div>
        <div class="items">
            <w-icon name="sort-alpha-desc"></w-icon>
            <span class="mls"> sort-alpha-desc</span>
        </div>
        <div class="items">
            <w-icon name="sort-numeric-asc"></w-icon>
            <span class="mls"> sort-numeric-asc</span>
        </div>
        <div class="items">
            <w-icon name="sort-numberic-desc"></w-icon>
            <span class="mls"> sort-numberic-desc</span>
        </div>
        <div class="items">
            <w-icon name="sort-amount-asc"></w-icon>
            <span class="mls"> sort-amount-asc</span>
        </div>
        <div class="items">
            <w-icon name="sort-amount-desc"></w-icon>
            <span class="mls"> sort-amount-desc</span>
        </div>
        <div class="items">
            <w-icon name="command"></w-icon>
            <span class="mls"> command</span>
        </div>
        <div class="items">
            <w-icon name="shift"></w-icon>
            <span class="mls"> shift</span>
        </div>
        <div class="items">
            <w-icon name="ctrl"></w-icon>
            <span class="mls"> ctrl</span>
        </div>
        <div class="items">
            <w-icon name="opt"></w-icon>
            <span class="mls"> opt</span>
        </div>
        <div class="items">
            <w-icon name="checkbox-checked"></w-icon>
            <span class="mls"> checkbox-checked</span>
        </div>
        <div class="items">
            <w-icon name="checkbox-unchecked"></w-icon>
            <span class="mls"> checkbox-unchecked</span>
        </div>
        <div class="items">
            <w-icon name="radio-checked"></w-icon>
            <span class="mls"> radio-checked</span>
        </div>
        <div class="items">
            <w-icon name="radio-checked2"></w-icon>
            <span class="mls"> radio-checked2</span>
        </div>
        <div class="items">
            <w-icon name="radio-unchecked"></w-icon>
            <span class="mls"> radio-unchecked</span>
        </div>
        <div class="items">
            <w-icon name="crop"></w-icon>
            <span class="mls"> crop</span>
        </div>
        <div class="items">
            <w-icon name="make-group"></w-icon>
            <span class="mls"> make-group</span>
        </div>
        <div class="items">
            <w-icon name="ungroup"></w-icon>
            <span class="mls"> ungroup</span>
        </div>
        <div class="items">
            <w-icon name="scissors"></w-icon>
            <span class="mls"> scissors</span>
        </div>
        <div class="items">
            <w-icon name="filter2"></w-icon>
            <span class="mls"> filter2</span>
        </div>
        <div class="items">
            <w-icon name="font"></w-icon>
            <span class="mls"> font</span>
        </div>
        <div class="items">
            <w-icon name="ligature"></w-icon>
            <span class="mls"> ligature</span>
        </div>
        <div class="items">
            <w-icon name="ligature2"></w-icon>
            <span class="mls"> ligature2</span>
        </div>
        <div class="items">
            <w-icon name="text-height"></w-icon>
            <span class="mls"> text-height</span>
        </div>
        <div class="items">
            <w-icon name="text-width"></w-icon>
            <span class="mls"> text-width</span>
        </div>
        <div class="items">
            <w-icon name="font-size"></w-icon>
            <span class="mls"> font-size</span>
        </div>
        <div class="items">
            <w-icon name="bold"></w-icon>
            <span class="mls"> bold</span>
        </div>
        <div class="items">
            <w-icon name="underline"></w-icon>
            <span class="mls"> underline</span>
        </div>
        <div class="items">
            <w-icon name="italic"></w-icon>
            <span class="mls"> italic</span>
        </div>
        <div class="items">
            <w-icon name="strikethrough"></w-icon>
            <span class="mls"> strikethrough</span>
        </div>
        <div class="items">
            <w-icon name="omega"></w-icon>
            <span class="mls"> omega</span>
        </div>
        <div class="items">
            <w-icon name="sigma"></w-icon>
            <span class="mls"> sigma</span>
        </div>
        <div class="items">
            <w-icon name="page-break"></w-icon>
            <span class="mls"> page-break</span>
        </div>
        <div class="items">
            <w-icon name="superscript"></w-icon>
            <span class="mls"> superscript</span>
        </div>
        <div class="items">
            <w-icon name="subscript"></w-icon>
            <span class="mls"> subscript</span>
        </div>
        <div class="items">
            <w-icon name="superscript2"></w-icon>
            <span class="mls"> superscript2</span>
        </div>
        <div class="items">
            <w-icon name="subscript2"></w-icon>
            <span class="mls"> subscript2</span>
        </div>
        <div class="items">
            <w-icon name="text-color"></w-icon>
            <span class="mls"> text-color</span>
        </div>
        <div class="items">
            <w-icon name="pagebreak"></w-icon>
            <span class="mls"> pagebreak</span>
        </div>
        <div class="items">
            <w-icon name="clear-formatting"></w-icon>
            <span class="mls"> clear-formatting</span>
        </div>
        <div class="items">
            <w-icon name="table"></w-icon>
            <span class="mls"> table</span>
        </div>
        <div class="items">
            <w-icon name="table2"></w-icon>
            <span class="mls"> table2</span>
        </div>
        <div class="items">
            <w-icon name="insert-template"></w-icon>
            <span class="mls"> insert-template</span>
        </div>
        <div class="items">
            <w-icon name="pilcrow"></w-icon>
            <span class="mls"> pilcrow</span>
        </div>
        <div class="items">
            <w-icon name="ltr"></w-icon>
            <span class="mls"> ltr</span>
        </div>
        <div class="items">
            <w-icon name="rtl"></w-icon>
            <span class="mls"> rtl</span>
        </div>
        <div class="items">
            <w-icon name="section"></w-icon>
            <span class="mls"> section</span>
        </div>
        <div class="items">
            <w-icon name="paragraph-left"></w-icon>
            <span class="mls"> paragraph-left</span>
        </div>
        <div class="items">
            <w-icon name="paragraph-center"></w-icon>
            <span class="mls"> paragraph-center</span>
        </div>
        <div class="items">
            <w-icon name="paragraph-right"></w-icon>
            <span class="mls"> paragraph-right</span>
        </div>
        <div class="items">
            <w-icon name="paragraph-justify"></w-icon>
            <span class="mls"> paragraph-justify</span>
        </div>
        <div class="items">
            <w-icon name="indent-increase"></w-icon>
            <span class="mls"> indent-increase</span>
        </div>
        <div class="items">
            <w-icon name="indent-decrease"></w-icon>
            <span class="mls"> indent-decrease</span>
        </div>
        <div class="items">
            <w-icon name="share"></w-icon>
            <span class="mls"> share</span>
        </div>
        <div class="items">
            <w-icon name="new-tab"></w-icon>
            <span class="mls"> new-tab</span>
        </div>
        <div class="items">
            <w-icon name="embed"></w-icon>
            <span class="mls"> embed</span>
        </div>
        <div class="items">
            <w-icon name="embed2"></w-icon>
            <span class="mls"> embed2</span>
        </div>
        <div class="items">
            <w-icon name="terminal"></w-icon>
            <span class="mls"> terminal</span>
        </div>
        <div class="items">
            <w-icon name="share2"></w-icon>
            <span class="mls"> share2</span>
        </div>
        <div class="items">
            <w-icon name="github"></w-icon>
            <span class="mls"> github</span>
        </div>
        <div class="items">
            <w-icon name="tux"></w-icon>
            <span class="mls"> tux</span>
        </div>
        <div class="items">
            <w-icon name="appleinc"></w-icon>
            <span class="mls"> appleinc</span>
        </div>
        <div class="items">
            <w-icon name="android"></w-icon>
            <span class="mls"> android</span>
        </div>
        <div class="items">
            <w-icon name="windows"></w-icon>
            <span class="mls"> windows</span>
        </div>
        <div class="items">
            <w-icon name="windows8"></w-icon>
            <span class="mls"> windows8</span>
        </div>
        <div class="items">
            <w-icon name="file-pdf"></w-icon>
            <span class="mls"> file-pdf</span>
        </div>
        <div class="items">
            <w-icon name="html-five"></w-icon>
            <span class="mls"> html-five</span>
        </div>
        <div class="items">
            <w-icon name="html-five2"></w-icon>
            <span class="mls"> html-five2</span>
        </div>
        <div class="items">
            <w-icon name="css3"></w-icon>
            <span class="mls"> css3</span>
        </div>
        <div class="items">
            <w-icon name="git"></w-icon>
            <span class="mls"> git</span>
        </div>
        <div class="items">
            <w-icon name="codepen"></w-icon>
            <span class="mls"> codepen</span>
        </div>
        <div class="items">
            <w-icon name="lock2"></w-icon>
            <span class="mls"> lock2</span>
        </div>
        <div class="items">
            <w-icon name="lock3"></w-icon>
            <span class="mls"> lock3</span>
        </div>
        <div class="items">
            <w-icon name="lock-open"></w-icon>
            <span class="mls"> lock-open</span>
        </div>
        <div class="items">
            <w-icon name="lock-open2"></w-icon>
            <span class="mls"> lock-open2</span>
        </div>
        <div class="items">
            <w-icon name="lock-open3"></w-icon>
            <span class="mls"> lock-open3</span>
        </div>
        <div class="items">
            <w-icon name="lock-open4"></w-icon>
            <span class="mls"> lock-open4</span>
        </div>
        <div class="items">
            <w-icon name="lock-stripes"></w-icon>
            <span class="mls"> lock-stripes</span>
        </div>
        <div class="items">
            <w-icon name="lock-stripes2"></w-icon>
            <span class="mls"> lock-stripes2</span>
        </div>
        <div class="items">
            <w-icon name="weights"></w-icon>
            <span class="mls"> weights</span>
        </div>
        <div class="items">
            <w-icon name="weights2"></w-icon>
            <span class="mls"> weights2</span>
        </div>
        <div class="items">
            <w-icon name="tennis-racket"></w-icon>
            <span class="mls"> tennis-racket</span>
        </div>
        <div class="items">
            <w-icon name="tennis-racket2"></w-icon>
            <span class="mls"> tennis-racket2</span>
        </div>
        <div class="items">
            <w-icon name="volleyball"></w-icon>
            <span class="mls"> volleyball</span>
        </div>
        <div class="items">
            <w-icon name="stop-watch"></w-icon>
            <span class="mls"> stop-watch</span>
        </div>
        <div class="items">
            <w-icon name="stop-watch2"></w-icon>
            <span class="mls"> stop-watch2</span>
        </div>
        <div class="items">
            <w-icon name="shuttlecock"></w-icon>
            <span class="mls"> shuttlecock</span>
        </div>
        <div class="items">
            <w-icon name="shuttlecock2"></w-icon>
            <span class="mls"> shuttlecock2</span>
        </div>
        <div class="items">
            <w-icon name="golf"></w-icon>
            <span class="mls"> golf</span>
        </div>
        <div class="items">
            <w-icon name="golf2"></w-icon>
            <span class="mls"> golf2</span>
        </div>
        <div class="items">
            <w-icon name="award"></w-icon>
            <span class="mls"> award</span>
        </div>
        <div class="items">
            <w-icon name="award2"></w-icon>
            <span class="mls"> award2</span>
        </div>
        <div class="items">
            <w-icon name="award3"></w-icon>
            <span class="mls"> award3</span>
        </div>
        <div class="items">
            <w-icon name="award4"></w-icon>
            <span class="mls"> award4</span>
        </div>
        <div class="items">
            <w-icon name="award5"></w-icon>
            <span class="mls"> award5</span>
        </div>
        <div class="items">
            <w-icon name="award6"></w-icon>
            <span class="mls"> award6</span>
        </div>
        <div class="items">
            <w-icon name="medal"></w-icon>
            <span class="mls"> medal</span>
        </div>
        <div class="items">
            <w-icon name="medal2"></w-icon>
            <span class="mls"> medal2</span>
        </div>
        <div class="items">
            <w-icon name="checkered-flag"></w-icon>
            <span class="mls"> checkered-flag</span>
        </div>
        <div class="items">
            <w-icon name="checkered-flag2"></w-icon>
            <span class="mls"> checkered-flag2</span>
        </div>
        <div class="items">
            <w-icon name="diving-goggles"></w-icon>
            <span class="mls"> diving-goggles</span>
        </div>
        <div class="items">
            <w-icon name="diving-goggles2"></w-icon>
            <span class="mls"> diving-goggles2</span>
        </div>
        <div class="items">
            <w-icon name="sports-shoe"></w-icon>
            <span class="mls"> sports-shoe</span>
        </div>
        <div class="items">
            <w-icon name="sports-shoe2"></w-icon>
            <span class="mls"> sports-shoe2</span>
        </div>
        <div class="items">
            <w-icon name="soccer-shoe"></w-icon>
            <span class="mls"> soccer-shoe</span>
        </div>
        <div class="items">
            <w-icon name="soccer-shoe2"></w-icon>
            <span class="mls"> soccer-shoe2</span>
        </div>
        <div class="items">
            <w-icon name="ice-skate"></w-icon>
            <span class="mls"> ice-skate</span>
        </div>
        <div class="items">
            <w-icon name="ice-skate2"></w-icon>
            <span class="mls"> ice-skate2</span>
        </div>
        <div class="items">
            <w-icon name="cloud2"></w-icon>
            <span class="mls"> cloud2</span>
        </div>
        <div class="items">
            <w-icon name="cloud3"></w-icon>
            <span class="mls"> cloud3</span>
        </div>
        <div class="items">
            <w-icon name="cloud-sun"></w-icon>
            <span class="mls"> cloud-sun</span>
        </div>
        <div class="items">
            <w-icon name="cloud-sun2"></w-icon>
            <span class="mls"> cloud-sun2</span>
        </div>
        <div class="items">
            <w-icon name="cloud-lightning"></w-icon>
            <span class="mls"> cloud-lightning</span>
        </div>
        <div class="items">
            <w-icon name="cloud-lightning2"></w-icon>
            <span class="mls"> cloud-lightning2</span>
        </div>
        <div class="items">
            <w-icon name="cloud-raindrops"></w-icon>
            <span class="mls"> cloud-raindrops</span>
        </div>
        <div class="items">
            <w-icon name="cloud-raindrops2"></w-icon>
            <span class="mls"> cloud-raindrops2</span>
        </div>
        <div class="items">
            <w-icon name="thumb-up"></w-icon>
            <span class="mls"> thumb-up</span>
        </div>
        <div class="items">
            <w-icon name="thumb-down"></w-icon>
            <span class="mls"> thumb-down</span>
        </div>
        <div class="items">
            <w-icon name="three-fingers-double-tap"></w-icon>
            <span class="mls"> three-fingers-double-tap</span>
        </div>
        <div class="items">
            <w-icon name="three-fingers-double-tap2"></w-icon>
            <span class="mls"> three-fingers-double-tap2</span>
        </div>
        <div class="items">
            <w-icon name="two-fingers-resize-out"></w-icon>
            <span class="mls"> two-fingers-resize-out</span>
        </div>
        <div class="items">
            <w-icon name="two-fingers-resize-out2"></w-icon>
            <span class="mls"> two-fingers-resize-out2</span>
        </div>
        <div class="items">
            <w-icon name="two-fingers-rotate"></w-icon>
            <span class="mls"> two-fingers-rotate</span>
        </div>
        <div class="items">
            <w-icon name="two-fingers-rotate2"></w-icon>
            <span class="mls"> two-fingers-rotate2</span>
        </div>
        <div class="items">
            <w-icon name="one-finger-swipe-left"></w-icon>
            <span class="mls"> one-finger-swipe-left</span>
        </div>
        <div class="items">
            <w-icon name="one-finger-swipe-left2"></w-icon>
            <span class="mls"> one-finger-swipe-left2</span>
        </div>
        <div class="items">
            <w-icon name="one-finger-swipe-right"></w-icon>
            <span class="mls"> one-finger-swipe-right</span>
        </div>
        <div class="items">
            <w-icon name="one-finger-swipe-right2"></w-icon>
            <span class="mls"> one-finger-swipe-right2</span>
        </div>
        <div class="items">
            <w-icon name="thumb-finger-tap"></w-icon>
            <span class="mls"> thumb-finger-tap</span>
        </div>
        <div class="items">
            <w-icon name="thumb-finger-tap2"></w-icon>
            <span class="mls"> thumb-finger-tap2</span>
        </div>
        <div class="items">
            <w-icon name="asterisk"></w-icon>
            <span class="mls"> asterisk</span>
        </div>
        <div class="items">
            <w-icon name="plus3"></w-icon>
            <span class="mls"> plus3</span>
        </div>
        <div class="items">
            <w-icon name="question2"></w-icon>
            <span class="mls"> question2</span>
        </div>
        <div class="items">
            <w-icon name="minus3"></w-icon>
            <span class="mls"> minus3</span>
        </div>
        <div class="items">
            <w-icon name="glass3"></w-icon>
            <span class="mls"> glass3</span>
        </div>
        <div class="items">
            <w-icon name="music2"></w-icon>
            <span class="mls"> music2</span>
        </div>
        <div class="items">
            <w-icon name="search2"></w-icon>
            <span class="mls"> search2</span>
        </div>
        <div class="items">
            <w-icon name="envelope-o"></w-icon>
            <span class="mls"> envelope-o</span>
        </div>
        <div class="items">
            <w-icon name="heart2"></w-icon>
            <span class="mls"> heart2</span>
        </div>
        <div class="items">
            <w-icon name="star"></w-icon>
            <span class="mls"> star</span>
        </div>
        <div class="items">
            <w-icon name="star-o"></w-icon>
            <span class="mls"> star-o</span>
        </div>
        <div class="items">
            <w-icon name="user2"></w-icon>
            <span class="mls"> user2</span>
        </div>
        <div class="items">
            <w-icon name="film2"></w-icon>
            <span class="mls"> film2</span>
        </div>
        <div class="items">
            <w-icon name="th-large"></w-icon>
            <span class="mls"> th-large</span>
        </div>
        <div class="items">
            <w-icon name="th"></w-icon>
            <span class="mls"> th</span>
        </div>
        <div class="items">
            <w-icon name="th-list"></w-icon>
            <span class="mls"> th-list</span>
        </div>
        <div class="items">
            <w-icon name="check"></w-icon>
            <span class="mls"> check</span>
        </div>
        <div class="items">
            <w-icon name="close"></w-icon>
            <span class="mls"> close</span>
        </div>
        <div class="items">
            <w-icon name="remove"></w-icon>
            <span class="mls"> remove</span>
        </div>
        <div class="items">
            <w-icon name="times"></w-icon>
            <span class="mls"> times</span>
        </div>
        <div class="items">
            <w-icon name="search-plus"></w-icon>
            <span class="mls"> search-plus</span>
        </div>
        <div class="items">
            <w-icon name="search-minus"></w-icon>
            <span class="mls"> search-minus</span>
        </div>
        <div class="items">
            <w-icon name="power-off"></w-icon>
            <span class="mls"> power-off</span>
        </div>
        <div class="items">
            <w-icon name="signal"></w-icon>
            <span class="mls"> signal</span>
        </div>
        <div class="items">
            <w-icon name="cog2"></w-icon>
            <span class="mls"> cog2</span>
        </div>
        <div class="items">
            <w-icon name="gear"></w-icon>
            <span class="mls"> gear</span>
        </div>
        <div class="items">
            <w-icon name="trash-o"></w-icon>
            <span class="mls"> trash-o</span>
        </div>
        <div class="items">
            <w-icon name="home4"></w-icon>
            <span class="mls"> home4</span>
        </div>
        <div class="items">
            <w-icon name="file-o"></w-icon>
            <span class="mls"> file-o</span>
        </div>
        <div class="items">
            <w-icon name="clock-o"></w-icon>
            <span class="mls"> clock-o</span>
        </div>
        <div class="items">
            <w-icon name="road2"></w-icon>
            <span class="mls"> road2</span>
        </div>
        <div class="items">
            <w-icon name="download"></w-icon>
            <span class="mls"> download</span>
        </div>
        <div class="items">
            <w-icon name="arrow-circle-o-down"></w-icon>
            <span class="mls"> arrow-circle-o-down</span>
        </div>
        <div class="items">
            <w-icon name="arrow-circle-o-up"></w-icon>
            <span class="mls"> arrow-circle-o-up</span>
        </div>
        <div class="items">
            <w-icon name="inbox"></w-icon>
            <span class="mls"> inbox</span>
        </div>
        <div class="items">
            <w-icon name="play-circle-o"></w-icon>
            <span class="mls"> play-circle-o</span>
        </div>
        <div class="items">
            <w-icon name="repeat"></w-icon>
            <span class="mls"> repeat</span>
        </div>
        <div class="items">
            <w-icon name="rotate-right"></w-icon>
            <span class="mls"> rotate-right</span>
        </div>
        <div class="items">
            <w-icon name="refresh"></w-icon>
            <span class="mls"> refresh</span>
        </div>
        <div class="items">
            <w-icon name="list-alt"></w-icon>
            <span class="mls"> list-alt</span>
        </div>
        <div class="items">
            <w-icon name="lock4"></w-icon>
            <span class="mls"> lock4</span>
        </div>
        <div class="items">
            <w-icon name="flag2"></w-icon>
            <span class="mls"> flag2</span>
        </div>
        <div class="items">
            <w-icon name="headphones2"></w-icon>
            <span class="mls"> headphones2</span>
        </div>
        <div class="items">
            <w-icon name="volume-off"></w-icon>
            <span class="mls"> volume-off</span>
        </div>
        <div class="items">
            <w-icon name="volume-down"></w-icon>
            <span class="mls"> volume-down</span>
        </div>
        <div class="items">
            <w-icon name="volume-up"></w-icon>
            <span class="mls"> volume-up</span>
        </div>
        <div class="items">
            <w-icon name="qrcode2"></w-icon>
            <span class="mls"> qrcode2</span>
        </div>
        <div class="items">
            <w-icon name="barcode2"></w-icon>
            <span class="mls"> barcode2</span>
        </div>
        <div class="items">
            <w-icon name="tag"></w-icon>
            <span class="mls"> tag</span>
        </div>
        <div class="items">
            <w-icon name="tags"></w-icon>
            <span class="mls"> tags</span>
        </div>
        <div class="items">
            <w-icon name="book2"></w-icon>
            <span class="mls"> book2</span>
        </div>
        <div class="items">
            <w-icon name="bookmark2"></w-icon>
            <span class="mls"> bookmark2</span>
        </div>
        <div class="items">
            <w-icon name="print"></w-icon>
            <span class="mls"> print</span>
        </div>
        <div class="items">
            <w-icon name="camera3"></w-icon>
            <span class="mls"> camera3</span>
        </div>
        <div class="items">
            <w-icon name="font2"></w-icon>
            <span class="mls"> font2</span>
        </div>
        <div class="items">
            <w-icon name="bold2"></w-icon>
            <span class="mls"> bold2</span>
        </div>
        <div class="items">
            <w-icon name="italic2"></w-icon>
            <span class="mls"> italic2</span>
        </div>
        <div class="items">
            <w-icon name="text-height2"></w-icon>
            <span class="mls"> text-height2</span>
        </div>
        <div class="items">
            <w-icon name="text-width2"></w-icon>
            <span class="mls"> text-width2</span>
        </div>
        <div class="items">
            <w-icon name="align-left"></w-icon>
            <span class="mls"> align-left</span>
        </div>
        <div class="items">
            <w-icon name="align-center"></w-icon>
            <span class="mls"> align-center</span>
        </div>
        <div class="items">
            <w-icon name="align-right"></w-icon>
            <span class="mls"> align-right</span>
        </div>
        <div class="items">
            <w-icon name="align-justify"></w-icon>
            <span class="mls"> align-justify</span>
        </div>
        <div class="items">
            <w-icon name="list3"></w-icon>
            <span class="mls"> list3</span>
        </div>
        <div class="items">
            <w-icon name="dedent"></w-icon>
            <span class="mls"> dedent</span>
        </div>
        <div class="items">
            <w-icon name="outdent"></w-icon>
            <span class="mls"> outdent</span>
        </div>
        <div class="items">
            <w-icon name="indent"></w-icon>
            <span class="mls"> indent</span>
        </div>
        <div class="items">
            <w-icon name="video-camera2"></w-icon>
            <span class="mls"> video-camera2</span>
        </div>
        <div class="items">
            <w-icon name="image2"></w-icon>
            <span class="mls"> image2</span>
        </div>
        <div class="items">
            <w-icon name="photo"></w-icon>
            <span class="mls"> photo</span>
        </div>
        <div class="items">
            <w-icon name="picture-o"></w-icon>
            <span class="mls"> picture-o</span>
        </div>
        <div class="items">
            <w-icon name="pencil3"></w-icon>
            <span class="mls"> pencil3</span>
        </div>
        <div class="items">
            <w-icon name="map-marker"></w-icon>
            <span class="mls"> map-marker</span>
        </div>
        <div class="items">
            <w-icon name="adjust"></w-icon>
            <span class="mls"> adjust</span>
        </div>
        <div class="items">
            <w-icon name="tint"></w-icon>
            <span class="mls"> tint</span>
        </div>
        <div class="items">
            <w-icon name="edit"></w-icon>
            <span class="mls"> edit</span>
        </div>
        <div class="items">
            <w-icon name="pencil-square-o"></w-icon>
            <span class="mls"> pencil-square-o</span>
        </div>
        <div class="items">
            <w-icon name="share-square-o"></w-icon>
            <span class="mls"> share-square-o</span>
        </div>
        <div class="items">
            <w-icon name="check-square-o"></w-icon>
            <span class="mls"> check-square-o</span>
        </div>
        <div class="items">
            <w-icon name="arrows"></w-icon>
            <span class="mls"> arrows</span>
        </div>
        <div class="items">
            <w-icon name="step-backward"></w-icon>
            <span class="mls"> step-backward</span>
        </div>
        <div class="items">
            <w-icon name="fast-backward"></w-icon>
            <span class="mls"> fast-backward</span>
        </div>
        <div class="items">
            <w-icon name="backward3"></w-icon>
            <span class="mls"> backward3</span>
        </div>
        <div class="items">
            <w-icon name="play4"></w-icon>
            <span class="mls"> play4</span>
        </div>
        <div class="items">
            <w-icon name="pause3"></w-icon>
            <span class="mls"> pause3</span>
        </div>
        <div class="items">
            <w-icon name="stop3"></w-icon>
            <span class="mls"> stop3</span>
        </div>
        <div class="items">
            <w-icon name="forward4"></w-icon>
            <span class="mls"> forward4</span>
        </div>
        <div class="items">
            <w-icon name="fast-forward"></w-icon>
            <span class="mls"> fast-forward</span>
        </div>
        <div class="items">
            <w-icon name="step-forward"></w-icon>
            <span class="mls"> step-forward</span>
        </div>
        <div class="items">
            <w-icon name="eject2"></w-icon>
            <span class="mls"> eject2</span>
        </div>
        <div class="items">
            <w-icon name="chevron-left"></w-icon>
            <span class="mls"> chevron-left</span>
        </div>
        <div class="items">
            <w-icon name="chevron-right"></w-icon>
            <span class="mls"> chevron-right</span>
        </div>
        <div class="items">
            <w-icon name="plus-circle"></w-icon>
            <span class="mls"> plus-circle</span>
        </div>
        <div class="items">
            <w-icon name="minus-circle"></w-icon>
            <span class="mls"> minus-circle</span>
        </div>
        <div class="items">
            <w-icon name="times-circle"></w-icon>
            <span class="mls"> times-circle</span>
        </div>
        <div class="items">
            <w-icon name="check-circle"></w-icon>
            <span class="mls"> check-circle</span>
        </div>
        <div class="items">
            <w-icon name="question-circle"></w-icon>
            <span class="mls"> question-circle</span>
        </div>
        <div class="items">
            <w-icon name="info-circle"></w-icon>
            <span class="mls"> info-circle</span>
        </div>
        <div class="items">
            <w-icon name="crosshairs"></w-icon>
            <span class="mls"> crosshairs</span>
        </div>
        <div class="items">
            <w-icon name="times-circle-o"></w-icon>
            <span class="mls"> times-circle-o</span>
        </div>
        <div class="items">
            <w-icon name="check-circle-o"></w-icon>
            <span class="mls"> check-circle-o</span>
        </div>
        <div class="items">
            <w-icon name="ban"></w-icon>
            <span class="mls"> ban</span>
        </div>
        <div class="items">
            <w-icon name="arrow-left3"></w-icon>
            <span class="mls"> arrow-left3</span>
        </div>
        <div class="items">
            <w-icon name="arrow-right3"></w-icon>
            <span class="mls"> arrow-right3</span>
        </div>
        <div class="items">
            <w-icon name="arrow-up3"></w-icon>
            <span class="mls"> arrow-up3</span>
        </div>
        <div class="items">
            <w-icon name="arrow-down3"></w-icon>
            <span class="mls"> arrow-down3</span>
        </div>
        <div class="items">
            <w-icon name="mail-forward"></w-icon>
            <span class="mls"> mail-forward</span>
        </div>
        <div class="items">
            <w-icon name="share3"></w-icon>
            <span class="mls"> share3</span>
        </div>
        <div class="items">
            <w-icon name="expand"></w-icon>
            <span class="mls"> expand</span>
        </div>
        <div class="items">
            <w-icon name="compress"></w-icon>
            <span class="mls"> compress</span>
        </div>
        <div class="items">
            <w-icon name="exclamation-circle"></w-icon>
            <span class="mls"> exclamation-circle</span>
        </div>
        <div class="items">
            <w-icon name="gift2"></w-icon>
            <span class="mls"> gift2</span>
        </div>
        <div class="items">
            <w-icon name="leaf2"></w-icon>
            <span class="mls"> leaf2</span>
        </div>
        <div class="items">
            <w-icon name="fire2"></w-icon>
            <span class="mls"> fire2</span>
        </div>
        <div class="items">
            <w-icon name="eye2"></w-icon>
            <span class="mls"> eye2</span>
        </div>
        <div class="items">
            <w-icon name="eye-slash"></w-icon>
            <span class="mls"> eye-slash</span>
        </div>
        <div class="items">
            <w-icon name="exclamation-triangle"></w-icon>
            <span class="mls"> exclamation-triangle</span>
        </div>
        <div class="items">
            <w-icon name="warning2"></w-icon>
            <span class="mls"> warning2</span>
        </div>
        <div class="items">
            <w-icon name="plane"></w-icon>
            <span class="mls"> plane</span>
        </div>
        <div class="items">
            <w-icon name="calendar2"></w-icon>
            <span class="mls"> calendar2</span>
        </div>
        <div class="items">
            <w-icon name="random"></w-icon>
            <span class="mls"> random</span>
        </div>
        <div class="items">
            <w-icon name="comment"></w-icon>
            <span class="mls"> comment</span>
        </div>
        <div class="items">
            <w-icon name="magnet2"></w-icon>
            <span class="mls"> magnet2</span>
        </div>
        <div class="items">
            <w-icon name="chevron-up"></w-icon>
            <span class="mls"> chevron-up</span>
        </div>
        <div class="items">
            <w-icon name="chevron-down"></w-icon>
            <span class="mls"> chevron-down</span>
        </div>
        <div class="items">
            <w-icon name="retweet"></w-icon>
            <span class="mls"> retweet</span>
        </div>
        <div class="items">
            <w-icon name="shopping-cart"></w-icon>
            <span class="mls"> shopping-cart</span>
        </div>
        <div class="items">
            <w-icon name="folder2"></w-icon>
            <span class="mls"> folder2</span>
        </div>
        <div class="items">
            <w-icon name="folder-open2"></w-icon>
            <span class="mls"> folder-open2</span>
        </div>
        <div class="items">
            <w-icon name="arrows-v"></w-icon>
            <span class="mls"> arrows-v</span>
        </div>
        <div class="items">
            <w-icon name="arrows-h"></w-icon>
            <span class="mls"> arrows-h</span>
        </div>
        <div class="items">
            <w-icon name="bar-chart"></w-icon>
            <span class="mls"> bar-chart</span>
        </div>
        <div class="items">
            <w-icon name="bar-chart-o"></w-icon>
            <span class="mls"> bar-chart-o</span>
        </div>
        <div class="items">
            <w-icon name="twitter-square"></w-icon>
            <span class="mls"> twitter-square</span>
        </div>
        <div class="items">
            <w-icon name="facebook-square"></w-icon>
            <span class="mls"> facebook-square</span>
        </div>
        <div class="items">
            <w-icon name="camera-retro"></w-icon>
            <span class="mls"> camera-retro</span>
        </div>
        <div class="items">
            <w-icon name="key3"></w-icon>
            <span class="mls"> key3</span>
        </div>
        <div class="items">
            <w-icon name="cogs2"></w-icon>
            <span class="mls"> cogs2</span>
        </div>
        <div class="items">
            <w-icon name="gears"></w-icon>
            <span class="mls"> gears</span>
        </div>
        <div class="items">
            <w-icon name="comments"></w-icon>
            <span class="mls"> comments</span>
        </div>
        <div class="items">
            <w-icon name="thumbs-o-up"></w-icon>
            <span class="mls"> thumbs-o-up</span>
        </div>
        <div class="items">
            <w-icon name="thumbs-o-down"></w-icon>
            <span class="mls"> thumbs-o-down</span>
        </div>
        <div class="items">
            <w-icon name="star-half2"></w-icon>
            <span class="mls"> star-half2</span>
        </div>
        <div class="items">
            <w-icon name="heart-o"></w-icon>
            <span class="mls"> heart-o</span>
        </div>
        <div class="items">
            <w-icon name="sign-out"></w-icon>
            <span class="mls"> sign-out</span>
        </div>
        <div class="items">
            <w-icon name="linkedin-square"></w-icon>
            <span class="mls"> linkedin-square</span>
        </div>
        <div class="items">
            <w-icon name="thumb-tack"></w-icon>
            <span class="mls"> thumb-tack</span>
        </div>
        <div class="items">
            <w-icon name="external-link"></w-icon>
            <span class="mls"> external-link</span>
        </div>
        <div class="items">
            <w-icon name="sign-in"></w-icon>
            <span class="mls"> sign-in</span>
        </div>
        <div class="items">
            <w-icon name="trophy2"></w-icon>
            <span class="mls"> trophy2</span>
        </div>
        <div class="items">
            <w-icon name="github-square"></w-icon>
            <span class="mls"> github-square</span>
        </div>
        <div class="items">
            <w-icon name="upload4"></w-icon>
            <span class="mls"> upload4</span>
        </div>
        <div class="items">
            <w-icon name="lemon-o"></w-icon>
            <span class="mls"> lemon-o</span>
        </div>
        <div class="items">
            <w-icon name="phone2"></w-icon>
            <span class="mls"> phone2</span>
        </div>
        <div class="items">
            <w-icon name="square-o"></w-icon>
            <span class="mls"> square-o</span>
        </div>
        <div class="items">
            <w-icon name="bookmark-o"></w-icon>
            <span class="mls"> bookmark-o</span>
        </div>
        <div class="items">
            <w-icon name="phone-square"></w-icon>
            <span class="mls"> phone-square</span>
        </div>
        <div class="items">
            <w-icon name="twitter"></w-icon>
            <span class="mls"> twitter</span>
        </div>
        <div class="items">
            <w-icon name="facebook"></w-icon>
            <span class="mls"> facebook</span>
        </div>
        <div class="items">
            <w-icon name="facebook-f"></w-icon>
            <span class="mls"> facebook-f</span>
        </div>
        <div class="items">
            <w-icon name="github2"></w-icon>
            <span class="mls"> github2</span>
        </div>
        <div class="items">
            <w-icon name="unlock"></w-icon>
            <span class="mls"> unlock</span>
        </div>
        <div class="items">
            <w-icon name="credit-card2"></w-icon>
            <span class="mls"> credit-card2</span>
        </div>
        <div class="items">
            <w-icon name="feed2"></w-icon>
            <span class="mls"> feed2</span>
        </div>
        <div class="items">
            <w-icon name="rss"></w-icon>
            <span class="mls"> rss</span>
        </div>
        <div class="items">
            <w-icon name="hdd-o"></w-icon>
            <span class="mls"> hdd-o</span>
        </div>
        <div class="items">
            <w-icon name="bullhorn2"></w-icon>
            <span class="mls"> bullhorn2</span>
        </div>
        <div class="items">
            <w-icon name="bell-o"></w-icon>
            <span class="mls"> bell-o</span>
        </div>
        <div class="items">
            <w-icon name="certificate"></w-icon>
            <span class="mls"> certificate</span>
        </div>
        <div class="items">
            <w-icon name="hand-o-right"></w-icon>
            <span class="mls"> hand-o-right</span>
        </div>
        <div class="items">
            <w-icon name="hand-o-left"></w-icon>
            <span class="mls"> hand-o-left</span>
        </div>
        <div class="items">
            <w-icon name="hand-o-up"></w-icon>
            <span class="mls"> hand-o-up</span>
        </div>
        <div class="items">
            <w-icon name="hand-o-down"></w-icon>
            <span class="mls"> hand-o-down</span>
        </div>
        <div class="items">
            <w-icon name="arrow-circle-left"></w-icon>
            <span class="mls"> arrow-circle-left</span>
        </div>
        <div class="items">
            <w-icon name="arrow-circle-right"></w-icon>
            <span class="mls"> arrow-circle-right</span>
        </div>
        <div class="items">
            <w-icon name="arrow-circle-up"></w-icon>
            <span class="mls"> arrow-circle-up</span>
        </div>
        <div class="items">
            <w-icon name="arrow-circle-down"></w-icon>
            <span class="mls"> arrow-circle-down</span>
        </div>
        <div class="items">
            <w-icon name="globe"></w-icon>
            <span class="mls"> globe</span>
        </div>
        <div class="items">
            <w-icon name="wrench2"></w-icon>
            <span class="mls"> wrench2</span>
        </div>
        <div class="items">
            <w-icon name="tasks"></w-icon>
            <span class="mls"> tasks</span>
        </div>
        <div class="items">
            <w-icon name="filter3"></w-icon>
            <span class="mls"> filter3</span>
        </div>
        <div class="items">
            <w-icon name="briefcase2"></w-icon>
            <span class="mls"> briefcase2</span>
        </div>
        <div class="items">
            <w-icon name="arrows-alt"></w-icon>
            <span class="mls"> arrows-alt</span>
        </div>
        <div class="items">
            <w-icon name="group"></w-icon>
            <span class="mls"> group</span>
        </div>
        <div class="items">
            <w-icon name="users2"></w-icon>
            <span class="mls"> users2</span>
        </div>
        <div class="items">
            <w-icon name="chain"></w-icon>
            <span class="mls"> chain</span>
        </div>
        <div class="items">
            <w-icon name="link2"></w-icon>
            <span class="mls"> link2</span>
        </div>
        <div class="items">
            <w-icon name="cloud4"></w-icon>
            <span class="mls"> cloud4</span>
        </div>
        <div class="items">
            <w-icon name="flask"></w-icon>
            <span class="mls"> flask</span>
        </div>
        <div class="items">
            <w-icon name="cut"></w-icon>
            <span class="mls"> cut</span>
        </div>
        <div class="items">
            <w-icon name="scissors2"></w-icon>
            <span class="mls"> scissors2</span>
        </div>
        <div class="items">
            <w-icon name="copy2"></w-icon>
            <span class="mls"> copy2</span>
        </div>
        <div class="items">
            <w-icon name="files-o"></w-icon>
            <span class="mls"> files-o</span>
        </div>
        <div class="items">
            <w-icon name="paperclip2"></w-icon>
            <span class="mls"> paperclip2</span>
        </div>
        <div class="items">
            <w-icon name="floppy-o"></w-icon>
            <span class="mls"> floppy-o</span>
        </div>
        <div class="items">
            <w-icon name="save"></w-icon>
            <span class="mls"> save</span>
        </div>
        <div class="items">
            <w-icon name="square"></w-icon>
            <span class="mls"> square</span>
        </div>
        <div class="items">
            <w-icon name="bars"></w-icon>
            <span class="mls"> bars</span>
        </div>
        <div class="items">
            <w-icon name="navicon"></w-icon>
            <span class="mls"> navicon</span>
        </div>
        <div class="items">
            <w-icon name="reorder"></w-icon>
            <span class="mls"> reorder</span>
        </div>
        <div class="items">
            <w-icon name="list-ul"></w-icon>
            <span class="mls"> list-ul</span>
        </div>
        <div class="items">
            <w-icon name="list-ol"></w-icon>
            <span class="mls"> list-ol</span>
        </div>
        <div class="items">
            <w-icon name="strikethrough2"></w-icon>
            <span class="mls"> strikethrough2</span>
        </div>
        <div class="items">
            <w-icon name="underline2"></w-icon>
            <span class="mls"> underline2</span>
        </div>
        <div class="items">
            <w-icon name="table3"></w-icon>
            <span class="mls"> table3</span>
        </div>
        <div class="items">
            <w-icon name="magic"></w-icon>
            <span class="mls"> magic</span>
        </div>
        <div class="items">
            <w-icon name="truck2"></w-icon>
            <span class="mls"> truck2</span>
        </div>
        <div class="items">
            <w-icon name="pinterest"></w-icon>
            <span class="mls"> pinterest</span>
        </div>
        <div class="items">
            <w-icon name="pinterest-square"></w-icon>
            <span class="mls"> pinterest-square</span>
        </div>
        <div class="items">
            <w-icon name="google-plus-square"></w-icon>
            <span class="mls"> google-plus-square</span>
        </div>
        <div class="items">
            <w-icon name="google-plus"></w-icon>
            <span class="mls"> google-plus</span>
        </div>
        <div class="items">
            <w-icon name="money"></w-icon>
            <span class="mls"> money</span>
        </div>
        <div class="items">
            <w-icon name="caret-down"></w-icon>
            <span class="mls"> caret-down</span>
        </div>
        <div class="items">
            <w-icon name="caret-up"></w-icon>
            <span class="mls"> caret-up</span>
        </div>
        <div class="items">
            <w-icon name="caret-left"></w-icon>
            <span class="mls"> caret-left</span>
        </div>
        <div class="items">
            <w-icon name="caret-right"></w-icon>
            <span class="mls"> caret-right</span>
        </div>
        <div class="items">
            <w-icon name="columns"></w-icon>
            <span class="mls"> columns</span>
        </div>
        <div class="items">
            <w-icon name="sort"></w-icon>
            <span class="mls"> sort</span>
        </div>
        <div class="items">
            <w-icon name="unsorted"></w-icon>
            <span class="mls"> unsorted</span>
        </div>
        <div class="items">
            <w-icon name="sort-desc"></w-icon>
            <span class="mls"> sort-desc</span>
        </div>
        <div class="items">
            <w-icon name="sort-down"></w-icon>
            <span class="mls"> sort-down</span>
        </div>
        <div class="items">
            <w-icon name="sort-asc"></w-icon>
            <span class="mls"> sort-asc</span>
        </div>
        <div class="items">
            <w-icon name="sort-up"></w-icon>
            <span class="mls"> sort-up</span>
        </div>
        <div class="items">
            <w-icon name="envelope"></w-icon>
            <span class="mls"> envelope</span>
        </div>
        <div class="items">
            <w-icon name="linkedin"></w-icon>
            <span class="mls"> linkedin</span>
        </div>
        <div class="items">
            <w-icon name="rotate-left"></w-icon>
            <span class="mls"> rotate-left</span>
        </div>
        <div class="items">
            <w-icon name="undo3"></w-icon>
            <span class="mls"> undo3</span>
        </div>
        <div class="items">
            <w-icon name="gavel"></w-icon>
            <span class="mls"> gavel</span>
        </div>
        <div class="items">
            <w-icon name="legal"></w-icon>
            <span class="mls"> legal</span>
        </div>
        <div class="items">
            <w-icon name="dashboard"></w-icon>
            <span class="mls"> dashboard</span>
        </div>
        <div class="items">
            <w-icon name="tachometer"></w-icon>
            <span class="mls"> tachometer</span>
        </div>
        <div class="items">
            <w-icon name="comment-o"></w-icon>
            <span class="mls"> comment-o</span>
        </div>
        <div class="items">
            <w-icon name="comments-o"></w-icon>
            <span class="mls"> comments-o</span>
        </div>
        <div class="items">
            <w-icon name="bolt"></w-icon>
            <span class="mls"> bolt</span>
        </div>
        <div class="items">
            <w-icon name="flash"></w-icon>
            <span class="mls"> flash</span>
        </div>
        <div class="items">
            <w-icon name="sitemap"></w-icon>
            <span class="mls"> sitemap</span>
        </div>
        <div class="items">
            <w-icon name="umbrella"></w-icon>
            <span class="mls"> umbrella</span>
        </div>
        <div class="items">
            <w-icon name="clipboard2"></w-icon>
            <span class="mls"> clipboard2</span>
        </div>
        <div class="items">
            <w-icon name="paste2"></w-icon>
            <span class="mls"> paste2</span>
        </div>
        <div class="items">
            <w-icon name="lightbulb-o"></w-icon>
            <span class="mls"> lightbulb-o</span>
        </div>
        <div class="items">
            <w-icon name="exchange"></w-icon>
            <span class="mls"> exchange</span>
        </div>
        <div class="items">
            <w-icon name="cloud-download2"></w-icon>
            <span class="mls"> cloud-download2</span>
        </div>
        <div class="items">
            <w-icon name="cloud-upload2"></w-icon>
            <span class="mls"> cloud-upload2</span>
        </div>
        <div class="items">
            <w-icon name="user-md"></w-icon>
            <span class="mls"> user-md</span>
        </div>
        <div class="items">
            <w-icon name="stethoscope"></w-icon>
            <span class="mls"> stethoscope</span>
        </div>
        <div class="items">
            <w-icon name="suitcase"></w-icon>
            <span class="mls"> suitcase</span>
        </div>
        <div class="items">
            <w-icon name="bell2"></w-icon>
            <span class="mls"> bell2</span>
        </div>
        <div class="items">
            <w-icon name="coffee"></w-icon>
            <span class="mls"> coffee</span>
        </div>
        <div class="items">
            <w-icon name="cutlery"></w-icon>
            <span class="mls"> cutlery</span>
        </div>
        <div class="items">
            <w-icon name="file-text-o"></w-icon>
            <span class="mls"> file-text-o</span>
        </div>
        <div class="items">
            <w-icon name="building-o"></w-icon>
            <span class="mls"> building-o</span>
        </div>
        <div class="items">
            <w-icon name="hospital-o"></w-icon>
            <span class="mls"> hospital-o</span>
        </div>
        <div class="items">
            <w-icon name="ambulance"></w-icon>
            <span class="mls"> ambulance</span>
        </div>
        <div class="items">
            <w-icon name="medkit"></w-icon>
            <span class="mls"> medkit</span>
        </div>
        <div class="items">
            <w-icon name="fighter-jet"></w-icon>
            <span class="mls"> fighter-jet</span>
        </div>
        <div class="items">
            <w-icon name="beer"></w-icon>
            <span class="mls"> beer</span>
        </div>
        <div class="items">
            <w-icon name="h-square"></w-icon>
            <span class="mls"> h-square</span>
        </div>
        <div class="items">
            <w-icon name="plus-square"></w-icon>
            <span class="mls"> plus-square</span>
        </div>
        <div class="items">
            <w-icon name="angle-double-left"></w-icon>
            <span class="mls"> angle-double-left</span>
        </div>
        <div class="items">
            <w-icon name="angle-double-right"></w-icon>
            <span class="mls"> angle-double-right</span>
        </div>
        <div class="items">
            <w-icon name="angle-double-up"></w-icon>
            <span class="mls"> angle-double-up</span>
        </div>
        <div class="items">
            <w-icon name="angle-double-down"></w-icon>
            <span class="mls"> angle-double-down</span>
        </div>
        <div class="items">
            <w-icon name="angle-left"></w-icon>
            <span class="mls"> angle-left</span>
        </div>
        <div class="items">
            <w-icon name="angle-right"></w-icon>
            <span class="mls"> angle-right</span>
        </div>
        <div class="items">
            <w-icon name="angle-up"></w-icon>
            <span class="mls"> angle-up</span>
        </div>
        <div class="items">
            <w-icon name="angle-down"></w-icon>
            <span class="mls"> angle-down</span>
        </div>
        <div class="items">
            <w-icon name="desktop"></w-icon>
            <span class="mls"> desktop</span>
        </div>
        <div class="items">
            <w-icon name="laptop2"></w-icon>
            <span class="mls"> laptop2</span>
        </div>
        <div class="items">
            <w-icon name="tablet2"></w-icon>
            <span class="mls"> tablet2</span>
        </div>
        <div class="items">
            <w-icon name="mobile3"></w-icon>
            <span class="mls"> mobile3</span>
        </div>
        <div class="items">
            <w-icon name="mobile-phone"></w-icon>
            <span class="mls"> mobile-phone</span>
        </div>
        <div class="items">
            <w-icon name="circle-o"></w-icon>
            <span class="mls"> circle-o</span>
        </div>
        <div class="items">
            <w-icon name="quote-left"></w-icon>
            <span class="mls"> quote-left</span>
        </div>
        <div class="items">
            <w-icon name="quote-right"></w-icon>
            <span class="mls"> quote-right</span>
        </div>
        <div class="items">
            <w-icon name="spinner9"></w-icon>
            <span class="mls"> spinner9</span>
        </div>
        <div class="items">
            <w-icon name="circle"></w-icon>
            <span class="mls"> circle</span>
        </div>
        <div class="items">
            <w-icon name="mail-reply"></w-icon>
            <span class="mls"> mail-reply</span>
        </div>
        <div class="items">
            <w-icon name="reply2"></w-icon>
            <span class="mls"> reply2</span>
        </div>
        <div class="items">
            <w-icon name="github-alt"></w-icon>
            <span class="mls"> github-alt</span>
        </div>
        <div class="items">
            <w-icon name="folder-o"></w-icon>
            <span class="mls"> folder-o</span>
        </div>
        <div class="items">
            <w-icon name="folder-open-o"></w-icon>
            <span class="mls"> folder-open-o</span>
        </div>
        <div class="items">
            <w-icon name="smile-o"></w-icon>
            <span class="mls"> smile-o</span>
        </div>
        <div class="items">
            <w-icon name="frown-o"></w-icon>
            <span class="mls"> frown-o</span>
        </div>
        <div class="items">
            <w-icon name="meh-o"></w-icon>
            <span class="mls"> meh-o</span>
        </div>
        <div class="items">
            <w-icon name="gamepad"></w-icon>
            <span class="mls"> gamepad</span>
        </div>
        <div class="items">
            <w-icon name="keyboard-o"></w-icon>
            <span class="mls"> keyboard-o</span>
        </div>
        <div class="items">
            <w-icon name="flag-o"></w-icon>
            <span class="mls"> flag-o</span>
        </div>
        <div class="items">
            <w-icon name="flag-checkered"></w-icon>
            <span class="mls"> flag-checkered</span>
        </div>
        <div class="items">
            <w-icon name="terminal2"></w-icon>
            <span class="mls"> terminal2</span>
        </div>
        <div class="items">
            <w-icon name="code2"></w-icon>
            <span class="mls"> code2</span>
        </div>
        <div class="items">
            <w-icon name="mail-reply-all"></w-icon>
            <span class="mls"> mail-reply-all</span>
        </div>
        <div class="items">
            <w-icon name="reply-all"></w-icon>
            <span class="mls"> reply-all</span>
        </div>
        <div class="items">
            <w-icon name="star-half-empty"></w-icon>
            <span class="mls"> star-half-empty</span>
        </div>
        <div class="items">
            <w-icon name="star-half-full"></w-icon>
            <span class="mls"> star-half-full</span>
        </div>
        <div class="items">
            <w-icon name="star-half-o"></w-icon>
            <span class="mls"> star-half-o</span>
        </div>
        <div class="items">
            <w-icon name="location-arrow"></w-icon>
            <span class="mls"> location-arrow</span>
        </div>
        <div class="items">
            <w-icon name="crop2"></w-icon>
            <span class="mls"> crop2</span>
        </div>
        <div class="items">
            <w-icon name="code-fork"></w-icon>
            <span class="mls"> code-fork</span>
        </div>
        <div class="items">
            <w-icon name="chain-broken"></w-icon>
            <span class="mls"> chain-broken</span>
        </div>
        <div class="items">
            <w-icon name="unlink"></w-icon>
            <span class="mls"> unlink</span>
        </div>
        <div class="items">
            <w-icon name="info2"></w-icon>
            <span class="mls"> info2</span>
        </div>
        <div class="items">
            <w-icon name="exclamation"></w-icon>
            <span class="mls"> exclamation</span>
        </div>
        <div class="items">
            <w-icon name="superscript3"></w-icon>
            <span class="mls"> superscript3</span>
        </div>
        <div class="items">
            <w-icon name="subscript3"></w-icon>
            <span class="mls"> subscript3</span>
        </div>
        <div class="items">
            <w-icon name="eraser"></w-icon>
            <span class="mls"> eraser</span>
        </div>
        <div class="items">
            <w-icon name="puzzle-piece"></w-icon>
            <span class="mls"> puzzle-piece</span>
        </div>
        <div class="items">
            <w-icon name="microphone"></w-icon>
            <span class="mls"> microphone</span>
        </div>
        <div class="items">
            <w-icon name="microphone-slash"></w-icon>
            <span class="mls"> microphone-slash</span>
        </div>
        <div class="items">
            <w-icon name="shield2"></w-icon>
            <span class="mls"> shield2</span>
        </div>
        <div class="items">
            <w-icon name="calendar-o"></w-icon>
            <span class="mls"> calendar-o</span>
        </div>
        <div class="items">
            <w-icon name="fire-extinguisher"></w-icon>
            <span class="mls"> fire-extinguisher</span>
        </div>
        <div class="items">
            <w-icon name="rocket2"></w-icon>
            <span class="mls"> rocket2</span>
        </div>
        <div class="items">
            <w-icon name="maxcdn"></w-icon>
            <span class="mls"> maxcdn</span>
        </div>
        <div class="items">
            <w-icon name="chevron-circle-left"></w-icon>
            <span class="mls"> chevron-circle-left</span>
        </div>
        <div class="items">
            <w-icon name="chevron-circle-right"></w-icon>
            <span class="mls"> chevron-circle-right</span>
        </div>
        <div class="items">
            <w-icon name="chevron-circle-up"></w-icon>
            <span class="mls"> chevron-circle-up</span>
        </div>
        <div class="items">
            <w-icon name="chevron-circle-down"></w-icon>
            <span class="mls"> chevron-circle-down</span>
        </div>
        <div class="items">
            <w-icon name="html5"></w-icon>
            <span class="mls"> html5</span>
        </div>
        <div class="items">
            <w-icon name="css32"></w-icon>
            <span class="mls"> css32</span>
        </div>
        <div class="items">
            <w-icon name="anchor"></w-icon>
            <span class="mls"> anchor</span>
        </div>
        <div class="items">
            <w-icon name="unlock-alt"></w-icon>
            <span class="mls"> unlock-alt</span>
        </div>
        <div class="items">
            <w-icon name="bullseye"></w-icon>
            <span class="mls"> bullseye</span>
        </div>
        <div class="items">
            <w-icon name="ellipsis-h"></w-icon>
            <span class="mls"> ellipsis-h</span>
        </div>
        <div class="items">
            <w-icon name="ellipsis-v"></w-icon>
            <span class="mls"> ellipsis-v</span>
        </div>
        <div class="items">
            <w-icon name="rss-square"></w-icon>
            <span class="mls"> rss-square</span>
        </div>
        <div class="items">
            <w-icon name="play-circle"></w-icon>
            <span class="mls"> play-circle</span>
        </div>
        <div class="items">
            <w-icon name="ticket2"></w-icon>
            <span class="mls"> ticket2</span>
        </div>
        <div class="items">
            <w-icon name="minus-square"></w-icon>
            <span class="mls"> minus-square</span>
        </div>
        <div class="items">
            <w-icon name="minus-square-o"></w-icon>
            <span class="mls"> minus-square-o</span>
        </div>
        <div class="items">
            <w-icon name="level-up"></w-icon>
            <span class="mls"> level-up</span>
        </div>
        <div class="items">
            <w-icon name="level-down"></w-icon>
            <span class="mls"> level-down</span>
        </div>
        <div class="items">
            <w-icon name="check-square"></w-icon>
            <span class="mls"> check-square</span>
        </div>
        <div class="items">
            <w-icon name="pencil-square"></w-icon>
            <span class="mls"> pencil-square</span>
        </div>
        <div class="items">
            <w-icon name="external-link-square"></w-icon>
            <span class="mls"> external-link-square</span>
        </div>
        <div class="items">
            <w-icon name="share-square"></w-icon>
            <span class="mls"> share-square</span>
        </div>
        <div class="items">
            <w-icon name="compass3"></w-icon>
            <span class="mls"> compass3</span>
        </div>
        <div class="items">
            <w-icon name="caret-square-o-down"></w-icon>
            <span class="mls"> caret-square-o-down</span>
        </div>
        <div class="items">
            <w-icon name="toggle-down"></w-icon>
            <span class="mls"> toggle-down</span>
        </div>
        <div class="items">
            <w-icon name="caret-square-o-up"></w-icon>
            <span class="mls"> caret-square-o-up</span>
        </div>
        <div class="items">
            <w-icon name="toggle-up"></w-icon>
            <span class="mls"> toggle-up</span>
        </div>
        <div class="items">
            <w-icon name="caret-square-o-right"></w-icon>
            <span class="mls"> caret-square-o-right</span>
        </div>
        <div class="items">
            <w-icon name="toggle-right"></w-icon>
            <span class="mls"> toggle-right</span>
        </div>
        <div class="items">
            <w-icon name="eur"></w-icon>
            <span class="mls"> eur</span>
        </div>
        <div class="items">
            <w-icon name="euro"></w-icon>
            <span class="mls"> euro</span>
        </div>
        <div class="items">
            <w-icon name="gbp"></w-icon>
            <span class="mls"> gbp</span>
        </div>
        <div class="items">
            <w-icon name="dollar"></w-icon>
            <span class="mls"> dollar</span>
        </div>
        <div class="items">
            <w-icon name="usd"></w-icon>
            <span class="mls"> usd</span>
        </div>
        <div class="items">
            <w-icon name="inr"></w-icon>
            <span class="mls"> inr</span>
        </div>
        <div class="items">
            <w-icon name="rupee"></w-icon>
            <span class="mls"> rupee</span>
        </div>
        <div class="items">
            <w-icon name="cny"></w-icon>
            <span class="mls"> cny</span>
        </div>
        <div class="items">
            <w-icon name="jpy"></w-icon>
            <span class="mls"> jpy</span>
        </div>
        <div class="items">
            <w-icon name="rmb"></w-icon>
            <span class="mls"> rmb</span>
        </div>
        <div class="items">
            <w-icon name="yen"></w-icon>
            <span class="mls"> yen</span>
        </div>
        <div class="items">
            <w-icon name="rouble"></w-icon>
            <span class="mls"> rouble</span>
        </div>
        <div class="items">
            <w-icon name="rub"></w-icon>
            <span class="mls"> rub</span>
        </div>
        <div class="items">
            <w-icon name="ruble"></w-icon>
            <span class="mls"> ruble</span>
        </div>
        <div class="items">
            <w-icon name="krw"></w-icon>
            <span class="mls"> krw</span>
        </div>
        <div class="items">
            <w-icon name="won"></w-icon>
            <span class="mls"> won</span>
        </div>
        <div class="items">
            <w-icon name="bitcoin"></w-icon>
            <span class="mls"> bitcoin</span>
        </div>
        <div class="items">
            <w-icon name="btc"></w-icon>
            <span class="mls"> btc</span>
        </div>
        <div class="items">
            <w-icon name="file"></w-icon>
            <span class="mls"> file</span>
        </div>
        <div class="items">
            <w-icon name="file-text3"></w-icon>
            <span class="mls"> file-text3</span>
        </div>
        <div class="items">
            <w-icon name="sort-alpha-asc2"></w-icon>
            <span class="mls"> sort-alpha-asc2</span>
        </div>
        <div class="items">
            <w-icon name="sort-alpha-desc2"></w-icon>
            <span class="mls"> sort-alpha-desc2</span>
        </div>
        <div class="items">
            <w-icon name="sort-amount-asc2"></w-icon>
            <span class="mls"> sort-amount-asc2</span>
        </div>
        <div class="items">
            <w-icon name="sort-amount-desc2"></w-icon>
            <span class="mls"> sort-amount-desc2</span>
        </div>
        <div class="items">
            <w-icon name="sort-numeric-asc2"></w-icon>
            <span class="mls"> sort-numeric-asc2</span>
        </div>
        <div class="items">
            <w-icon name="sort-numeric-desc"></w-icon>
            <span class="mls"> sort-numeric-desc</span>
        </div>
        <div class="items">
            <w-icon name="thumbs-up"></w-icon>
            <span class="mls"> thumbs-up</span>
        </div>
        <div class="items">
            <w-icon name="thumbs-down"></w-icon>
            <span class="mls"> thumbs-down</span>
        </div>
        <div class="items">
            <w-icon name="stack-overflow"></w-icon>
            <span class="mls"> stack-overflow</span>
        </div>
        <div class="items">
            <w-icon name="instagram"></w-icon>
            <span class="mls"> instagram</span>
        </div>
        <div class="items">
            <w-icon name="flickr"></w-icon>
            <span class="mls"> flickr</span>
        </div>
        <div class="items">
            <w-icon name="adn"></w-icon>
            <span class="mls"> adn</span>
        </div>
        <div class="items">
            <w-icon name="tumblr"></w-icon>
            <span class="mls"> tumblr</span>
        </div>
        <div class="items">
            <w-icon name="long-arrow-down"></w-icon>
            <span class="mls"> long-arrow-down</span>
        </div>
        <div class="items">
            <w-icon name="long-arrow-up"></w-icon>
            <span class="mls"> long-arrow-up</span>
        </div>
        <div class="items">
            <w-icon name="long-arrow-left"></w-icon>
            <span class="mls"> long-arrow-left</span>
        </div>
        <div class="items">
            <w-icon name="long-arrow-right"></w-icon>
            <span class="mls"> long-arrow-right</span>
        </div>
        <div class="items">
            <w-icon name="dribbble"></w-icon>
            <span class="mls"> dribbble</span>
        </div>
        <div class="items">
            <w-icon name="skype"></w-icon>
            <span class="mls"> skype</span>
        </div>
        <div class="items">
            <w-icon name="foursquare"></w-icon>
            <span class="mls"> foursquare</span>
        </div>
        <div class="items">
            <w-icon name="trello"></w-icon>
            <span class="mls"> trello</span>
        </div>
        <div class="items">
            <w-icon name="female"></w-icon>
            <span class="mls"> female</span>
        </div>
        <div class="items">
            <w-icon name="male"></w-icon>
            <span class="mls"> male</span>
        </div>
        <div class="items">
            <w-icon name="gittip"></w-icon>
            <span class="mls"> gittip</span>
        </div>
        <div class="items">
            <w-icon name="gratipay"></w-icon>
            <span class="mls"> gratipay</span>
        </div>
        <div class="items">
            <w-icon name="sun-o"></w-icon>
            <span class="mls"> sun-o</span>
        </div>
        <div class="items">
            <w-icon name="moon-o"></w-icon>
            <span class="mls"> moon-o</span>
        </div>
        <div class="items">
            <w-icon name="archive"></w-icon>
            <span class="mls"> archive</span>
        </div>
        <div class="items">
            <w-icon name="bug3"></w-icon>
            <span class="mls"> bug3</span>
        </div>
        <div class="items">
            <w-icon name="vk"></w-icon>
            <span class="mls"> vk</span>
        </div>
        <div class="items">
            <w-icon name="weibo"></w-icon>
            <span class="mls"> weibo</span>
        </div>
        <div class="items">
            <w-icon name="renren"></w-icon>
            <span class="mls"> renren</span>
        </div>
        <div class="items">
            <w-icon name="pagelines"></w-icon>
            <span class="mls"> pagelines</span>
        </div>
        <div class="items">
            <w-icon name="stack-exchange"></w-icon>
            <span class="mls"> stack-exchange</span>
        </div>
        <div class="items">
            <w-icon name="arrow-circle-o-right"></w-icon>
            <span class="mls"> arrow-circle-o-right</span>
        </div>
        <div class="items">
            <w-icon name="arrow-circle-o-left"></w-icon>
            <span class="mls"> arrow-circle-o-left</span>
        </div>
        <div class="items">
            <w-icon name="caret-square-o-left"></w-icon>
            <span class="mls"> caret-square-o-left</span>
        </div>
        <div class="items">
            <w-icon name="toggle-left"></w-icon>
            <span class="mls"> toggle-left</span>
        </div>
        <div class="items">
            <w-icon name="dot-circle-o"></w-icon>
            <span class="mls"> dot-circle-o</span>
        </div>
        <div class="items">
            <w-icon name="wheelchair"></w-icon>
            <span class="mls"> wheelchair</span>
        </div>
        <div class="items">
            <w-icon name="vimeo-square"></w-icon>
            <span class="mls"> vimeo-square</span>
        </div>
        <div class="items">
            <w-icon name="try"></w-icon>
            <span class="mls"> try</span>
        </div>
        <div class="items">
            <w-icon name="turkish-lira"></w-icon>
            <span class="mls"> turkish-lira</span>
        </div>
        <div class="items">
            <w-icon name="plus-square-o"></w-icon>
            <span class="mls"> plus-square-o</span>
        </div>
        <div class="items">
            <w-icon name="space-shuttle"></w-icon>
            <span class="mls"> space-shuttle</span>
        </div>
        <div class="items">
            <w-icon name="slack"></w-icon>
            <span class="mls"> slack</span>
        </div>
        <div class="items">
            <w-icon name="envelope-square"></w-icon>
            <span class="mls"> envelope-square</span>
        </div>
        <div class="items">
            <w-icon name="wordpress"></w-icon>
            <span class="mls"> wordpress</span>
        </div>
        <div class="items">
            <w-icon name="openid"></w-icon>
            <span class="mls"> openid</span>
        </div>
        <div class="items">
            <w-icon name="bank"></w-icon>
            <span class="mls"> bank</span>
        </div>
        <div class="items">
            <w-icon name="institution"></w-icon>
            <span class="mls"> institution</span>
        </div>
        <div class="items">
            <w-icon name="university"></w-icon>
            <span class="mls"> university</span>
        </div>
        <div class="items">
            <w-icon name="graduation-cap"></w-icon>
            <span class="mls"> graduation-cap</span>
        </div>
        <div class="items">
            <w-icon name="mortar-board"></w-icon>
            <span class="mls"> mortar-board</span>
        </div>
        <div class="items">
            <w-icon name="yahoo"></w-icon>
            <span class="mls"> yahoo</span>
        </div>
        <div class="items">
            <w-icon name="google"></w-icon>
            <span class="mls"> google</span>
        </div>
        <div class="items">
            <w-icon name="fax"></w-icon>
            <span class="mls"> fax</span>
        </div>
        <div class="items">
            <w-icon name="building"></w-icon>
            <span class="mls"> building</span>
        </div>
        <div class="items">
            <w-icon name="child"></w-icon>
            <span class="mls"> child</span>
        </div>
        <div class="items">
            <w-icon name="paw"></w-icon>
            <span class="mls"> paw</span>
        </div>
        <div class="items">
            <w-icon name="spoon"></w-icon>
            <span class="mls"> spoon</span>
        </div>
        <div class="items">
            <w-icon name="cube"></w-icon>
            <span class="mls"> cube</span>
        </div>
        <div class="items">
            <w-icon name="cubes"></w-icon>
            <span class="mls"> cubes</span>
        </div>
        <div class="items">
            <w-icon name="steam"></w-icon>
            <span class="mls"> steam</span>
        </div>
        <div class="items">
            <w-icon name="steam-square"></w-icon>
            <span class="mls"> steam-square</span>
        </div>
        <div class="items">
            <w-icon name="recycle"></w-icon>
            <span class="mls"> recycle</span>
        </div>
        <div class="items">
            <w-icon name="automobile"></w-icon>
            <span class="mls"> automobile</span>
        </div>
        <div class="items">
            <w-icon name="car"></w-icon>
            <span class="mls"> car</span>
        </div>
        <div class="items">
            <w-icon name="cab"></w-icon>
            <span class="mls"> cab</span>
        </div>
        <div class="items">
            <w-icon name="taxi"></w-icon>
            <span class="mls"> taxi</span>
        </div>
        <div class="items">
            <w-icon name="tree2"></w-icon>
            <span class="mls"> tree2</span>
        </div>
        <div class="items">
            <w-icon name="spotify"></w-icon>
            <span class="mls"> spotify</span>
        </div>
        <div class="items">
            <w-icon name="deviantart"></w-icon>
            <span class="mls"> deviantart</span>
        </div>
        <div class="items">
            <w-icon name="database3"></w-icon>
            <span class="mls"> database3</span>
        </div>
        <div class="items">
            <w-icon name="file-pdf-o"></w-icon>
            <span class="mls"> file-pdf-o</span>
        </div>
        <div class="items">
            <w-icon name="file-word-o"></w-icon>
            <span class="mls"> file-word-o</span>
        </div>
        <div class="items">
            <w-icon name="file-excel-o"></w-icon>
            <span class="mls"> file-excel-o</span>
        </div>
        <div class="items">
            <w-icon name="file-powerpoint-o"></w-icon>
            <span class="mls"> file-powerpoint-o</span>
        </div>
        <div class="items">
            <w-icon name="file-image-o"></w-icon>
            <span class="mls"> file-image-o</span>
        </div>
        <div class="items">
            <w-icon name="file-photo-o"></w-icon>
            <span class="mls"> file-photo-o</span>
        </div>
        <div class="items">
            <w-icon name="file-picture-o"></w-icon>
            <span class="mls"> file-picture-o</span>
        </div>
        <div class="items">
            <w-icon name="file-archive-o"></w-icon>
            <span class="mls"> file-archive-o</span>
        </div>
        <div class="items">
            <w-icon name="file-zip-o"></w-icon>
            <span class="mls"> file-zip-o</span>
        </div>
        <div class="items">
            <w-icon name="file-audio-o"></w-icon>
            <span class="mls"> file-audio-o</span>
        </div>
        <div class="items">
            <w-icon name="file-sound-o"></w-icon>
            <span class="mls"> file-sound-o</span>
        </div>
        <div class="items">
            <w-icon name="file-movie-o"></w-icon>
            <span class="mls"> file-movie-o</span>
        </div>
        <div class="items">
            <w-icon name="file-video-o"></w-icon>
            <span class="mls"> file-video-o</span>
        </div>
        <div class="items">
            <w-icon name="file-code-o"></w-icon>
            <span class="mls"> file-code-o</span>
        </div>
        <div class="items">
            <w-icon name="vine"></w-icon>
            <span class="mls"> vine</span>
        </div>
        <div class="items">
            <w-icon name="codepen2"></w-icon>
            <span class="mls"> codepen2</span>
        </div>
        <div class="items">
            <w-icon name="jsfiddle"></w-icon>
            <span class="mls"> jsfiddle</span>
        </div>
        <div class="items">
            <w-icon name="life-bouy"></w-icon>
            <span class="mls"> life-bouy</span>
        </div>
        <div class="items">
            <w-icon name="life-buoy"></w-icon>
            <span class="mls"> life-buoy</span>
        </div>
        <div class="items">
            <w-icon name="life-ring"></w-icon>
            <span class="mls"> life-ring</span>
        </div>
        <div class="items">
            <w-icon name="life-saver"></w-icon>
            <span class="mls"> life-saver</span>
        </div>
        <div class="items">
            <w-icon name="support"></w-icon>
            <span class="mls"> support</span>
        </div>
        <div class="items">
            <w-icon name="circle-o-notch"></w-icon>
            <span class="mls"> circle-o-notch</span>
        </div>
        <div class="items">
            <w-icon name="ra"></w-icon>
            <span class="mls"> ra</span>
        </div>
        <div class="items">
            <w-icon name="rebel"></w-icon>
            <span class="mls"> rebel</span>
        </div>
        <div class="items">
            <w-icon name="resistance"></w-icon>
            <span class="mls"> resistance</span>
        </div>
        <div class="items">
            <w-icon name="empire"></w-icon>
            <span class="mls"> empire</span>
        </div>
        <div class="items">
            <w-icon name="ge"></w-icon>
            <span class="mls"> ge</span>
        </div>
        <div class="items">
            <w-icon name="git-square"></w-icon>
            <span class="mls"> git-square</span>
        </div>
        <div class="items">
            <w-icon name="git2"></w-icon>
            <span class="mls"> git2</span>
        </div>
        <div class="items">
            <w-icon name="hacker-news"></w-icon>
            <span class="mls"> hacker-news</span>
        </div>
        <div class="items">
            <w-icon name="y-combinator-square"></w-icon>
            <span class="mls"> y-combinator-square</span>
        </div>
        <div class="items">
            <w-icon name="yc-square"></w-icon>
            <span class="mls"> yc-square</span>
        </div>
        <div class="items">
            <w-icon name="tencent-weibo"></w-icon>
            <span class="mls"> tencent-weibo</span>
        </div>
        <div class="items">
            <w-icon name="qq"></w-icon>
            <span class="mls"> qq</span>
        </div>
        <div class="items">
            <w-icon name="wechat"></w-icon>
            <span class="mls"> wechat</span>
        </div>
        <div class="items">
            <w-icon name="weixin"></w-icon>
            <span class="mls"> weixin</span>
        </div>
        <div class="items">
            <w-icon name="paper-plane"></w-icon>
            <span class="mls"> paper-plane</span>
        </div>
        <div class="items">
            <w-icon name="send"></w-icon>
            <span class="mls"> send</span>
        </div>
        <div class="items">
            <w-icon name="paper-plane-o"></w-icon>
            <span class="mls"> paper-plane-o</span>
        </div>
        <div class="items">
            <w-icon name="send-o"></w-icon>
            <span class="mls"> send-o</span>
        </div>
        <div class="items">
            <w-icon name="history2"></w-icon>
            <span class="mls"> history2</span>
        </div>
        <div class="items">
            <w-icon name="circle-thin"></w-icon>
            <span class="mls"> circle-thin</span>
        </div>
        <div class="items">
            <w-icon name="header"></w-icon>
            <span class="mls"> header</span>
        </div>
        <div class="items">
            <w-icon name="paragraph"></w-icon>
            <span class="mls"> paragraph</span>
        </div>
        <div class="items">
            <w-icon name="sliders"></w-icon>
            <span class="mls"> sliders</span>
        </div>
        <div class="items">
            <w-icon name="share-alt"></w-icon>
            <span class="mls"> share-alt</span>
        </div>
        <div class="items">
            <w-icon name="share-alt-square"></w-icon>
            <span class="mls"> share-alt-square</span>
        </div>
        <div class="items">
            <w-icon name="bomb"></w-icon>
            <span class="mls"> bomb</span>
        </div>
        <div class="items">
            <w-icon name="futbol-o"></w-icon>
            <span class="mls"> futbol-o</span>
        </div>
        <div class="items">
            <w-icon name="soccer-ball-o"></w-icon>
            <span class="mls"> soccer-ball-o</span>
        </div>
        <div class="items">
            <w-icon name="tty"></w-icon>
            <span class="mls"> tty</span>
        </div>
        <div class="items">
            <w-icon name="binoculars2"></w-icon>
            <span class="mls"> binoculars2</span>
        </div>
        <div class="items">
            <w-icon name="plug"></w-icon>
            <span class="mls"> plug</span>
        </div>
        <div class="items">
            <w-icon name="slideshare"></w-icon>
            <span class="mls"> slideshare</span>
        </div>
        <div class="items">
            <w-icon name="twitch"></w-icon>
            <span class="mls"> twitch</span>
        </div>
        <div class="items">
            <w-icon name="yelp"></w-icon>
            <span class="mls"> yelp</span>
        </div>
        <div class="items">
            <w-icon name="newspaper-o"></w-icon>
            <span class="mls"> newspaper-o</span>
        </div>
        <div class="items">
            <w-icon name="wifi"></w-icon>
            <span class="mls"> wifi</span>
        </div>
        <div class="items">
            <w-icon name="calculator2"></w-icon>
            <span class="mls"> calculator2</span>
        </div>
        <div class="items">
            <w-icon name="paypal"></w-icon>
            <span class="mls"> paypal</span>
        </div>
        <div class="items">
            <w-icon name="google-wallet"></w-icon>
            <span class="mls"> google-wallet</span>
        </div>
        <div class="items">
            <w-icon name="cc-visa"></w-icon>
            <span class="mls"> cc-visa</span>
        </div>
        <div class="items">
            <w-icon name="cc-mastercard"></w-icon>
            <span class="mls"> cc-mastercard</span>
        </div>
        <div class="items">
            <w-icon name="cc-discover"></w-icon>
            <span class="mls"> cc-discover</span>
        </div>
        <div class="items">
            <w-icon name="cc-amex"></w-icon>
            <span class="mls"> cc-amex</span>
        </div>
        <div class="items">
            <w-icon name="cc-paypal"></w-icon>
            <span class="mls"> cc-paypal</span>
        </div>
        <div class="items">
            <w-icon name="cc-stripe"></w-icon>
            <span class="mls"> cc-stripe</span>
        </div>
        <div class="items">
            <w-icon name="bell-slash"></w-icon>
            <span class="mls"> bell-slash</span>
        </div>
        <div class="items">
            <w-icon name="bell-slash-o"></w-icon>
            <span class="mls"> bell-slash-o</span>
        </div>
        <div class="items">
            <w-icon name="trash"></w-icon>
            <span class="mls"> trash</span>
        </div>
        <div class="items">
            <w-icon name="copyright"></w-icon>
            <span class="mls"> copyright</span>
        </div>
        <div class="items">
            <w-icon name="at"></w-icon>
            <span class="mls"> at</span>
        </div>
        <div class="items">
            <w-icon name="eyedropper2"></w-icon>
            <span class="mls"> eyedropper2</span>
        </div>
        <div class="items">
            <w-icon name="paint-brush"></w-icon>
            <span class="mls"> paint-brush</span>
        </div>
        <div class="items">
            <w-icon name="birthday-cake"></w-icon>
            <span class="mls"> birthday-cake</span>
        </div>
        <div class="items">
            <w-icon name="area-chart"></w-icon>
            <span class="mls"> area-chart</span>
        </div>
        <div class="items">
            <w-icon name="pie-chart2"></w-icon>
            <span class="mls"> pie-chart2</span>
        </div>
        <div class="items">
            <w-icon name="line-chart"></w-icon>
            <span class="mls"> line-chart</span>
        </div>
        <div class="items">
            <w-icon name="lastfm"></w-icon>
            <span class="mls"> lastfm</span>
        </div>
        <div class="items">
            <w-icon name="lastfm-square"></w-icon>
            <span class="mls"> lastfm-square</span>
        </div>
        <div class="items">
            <w-icon name="toggle-off"></w-icon>
            <span class="mls"> toggle-off</span>
        </div>
        <div class="items">
            <w-icon name="toggle-on"></w-icon>
            <span class="mls"> toggle-on</span>
        </div>
        <div class="items">
            <w-icon name="bicycle"></w-icon>
            <span class="mls"> bicycle</span>
        </div>
        <div class="items">
            <w-icon name="bus"></w-icon>
            <span class="mls"> bus</span>
        </div>
        <div class="items">
            <w-icon name="ioxhost"></w-icon>
            <span class="mls"> ioxhost</span>
        </div>
        <div class="items">
            <w-icon name="angellist"></w-icon>
            <span class="mls"> angellist</span>
        </div>
        <div class="items">
            <w-icon name="cc"></w-icon>
            <span class="mls"> cc</span>
        </div>
        <div class="items">
            <w-icon name="ils"></w-icon>
            <span class="mls"> ils</span>
        </div>
        <div class="items">
            <w-icon name="shekel"></w-icon>
            <span class="mls"> shekel</span>
        </div>
        <div class="items">
            <w-icon name="sheqel"></w-icon>
            <span class="mls"> sheqel</span>
        </div>
        <div class="items">
            <w-icon name="meanpath"></w-icon>
            <span class="mls"> meanpath</span>
        </div>
        <div class="items">
            <w-icon name="buysellads"></w-icon>
            <span class="mls"> buysellads</span>
        </div>
        <div class="items">
            <w-icon name="connectdevelop"></w-icon>
            <span class="mls"> connectdevelop</span>
        </div>
        <div class="items">
            <w-icon name="dashcube"></w-icon>
            <span class="mls"> dashcube</span>
        </div>
        <div class="items">
            <w-icon name="forumbee"></w-icon>
            <span class="mls"> forumbee</span>
        </div>
        <div class="items">
            <w-icon name="leanpub"></w-icon>
            <span class="mls"> leanpub</span>
        </div>
        <div class="items">
            <w-icon name="sellsy"></w-icon>
            <span class="mls"> sellsy</span>
        </div>
        <div class="items">
            <w-icon name="shirtsinbulk"></w-icon>
            <span class="mls"> shirtsinbulk</span>
        </div>
        <div class="items">
            <w-icon name="simplybuilt"></w-icon>
            <span class="mls"> simplybuilt</span>
        </div>
        <div class="items">
            <w-icon name="skyatlas"></w-icon>
            <span class="mls"> skyatlas</span>
        </div>
        <div class="items">
            <w-icon name="cart-plus"></w-icon>
            <span class="mls"> cart-plus</span>
        </div>
        <div class="items">
            <w-icon name="cart-arrow-down"></w-icon>
            <span class="mls"> cart-arrow-down</span>
        </div>
        <div class="items">
            <w-icon name="diamond"></w-icon>
            <span class="mls"> diamond</span>
        </div>
        <div class="items">
            <w-icon name="ship"></w-icon>
            <span class="mls"> ship</span>
        </div>
        <div class="items">
            <w-icon name="user-secret"></w-icon>
            <span class="mls"> user-secret</span>
        </div>
        <div class="items">
            <w-icon name="motorcycle"></w-icon>
            <span class="mls"> motorcycle</span>
        </div>
        <div class="items">
            <w-icon name="street-view"></w-icon>
            <span class="mls"> street-view</span>
        </div>
        <div class="items">
            <w-icon name="heartbeat"></w-icon>
            <span class="mls"> heartbeat</span>
        </div>
        <div class="items">
            <w-icon name="venus"></w-icon>
            <span class="mls"> venus</span>
        </div>
        <div class="items">
            <w-icon name="mars"></w-icon>
            <span class="mls"> mars</span>
        </div>
        <div class="items">
            <w-icon name="mercury"></w-icon>
            <span class="mls"> mercury</span>
        </div>
        <div class="items">
            <w-icon name="intersex"></w-icon>
            <span class="mls"> intersex</span>
        </div>
        <div class="items">
            <w-icon name="transgender"></w-icon>
            <span class="mls"> transgender</span>
        </div>
        <div class="items">
            <w-icon name="transgender-alt"></w-icon>
            <span class="mls"> transgender-alt</span>
        </div>
        <div class="items">
            <w-icon name="venus-double"></w-icon>
            <span class="mls"> venus-double</span>
        </div>
        <div class="items">
            <w-icon name="mars-double"></w-icon>
            <span class="mls"> mars-double</span>
        </div>
        <div class="items">
            <w-icon name="venus-mars"></w-icon>
            <span class="mls"> venus-mars</span>
        </div>
        <div class="items">
            <w-icon name="mars-stroke"></w-icon>
            <span class="mls"> mars-stroke</span>
        </div>
        <div class="items">
            <w-icon name="mars-stroke-v"></w-icon>
            <span class="mls"> mars-stroke-v</span>
        </div>
        <div class="items">
            <w-icon name="mars-stroke-h"></w-icon>
            <span class="mls"> mars-stroke-h</span>
        </div>
        <div class="items">
            <w-icon name="neuter"></w-icon>
            <span class="mls"> neuter</span>
        </div>
        <div class="items">
            <w-icon name="genderless"></w-icon>
            <span class="mls"> genderless</span>
        </div>
        <div class="items">
            <w-icon name="facebook-official"></w-icon>
            <span class="mls"> facebook-official</span>
        </div>
        <div class="items">
            <w-icon name="pinterest-p"></w-icon>
            <span class="mls"> pinterest-p</span>
        </div>
        <div class="items">
            <w-icon name="whatsapp"></w-icon>
            <span class="mls"> whatsapp</span>
        </div>
        <div class="items">
            <w-icon name="server"></w-icon>
            <span class="mls"> server</span>
        </div>
        <div class="items">
            <w-icon name="user-plus2"></w-icon>
            <span class="mls"> user-plus2</span>
        </div>
        <div class="items">
            <w-icon name="user-times"></w-icon>
            <span class="mls"> user-times</span>
        </div>
        <div class="items">
            <w-icon name="bed"></w-icon>
            <span class="mls"> bed</span>
        </div>
        <div class="items">
            <w-icon name="hotel"></w-icon>
            <span class="mls"> hotel</span>
        </div>
        <div class="items">
            <w-icon name="viacoin"></w-icon>
            <span class="mls"> viacoin</span>
        </div>
        <div class="items">
            <w-icon name="train"></w-icon>
            <span class="mls"> train</span>
        </div>
        <div class="items">
            <w-icon name="subway"></w-icon>
            <span class="mls"> subway</span>
        </div>
        <div class="items">
            <w-icon name="medium"></w-icon>
            <span class="mls"> medium</span>
        </div>
        <div class="items">
            <w-icon name="y-combinator"></w-icon>
            <span class="mls"> y-combinator</span>
        </div>
        <div class="items">
            <w-icon name="yc"></w-icon>
            <span class="mls"> yc</span>
        </div>
        <div class="items">
            <w-icon name="expeditedssl"></w-icon>
            <span class="mls"> expeditedssl</span>
        </div>
        <div class="items">
            <w-icon name="battery2"></w-icon>
            <span class="mls"> battery2</span>
        </div>
        <div class="items">
            <w-icon name="battery-4"></w-icon>
            <span class="mls"> battery-4</span>
        </div>
        <div class="items">
            <w-icon name="battery-full"></w-icon>
            <span class="mls"> battery-full</span>
        </div>
        <div class="items">
            <w-icon name="battery-3"></w-icon>
            <span class="mls"> battery-3</span>
        </div>
        <div class="items">
            <w-icon name="battery-three-quarters"></w-icon>
            <span class="mls"> battery-three-quarters</span>
        </div>
        <div class="items">
            <w-icon name="battery-2"></w-icon>
            <span class="mls"> battery-2</span>
        </div>
        <div class="items">
            <w-icon name="battery-half"></w-icon>
            <span class="mls"> battery-half</span>
        </div>
        <div class="items">
            <w-icon name="battery-1"></w-icon>
            <span class="mls"> battery-1</span>
        </div>
        <div class="items">
            <w-icon name="battery-quarter"></w-icon>
            <span class="mls"> battery-quarter</span>
        </div>
        <div class="items">
            <w-icon name="battery-0"></w-icon>
            <span class="mls"> battery-0</span>
        </div>
        <div class="items">
            <w-icon name="battery-empty"></w-icon>
            <span class="mls"> battery-empty</span>
        </div>
        <div class="items">
            <w-icon name="mouse-pointer"></w-icon>
            <span class="mls"> mouse-pointer</span>
        </div>
        <div class="items">
            <w-icon name="i-cursor"></w-icon>
            <span class="mls"> i-cursor</span>
        </div>
        <div class="items">
            <w-icon name="object-group"></w-icon>
            <span class="mls"> object-group</span>
        </div>
        <div class="items">
            <w-icon name="object-ungroup"></w-icon>
            <span class="mls"> object-ungroup</span>
        </div>
        <div class="items">
            <w-icon name="sticky-note"></w-icon>
            <span class="mls"> sticky-note</span>
        </div>
        <div class="items">
            <w-icon name="sticky-note-o"></w-icon>
            <span class="mls"> sticky-note-o</span>
        </div>
        <div class="items">
            <w-icon name="clone"></w-icon>
            <span class="mls"> clone</span>
        </div>
        <div class="items">
            <w-icon name="balance-scale"></w-icon>
            <span class="mls"> balance-scale</span>
        </div>
        <div class="items">
            <w-icon name="hourglass-o"></w-icon>
            <span class="mls"> hourglass-o</span>
        </div>
        <div class="items">
            <w-icon name="hourglass-1"></w-icon>
            <span class="mls"> hourglass-1</span>
        </div>
        <div class="items">
            <w-icon name="hourglass-start"></w-icon>
            <span class="mls"> hourglass-start</span>
        </div>
        <div class="items">
            <w-icon name="hourglass-2"></w-icon>
            <span class="mls"> hourglass-2</span>
        </div>
        <div class="items">
            <w-icon name="hourglass-half"></w-icon>
            <span class="mls"> hourglass-half</span>
        </div>
        <div class="items">
            <w-icon name="hourglass-3"></w-icon>
            <span class="mls"> hourglass-3</span>
        </div>
        <div class="items">
            <w-icon name="hourglass-end"></w-icon>
            <span class="mls"> hourglass-end</span>
        </div>
        <div class="items">
            <w-icon name="hourglass"></w-icon>
            <span class="mls"> hourglass</span>
        </div>
        <div class="items">
            <w-icon name="hand-grab-o"></w-icon>
            <span class="mls"> hand-grab-o</span>
        </div>
        <div class="items">
            <w-icon name="hand-rock-o"></w-icon>
            <span class="mls"> hand-rock-o</span>
        </div>
        <div class="items">
            <w-icon name="hand-paper-o"></w-icon>
            <span class="mls"> hand-paper-o</span>
        </div>
        <div class="items">
            <w-icon name="hand-stop-o"></w-icon>
            <span class="mls"> hand-stop-o</span>
        </div>
        <div class="items">
            <w-icon name="hand-scissors-o"></w-icon>
            <span class="mls"> hand-scissors-o</span>
        </div>
        <div class="items">
            <w-icon name="hand-lizard-o"></w-icon>
            <span class="mls"> hand-lizard-o</span>
        </div>
        <div class="items">
            <w-icon name="hand-spock-o"></w-icon>
            <span class="mls"> hand-spock-o</span>
        </div>
        <div class="items">
            <w-icon name="hand-pointer-o"></w-icon>
            <span class="mls"> hand-pointer-o</span>
        </div>
        <div class="items">
            <w-icon name="hand-peace-o"></w-icon>
            <span class="mls"> hand-peace-o</span>
        </div>
        <div class="items">
            <w-icon name="trademark"></w-icon>
            <span class="mls"> trademark</span>
        </div>
        <div class="items">
            <w-icon name="registered"></w-icon>
            <span class="mls"> registered</span>
        </div>
        <div class="items">
            <w-icon name="creative-commons"></w-icon>
            <span class="mls"> creative-commons</span>
        </div>
        <div class="items">
            <w-icon name="get-pocket"></w-icon>
            <span class="mls"> get-pocket</span>
        </div>
        <div class="items">
            <w-icon name="wikipedia-w"></w-icon>
            <span class="mls"> wikipedia-w</span>
        </div>
        <div class="items">
            <w-icon name="safari"></w-icon>
            <span class="mls"> safari</span>
        </div>
        <div class="items">
            <w-icon name="chrome"></w-icon>
            <span class="mls"> chrome</span>
        </div>
        <div class="items">
            <w-icon name="firefox"></w-icon>
            <span class="mls"> firefox</span>
        </div>
        <div class="items">
            <w-icon name="opera"></w-icon>
            <span class="mls"> opera</span>
        </div>
        <div class="items">
            <w-icon name="internet-explorer"></w-icon>
            <span class="mls"> internet-explorer</span>
        </div>
        <div class="items">
            <w-icon name="television"></w-icon>
            <span class="mls"> television</span>
        </div>
        <div class="items">
            <w-icon name="tv2"></w-icon>
            <span class="mls"> tv2</span>
        </div>
        <div class="items">
            <w-icon name="500px"></w-icon>
            <span class="mls"> 500px</span>
        </div>
        <div class="items">
            <w-icon name="calendar-plus-o"></w-icon>
            <span class="mls"> calendar-plus-o</span>
        </div>
        <div class="items">
            <w-icon name="calendar-minus-o"></w-icon>
            <span class="mls"> calendar-minus-o</span>
        </div>
        <div class="items">
            <w-icon name="calendar-times-o"></w-icon>
            <span class="mls"> calendar-times-o</span>
        </div>
        <div class="items">
            <w-icon name="calendar-check-o"></w-icon>
            <span class="mls"> calendar-check-o</span>
        </div>
        <div class="items">
            <w-icon name="industry"></w-icon>
            <span class="mls"> industry</span>
        </div>
        <div class="items">
            <w-icon name="map-pin"></w-icon>
            <span class="mls"> map-pin</span>
        </div>
        <div class="items">
            <w-icon name="map-signs"></w-icon>
            <span class="mls"> map-signs</span>
        </div>
        <div class="items">
            <w-icon name="map-o"></w-icon>
            <span class="mls"> map-o</span>
        </div>
        <div class="items">
            <w-icon name="map3"></w-icon>
            <span class="mls"> map3</span>
        </div>
        <div class="items">
            <w-icon name="commenting"></w-icon>
            <span class="mls"> commenting</span>
        </div>
        <div class="items">
            <w-icon name="commenting-o"></w-icon>
            <span class="mls"> commenting-o</span>
        </div>
        <div class="items">
            <w-icon name="edge"></w-icon>
            <span class="mls"> edge</span>
        </div>
        <div class="items">
            <w-icon name="credit-card-alt"></w-icon>
            <span class="mls"> credit-card-alt</span>
        </div>
        <div class="items">
            <w-icon name="codiepie"></w-icon>
            <span class="mls"> codiepie</span>
        </div>
        <div class="items">
            <w-icon name="modx"></w-icon>
            <span class="mls"> modx</span>
        </div>
        <div class="items">
            <w-icon name="fort-awesome"></w-icon>
            <span class="mls"> fort-awesome</span>
        </div>
        <div class="items">
            <w-icon name="usb"></w-icon>
            <span class="mls"> usb</span>
        </div>
        <div class="items">
            <w-icon name="product-hunt"></w-icon>
            <span class="mls"> product-hunt</span>
        </div>
        <div class="items">
            <w-icon name="mixcloud"></w-icon>
            <span class="mls"> mixcloud</span>
        </div>
        <div class="items">
            <w-icon name="scribd"></w-icon>
            <span class="mls"> scribd</span>
        </div>
        <div class="items">
            <w-icon name="pause-circle"></w-icon>
            <span class="mls"> pause-circle</span>
        </div>
        <div class="items">
            <w-icon name="pause-circle-o"></w-icon>
            <span class="mls"> pause-circle-o</span>
        </div>
        <div class="items">
            <w-icon name="stop-circle"></w-icon>
            <span class="mls"> stop-circle</span>
        </div>
        <div class="items">
            <w-icon name="stop-circle-o"></w-icon>
            <span class="mls"> stop-circle-o</span>
        </div>
        <div class="items">
            <w-icon name="shopping-bag"></w-icon>
            <span class="mls"> shopping-bag</span>
        </div>
        <div class="items">
            <w-icon name="shopping-basket"></w-icon>
            <span class="mls"> shopping-basket</span>
        </div>
        <div class="items">
            <w-icon name="hashtag"></w-icon>
            <span class="mls"> hashtag</span>
        </div>
        <div class="items">
            <w-icon name="bluetooth"></w-icon>
            <span class="mls"> bluetooth</span>
        </div>
        <div class="items">
            <w-icon name="bluetooth-b"></w-icon>
            <span class="mls"> bluetooth-b</span>
        </div>
        <div class="items">
            <w-icon name="percent"></w-icon>
            <span class="mls"> percent</span>
        </div>
        <div class="items">
            <w-icon name="gitlab"></w-icon>
            <span class="mls"> gitlab</span>
        </div>
        <div class="items">
            <w-icon name="wpbeginner"></w-icon>
            <span class="mls"> wpbeginner</span>
        </div>
        <div class="items">
            <w-icon name="wpforms"></w-icon>
            <span class="mls"> wpforms</span>
        </div>
        <div class="items">
            <w-icon name="envira"></w-icon>
            <span class="mls"> envira</span>
        </div>
        <div class="items">
            <w-icon name="universal-access"></w-icon>
            <span class="mls"> universal-access</span>
        </div>
        <div class="items">
            <w-icon name="wheelchair-alt"></w-icon>
            <span class="mls"> wheelchair-alt</span>
        </div>
        <div class="items">
            <w-icon name="question-circle-o"></w-icon>
            <span class="mls"> question-circle-o</span>
        </div>
        <div class="items">
            <w-icon name="blind"></w-icon>
            <span class="mls"> blind</span>
        </div>
        <div class="items">
            <w-icon name="audio-description"></w-icon>
            <span class="mls"> audio-description</span>
        </div>
        <div class="items">
            <w-icon name="volume-control-phone"></w-icon>
            <span class="mls"> volume-control-phone</span>
        </div>
        <div class="items">
            <w-icon name="braille"></w-icon>
            <span class="mls"> braille</span>
        </div>
        <div class="items">
            <w-icon name="assistive-listening-systems"></w-icon>
            <span class="mls"> assistive-listening-systems</span>
        </div>
        <div class="items">
            <w-icon name="american-sign-language-interpreting"></w-icon>
            <span class="mls"> american-sign-language-interpreting</span>
        </div>
        <div class="items">
            <w-icon name="asl-interpreting"></w-icon>
            <span class="mls"> asl-interpreting</span>
        </div>
        <div class="items">
            <w-icon name="deaf"></w-icon>
            <span class="mls"> deaf</span>
        </div>
        <div class="items">
            <w-icon name="deafness"></w-icon>
            <span class="mls"> deafness</span>
        </div>
        <div class="items">
            <w-icon name="hard-of-hearing"></w-icon>
            <span class="mls"> hard-of-hearing</span>
        </div>
        <div class="items">
            <w-icon name="glide"></w-icon>
            <span class="mls"> glide</span>
        </div>
        <div class="items">
            <w-icon name="glide-g"></w-icon>
            <span class="mls"> glide-g</span>
        </div>
        <div class="items">
            <w-icon name="sign-language"></w-icon>
            <span class="mls"> sign-language</span>
        </div>
        <div class="items">
            <w-icon name="signing"></w-icon>
            <span class="mls"> signing</span>
        </div>
        <div class="items">
            <w-icon name="low-vision"></w-icon>
            <span class="mls"> low-vision</span>
        </div>
        <div class="items">
            <w-icon name="viadeo"></w-icon>
            <span class="mls"> viadeo</span>
        </div>
        <div class="items">
            <w-icon name="viadeo-square"></w-icon>
            <span class="mls"> viadeo-square</span>
        </div>
        <div class="items">
            <w-icon name="snapchat"></w-icon>
            <span class="mls"> snapchat</span>
        </div>
        <div class="items">
            <w-icon name="snapchat-ghost"></w-icon>
            <span class="mls"> snapchat-ghost</span>
        </div>
        <div class="items">
            <w-icon name="snapchat-square"></w-icon>
            <span class="mls"> snapchat-square</span>
        </div>
        <div class="items">
            <w-icon name="pied-piper"></w-icon>
            <span class="mls"> pied-piper</span>
        </div>
        <div class="items">
            <w-icon name="first-order"></w-icon>
            <span class="mls"> first-order</span>
        </div>
        <div class="items">
            <w-icon name="yoast"></w-icon>
            <span class="mls"> yoast</span>
        </div>
        <div class="items">
            <w-icon name="themeisle"></w-icon>
            <span class="mls"> themeisle</span>
        </div>
        <div class="items">
            <w-icon name="google-plus-circle"></w-icon>
            <span class="mls"> google-plus-circle</span>
        </div>
        <div class="items">
            <w-icon name="google-plus-official"></w-icon>
            <span class="mls"> google-plus-official</span>
        </div>
        <div class="items">
            <w-icon name="fa"></w-icon>
            <span class="mls"> fa</span>
        </div>
        <div class="items">
            <w-icon name="font-awesome"></w-icon>
            <span class="mls"> font-awesome</span>
        </div>
        <div class="items">
            <w-icon name="handshake-o"></w-icon>
            <span class="mls"> handshake-o</span>
        </div>
        <div class="items">
            <w-icon name="envelope-open"></w-icon>
            <span class="mls"> envelope-open</span>
        </div>
        <div class="items">
            <w-icon name="envelope-open-o"></w-icon>
            <span class="mls"> envelope-open-o</span>
        </div>
        <div class="items">
            <w-icon name="linode"></w-icon>
            <span class="mls"> linode</span>
        </div>
        <div class="items">
            <w-icon name="address-book2"></w-icon>
            <span class="mls"> address-book2</span>
        </div>
        <div class="items">
            <w-icon name="address-book-o"></w-icon>
            <span class="mls"> address-book-o</span>
        </div>
        <div class="items">
            <w-icon name="address-card"></w-icon>
            <span class="mls"> address-card</span>
        </div>
        <div class="items">
            <w-icon name="vcard"></w-icon>
            <span class="mls"> vcard</span>
        </div>
        <div class="items">
            <w-icon name="address-card-o"></w-icon>
            <span class="mls"> address-card-o</span>
        </div>
        <div class="items">
            <w-icon name="vcard-o"></w-icon>
            <span class="mls"> vcard-o</span>
        </div>
        <div class="items">
            <w-icon name="user-circle"></w-icon>
            <span class="mls"> user-circle</span>
        </div>
        <div class="items">
            <w-icon name="user-circle-o"></w-icon>
            <span class="mls"> user-circle-o</span>
        </div>
        <div class="items">
            <w-icon name="user-o"></w-icon>
            <span class="mls"> user-o</span>
        </div>
        <div class="items">
            <w-icon name="id-badge"></w-icon>
            <span class="mls"> id-badge</span>
        </div>
        <div class="items">
            <w-icon name="drivers-license"></w-icon>
            <span class="mls"> drivers-license</span>
        </div>
        <div class="items">
            <w-icon name="id-card"></w-icon>
            <span class="mls"> id-card</span>
        </div>
        <div class="items">
            <w-icon name="drivers-license-o"></w-icon>
            <span class="mls"> drivers-license-o</span>
        </div>
        <div class="items">
            <w-icon name="id-card-o"></w-icon>
            <span class="mls"> id-card-o</span>
        </div>
        <div class="items">
            <w-icon name="quora"></w-icon>
            <span class="mls"> quora</span>
        </div>
        <div class="items">
            <w-icon name="free-code-camp"></w-icon>
            <span class="mls"> free-code-camp</span>
        </div>
        <div class="items">
            <w-icon name="telegram"></w-icon>
            <span class="mls"> telegram</span>
        </div>
        <div class="items">
            <w-icon name="thermometer"></w-icon>
            <span class="mls"> thermometer</span>
        </div>
        <div class="items">
            <w-icon name="thermometer-4"></w-icon>
            <span class="mls"> thermometer-4</span>
        </div>
        <div class="items">
            <w-icon name="thermometer-full"></w-icon>
            <span class="mls"> thermometer-full</span>
        </div>
        <div class="items">
            <w-icon name="thermometer-3"></w-icon>
            <span class="mls"> thermometer-3</span>
        </div>
        <div class="items">
            <w-icon name="thermometer-three-quarters"></w-icon>
            <span class="mls"> thermometer-three-quarters</span>
        </div>
        <div class="items">
            <w-icon name="thermometer-2"></w-icon>
            <span class="mls"> thermometer-2</span>
        </div>
        <div class="items">
            <w-icon name="thermometer-half"></w-icon>
            <span class="mls"> thermometer-half</span>
        </div>
        <div class="items">
            <w-icon name="thermometer-1"></w-icon>
            <span class="mls"> thermometer-1</span>
        </div>
        <div class="items">
            <w-icon name="thermometer-quarter"></w-icon>
            <span class="mls"> thermometer-quarter</span>
        </div>
        <div class="items">
            <w-icon name="thermometer-0"></w-icon>
            <span class="mls"> thermometer-0</span>
        </div>
        <div class="items">
            <w-icon name="thermometer-empty"></w-icon>
            <span class="mls"> thermometer-empty</span>
        </div>
        <div class="items">
            <w-icon name="shower"></w-icon>
            <span class="mls"> shower</span>
        </div>
        <div class="items">
            <w-icon name="bath"></w-icon>
            <span class="mls"> bath</span>
        </div>
        <div class="items">
            <w-icon name="bathtub"></w-icon>
            <span class="mls"> bathtub</span>
        </div>
        <div class="items">
            <w-icon name="s15"></w-icon>
            <span class="mls"> s15</span>
        </div>
        <div class="items">
            <w-icon name="podcast2"></w-icon>
            <span class="mls"> podcast2</span>
        </div>
        <div class="items">
            <w-icon name="window-maximize"></w-icon>
            <span class="mls"> window-maximize</span>
        </div>
        <div class="items">
            <w-icon name="window-minimize"></w-icon>
            <span class="mls"> window-minimize</span>
        </div>
        <div class="items">
            <w-icon name="window-restore"></w-icon>
            <span class="mls"> window-restore</span>
        </div>
        <div class="items">
            <w-icon name="times-rectangle"></w-icon>
            <span class="mls"> times-rectangle</span>
        </div>
        <div class="items">
            <w-icon name="window-close"></w-icon>
            <span class="mls"> window-close</span>
        </div>
        <div class="items">
            <w-icon name="times-rectangle-o"></w-icon>
            <span class="mls"> times-rectangle-o</span>
        </div>
        <div class="items">
            <w-icon name="window-close-o"></w-icon>
            <span class="mls"> window-close-o</span>
        </div>
        <div class="items">
            <w-icon name="bandcamp"></w-icon>
            <span class="mls"> bandcamp</span>
        </div>
        <div class="items">
            <w-icon name="grav"></w-icon>
            <span class="mls"> grav</span>
        </div>
        <div class="items">
            <w-icon name="etsy"></w-icon>
            <span class="mls"> etsy</span>
        </div>
        <div class="items">
            <w-icon name="imdb"></w-icon>
            <span class="mls"> imdb</span>
        </div>
        <div class="items">
            <w-icon name="ravelry"></w-icon>
            <span class="mls"> ravelry</span>
        </div>
        <div class="items">
            <w-icon name="eercast"></w-icon>
            <span class="mls"> eercast</span>
        </div>
        <div class="items">
            <w-icon name="microchip"></w-icon>
            <span class="mls"> microchip</span>
        </div>
        <div class="items">
            <w-icon name="snowflake-o"></w-icon>
            <span class="mls"> snowflake-o</span>
        </div>
        <div class="items">
            <w-icon name="superpowers"></w-icon>
            <span class="mls"> superpowers</span>
        </div>
        <div class="items">
            <w-icon name="wpexplorer"></w-icon>
            <span class="mls"> wpexplorer</span>
        </div>
        <div class="items">
            <w-icon name="meetup"></w-icon>
            <span class="mls"> meetup</span>
        </div>
    </div>
  </div>
</template>

<script>
import Icon from 'packages/icon'

export default {
  components: {
    'w-icon': Icon
  }
}
</script>

<style lang="less">
.all-icon{
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    border-left: 1px #f0f0f0 solid;
    border-top: 1px #f0f0f0 solid;
    justify-content: space-between;

    .items{
        flex: 1 0 160px;
        height: 60px;
        border-right: 1px #f0f0f0 solid;
        border-bottom: 1px #f0f0f0 solid;
        padding: 10px;
    }
}
</style>