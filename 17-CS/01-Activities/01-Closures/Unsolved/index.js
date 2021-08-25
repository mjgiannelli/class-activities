const name = 'Kim';

function person() {
  const name = 'Lee';

  // Return a function called `displayName()` with access to the `name` variable
  return function displayName() {
    return name
  }
  //
}

// Invoke `displayName()` in order to print "Lee" in the console
const displayName = person();
console.log(displayName(name))
