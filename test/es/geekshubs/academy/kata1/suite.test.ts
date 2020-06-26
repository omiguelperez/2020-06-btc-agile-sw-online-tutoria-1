import { _method, fizzBuzz } from "../../../../../src/es/geekshubs/academy/kata1/geekshubs";

describe('Testing', function (){
    
    test('Tittle - cmp string ', function () {
        //Arrange
        var expected = "xavi1";
        //Act
        var result = _method(1);
        //Assert
        expect(result).toBe(expected);
    });

    test('Testeo números primeros', function () {
        //Arrange
        var expected = "1\n2\n";
        //Act
        var result = fizzBuzz(2);
        //Assert
        expect(result).toBe(expected);
    });

    test('Testeo números múltiplos de 3 para hacer Fizz', function () {
        //Arrange
        var expected = "1\n2\n\Fizz\n";
        //Act
        var result = fizzBuzz(3);
        //Assert
        expect(result).toBe(expected);
    });

});



    


