function StudentGroup(students){
    this.students = students;
}
StudentGroup.prototype.attendance = function(name){
    var averageAttendances = [];
    for(var k = 0; k< students.length;k++){
        averageAttendances.push({name: students[k].getName(), averageAttendance:students[k].getAverageAttendance()});
    }
    if(name === undefined){
        console.log((averageAttendances.reduce(function(currSum, currValue){
            return currSum += currValue.averageAttendance;
        },0) / averageAttendances.length).toFixed(2));
    }
    else
    {
        var sortedArray = averageAttendances.sort(function(a, b) {
            return a.averageAttendance < b.averageAttendance;
        });
        
        for(var k = 1; k<= sortedArray.length;k++){
            if(sortedArray[k-1].name === name){
                console.log("student "+name+" is on the "+k+" place by attendance.");
            }
        }
    }
}

StudentGroup.prototype.performance  = function(name){
    var averageMarks = [];
    for(var k = 0; k< students.length;k++){
        averageMarks.push({name: students[k].getName(), averageMark:students[k].getAverageMark()});
    }
    if(name === undefined){
        console.log(parseInt(averageMarks.reduce(function(currSum, currValue){
            return currSum += currValue.averageMark;
        },0) / averageMarks.length));
    }
    else
    {
        var sortedArray = averageMarks.sort(function(a, b) {
            return a.averageMark < b.averageMark;
        });
        for(var k = 1; k<= sortedArray.length;k++){
            if(sortedArray[k-1].name === name){
                console.log("student "+name+" is on the "+k+" place by average mark.");
            }
        }
    }
}