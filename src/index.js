import "nodelist-foreach-polyfill";
import "@babel/polyfill";
import elementClosest from "element-closest";
elementClosest(window);

import dropMenu from "./modules/dropMenu";

dropMenu();