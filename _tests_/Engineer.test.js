const Engineer = require('../lib/Engineer')

//Creates new engineer object
test('creates a new engineer object', () => {
    const engineer = new Engineer('')

    expect(engineer.name).toBe('');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe('')
    expect(engineer.github).toBe('')
})

test('checks if getName returns correct name.', () => {
    expect(engineer.getName()).toBe('');
});

test('checks if getId returns correct id.', () => {
    expect(engineer.getId()).toEqaul();
})

test('checks if getEmail returns correct email.', () => {
    expect(engineer.getEmail()).toBe('')
});

test('checks to see if getGitHub returns correct gitHub.', () => {
    expect(engineer.getGitHub()).toBe('')
})