import "nodelist-foreach-polyfill";
import "@babel/polyfill";
import elementClosest from "element-closest";
elementClosest(window);

import dropMenu from "./modules/dropMenu";
import textModal from "./modules/textModal";
import btnModal from "./modules/btnModal";
import giftModal from "./modules/giftModal";
import burgerMenu from "./modules/burgerMenu";
import arrowToTop from "./modules/arrowToTop";
import mainSlider from "./modules/mainSlider";
import gallerySlider from "./modules/gallerySlider";
import sendForm from "./modules/sendForm";
import servicesSlider from './modules/servicesSlider';
import calc from './modules/calc';
import numMask from "./modules/maskPhone";

dropMenu();
textModal();
btnModal();
burgerMenu();
giftModal();
arrowToTop();
mainSlider();
gallerySlider();
sendForm();
servicesSlider();
calc();
numMask();