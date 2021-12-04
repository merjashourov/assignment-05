
        let sName = prompt("type your Name");
        let sRoll = prompt("type your Roll");

        let bn  = Number(prompt("Banlga"));
        let en  =  Number(prompt("English"));
        let mth = Number(prompt("Math"));
        let phy = Number(prompt("Physices"));
        let che =  Number(prompt("Chemistry"));
        let bio =  Number(prompt("Biology"));
        let ict =  Number(prompt("ICT"));






    let resultFunction = new Result_function();

    let avgNum = resultFunction.total_number(bn,en,mth, phy, che, bio, ict);
    let cgpa   = resultFunction.total_gpa(resultFunction.gpa_function(bn), resultFunction.gpa_function(en), resultFunction.gpa_function(mth),  resultFunction.gpa_function(phy),  resultFunction.gpa_function(che),  resultFunction.gpa_function(bio),  resultFunction.gpa_function(ict));
    let grade  = resultFunction.total_grade(cgpa);


console.log(`

    Student Name = ${sName}
    Student Roll = ${sRoll}

    Subject     Number              G.P.A           Grade
    ------------------------------------------------------
        
    Bangla       : ${bn}                ${resultFunction.gpa_function(bn)}              ${resultFunction.grade_function(bn)}
    English      : ${en}                ${resultFunction.gpa_function(en)}              ${resultFunction.grade_function(en)}
    Math         : ${mth}                ${resultFunction.gpa_function(mth)}              ${resultFunction.grade_function(mth)}
    Physices     : ${phy}                ${resultFunction.gpa_function(phy)}              ${resultFunction.grade_function(phy)}
    Chemistry    : ${che}                ${resultFunction.gpa_function(che)}              ${resultFunction.grade_function(che)}
    Biology      : ${bio}                ${resultFunction.gpa_function(bio)}              ${resultFunction.grade_function(bio)}
    ICT          : ${ict}                ${resultFunction.gpa_function(ict)}              ${resultFunction.grade_function(ict)}
    --------------------------------------------------------
    Average Num  : ${avgNum}        CGPA : ${cgpa}     Gread : ${grade}

`)

