const Invoice = require("../invoice.js");

describe("Invoice", () => {
  const invoice = new Invoice();
  const addInvoiceLineSpy = jest.spyOn(invoice, "addInvoiceLine");
  const removeInvoiceLineSpy = jest.spyOn(invoice, "removeInvoiceLine");
  const getTotalSpy = jest.spyOn(invoice, "getTotal");
  const mergeInvoicesSpy = jest.spyOn(invoice, "mergeInvoices");
  const cloneSpy = jest.spyOn(invoice, "clone");

  const addLine = jest.fn(() => ({
    invoiceLineId: 1,
    cost: 6.99,
    quantity: 1,
    description: "Apple",
  }));
  test("invoice is an instance of Invoice", () => {
    expect(invoice).toBeInstanceOf(Invoice);
  });
  describe(".addInvoiceLine", () => {
    test("defines a function", () => {
      expect(typeof invoice.addInvoiceLine).toBe("function");
    });
    test("add a new invoice line when called", () => {
      const newInvoiceLine = invoice.addInvoiceLine(addLine());
      expect(newInvoiceLine).toBeUndefined();
      expect(addInvoiceLineSpy).toHaveBeenCalledWith(addLine());
      addInvoiceLineSpy.mockClear();
    });
  });
  describe(".removeInvoiceLine", () => {
    test("defines a function", () => {
      expect(typeof invoice.removeInvoiceLine).toBe("function");
    });
    test("remove a new invoice line when called", () => {
      const removeLine = invoice.removeInvoiceLine(1);
      expect(removeLine).toBeUndefined();
      expect(invoice.lineItems.length).toBe(0);
      expect(removeInvoiceLineSpy).toHaveBeenCalledWith(1);
      removeInvoiceLineSpy.mockClear();
    });
  });
  describe(".getTotal", () => {
    test("defines a function", () => {
      expect(typeof invoice.removeInvoiceLine).toBe("function");
    });
    test("returns total amount ", () => {
      invoice.addInvoiceLine(addLine());
      const total = invoice.getTotal();
      expect(parseFloat(total)).toBe(6.99);
      expect(getTotalSpy).toHaveBeenCalledTimes(1);
      getTotalSpy.mockClear();
    });
  });
  describe(".mergeInvoices", () => {
    test("defines a function", () => {
      expect(typeof invoice.mergeInvoices).toBe("function");
    });
    test("appends the items from the source invoice to current invoice", () => {
      const sourceInvoice = new Invoice();
      sourceInvoice.addInvoiceLine(addLine());
      expect(invoice.mergeInvoices(sourceInvoice)).toBeUndefined();
      expect(mergeInvoicesSpy).toHaveBeenCalledTimes(1);
      expect(mergeInvoicesSpy).toHaveBeenCalledWith(sourceInvoice);
      expect(invoice.lineItems.length).toBe(2);
      mergeInvoicesSpy.mockClear();
    });
  });
  describe('.clone', () => { 
      test('defines a function', () => { 
          expect(typeof invoice.clone).toBe('function')
       })
       test('deep clone the current invoice', () => { 
           const clonedInvoice = invoice.clone(invoice)
           expect(cloneSpy).toHaveBeenCalledTimes(1)
           expect(cloneSpy).toHaveBeenCalledWith(invoice)
           expect(clonedInvoice).toEqual(invoice)
        })
   })
});
