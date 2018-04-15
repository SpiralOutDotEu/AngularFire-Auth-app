#  AngularFire-Auth-app

[![Greenkeeper badge](https://badges.greenkeeper.io/SpiralOutDotEu/AngularFire-Auth-app.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/SpiralOutDotEu/AngularFire-Auth-app.svg?branch=master)](https://travis-ci.org/SpiralOutDotEu/AngularFire-Auth-app)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/4e2c5a1f4df748b2917a1d901bcc9000)](https://www.codacy.com/app/SpiralOutDotEu/AngularFire-Auth-app?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=SpiralOutDotEu/AngularFire-Auth-app&amp;utm_campaign=Badge_Grade)
[![Codacy Badge](https://api.codacy.com/project/badge/Coverage/4e2c5a1f4df748b2917a1d901bcc9000)](https://www.codacy.com/app/SpiralOutDotEu/AngularFire-Auth-app?utm_source=github.com&utm_medium=referral&utm_content=SpiralOutDotEu/AngularFire-Auth-app&utm_campaign=Badge_Coverage)
[![BCH compliance](https://bettercodehub.com/edge/badge/SpiralOutDotEu/AngularFire-Auth-app?branch=master)](https://bettercodehub.com/)
[![codebeat badge](https://codebeat.co/badges/724baf9f-874a-467b-bf84-e75236ed9068)](https://codebeat.co/projects/github-com-spiraloutdoteu-angularfire-auth-app-master)
[![Known Vulnerabilities](https://snyk.io/test/github/SpiralOutDotEu/AngularFire-Auth-app/badge.svg)](https://snyk.io/test/github/SpiralOutDotEu/AngularFire-Auth-app)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Gitter chat](https://badges.gitter.im/gitterHQ/gitter.png)](https://gitter.im/AngularFire-Auth-app/Lobby?utm_source=share-link&utm_medium=link&utm_campaign=share-link)
[![Code of Conduct](https://img.shields.io/badge/%E2%9D%A4-code%20of%20conduct-blue.svg?style=flat)](https://github.com/SpiralOutDotEu/AngularFire-Auth-app/blob/master/CODE_OF_CONDUCT.md)

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

### TravisCI - Codacy

* Enable your project to [integrate with TravisCI](https://github.com/marketplace/travis-ci)
* Enable your project with [Codacy](https://app.codacy.com/projects)
* Press on `setup coverage` in your project in Codacy and copy `project token`
* Go back to your TravisCI project and add the environment variable:
   * `CODACY_PROJECT_TOKEN` = `%Project_Token%` *(replacing %Project_Token% with your token from Codacy)*

## Firebase setup

The project is using two separate firebase projects. One for testing and one for production.

Settings for Firebase projects are identical with the difference that in production instance the `localhost` domain in authentication is removed. This strategy gives an extra protection against mistakes in development and intruders.
 
### Firebase Authentication settings
* Enable Google Sign-in provider. 
* Change `Public-facing name` from `general settings` into something meaningful.

### Firebase deploy
* Into `.firebaserc` replace the project name with your project.
* `npm i -g firebase-tools`
* cd into the root of your project and type `firebase login:ci`
* follow the link provided to sign-in with your Google account.
* return to the terminal and copy the token provided.
* go to your TravisCI project -> settings and add to environment variables `FIREBASE_TOKEN` = `%token%` *(replacing %token% with the one that you copied before)*



