# dapper

This is a code-sharing project generated along the lines of the example on [Native Script's website](https://docs.nativescript.org/angular/code-sharing/intro).

## Building

`yarn`

`yarn build`

## Running

This application can run in 3 distinct ways.

### Website

`yarn start`

### Mobile App

`tns preview --bundle` 

This command will give you instructions on how to view the app you're creating on your phone. Basically, you download a couple of NativeScript apps then scan the QR code to preview.

### Desktop App

`yarn start`

This starts the angular app on `localhost:4200`. The electron app needs this to be running, so you'll have to open a second terminal and run:

`electron .`

Alternatively, run ```yarn start:desktop``` to run both the web application and electron in parallel.
Run ```yarn start:desktop-mock``` to do the same, except using a mock server.