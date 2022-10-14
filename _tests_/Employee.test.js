const Employee = require('../lib/Employee')

//Creates new employee object
test('creates a new employee object.', () => {
    const employee = new Employee('')

    expect(employee.name).toBe('');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('')
    expect(employee.role).toBe('')
})

test('checks if getName returns correct name.', () => {
    expect(employee.getName()).toBe('');
})

test('checks if getId returns correct id.', () => {
    expect(employee.getid()).toEqual();
});

test('checks if getEmail returns correct email.', () => {
    expect(employee.getEmail()).toBe('');
});

test('checks if getRole returns correct employee role.', () => {
    expect(employee.getRole()).toBe('employee');
});