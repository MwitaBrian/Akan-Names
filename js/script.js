function displayAkanName(){
  //Get birthday value
  var birthday = document.querySelector('input[type="date"]').value;
  var dateEntered = new Date(birthday);
  var year = dateEntered.getFullYear()
  var month = dateEntered.getMonth()
  var day = dateEntered.getDate()

  //Get the century and Year
    //Convert year to string
    var yearString = year.toString()
    //use Slice method then convert back to Integer
    var CC = parseInt(yearString.slice(0,2))
    var YY = parseInt(yearString.slice(2,4))
    var MM = month
    var DD = day

    //Use the given formula from LMS
    dayOfTheWeek = parseInt(((CC/4)-2*CC-1)+((5*YY/4))+((26*(MM+1)/10))+DD)%7
    console.log(dayOfTheWeek);



  //array for male Names
  var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  //array for female Names
  var femaleNames = ["Akosua", "Adwoa","Abenaa", "Akua", "Yaa", "Afua", "Ama"]
}
