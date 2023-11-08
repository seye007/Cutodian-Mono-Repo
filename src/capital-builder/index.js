import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "../shared/css/style.css";
import capitalBuilderTemplate from "./capital-builder-main.handlebars";
import navigationTemplate from "../shared/handlebars/nav.handlebars";
import breadCrumbTemplate from "../shared/handlebars/breadcrumbs.handlebars";
import { Utility } from '../shared/utility.js';

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
    const content = capitalBuilderTemplate({});
    this.targetElement.innerHTML = `${navigation}${breadCrumb}${content}`;
    this.validate();
  }  

  validate() {
    const calculateBtn = document.getElementById('calculatePolicyButton');
    calculateBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const isValid = Utility.validateInput();
      if (isValid) {
        const form = calculateBtn.closest('form');
        if (form) {
          form.submit();
        }
      }
    });
  }

}