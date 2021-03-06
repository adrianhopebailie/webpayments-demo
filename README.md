# Web Payments Demo
The code in this repository implements a demo of the proposed [Web Payments](https://www.w3.org/Payments/WG/) system. In the different subfolders you will find:
* A chrome browser extension which implements payment mediation. This extension works for Opera, Chrome and possibly other Chromium-based browsers.
* A simple [payment app](https://tommythorsen.github.io/webpayments-demo/payment-apps/tommypay/).
* A [demo webshop](https://tommythorsen.github.io/webpayments-demo/merchants/clothing/) which allows you to "purchase" items with web payments.

## Detailed Instructions
### 1. Installing the extension
The central component of this demo, is the extension which implements payment mediation in your browser. Since it is not uploaded to the Chrome Web Store, there are a few manual steps necessary to install it.

#### Opera
1. Install the extension by [clicking here](https://tommythorsen.github.io/webpayments-demo/files/mediator-extension.crx).
2. Opera will add the extension in disabled state, so we must go to `chrome://extensions` to enable it.
3. In `chrome://extensions` you will see the Web Payments Mediator extension in disabled state. Click "Install" to enable it.
4. Your extension pane should now look something like this:

![Screenshot of extensions pane](files/mediator-extension.png)

Note the new **$** icon next to the address bar. Clicking on this icon will display the list of installed payment apps. It is currently empty, so let's go to step 2 and install a payment app.


#### Chrome
1. Download the extension by [clicking here](https://tommythorsen.github.io/webpayments-demo/files/mediator-extension.crx). (Chrome will ask if you want to install it, but it will refuse to do so even if you click "Continue").
2. Open the extensions pane by entering `chrome://extensions` in the address field.
3. Open a file system window by selecting "Show in folder" for the downloaded extension.
3. Drag the extension file (mediator-extension.crx) you downloaded earlier from the file browser window and drop it onto the extensions pane. 

Note the new **$** icon next to the address bar. Clicking on this icon will display the list of installed payment apps. It is currently empty, so let's go to step 2 and install a payment app.


### 2. Installing a payment app
1. Navigate to the [payment app](https://tommythorsen.github.io/webpayments-demo/payment-apps/tommypay/) web page.
2. Click on the "install Payment App" button.
3. You should see an alert dialog telling you that the TommyPay payment app was installed.
4. Click on the **$** icon next to the address bar to verify that the payment app is now available for payments.

### 3. Buy something with Web Payments
Don't worry, you don't have to spend any real money to try this.

1. Navigate to the [demo webshop](https://tommythorsen.github.io/webpayments-demo/merchants/clothing/).
2. Click the "Buy" button for an item that you would like to buy.
3. This will pop up the payment app selector in a new window. We only have one payment app, so the choice is simple. Click "Pay" on the TommyPay payment app.
4. Now we are in the payment app. TommyPay is a very primitive app that just shows the raw json of the payment request. Press "Pay" to finalize the payment or "Cancel" if you have changed your mind about your purchase.
5. If you pressed "Pay" in step 4, you should now be on the receipt page. Congratulations on your purchase!
