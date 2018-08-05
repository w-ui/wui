'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Waterfall = exports.Video = exports.TimelineItem = exports.Timeline = exports.Textarea = exports.MenubarItem = exports.Menubar = exports.Tag = exports.TabPanel = exports.Tab = exports.Switch = exports.Sticky = exports.StepItem = exports.Step = exports.Sortable = exports.Search = exports.ScrollCard = exports.Scroll = exports.Rate = exports.RadioGroup = exports.Radio = exports.Qrcode = exports.Progressbar = exports.Popup = exports.Password = exports.Loading = exports.LazyImage = exports.Keyboard = exports.ImageClip = exports.Icon = exports.GridItem = exports.Grid = exports.Toast = exports.Notify = exports.Confirm = exports.Alert = exports.Datetime = exports.Countup = exports.CheckboxGroup = exports.Checkbox = exports.Cell = exports.Carousel = exports.ButtonGroup = exports.Button = exports.Badge = exports.Backtop = exports.Audio = exports.Actionsheet = exports.AccordionItem = exports.Accordion = exports.install = undefined;

var _index = require('../packages/accordion/index.js');

var _index2 = require('../packages/accordion-item/index.js');

var _index3 = require('../packages/actionsheet/index.js');

var _index4 = require('../packages/audio/index.js');

var _index5 = require('../packages/backtop/index.js');

var _index6 = require('../packages/badge/index.js');

var _index7 = require('../packages/button/index.js');

var _index8 = require('../packages/button-group/index.js');

var _index9 = require('../packages/carousel/index.js');

var _index10 = require('../packages/cell/index.js');

var _index11 = require('../packages/checkbox/index.js');

var _index12 = require('../packages/checkbox-group/index.js');

var _index13 = require('../packages/countup/index.js');

var _index14 = require('../packages/datetime/index.js');

var _index15 = require('../packages/dialog/index.js');

var _index16 = require('../packages/grid/index.js');

var _index17 = require('../packages/grid-item/index.js');

var _index18 = require('../packages/icon/index.js');

var _index19 = require('../packages/image-clip/index.js');

var _index20 = require('../packages/input/index.js');

var _index21 = require('../packages/keyboard/index.js');

var _index22 = require('../packages/lazy-image/index.js');

var _index23 = require('../packages/loading/index.js');

var _index24 = require('../packages/password/index.js');

var _index25 = require('../packages/popup/index.js');

var _index26 = require('../packages/progressbar/index.js');

var _index27 = require('../packages/qrcode/index.js');

var _index28 = require('../packages/radio/index.js');

var _index29 = require('../packages/radio-group/index.js');

var _index30 = require('../packages/rate/index.js');

var _index31 = require('../packages/scroll/index.js');

var _index32 = require('../packages/scroll-card/index.js');

var _index33 = require('../packages/search/index.js');

var _index34 = require('../packages/sortable/index.js');

var _index35 = require('../packages/step/index.js');

var _index36 = require('../packages/step-item/index.js');

var _index37 = require('../packages/sticky/index.js');

var _index38 = require('../packages/switch/index.js');

var _index39 = require('../packages/tab/index.js');

var _index40 = require('../packages/tab-panel/index.js');

var _index41 = require('../packages/tag/index.js');

var _index42 = require('../packages/menubar/index.js');

var _index43 = require('../packages/menubar-item/index.js');

var _index44 = require('../packages/textarea/index.js');

var _index45 = require('../packages/timeline/index.js');

var _index46 = require('../packages/timeline-item/index.js');

var _index47 = require('../packages/video/index.js');

var _index48 = require('../packages/waterfall/index.js');

var components = [_index.Accordion, _index2.AccordionItem, _index3.Actionsheet, _index4.Audio, _index5.Backtop, _index6.Badge, _index7.Button, _index8.ButtonGroup, _index9.Carousel, _index10.Cell, _index11.Checkbox, _index12.CheckboxGroup, _index12.CheckboxGroup, _index13.Countup, _index14.Datetime, _index15.Alert, _index15.Confirm, _index15.Notify, _index15.Toast, _index16.Grid, _index17.GridItem, _index18.Icon, _index19.ImageClip, _index20.Input, _index21.Keyboard, _index22.LazyImage, _index23.Loading, _index24.Password, _index25.Popup, _index26.Progressbar, _index27.Qrcode, _index28.Radio, _index29.RadioGroup, _index30.Rate, _index31.Scroll, _index32.ScrollCard, _index33.Search, _index34.Sortable, _index35.Step, _index36.StepItem, _index37.Sticky, _index38.Switch, _index39.Tab, _index40.TabPanel, _index41.Tag, _index42.Menubar, _index43.MenubarItem, _index44.Textarea, _index45.Timeline, _index46.TimelineItem, _index47.Video, _index48.Waterfall];

var install = function install(Vue) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (install.installed) return;

  components.map(function (component) {
    Vue.component(component.name, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

exports.install = install;
exports.Accordion = _index.Accordion;
exports.AccordionItem = _index2.AccordionItem;
exports.Actionsheet = _index3.Actionsheet;
exports.Audio = _index4.Audio;
exports.Backtop = _index5.Backtop;
exports.Badge = _index6.Badge;
exports.Button = _index7.Button;
exports.ButtonGroup = _index8.ButtonGroup;
exports.Carousel = _index9.Carousel;
exports.Cell = _index10.Cell;
exports.Checkbox = _index11.Checkbox;
exports.CheckboxGroup = _index12.CheckboxGroup;
exports.Countup = _index13.Countup;
exports.Datetime = _index14.Datetime;
exports.Alert = _index15.Alert;
exports.Confirm = _index15.Confirm;
exports.Notify = _index15.Notify;
exports.Toast = _index15.Toast;
exports.Grid = _index16.Grid;
exports.GridItem = _index17.GridItem;
exports.Icon = _index18.Icon;
exports.ImageClip = _index19.ImageClip;
exports.Keyboard = _index21.Keyboard;
exports.LazyImage = _index22.LazyImage;
exports.Loading = _index23.Loading;
exports.Password = _index24.Password;
exports.Popup = _index25.Popup;
exports.Progressbar = _index26.Progressbar;
exports.Qrcode = _index27.Qrcode;
exports.Radio = _index28.Radio;
exports.RadioGroup = _index29.RadioGroup;
exports.Rate = _index30.Rate;
exports.Scroll = _index31.Scroll;
exports.ScrollCard = _index32.ScrollCard;
exports.Search = _index33.Search;
exports.Sortable = _index34.Sortable;
exports.Step = _index35.Step;
exports.StepItem = _index36.StepItem;
exports.Sticky = _index37.Sticky;
exports.Switch = _index38.Switch;
exports.Tab = _index39.Tab;
exports.TabPanel = _index40.TabPanel;
exports.Tag = _index41.Tag;
exports.Menubar = _index42.Menubar;
exports.MenubarItem = _index43.MenubarItem;
exports.Textarea = _index44.Textarea;
exports.Timeline = _index45.Timeline;
exports.TimelineItem = _index46.TimelineItem;
exports.Video = _index47.Video;
exports.Waterfall = _index48.Waterfall;
