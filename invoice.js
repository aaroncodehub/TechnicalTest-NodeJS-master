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
        return null;
    };

    // getTotal should return the sum of (Cost * Quantity) for each line item
    getTotal() {
        return 0;
    };

    // mergeInvoices appends the items from the sourceInvoice to the current invoice
    mergeInvoices() {
        return null;
    }

    // Creates a deep clone of the current invoice (all fields and properties)
    clone() {
        return null;
    };
}

module.exports = Invoice;
