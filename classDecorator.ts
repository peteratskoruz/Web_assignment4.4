/**
 * Class decorator with parameter
 */

function classDecoratorParams(param: string) {

    return function (
        target: Function // The class the decorator is declared on
    ) {

        //output in console.log

        console.log(`classDecoratorParams Name: ${param} is called on ${target}`)
    }

}

//defining class decorator

@classDecoratorParams('joseph')

class classDecoratorExample{

}
