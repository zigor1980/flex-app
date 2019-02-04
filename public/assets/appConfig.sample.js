// set your account sid here
var accountSid = 'AC...';

// your runtime domain
const serviceBaseUrl = 'http://localhost:8080';

var appConfig = {
  serviceBaseUrl: `${serviceBaseUrl}/`,
  sso: {
      accountSid,
      tokenizerUrl: `${serviceBaseUrl}/tokenizer`,
  },
  ytica: false,
  logLevel: 'debug',
  showSupervisorDesktopView: true,
}