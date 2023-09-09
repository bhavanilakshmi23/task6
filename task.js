 //2.  https:github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md

 class Circle{
     constructor(radius,color){
         this.radius=radius;
         this.color=color;
   }
    getRadius(){
         return this.radius;
     }
     getColor(){
         return this.color;
     }
     getArea(){
         return 3.14*this.radius*this.radius; // Area of circle = πr2
     }
     getCircumference(){
         return 2*3.14*this.radius;  //circumference of a circle, C=2𝜋r
     }
 }
 var c1=new Circle(2.5,"red");
 console.log(c1.getArea().toFixed(2));
 console.log(c1.getCircumference().toFixed(2));

// 3.  Write a “person” class to hold all the details.

 class Person{
     constructor(Name,DOB,BloodGroup,Phone,Gender,Qualification,MaritalStatus,Religion,Address,Citizenship){
         this.Name=Name;
         this.DOB=DOB;
         this.BloodGroup=BloodGroup;
         this.Phone=Phone;
         this.Gender=Gender;
         this.Qualification=Qualification;
         this.MaritalStatus=MaritalStatus;
         this.Religion=Religion;
         this.Address=Address;
         this.Citizenship=Citizenship;
     }
     getdetails(){
         if(this.BloodGroup=="O+ve" && this.Citizenship=="Indian"){
            return `Name : ${this.Name}, Phone : ${this.Phone}, Citizenship : ${this.Citizenship}`;
         }
         else{
             return "Not Required";
         }
     }
 }
 var p1=new Person("Swetha","18-11-1994","B+ve","8124688679","Female","B.Tech","married","Hindu","Pondicherry","Indian");
 var p2=new Person("Dhakshna","13-12-1991","O+ve","9876543210","Female","M.Tech","Unmarried","Hindu","Tamilnadu","Indian");
 var p3=new Person("Deepika","06-07-1996","O+ve","9876548888","Female","M.Com","Married","Hindu","Tamilnadu","Indian");
 var p4=new Person("Arthi","10-05-1994","O+ve","8876543541","Female","B.Tech","Unmarried","Hindu","Tamilnadu","Dubai");
 console.log(p1.getdetails());
 console.log(p2.getdetails());
 console.log(p3.getdetails());
 console.log(p4.getdetails());


// 4.  write a class to calculate the uber price.

 class Uber{
     constructor(price,km,wcpm=0){
         this.price=price;
         this.km=km;
         this.wcpm=wcpm;
     }
     rate(){
       if(this.wcpm<=5){
         return `The cost of the trip is Rs.${this.price*this.km}`;
     }
     else{
         return `The cost of the trip is Rs.${this.price*this.km} and the waiting charge is Rs.${this.wcpm*2} so the total amount you have to pay is Rs.${(this.price*this.km)+(this.wcpm*2)}`;
     }
 }
 }
 var r1=new Uber(100,1,10);
 var r2=new Uber(270,2);
 var r3=new Uber(96,3,15);
  var arr=[r1,r2,r3];
  console.log(arr);
 console.log(r1.rate());
 console.log(r2.rate());
 console.log(r3.rate());

