let myProfile = {
    name: "Kaine Azuka",
    age: 26,
    country: "Nigeria",
    hobby: "Coding"

}

function displayProfile(person){
      console.log(
    
    person.name + " is " + person.age + " years old, lives in  " + person.country + " and enjoys " + person.hobby
  );

}
displayProfile(myProfile);