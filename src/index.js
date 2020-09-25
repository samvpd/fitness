import "nodelist-foreach-polyfill";
import "@babel/polyfill";
import elementClosest from "element-closest";
elementClosest(window);

import dropMenu from "./modules/dropMenu";
import textModal from "./modules/textModal";
import btnModal from "./modules/btnModal";
import giftModal from "./modules/giftModal";
import burgerMenu from "./modules/burgerMenu";

dropMenu();
textModal();
btnModal();
burgerMenu();
giftModal();