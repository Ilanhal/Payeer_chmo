import getTransplit from './getTreansplit'

describe('transplit', () => {
  test('transplit test', async () => {
    expect(await getTransplit('Главная страница')).toBe('glavnaya-stranitsa')
  })
})
