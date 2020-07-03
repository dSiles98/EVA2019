// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCMMgeUQqcqz2RtcMcWMBGaJr_Jd9fHHXI",
    authDomain: "eva2019-745f2.firebaseapp.com",
    databaseURL: "https://eva2019-745f2.firebaseio.com",
    projectId: "eva2019-745f2",
    storageBucket: "eva2019-745f2.appspot.com",
    messagingSenderId: "67830987787",
    appId: "1:67830987787:web:edbee9e7cc48b79a"
  },
  dialogflow: {
    angularBot: 'ca627bc56c7a4c848935428f81712edc'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
