var subjects = 10, min_mark = 55, max_mark = 100, diff = (max_mark-min_mark+1), lessons = 25;

var playerFirst = new Student("Dima","Petrov", "1985", Array.from({length: subjects}, () => Math.floor((Math.random() * diff) + min_mark)));
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
var playerSecond = new Student("Sergey","Ivanov", "1991", Array.from({length: subjects}, () => Math.floor((Math.random() * diff) + min_mark)));
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
var playerThird = new Student("Andriy","Shevchnko", "1977", Array.from({length: subjects}, () => Math.floor((Math.random() * diff) + min_mark)));
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