const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('ao passar o argumento count como parâmetro, deve retornar a quantidade de elefantes', () => {
    const actual = handlerElephants('count');
    const expected = 4;
    expect(actual).toEqual(expected);
  });
  it('ao passar o argumento names deve retornar um array de nomes que possui o nome Jeffersons', () => {
    const actual = handlerElephants('names');
    const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    expect(actual).toEqual(expected);
  });
  it('ao passar o argumento averageAge deve retornar um número próximo a 10.5', () => {
    const actual = handlerElephants('averageAge');
    const expected = 10.5;
    expect(actual).toBeCloseTo(expected);
  });
  it('ao passar o argumento location deve retornar a localização dos elefantes dentro do Zoológico', () => {
    const actual = handlerElephants('location');
    const expected = 'NW';
    expect(actual).toEqual(expected);
  });
  it('ao passar o argumento popularity deve retornar a popularidade dos elefantes, equivalente a um número igual ou maior a 5', () => {
    const actual = handlerElephants('popularity');
    const expected = 5;
    expect(actual).toBeGreaterThanOrEqual(expected);
  });
  it('ao passar o argumento availability deve retornar um array de dias da semana que não contém Monday', () => {
    const actual = handlerElephants('availability');
    const expected = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];
    expect(actual).toEqual(expected);
  });
  it('Não passando argumentos a função deve retornar undefined', () => {
    // const actual = handlerElephants();
    // const expected = undefined;
    // expect(actual).toEqual(expected);
    expect(handlerElephants()).toBeUndefined();
  });
});
