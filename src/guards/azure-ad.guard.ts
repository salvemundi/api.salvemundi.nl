import { Injectable } from '@nestjs/common';
import { PassportStrategy, AuthGuard } from '@nestjs/passport';
import { BearerStrategy } from 'passport-azure-ad';

/**
 * Extracts ID token from header and validates it.
 */
@Injectable()
export class AzureADStrategy extends PassportStrategy(BearerStrategy, 'azure-ad') {
  constructor() {
    super({
      identityMetadata: `https://login.microsoftonline.com/${process.env.TENANT_ID}/v2.0/.well-known/openid-configuration`,
      clientID: process.env.CLIENT_APP_ID,
    });
  }

  async validate(data) {
    return data;
  }
}

export const AzureADGuard = AuthGuard('azure-ad');
