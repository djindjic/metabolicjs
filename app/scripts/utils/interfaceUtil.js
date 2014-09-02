'use strict';

angular.module('nutnexApp.utils')
  .factory('InterfaceUtil', function () {
  	// Interface()
    // An interface constructor
    // Note: interface is a reserved word in JavaScript and is only used here for demonstration purposes.
    var InterfaceUtil = function (name, methods) {
        if (arguments.length != 2) {
            throw new Error("Interface constructor called with " + arguments.length + "arguments, but expected exactly 2.");
        }
        this.name = name;
        this.methods = [];
        for (var i = 0, len = methods.length; i < len; i++) {
            if (typeof methods[i] !== 'string') {
                throw new Error("Interface constructor expects method names to be " + "passed in as a string.");
            }
            this.methods.push(methods[i]);
        }
    };
 
    // Static class method.
    InterfaceUtil.ensureImplements = function (object) {
        if (arguments.length < 2) {
            throw new Error("Function Interface.ensureImplements called with " + arguments.length + "arguments, but expected at least 2.");
        }
        for (var i = 1, len = arguments.length; i < len; i++) {
            var interfaceObject = arguments[i];
            if (interfaceObject.constructor !== InterfaceUtil) {
                throw new Error("Function Interface.ensureImplements expects arguments" + "two and above to be instances of Interface.");
            }
            for (var j = 0, methodsLen = interfaceObject.methods.length; j < methodsLen; j++) {
                var method = interfaceObject.methods[j];
                if (!object[method] || typeof object[method] !== 'function') {
                    throw new Error("Function Interface.ensureImplements: object " + "does not implement the " + interfaceObject.name + " interface. Method " + method + " was not found.");
                }
            }
        }
    };

  	return InterfaceUtil;
  });