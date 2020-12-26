'use strict'
// an object literal
var objectLiteral = {
    // public variables and functions
    someProperty: "I am learning about object literals",
    publicMethod: function() {

$('.result').append(objectLiteral.someProperty);
    },
    init: function(settings) {
        objectLiteral.settings = settings;
    },
    readSettings: function() {
        $('.result').append(objectLiteral.settings);
    }
};

objectLiteral.publicMethod();
objectLiteral.init(', code organization and public access to variables and functions');
objectLiteral.readSettings();

// here an object is assigned to a variable. The object has one property
// and many methods. All of them have public access

// moving on to the module pattern to overcome some limitations of the above object literal method
var modulePattern = (function() {
    // private variables and function
    var privateProperty = "The module pattern enables you to ";
    var privateMethod = function() {
        $('.modulePattern').append(privateProperty);
    };
    var initPrivate = function(settings) {
        privateProperty = settings;
    };
    var readPrivateSettings = function() {
        $('.modulePattern').append(privateProperty);
    };
    // public access
    return {
        myPublicMethod: function() {
            privateMethod();
        },
        initPublic: function(argument) {
            initPrivate(argument);
        },
        readPublicSettings: function() {
            readPrivateSettings();
        }
    };
})();
modulePattern.myPublicMethod();
modulePattern.initPublic('have methods and functions which are private as well as public');
modulePattern.readPublicSettings();

// because the variables are defined inside the function we don't have access
// to them unless we put them in the return object. No code outside of the function
// will access private properties and methods. However, the myPublicMethod, initPublic
// and readPublicSettings functions have public access because they are
// defined in the same scope of the return object
