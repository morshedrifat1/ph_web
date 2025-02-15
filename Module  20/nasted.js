const college = {
    clName: "FPI",
    session: "21 - 22",
    department: "ET",
    shift: "2nd",
    semester: ["1st", "2nd", "3rd", "4th", "5th"],
    unique:{
        place:"sahin chatter",
        result: "95% passed"
    }
}

console.log(college.clName);
console.log(college.unique);
console.log(college.unique.result);


// if want key valu change 

college.shift="1st";
console.log(college.shift);

// if want delete any key
delete college.clName
console.log(college);