import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {AuthService} from 'aurelia-authentication';

@inject(Router, AuthService)
export class App {

  languages = [
    {code: 'nl', locale: 'nl-NL', flag: 'nl'},
    {code: 'en', locale: 'en-US', flag: 'us'},
  ];

  constructor(router, authService) {
    let payload        = authService.getTokenPayload();

    this.router        = router;
    this.username      = payload ? payload.username : null;
    this.authenticated = authService.isAuthenticated();
  }

  setLanguage(language) {
    localStorage.setItem('language', language.code);

    window.top.location.reload();
  }
}
