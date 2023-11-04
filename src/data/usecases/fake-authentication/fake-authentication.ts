import { HttpResponse, HttpStatusCode } from '@/data/protocols/http';
import { Authentication, AuthenticationParams } from '@/domain/repositories';
import { InvalidCredentialsError, UnexpectedError } from '@/domain/errors';
import { AccountModel } from '@/domain/models';
import fakeAccounts from './fake-accounts.json';

export class FakeAuthentication implements Authentication {
  async execute(params: AuthenticationParams): Promise<{ data: AccountModel }> {
    var httpResponse: HttpResponse = {
      statusCode: 500,
      body: undefined,
    };

    for (let i = 0; i < fakeAccounts.length; i++) {
      const account = fakeAccounts[i];
      const body: { data: AccountModel } = {
        data: { email: account.email, city: account.city, age: account.age, name: account.name },
      };

      if (account.email === params.email && account.password === params.password) {
        httpResponse = { statusCode: 200, body };
        break;
      } else {
        httpResponse = { statusCode: 401, body: undefined };
      }
    }

    const response = httpResponse.body as { data: AccountModel };

    switch (httpResponse.statusCode) {
      case HttpStatusCode.OK:
        return response;
      case HttpStatusCode.UNAUTHORIZED:
        throw new InvalidCredentialsError();
      default:
        throw new UnexpectedError();
    }
  }
}
