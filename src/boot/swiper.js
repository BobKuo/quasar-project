// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';

import { defineBoot } from '#q-app/wrappers'
export default defineBoot(() => {
  // register Swiper custom elements
  register();
})
