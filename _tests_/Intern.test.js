const Intern = require('../lib/Intern')

test('creates a new intern object', () => {
    const intern = new Intern('')

    expect(intern.name).toBe('');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe('')
    expect(intern.school).toBe('')
});

test('checks if getName returns correct name.', () => {
    expect(intern.getName()).toBe('');
});

test('checks if getId returns correct id.', () => {
    expect(intern.getId()).toEqaul();
});

test('checks if getEmail returns correct email.', () => {
    expect(intern.getEmail()).toBe('');
});

test('checks to see if getSchool returns correct school.', () => {
    expect(intern.getSchool()).toBe('');
});

test('checks if getRole returns intern', () => {
    expect(intern.getRole()).toBe('intern');
})