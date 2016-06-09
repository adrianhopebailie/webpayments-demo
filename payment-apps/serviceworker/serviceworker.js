self.addEventListener('install', function(event) {
  // We pass a promise to event.waitUntil to signal how
  // long install takes, and if it failed
  event.waitUntil(
    PaymentApp.register({
        name: "AdrianPay",
        start_url: "http://adrianpay.com/paymentapps",
        enabled_methods: ["http://webpayments.org/payment-methods/card"]
      }));
});

// The fetch event happens for the page request with the
// ServiceWorker's scope, and any request made within that
// page

self.addEventListener('fetch', function(event) {
  
  // Calling event.respondWith means we're in charge
  // of providing the response. We pass in a promise
  // that resolves with a response object
  if(PaymentApp.isPaymentRequest(event.request) &&
  event.request.url == "http://adrianpay.com/paymentapps")
  {
    //Parse out the JSON data and get an instance of a PaymentRequest
    var paymentRequest = PaymentRequest.fromRequest(event.request);

    //Handle the payment request
    var cardData = paymentRequest.getMethodData("http://webpayments.org/payment-methods/card");
    if(cardData){
      //Return stored card number
      event.respondWith(
        Promise.resolve(new Response(
          {
            methodName : "http://webpayments.org/payment-methods/card",
            details: {
              cardNumber: "1234567890",
              expiryMonth: "12",
              expiryYear: "2018",
              cardSecurityCode: "123"
            }
          },
          {
            status : 200,
            headers : new Headers({"Content-Type" : "application/json"})
          }))
      );
    }
  }
});
