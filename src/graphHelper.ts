import { Injectable } from "@nestjs/common";

const azure = require('@azure/identity');
const graph = require('@microsoft/microsoft-graph-client');
const authProviders = require('@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials');
require('isomorphic-fetch');

let _appClient = undefined;
let _clientSecretCredential = undefined;

/**
 * Graph helper class.
 */
@Injectable()
export default class GraphHelper {
    /**
     * Returns the application client.
     */
    public getAppClient() {
        this.createGraphInstance();
        return _appClient;
    }

    /**
     * Returns a authenticated graph instance which can be used to make requests to Azure.
     */
    private createGraphInstance() {
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
