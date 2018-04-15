#  AngularFire-Auth-app
[![Build Status](https://travis-ci.org/SpiralOutDotEu/AngularFire-Auth-app.svg?branch=master)](https://travis-ci.org/SpiralOutDotEu/AngularFire-Auth-app)

Testable Angular Firebase Authentication Boilerplate 

## Features

* Angular CLI Project.
* Utilizing Firebase Authentication.
* Full Unit Tests.
* Simple plain HTML, without decoration, so that you can easily extend it. 
* Firebase Authentication provided from [AuthService](https://github.com/SpiralOutDotEu/AngularFire-Auth-app/blob/master/src/app/core/auth.service.ts).
* [AuthService tests](https://github.com/SpiralOutDotEu/AngularFire-Auth-app/blob/master/src/app/core/auth.service.spec.ts) using Mock for AngularFireAuth.
* [AuthGuard](https://github.com/SpiralOutDotEu/AngularFire-Auth-app/blob/master/src/app/core/auth.guard.ts) for [protecting routes](https://github.com/SpiralOutDotEu/AngularFire-Auth-app/blob/master/src/app/core/core-routing.module.ts).
* AuthService provided as [singleton](https://github.com/SpiralOutDotEu/AngularFire-Auth-app/blob/master/src/app/app.module.ts) from separate [core module](https://github.com/SpiralOutDotEu/AngularFire-Auth-app/blob/master/src/app/core/core.module.ts).
* [Different nav bar](https://github.com/SpiralOutDotEu/AngularFire-Auth-app/blob/master/src/app/app.component.html) for Guest and Users.
* [TravisCI integration](https://github.com/SpiralOutDotEu/AngularFire-Auth-app/blob/master/.travis.yml) to run the karma tests.

## Usage

* Clone, download or fork this project.
* Create a [Firebase](https://console.firebase.google.com) project.
* Enable Google Authentication for your [Firebase](https://console.firebase.google.com) project:
   * Select the `Auth` tab.
   * Select the `Sign-In Method` tab.
   * Enable `Google` sign-in providers.
* Replace Firebase config, with your own project's config, in [environment.ts](https://github.com/SpiralOutDotEu/AngularFire-Auth-app/blob/master/src/environments/environment.ts)

