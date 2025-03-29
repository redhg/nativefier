import { icon } from './icon';

const ICON_PARAMS_PROVIDED = {
  packager: {
    icon: './icon.png',
    targetUrl: 'https://google.com',
    platform: 'mac',
  },
};
const ICON_PARAMS_NEEDS_INFER = {
  packager: {
    targetUrl: 'https://google.com',
    platform: 'mac',
  },
};

describe('when the icon parameter is passed', () => {
  test('it should return the icon parameter', async () => {
    await expect(icon(ICON_PARAMS_PROVIDED)).resolves.toBeUndefined();
  });
});

describe('when the icon parameter is not passed', () => {
  test('it should return the icon parameter', async () => {
    await expect(icon(ICON_PARAMS_NEEDS_INFER)).resolves.toBeUndefined();
  });
});
