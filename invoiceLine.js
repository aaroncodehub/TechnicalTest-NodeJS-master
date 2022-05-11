class InvoiceLine {
    constructor(invoiceLineId, cost, quantity, description) {
        this.invoiceLineId = invoiceLineId;
        this.cost = cost;
        this.quantity = quantity;
        this.description = description;
    }
}

module.exports = InvoiceLine;
