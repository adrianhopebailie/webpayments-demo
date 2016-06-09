"use strict";

// Send a message to background.js
var sendMessage = function(command, param, callback) {
    if (callback) {
        window.addEventListener("message", function(event) {
            if (!event.data.to || (event.data.to != "webpayments-polyfill.js")) return;
            callback(event.data);
        }, false);
    }
    window.postMessage({to: "background.js", command: command, param: param}, "*");
}

var PaymentApp = {
    register: function(paymentApp) {
        console.log("PaymentApp.register() called");
        sendMessage("PaymentApp.register", paymentApp);
    }
}

function PaymentRequest(supportedMethods, details, options, data) {
    this.supportedMethods = supportedMethods;
    this.details = details;
    this.options = options;
    this.data = data;
    this.responseCallback = null;
    this.show = function() {
        console.log("PaymentRequest.show() called");
        var request = JSON.stringify(this);
        return new Promise(function(resolve, reject) {
            sendMessage("PaymentRequest.show", request, function(response) {
                if (response.error) {
                    reject(response.error);
                } else {
                    resolve(response.response);
                }
            });
        });
    };
    this.respond = function(paymentResponse) {
        console.log("PaymentRequest.respond() called");
        return new Promise(function(resolve, reject) {
            sendMessage("PaymentRequest.respond", paymentResponse, function(response) {
                if (response.error) {
                    reject(response.error);
                } else {
                    resolve(response.result);
                }
            });
        });
    };
    this.getMethodData = function(methodIdentifier) {
      //TODO: Loop through all the method data and see if the given identifier exists
      //If it does, return the method specific data
      //For now just return and empty object implying that all methods are supported
        return {};
    };
}

PaymentRequest.prototype.getCurrent = function() {
    console.log("PaymentRequest.getCurrent() called");
    return new Promise(function(resolve, reject) {
        sendMessage("PaymentRequest.getCurrent", false, function(response) {
            if (response.error) {
                reject(response.error);
            } else {
                resolve(response.request);
            }
        });
    });
}

PaymentRequest.prototype.isPaymentRequest = function(request) {
    console.log("PaymentRequest.isPaymentRequest() called");
    //TODO Put some logic here to evaluate the request properly
    return true;
}

var PaymentResponse = {
    submit : function(methodIdentifier, data){
        console.log("PaymentResponse.submit() called");

    }
}
