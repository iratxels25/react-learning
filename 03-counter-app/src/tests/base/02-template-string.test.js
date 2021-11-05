import '@testing-library/jest-dom'
import { getSaludo } from "../../base/02-template-string";

describe('Test on 02-template-string.js', () => {

    describe('getGreeting', () => {
        test('should have to return "Hola Iratxe" when name is "Iratxe"', () => {
            const name = 'Iratxe';
            const greeting = getSaludo(name);

            expect(greeting).toBe("Hola Iratxe")
        })

        test('should have to return "Hola Carlos" when not has name', () => {
            const greeting = getSaludo();

            expect(greeting).toBe("Hola Carlos")
        })
    })

})
