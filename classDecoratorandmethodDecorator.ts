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



/**
 * Method Decorator
 */

/**
 * [MethodDecorator description]
 * @param {Object}                       target      [description]
 * @param {string}                       propertyKey [description]
 * @param {TypedPropertyDescriptor<any>} descriptor  [description]
 */
function MethodDecorator(
    target: Object, // The prototype of the class
    propertyKey: string, // The name of the method
    descriptor: TypedPropertyDescriptor<any>
) {
    console.log("MethodDecorator called on: ", target, propertyKey, descriptor);
}

class MethodDecoratorExample {
    @MethodDecorator
    method() {
    }
}
