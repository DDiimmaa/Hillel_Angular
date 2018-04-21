var normalAttendance = 0.8, normalAverage = 85;

class Student {
    attendance = new Array(25);
    constructor(public name: string,
        public surname: string,
        public yearOfBirth: number,
        public marks: number[]) { 
    }

    getName() : string { 
        return this.name;
    }

    getAverageMark() : number {
        return this.marks.reduce(function(currSum, currValue){
                return isNaN(currValue) ? currSum : currSum += currValue;
        }, 0) / this.marks.length;
    }

    getAverageAttendance() : number {
        return this.attendance.filter(function(dailyAttendance){
            return dailyAttendance === true;
        }).length / this.attendance.length;
    }

    present() {
        for(var i = 0; i< this.attendance.length; i++)
        {
            if(this.attendance[i] === undefined)
            {
                this.attendance[i] = true;
                break;
            }
        }
    }

    absent() {
        for(var j = 0; j < this.attendance.length; j++)
        {
            if(this.attendance[j] === undefined)
            {
                this.attendance[j] = false;
                break;
            }
        }
    }

    summary = function(){
        var averageMark = parseInt(this.getAverageMark());

        var averageAttendance = this.getAverageAttendance();

        if(averageMark > normalAverage && averageAttendance > normalAttendance){
            console.log(this.getName() + " ("+averageMark+", "+averageAttendance+"): Uti kakoi molodchinka")
        }
        else if (averageMark < normalAverage && averageAttendance >= normalAttendance || 
        averageMark >= normalAverage && averageAttendance < normalAttendance) {
            console.log(this.getName() + " ("+averageMark+", "+averageAttendance+"): Norm bro, but mozhno lusche")
        }
        else {
            console.log(this.getName() + " ("+averageMark+", "+averageAttendance+"): Bad boy!")
        }
    }
}

class StudentGroup { 
    constructor(public students: Student[]) { 

    }

    attendance(name?:string){
        var averageAttendances = [];
        for(var k = 0; k < this.students.length;k++){
            averageAttendances.push({name: this.students[k].getName(), averageAttendance:this.students[k].getAverageAttendance()});
        }
        if(name === undefined){
            console.log((averageAttendances.reduce(function(currSum, currValue){
                return currSum += currValue.averageAttendance;
            },0) / averageAttendances.length).toFixed(2));
        }
        else
        {
            let sortedArray = averageAttendances.sort((a, b) => {
                return a.averageAttendance < b.averageAttendance;
            });
            
            for(var k = 1; k<= sortedArray.length;k++){
                if(sortedArray[k-1].name === name){
                    console.log("student "+name+" is on the "+k+" place by attendance.");
                }
            }
        }
    }

    performance(name?:string) {
        var averageMarks = [];
        for(var k = 0; k< this.students.length;k++){
            averageMarks.push({name: this.students[k].getName(), averageMark:this.students[k].getAverageMark()});
        }
        if(name === undefined){
            console.log(averageMarks.reduce(function(currSum, currValue){
                return currSum += currValue.averageMark;
            },0) / averageMarks.length);
        }
        else
        {
            let sortedArray = averageMarks.sort((a, b) =>  {
                return a.averageMark < b.averageMark;
            });
            for(var k = 1; k<= sortedArray.length;k++){
                if(sortedArray[k-1].name === name){
                    console.log("student "+name+" is on the "+k+" place by average mark.");
                }
            }
        }
    }
}


var subjects = 10, min_mark = 55, max_mark = 100, diff = (max_mark-min_mark+1), lessons = 25;

var playerFirst = new Student("Dima","Petrov", 1985, Array.from({length: subjects}, () => Math.floor((Math.random() * diff) + min_mark)));
var arr = Array.from({length: lessons}, () => (Math.random() > 0.1));
for(var x = 0; x < arr.length; x++)
{
    if(arr[x] === true)
    {
        playerFirst.present();
    }
    else {
        playerFirst.absent();
    }
}
playerFirst.summary();
var playerSecond = new Student("Sergey","Ivanov", 1991, Array.from({length: subjects}, () => Math.floor((Math.random() * diff) + min_mark)));
arr = Array.from({length: lessons}, () => (Math.random() > 0.1));
for(var x = 0; x < arr.length; x++)
{
    if(arr[x] === true)
    {
        playerSecond.present();
    }
    else {
        playerSecond.absent();
    }
}
playerSecond.summary();
var playerThird = new Student("Andriy","Shevchnko", 1977, Array.from({length: subjects}, () => Math.floor((Math.random() * diff) + min_mark)));
arr = Array.from({length: lessons}, () => (Math.random() > 0.1));
for(var x = 0; x < arr.length; x++)
{
    if(arr[x] === true)
    {
        playerThird.present();
    }
    else {
        playerThird.absent();
    }
}
playerThird.summary();

var students = [];
students.push(playerFirst);
students.push(playerSecond);
students.push(playerThird);

var group = new StudentGroup(students);
group.attendance();
group.performance();
group.attendance(playerFirst.getName());
group.performance(playerFirst.getName());