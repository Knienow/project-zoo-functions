const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('sem parâmetros a função deve retornar um objeto com os dias da semana e seus respectivos horários de funcionamento', () => {
    const actual = getOpeningHours();
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(actual).toEqual(expected);
  });
  it('ao passar os argumentos Monday e 09:00-AM deve retornar a string "The zoo is closed".', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toEqual('The zoo is closed');
  });
  it('ao passar os argumentos os argumentos Tuesday e 09:00-AM deve retornar a string "The zoo is open".', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toEqual('The zoo is open');
  });
  it('ao passar os argumentos os argumentos Wednesday e 09:00-PM deve retornar a string "The zoo is closed".', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toEqual('The zoo is closed');
  });
  it('ao passar os argumentos Thu e 09:00-AM deve lançar uma exceção com a mensagem de erro', () => {
    expect(getOpeningHours('Thu', '09:00-AM')).toThrow('The day must be valid. Example: Monday');
  });
  it('ao passar os argumentos Friday e 09:00-ZM deve lançar uma exceção com a mensagem de erro', () => {
    expect(getOpeningHours('Friday', '09:00-ZM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('ao passar os argumentos Saturday e C9:00-AM deve lançar uma exceção com a mensagem de erro', () => {
    expect(getOpeningHours('Saturday', 'C9:00-AM')).toThrow('The hour should represent a number');
  });
  it('ao passar os argumentos Sunday e 09:c0-AM deve lançar uma exceção com a mensagem de erro', () => {
    expect(getOpeningHours('Sunday', '09:c0-AM')).toThrow('The minutes should represent a number');
  });
});
