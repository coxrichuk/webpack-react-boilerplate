export class Example {
    
    /**
     * @param {Object} exampleString
     * @returns {undefined}
     */
    constructor(exampleString = `Webpack boilerplate`)   {
        
        this._exampleString = exampleString;
    }
    
    /**
     * Returns a simple string
     * @returns {String}
     */
    exampleFunction()   {
        return this._exampleString;
    }
    
    /**
     * Returns a simple string
     * @returns {String}
     */
    get exampleMethod()   {
        return this._exampleString;
    }
    
    /**
     * Sets a simple string
     * @param {string} newString
     * @returns {String}
     */
    set exampleMethod(newString) {
        this._exampleString = newString;
    }
}