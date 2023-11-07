import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "../shared/css/style.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import tuitionProtectionTemplate from "./whole-life-main.handlebars";
import navigationTemplate from "../shared/handlebars/nav.handlebars";
import breadCrumbTemplate from "../shared/handlebars/breadcrumbs.handlebars";

export class WholeLife {
  constructor(elem){
    this.targetElement = elem;
    this.data = {
      productName: "Whole Life",
      category: "Life Insurance",
    };
  }
  
  show() {
    const navigation = navigationTemplate({});
    const breadCrumb = breadCrumbTemplate(this.data);
    const content = tuitionProtectionTemplate({});
    this.targetElement.innerHTML = `${navigation}${breadCrumb}${content}`;
  }  
}