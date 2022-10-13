import Character from '../character';

test('create Character name < 2', () => {
  expect(() => new Character('i', 'Bowerman')).toThrowError(new Error('Имя должно содержать не менее 2 и не более 10 символов'));
});

test('create Character name > 10', () => {
  expect(() => new Character('koliberskiy', 'Bowerman')).toThrowError(new Error('Имя должно содержать не менее 2 и не более 10 символов'));
});

test('create Character type Error', () => {
  expect(() => new Character('Player', 'Dead')).toThrowError(new Error('Такого класса нет'));
});

test('create Character name', () => {
  const character = new Character('Player', 'Magician');
  expect(character.name).toBe('Player');
});

test('create Character type', () => {
  const character = new Character('Player', 'Magician');
  expect(character.type).toBe('Magician');
});

test('create Character', () => {
  const character = new Character('Player', 'Magician');
  const result = {
    name: 'Player',
    type: 'Magician',
    health: 100,
    level: 1,
  };
  expect(character).toMatchObject(result);
});
