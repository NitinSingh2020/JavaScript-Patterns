/*
 * Sub-Module for the JavaScript_Patterns Framework
 * Name in DOM NameSpace: JavaScript_Patterns.moduleExample
 * ===================================================== */

var JavaScript_Patterns = (function ( parent ) {
    /* now have access to globals JavaScript_Patterns
     * (as parent) in this code
     * =========================================== */

    /* Create Sub-Module for the module example */
    var _localModule = parent.moduleExample = parent.moduleExample || {};

    /* Private Variables
     * ============== */
    var privateVariable_1 = null;
    var privateVariable_2 = null;

    /* Private Functions
     * ============== */
    function privateFunction_1() {

        /* This function is private to this 
         * module and is not accessible in DOM
         */
    };

    /* Public Functions Exposed in API
     * ============================ */

    _localModule.publicFunction_1 = privateFunction_1;
        /* Public alias to privateFunction_1, this function makes the
         * interface of this module and is accessible in DOM as
         * JavaScript_Patterns.moduleExample.publicFunction_1()
         */


    _localModule.publicFunction_2 = function() {
        /* This function makes the interface of this  
         * module and is accessible in DOM as
         * JavaScript_Patterns.moduleExample.publicFunction_2()
         */        
    };

    /* Return Module in the global scope
     * ============================== */
    return parent;

}(JavaScript_Patterns || {}));