/*
 * Sub-Module for the JavaScript_Patterns Framework
 * Name in DOM NameSpace: JavaScript_Patterns.utilityModule
 * ===================================================== */

var JavaScript_Patterns = (function ( parent ){

    /* Create Sub-Module for the observer-pattern */
    var _localModule = parent.utilityModule = parent.utilityModule || {};

    /* Private Variables
     * ============== */

    /* Private Functions
     * ============== */

    /* Public Functions Exposed as API
     * ============================ */

    /* Function to extend an object with an extension */
    _localModule.extend = function( extension, obj ){
        for ( var key in extension ){
            obj[key] = extension[key];
        }
    };

    /* Return Module in the global scope */
    return parent;

}(JavaScript_Patterns || {}));