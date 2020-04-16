const BlacklistService = require('./BlacklistService')
const mockAnnonce = require("../mock/mockAnnonce.json")

test('Service Blacklist return a boolean',() => {
    return BlacklistService(mockAnnonce).then((value) => expect(value).toBe(true))
  });
 
  test('Service delays for 50ms',() => {
    jest.useFakeTimers();
    BlacklistService(mockAnnonce)
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 50);
  });