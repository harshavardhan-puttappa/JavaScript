
    var Employee=function(name){
        this.name=name;
        this.getName=()=> this.name;
        this.getNameLength=()=> this.name.length +' characters';
    }
    
    var PermanentEmployee=function(annualSalary){
        this.annualSalary=annualSalary;
    }

    var emp1=new Employee("Harshavardhan");

    PermanentEmployee.prototype=emp1;

    var pe=new PermanentEmployee(500000);

    console.log(pe.getName());
    console.log(pe.getNameLength());

    console.log("Employee.name:"+ emp1.hasOwnProperty('name'));
    console.log("PermanentEmployee.annualSalary:"+ pe.hasOwnProperty('annualSalary'));