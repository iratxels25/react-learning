describe('Test on file demo.test when', () => {
    test('should to be true', () => {
        const isActive = true;

        if (!isActive) {
            throw new Error('Is not active');
        }
    })

    test('should to be equal strings', () => {
        const message = 'Hello world';
        const message2 = `Hello world`;

        expect(message).toBe(message2);
    })
})

