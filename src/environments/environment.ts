// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,

  applicationUrl: '',
  supportEmail: 'support@somedomain.com',
  
  testUser: null,

  content_api: {
    url: 'http://content-api.dev',
    contextV3: '/content/v3',
    contextV4: '/content/v4',
    authenticationHeader: 'auth',
    headers: {}
  },
  data_api: {
    url: 'http://data-api.dev',
    context: '/students/v1',
    authenticationHeader: 'auth'
  },
  sync_api: {
    url: 'http://sync-api.dev',
    context: '/sync/v1',
    authenticationHeader: 'auth'
  }

};
