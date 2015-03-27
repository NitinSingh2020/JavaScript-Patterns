/*
 * Sub-Module for the JavaScript_Patterns Framework
 * Name in DOM NameSpace: JavaScript_Patterns.pubSubModule
 * ==================================================== */

var JavaScript_Patterns = (function (parent) {

    /* Create Sub-Module for the observer-pattern */
    var _localModule = parent.pubSubModule = parent.pubSubModule || {};

    /* Private Variables
     * ============== */
    
    var topics = {}; /* Storage for topics that can be broadcast or listened to */
    var subUid = -1; /* An topic identifier */

    /* Private Functions
     * ============== */


    /* Public Functions Exposed in API
     * ============================ */

    _localModule.publish = function( topic, args ) {
    /* Publish or broadcast events of interest  with a specific
     * topic name and arguments such as the data to pass along */
        if ( !topics[topic] ) {
            return false;
        }
 
        var subscribers = topics[topic],
            len = subscribers ? subscribers.length : 0;
 
        while (len--) {
            subscribers[len].func( topic, args );
        }
 
        return this;
    };
 

    _localModule.subscribe = function( topic, func ) {
    /* Subscribe to events of interest with a specific topic name and a
     * callback function, to be executed when the topic/event is observed */
        if (!topics[topic]) {
            topics[topic] = [];
        }
 
        var token = ( ++subUid ).toString();
        topics[topic].push({
            token: token,
            func: func
        });
        return token;
    };
 

    _localModule.unsubscribe = function( token ) {
    /* Unsubscribe from a specific topic, based on a
     * tokenized reference to the subscription */
        for ( var m in topics ) {
            if ( topics[m] ) {
                for ( var i = 0, j = topics[m].length; i < j; i++ ) {
                    if ( topics[m][i].token === token ) {
                        topics[m].splice( i, 1 );
                        return token;
                    }
                }
            }
        }
        return this;
    };

    /* Return Module in the global scope
     * ============================== */
    return parent;

}(JavaScript_Patterns || {}));