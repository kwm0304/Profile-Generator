const Manager = require('../lib/Manager')

test('creates a new engineer object', () => {
    const manager = new Manager('')

    expect(manager.name).toBe('');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('');
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('checks if getName returns correct name.', () => {
    expect(manager.getName()).toBe('');
});

test('checks if getId returns correct id.', () => {
    expect(manager.getId()).toEqaul();
});

test('checks if getEmail returns correct email.', () => {
    expect(manager.getEmail()).toBe('')
});

test('checks to see if getRole returns manager.', () => {
    expect(manager.getRole()).toBe('manager')
});