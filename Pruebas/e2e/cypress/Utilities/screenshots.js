export class Screenshot {
    constructor() {
      this.order = 1; 
      this.case_name=""
    }

    case(case_name){
        this.order = 1; 
        this.case_name = case_name.replaceAll(" ","_");
    }
 
    take() {
        cy.wait(1000)
        cy.screenshot(this.case_name+"/caso_"+this.order+".jpg");
        this.order++;
      }
  }