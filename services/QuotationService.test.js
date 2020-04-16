const QuotationService = require('./QuotationService')
const mockAnnonce = require("../mock/mockAnnonce.json")

test('Service QuotationService return a boolean',() => {
    return QuotationService(mockAnnonce).then((value) => expect(value).toBe(35000))
  });
 
  test('Service delays for 50ms',() => {
    jest.useFakeTimers();
    QuotationService(mockAnnonce)
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 50);
  });