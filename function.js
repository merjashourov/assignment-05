
// This is result Function:

function Result_function (){

    this.gpa_function = function(number){

        if(number > 0 && number < 33){
            return  0;
        }else if(number >= 33 && number < 40){
            return  1;
        }else if(number >= 40 && number < 50){
            return  2;
        }else if(number >= 50 && number < 60){
            return  3;
        }else if(number >= 60 && number < 70){
            return  3.5;
        }else if(number >= 70 && number < 80){
            return  4;
        }else if(number >= 80 && number <= 100){
            return  5;
        }
    }

    this.grade_function = function(number){

        if(number > 0 && number < 33){
            return  'F';
        }else if(number >= 33 && number < 40){
            return  'D';
        }else if(number >= 40 && number < 50){
            return  'C';
        }else if(number >= 50 && number < 60){
            return  'B';
        }else if(number >= 60 && number < 70){
            return  'A-';
        }else if(number >= 70 && number < 80){
            return  'A';
        }else if(number >= 80 && number <= 100){
            return  'A+';
        }
    }

    this.total_gpa = function (bn, en, mth, phy, che, bio, ict) {
        
        let gpa_var;

        if( bn == 0  || en == 0 || mth == 0 || phy == 0 || che == 0 || bio == 0 || ict == 0){
            return gpa_var = 0;
        }else{
            gpa_var =( bn + en + mth + phy + che + bio + ict)/7;
            return gpa_var.toFixed(2);
        }
        

            

       
        
    }

        
    this.total_grade = function (cgpa) {

        if( cgpa == 0){

            return "F   & You Are Fail";
            
        }else{
            if( cgpa >= 0 && cgpa < 1){
                return  'F';
            }else if( cgpa >= 1 && cgpa < 2){
                return  'D';
            }else if( cgpa>= 2 && cgpa < 3){
                return  'C';
            }else if(cgpa >= 3 && cgpa < 3.5){
                return  'B';
            }else if( cgpa>= 3.5 && cgpa < 4){
                return  'A-';
            }else if(cgpa >= 4 &&  cgpa< 5){
                return  'A';
            }else if(cgpa = 5){
                return  'A+';
            }
        }
    }

    this.total_number = function (bn, en, mth, phy, che, bio, ict){

        let number_sum = (bn + en + mth + che + phy + bio + ict)/7;
        return number_sum.toFixed(2);
    }

}





// This is Multi Function:


function MerjaShourov() {
    
    this.currencyConvert = function ( currencyName, amount){

        if( currencyName == 'usd'){

            return ` ${amount} ${currencyName} = ${amount * 86} bdt`;

        }else if( currencyName == 'cad'){

            return ` ${amount} ${currencyName} =  ${amount * 65}`;

        }else if( currencyName == 'pound'){

            return ` ${amount} ${currencyName} = ${amount * 115}`;

        }else if( currencyName == 'euro'){

            return ` ${amount} ${currencyName} = ${amount * 97} `;

        }

    }

    this.ageCal = function ( uName, uBirth){

        return ` Your name is ${uName} & You are ${2021-uBirth} years old`;
    }

    this.calculateArea = function (type, lenth, width) {

        if( type == 'r'){

            return "Your Area is " + lenth * width;
            
        }else if( type == 's'){
    
            return "Your Area is " + lenth * lenth;

        }else if( type == 't'){
    
            return "Your Area is " + 0.5* lenth * width;
    
        }else{
            return ` Please type from Here: r / s / t`;
        }
    }

    this.ageName = function (name, age){

        if(age > 0 && age <= 12){
            return ` Hi, ${name}. You are ${age} years old. You are a Child `;
   
        }else if( age >=12 && age <= 17 ){
   
            return ` Hay, ${name}.You are ${age} years old. You are TEENAGER`;
        }
        else if( age >=18 && age <= 60 ){
   
           return ` Hay, ${name}.You are ${age} years old. You are YOUNG Guy`;
       }else if( age >=60 && age <= 120 ){
   
           return ` Hay, ${name}.You are ${age} years old. You are OLD Guy`;
       }else{
   
           return ` Please enter a valid Age`;
       }
   }   

   
}