
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