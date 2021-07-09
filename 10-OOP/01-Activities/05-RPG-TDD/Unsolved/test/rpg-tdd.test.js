const Character = require('../rpg-tdd');

test('creates a character object', () => {
  // Create a new character with a `name`, `strength`, and `hitpoints` values
  const character = new Character('Mark', 25, 100) 
  //
  // Create a test that checks if the `name` is a `string`
  expect(character.name).toBe('Mark');
  //
  // Create a test that checks if the `strength` and `hitpoints` are `numbers`
  expect(character.strength).toEqual(expect.any(Number));
  expect(character.hitpoints).toEqual(expect.any(Number));
  //
  // Create a test that checks if the `hitpoints` is greater than the `strength`
  expect(character.hitpoints).toBeGreaterThan(character.strength);
  //
});

// Bonus: write a test that will check if the character is alive or not
test('checks if player is alive', () => {
  const character = new Character('Mark', 25, 100)

  expect(character.isAlive()).toBeTruthy();
  
  character.hitpoints = 0;

  expect(character.isAlive()).toBeFalsy();

});