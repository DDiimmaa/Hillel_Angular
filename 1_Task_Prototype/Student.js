var normalAttendance = 0.8, normalAverage = 85;

function Student(name, surname, yearOfBirth, marks){
    this.name = name;
    this.surname = surname;
    this.yearOfBirth = parseInt(yearOfBirth);
    this.marks = marks;
    this.attendance = new Array(25);
}
Student.prototype.getName = function(){
    return this.name;
}
Student.prototype.getAverageMark = function(){
    return this.marks.reduce(function(currSum, currValue){
        return isNaN(parseInt(currValue)) ? currSum : currSum += parseInt(currValue);
    },0) / this.marks.length;
}
Student.prototype.getAverageAttendance = function(){
    return this.attendance.filter(function(dailyAttendance){
        return dailyAttendance === true;
    }).length / this.attendance.length;
}

Student.prototype.present = function(){
    for(var i = 0; i< this.attendance.length; i++)
    {
        if(this.attendance[i] === undefined)
        {
            this.attendance[i] = true;
            break;
        }
    }
}
Student.prototype.absent = function(){
    for(var j = 0; j< this.attendance.length; j++)
    {
        if(this.attendance[j] === undefined)
        {
            this.attendance[j] = false;
            break;
        }
    }
}
Student.prototype.summary = function(){
    var averageMark = parseInt(this.getAverageMark());

    var averageAttendance = this.getAverageAttendance();

    if(averageMark > normalAverage && averageAttendance > normalAttendance){
        console.log(this.getName() + " ("+averageMark+", "+averageAttendance+"): Uti kakoi molodchinka")
    }
    else if(averageMark < normalAverage ^ averageAttendance < normalAttendance){
        console.log(this.getName() + " ("+averageMark+", "+averageAttendance+"): Norm bro, but mozhno lusche")
    }
    else {
        console.log(this.getName() + " ("+averageMark+", "+averageAttendance+"): Bad boy!")
    }
}