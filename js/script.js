function displayAkanName(){
  //Get birthday value
  var birthday = document.querySelector('input[type="date"]').value;
  console.log(birthday);
  var dateEntered = new Date(birthday);
  console.log(dateEntered);
  var year = dateEntered.getFullYear()
  var month = dateEntered.getMonth()
  var day = dateEntered.getDate()
  console.log(typeof year + ' year ')

  //Get the century and Year
    //Convert year to string to get century
    var yearString = year.toString()

  //array for male Names
  var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  //array for female Names
  var femaleNames = ["Akosua", "Adwoa","Abenaa", "Akua", "Yaa", "Afua", "Ama"]
}
