import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "../shared/css/style.css";
import tuitionProtectionTemplate from "./capital-builder-main.handlebars";
import navigationTemplate from "../shared/handlebars/nav.handlebars";
import breadCrumbTemplate from "../shared/handlebars/breadcrumbs.handlebars";

export class CapitalBuilder {
  constructor(elem){
    this.targetElement = elem;
    this.data = {
      productName: "Capital Builder",
      category: "Life Insurance",
    };
  }
  
  show() {
    const navigation = navigationTemplate();
    const breadCrumb = breadCrumbTemplate(this.data);
    const content = tuitionProtectionTemplate({});
    this.targetElement.innerHTML = `${navigation}${breadCrumb}${content}`;
  }  

  
}