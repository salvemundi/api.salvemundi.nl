import { Injectable } from '@nestjs/common';
require('isomorphic-fetch');
const azure = require('@azure/identity');
const graph = require('@microsoft/microsoft-graph-client');
const authProviders = require('@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials');
let _clientSecretCredential = undefined;

let _appClient = undefined;

@Injectable()
export class AzureService {
    public async getUsersAsync(): Promise<String> {
        this.ensureGraphForAppOnlyAuth();
        let result = _appClient?.api('/users')
          .select(['displayName', 'id', 'mail'])
          .top(25)
          .orderby('displayName')
          .get();
        console.log(result);
        return result;
    }

    ensureGraphForAppOnlyAuth() {
        const settings = {
            'clientId': process.env.CLIENT_APP_ID,
            'clientSecret': process.env.CLIENT_APP_SECRET,
            'tenantId': process.env.TENANT_ID,
            'authTenant': 'common',
            'graphUserScopes': [
              'user.read',
              'mailboxsettings.read',
              'mail.send',
              'calendars.readwrite',
              'openid',
              'profile',
              'offline_access'
            ]
        }
        // Ensure settings isn't null
        if (!settings) {
            throw new Error('Settings cannot be undefined');
        }

        if (!_clientSecretCredential) {
            _clientSecretCredential = new azure.ClientSecretCredential(
                settings.tenantId,
                settings.clientId,
                settings.clientSecret
            );
        }

        if (!_appClient) {
            const authProvider = new authProviders.TokenCredentialAuthenticationProvider(
            _clientSecretCredential, {
                scopes: [ 'https://graph.microsoft.com/.default' ]
            });

            _appClient = graph.Client.initWithMiddleware({
            authProvider: authProvider
            });
        }
    }
}
