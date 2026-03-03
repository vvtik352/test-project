const { add, setTItle } = require('./main');

test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});

test('title equals to itself', () => {
    const title = 'myTitle';
    expect(setTItle(title)).toBe(title)
})