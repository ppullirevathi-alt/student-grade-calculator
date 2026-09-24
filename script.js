function calculateGrade() {

    let name = document.getElementById("name").value;

    let maths = Number(document.getElementById("maths").value);
    let science = Number(document.getElementById("science").value);
    let english = Number(document.getElementById("english").value);
    let social = Number(document.getElementById("social").value);
    let computer = Number(document.getElementById("computer").value);

    let total = maths + science + english + social + computer;

    let percentage = total / 5;

    let grade;

    if (percentage >= 90) {
        grade = "A+";
    } else if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 70) {
        grade = "B";
    } else if (percentage >= 60) {
        grade = "C";
    } else if (percentage >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }

    document.getElementById("result").innerHTML =
        "<h3>Student Result</h3>" +
        "Name: " + name + "<br>" +
        "Total Marks: " + total + "/500<br>" +
        "Percentage: " + percentage + "%<br>" +
        "Grade: " + grade;
}
