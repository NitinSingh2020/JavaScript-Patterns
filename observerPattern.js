/*
 * Sub-Module for the JavaScript_Patterns Framework
 * Name in DOM NameSpace: JavaScript_Patterns.observerModule
 * ========================================================= */

var JavaScript_Patterns = (function (parent) {

    /* Create Sub-Module for the observer-pattern */
    var _localModule = parent.observerModule = parent.observerModule || {};

    /* Private Variables
     * ============== */

    /* Private Functions
     * ============== */


    /* ObserverList Class Definition
     * ========================== */
    function ObserverList() {
        this.observerList = [];
    }
     
    ObserverList.prototype.add = function( obj ) {
        return this.observerList.push( obj );
    };
     
    ObserverList.prototype.count = function() {
        return this.observerList.length;
    };
     
    ObserverList.prototype.get = function( index ) {
        if( index > -1 && index < this.observerList.length ){
          return this.observerList[ index ];
        }
    };
     
    ObserverList.prototype.indexOf = function( obj, startIndex ) {
        var i = startIndex;
     
        while( i < this.observerList.length ){
            if( this.observerList[i] === obj ){
                return i;
            }
            i++;
        }
     
        return -1;
    };
     
    ObserverList.prototype.removeAt = function( index ) {
        this.observerList.splice( index, 1 );
    }; 

    /* Subject Class Definition
     * ===================== */
    function Subject() {
        this.observers = new ObserverList();
    }
     
    Subject.prototype.addObserver = function( observer ) {
        this.observers.add( observer );
    };
     
    Subject.prototype.removeObserver = function( observer ) {
        this.observers.removeAt( this.observers.indexOf( observer, 0 ) );
    };
     
    Subject.prototype.notify = function( context ) {
        var observerCount = this.observers.count();
        for(var i=0; i < observerCount; i++){
            this.observers.get(i).update( context );
        }
    };

    /* The Observer Class Definition
     * ========================== */
    function Observer() {
        this.update = function() {
            // ...
        };
    }

    /* Public Functions Exposed in API
     * ============================ */
    _localModule.Subject = Subject;
    _localModule.Observer = Observer;
    _localModule.ObserverList = ObserverList;

    /* Return Module in the global scope
     * ============================== */
    return parent;

}(JavaScript_Patterns || {}));