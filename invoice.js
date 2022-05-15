const _ = require('lodash');
class Invoice {
    constructor(invoiceDate = new Date(), invoiceNumber = "", lineItems = []) {
        this.invoiceDate = invoiceDate;
        this.invoiceNumber = invoiceNumber;
        this.lineItems = lineItems;
    }

    // Adds a line to invoice
    addInvoiceLine(line) {
        this.lineItems.push(line);
    };

    // Removes a line from the invoice
    removeInvoiceLine(id) {
        const newLineItems = this.lineItems.filter(el => el.invoiceLineId !== id);
        this.lineItems = newLineItems
    };

    // getTotal should return the sum of (Cost * Quantity) for each line item
    getTotal() {
      let total = 0;
      for (let index = 0; index < this.lineItems.length; index++) {
          total += this.lineItems[index].cost * this.lineItems[index].quantity
      }
      return (Math.round(total * 100) / 100).toFixed(2);
    };

    // mergeInvoices appends the items from the sourceInvoice to the current invoice
    mergeInvoices(invoice) {
        this.lineItems =  [...this.lineItems, ... invoice.lineItems];
    }

    // Creates a deep clone of the current invoice (all fields and properties)
    clone(invoice) {
        return _.cloneDeep(invoice);
    };
}

module.exports = Invoice;
