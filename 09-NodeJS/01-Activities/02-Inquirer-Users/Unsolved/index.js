const fs = require('fs');
// Install the `inquirer` dependency HERE
const inquirer = require('inquirer');
// Prompt the user for their name, preferred method of communication, and known languages
// YOUR CODE HERE
const promptUser = () => {
  return inquirer.prompt([
      {
          type: 'input',
          name: 'name',
          message: 'What is your name? (Required)',
          validate: nameInput => {
              if (nameInput) {
                  return true;
              } else {
                  console.log('Please enter your name!');
                  return false;
              }
          }
      },
      {
          type: 'list',
          name: 'communication',
          message: 'What is your preferred method of communication?',
          choices: ['phone', 'email', 'text', 'letter', 'smoke signals']
      },
      {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you build this project with? (Check all that apply)',
        choices: ['Engligh', 'Spanish', 'German', 'Italian', 'Porteguese']
      }
  ]);
};


// Write the user response to a file by chaining the below callback method to the prompt above.
promptUser()
  .then(function(data) {

  // Bonus: Generate the name of your user file from their input
  // Your bonus code here
  const filename = data.name + '.txt';

  fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {

    if (err) {
      return console.log(err);
    }

    console.log("Success!");

  });
});
