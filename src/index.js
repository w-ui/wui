
import Accordion from '../packages/accordion/index.js'
import AccordionItem from '../packages/accordion-item/index.js'
import Actionsheet from '../packages/actionsheet/index.js'
import Audio from '../packages/audio/index.js'
import Backtop from '../packages/backtop/index.js'
import Badge from '../packages/badge/index.js'
import Button from '../packages/button/index.js'
import ButtonGroup from '../packages/button-group/index.js'
import Carousel from '../packages/carousel/index.js'
import Cell from '../packages/cell/index.js'
import Checkbox from '../packages/checkbox/index.js'
import CheckboxGroup from '../packages/checkbox-group/index.js'
import CitySelect from '../packages/city-select/index.js'
import Countup from '../packages/countup/index.js'
import Datetime from '../packages/datetime/index.js'
import Dialog from '../packages/dialog/index.js'
import Grid from '../packages/grid/index.js'
import GridItem from '../packages/grid-item/index.js'
import Icon from '../packages/icon/index.js'
import ImageClip from '../packages/image-clip/index.js'
import InfiniteScroll from '../packages/infinite-scroll/index.js'
import Input from '../packages/input/index.js'
import Keyboard from '../packages/keyboard/index.js'
import Layout from '../packages/layout/index.js'
import LazyImage from '../packages/lazy-image/index.js'
import Loading from '../packages/loading/index.js'
import Marquee from '../packages/marquee/index.js'
import Navbar from '../packages/navbar/index.js'
import Password from '../packages/password/index.js'
import Popup from '../packages/popup/index.js'
import Progressbar from '../packages/progressbar/index.js'
import Qrcode from '../packages/qrcode/index.js'
import Radio from '../packages/radio/index.js'
import RadioGroup from '../packages/radio-group/index.js'
import Rate from '../packages/rate/index.js'
import Scroll from '../packages/scroll/index.js'
import ScrollTab from '../packages/scroll-tab/index.js'
import Search from '../packages/search/index.js'
import Sortable from '../packages/sortable/index.js'
import Spinner from '../packages/spinner/index.js'
import Step from '../packages/step/index.js'
import StepItem from '../packages/step-item/index.js'
import Sticky from '../packages/sticky/index.js'
import Switch from '../packages/switch/index.js'
import Tab from '../packages/tab/index.js'
import TabPanel from '../packages/tab-panel/index.js'
import Menubar from '../packages/menubar/index.js'
import MenubarItem from '../packages/menubar-item/index.js'
import Textarea from '../packages/textarea/index.js'
import Timeline from '../packages/timeline/index.js'
import TimelineItem from '../packages/timeline-item/index.js'
import Upload from '../packages/upload/index.js'
import Video from '../packages/video/index.js'
import Waterfall from '../packages/waterfall/index.js'

const components = [
  Accordion,
  AccordionItem,
  Actionsheet,
  Audio,
  Backtop,
  Badge,
  Button,
  ButtonGroup,
  Carousel,
  Cell,
  Checkbox,
  CheckboxGroup,
  CitySelect,
  CheckboxGroup,
  Countup,
  Datetime,
  Dialog,
  Grid,
  GridItem,
  Icon,
  ImageClip,
  InfiniteScroll,
  Input,
  Keyboard,
  Layout,
  LazyImage,
  Loading,
  Marquee,
  Navbar,
  Password,
  Popup,
  Progressbar,
  Qrcode,
  Radio,
  RadioGroup,
  Rate,
  Scroll,
  ScrollTab,
  Search,
  Sortable,
  Spinner,
  Step,
  StepItem,
  Spinner,
  Sticky,
  Switch,
  Tab,
  TabPanel,
  Menubar,
  MenubarItem,
  Textarea,
  Timeline,
  TimelineItem,
  Upload,
  Video,
  Waterfall
]

const install = function (Vue, opts = {}) {
  if (install.installed) return

  components.map(component => {
    Vue.component(component.name, component)
  })

  // Vue.prototype.$loading = Loading.service
  // Vue.prototype.$msgbox = MessageBox
  // Vue.prototype.$alert = MessageBox.alert
  // Vue.prototype.$confirm = MessageBox.confirm
  // Vue.prototype.$prompt = MessageBox.prompt
  // Vue.prototype.$notify = Notification
  // Vue.prototype.$message = Message
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
};

module.exports = {
  version: '1.0.1',
  install,
  Accordion,
  AccordionItem,
  Actionsheet,
  Audio,
  Backtop,
  Badge,
  Button,
  ButtonGroup,
  Carousel,
  Cell,
  Checkbox,
  CheckboxGroup,
  CitySelect,
  Countup,
  Datetime,
  Dialog,
  Grid,
  GridItem,
  Icon,
  ImageClip,
  InfiniteScroll,
  Input,
  Keyboard,
  Layout,
  LazyImage,
  Loading,
  Marquee,
  Navbar,
  Password,
  Popup,
  Progressbar,
  Qrcode,
  Radio,
  RadioGroup,
  Rate,
  Scroll,
  ScrollTab,
  Search,
  Sortable,
  Spinner,
  Step,
  StepItem,
  Sticky,
  Switch,
  Tab,
  TabPanel,
  Menubar,
  MenubarItem,
  Textarea,
  Timeline,
  TimelineItem,
  Upload,
  Video,
  Waterfall
}

module.exports.default = module.exports
