# dapper

This is a code-sharing project generated along the lines of the example on [Native Script's website](https://docs.nativescript.org/angular/code-sharing/intro).

## Building

`npm install`

`npm run build`

## Running

This application can run in 3 distinct ways.

### Website

`npm run start`

### Mobile App

`tns preview --bundle` 

This command will give you instructions on how to view the app you're creating on your phone. Basically, you download a couple of NativeScript apps then scan the QR code to preview.

### Desktop App

`npm run start`

This starts the angular app on `localhost:4200`. The electon app needs this to be running, so you'll have to open a second terminal and run:

`electron .`