import { convertToParamMap } from '@angular/router';
import { firstValueFrom, of } from 'rxjs';
import { getParamPage } from './get-param-page';

describe('getParamPage', () => {
  it('returns default pagination when query params are missing', async () => {
    const result = await firstValueFrom(of(convertToParamMap({})).pipe(getParamPage()));

    expect(result).toEqual({
      pageIndex: 1,
      pageSize: 5,
    });
  });

  it('maps query params to numeric pagination values', async () => {
    const result = await firstValueFrom(
      of(
        convertToParamMap({
          pageIndex: '3',
          pageSize: '25',
        }),
      ).pipe(getParamPage()),
    );

    expect(result).toEqual({
      pageIndex: 3,
      pageSize: 25,
    });
  });
});
