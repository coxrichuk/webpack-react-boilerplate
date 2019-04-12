export class ExampleTypescript {
    _exampleTSString: string;
    
    /**
     * @param {Object} props
     * @returns {undefined}
     */
    constructor(exampleString = `Webpack boilerplate is awesome with Typescript`)   {
        
        this._exampleTSString = exampleString;
    }
    
    /**
     * Returns a simple string
     * @returns {String}
     */
    exampleFunction():string   {
        return this._exampleTSString;
    }
    
    /**
     * Returns a simple string
     * @returns {String}
     */
    get exampleMethod():string   {
        return this._exampleTSString;
    }
    
    /**
     * Sets a simple string
     * @param {string} newString
     * @returns {String}
     */
    set exampleMethod(newString:string) {
        this._exampleTSString = newString;
    }
}