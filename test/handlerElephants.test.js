const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('ao passar o argumento count como parâmetro, deve retornar a quantidade de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('ao passar o argumento names deve retornar um array de nomes que possui o nome Jeffersons', () => {
    const actual = handlerElephants('names');
    const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    expect(actual).toEqual(expected);
  });
  it('ao passar o argumento averageAge deve retornar um número próximo a 10.5', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  it('ao passar o argumento location deve retornar a localização dos elefantes dentro do Zoológico', () => {
    expect(handlerElephants('location')).toEqual('NW');
  });
  it('ao passar o argumento popularity deve retornar a popularidade dos elefantes, equivalente a um número igual ou maior a 5', () => {
    expect(handlerElephants('popularity')).toBeGreaterThanOrEqual(5);
  });
  it('ao passar o argumento availability deve retornar um array de dias da semana que não contém Monday', () => {
    const actual = handlerElephants('availability');
    const expected = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];
    expect(actual).toEqual(expected);
  });
  it('Não passando argumentos a função deve retornar undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('ao passar como argumento um objeto vazio ({}), deve retornar a string "Parâmetro inválido, é necessário uma string"', () => {
    expect(handlerElephants({})).toEqual('Parâmetro inválido, é necessário uma string');
  });
  it('ao passar como parâmetro uma string que não contempla uma funcionalidade deve retornar null', () => {
    expect(handlerElephants('gatinhos')).toBeNull();
  });
});
