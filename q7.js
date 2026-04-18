function formatName(firstName, lastName) {
  const First = firstName.trim();
  const Last = lastName.trim();

  return Last.toUpperCase()  + " , " +  First.charAt(0).toUpperCase() + First.slice(1).toLowerCase();
}

console.log(formatName('  esther  ', '  ogbu  '));