import halfStarsItem from '@/common/stars/half-stars-item.vue'
import starsItem from '@/common/stars/stars-item.vue'
import pageItem from '@/common/page/page-item.vue'
import switchItem from '@/common/switch/switch-item.vue'
import progressItem from '@/common/progress/progress-item.vue'
import sliderItem from '@/common/slider/slider-item.vue'



const components = {
  halfStarsItem,
  starsItem,
  pageItem,
  switchItem,
  progressItem,
  sliderItem,
};
const install=function (Vue,options) {
  Object.keys(components).forEach(key => {
    Vue.component(key, components[key]);
  });
};
export default install;
