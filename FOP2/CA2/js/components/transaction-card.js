// Name: Kong Cheng Sheng
// Class: DIT/FT/1B/11
// Admin No: 2026044

/**
 * TransactionCard - Custom Web Component
 * Displays a single transaction record with professional styling using Shadow DOM
 * 
 * Usage:
 * <transaction-card 
 *   customer-id="12345"
 *   price="99.99"
 *   payment-method="Credit Card"
 *   total-amount="109.99"
 *   product-category="Electronics"
 *   index="1">
 * </transaction-card>
 * 
 * Attributes:
 * - customer-id: Customer identification number (required)
 * - price: Item price before tax/fees (required)
 * - payment-method: Payment method used (required)
 * - total-amount: Total transaction amount (required)
 * - product-category: Product category (optional)
 * - index: Display rank/position number (optional)
 */
class TransactionCard extends HTMLElement {
    /**
     * Constructor - Initialize component and attach Shadow DOM
     * Shadow DOM provides style encapsulation
     */
    constructor() {
        super();
        // Attach shadow root in open mode for accessibility
        this.attachShadow({ mode: 'open' });
    }

    /**
     * Lifecycle callback - Called when element is added to DOM
     * Triggers initial render
     */
    connectedCallback() {
        this.render();
    }

    /**
     * Define which attributes to observe for changes
     * When these attributes change, attributeChangedCallback is triggered
     */
    static get observedAttributes() {
        return ['customer-id', 'price', 'payment-method', 'total-amount', 'product-category', 'index'];
    }

    /**
     * Lifecycle callback - Called when observed attribute changes
     * Re-renders component when any watched attribute is modified
     * @param {string} name - Name of changed attribute
     * @param {string} oldValue - Previous attribute value
     * @param {string} newValue - New attribute value
     */
    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this.render();
        }
    }

    // Getter methods for component attributes with fallback defaults

    /**
     * Get customer ID attribute value
     * @returns {string} Customer ID or 'N/A' if not set
     */
    get customerId() {
        return this.getAttribute('customer-id') || 'N/A';
    }

    /**
     * Get price attribute value
     * @returns {string} Price or '0.00' if not set
     */
    get price() {
        return this.getAttribute('price') || '0.00';
    }

    /**
     * Get payment method attribute value
     * @returns {string} Payment method or 'N/A' if not set
     */
    get paymentMethod() {
        return this.getAttribute('payment-method') || 'N/A';
    }

    /**
     * Get total amount attribute value
     * @returns {string} Total amount or '0.00' if not set
     */
    get totalAmount() {
        return this.getAttribute('total-amount') || '0.00';
    }

    /**
     * Get product category attribute value
     * @returns {string} Product category or empty string if not set
     */
    get productCategory() {
        return this.getAttribute('product-category') || '';
    }

    /**
     * Get index attribute value
     * @returns {string} Index number or empty string if not set
     */
    get index() {
        return this.getAttribute('index') || '';
    }

    /**
     * Render the component HTML and styles into Shadow DOM
     * Creates the card layout with gradient and hover effects
     */
    render() {
        const template = `
            <style>
                /* Component container styling */
                :host {
                    display: block;
                    margin-bottom: 16px;
                }

                /* Main card container with shadow and border */
                .card {
                    background: white;
                    border-radius: 8px;
                    padding: 24px;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);
                    border: 1px solid #e2e8f0;
                    transition: all 0.3s ease;
                    position: relative;
                }

                /* Teal gradient accent bar on left edge */
                .card::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 0;
                    bottom: 0;
                    width: 4px;
                    background: linear-gradient(180deg, #0d9488 0%, #14b8a6 100%);
                    border-radius: 8px 0 0 8px;
                }

                /* Card hover effect - slide right and enhance shadow */
                .card:hover {
                    transform: translateX(4px);
                    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
                    border-color: #0d9488;
                }

                /* Header section containing index badge and customer ID */
                .card-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 20px;
                    padding-bottom: 16px;
                    border-bottom: 1px solid #e2e8f0;
                }

                /* Blue gradient badge showing transaction rank/index */
                .index-badge {
                    background: linear-gradient(135deg, #1a365d 0%, #1e40af 100%);
                    color: white;
                    padding: 6px 14px;
                    border-radius: 20px;
                    font-size: 14px;
                    font-weight: 600;
                }

                /* Customer ID display section */
                .customer-id-section {
                    display: flex;
                    flex-direction: column;
                }

                /* Customer ID label styling */
                .customer-label {
                    font-size: 12px;
                    color: #64748b;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    font-weight: 500;
                    margin-bottom: 4px;
                }

                /* Customer ID value styling */
                .customer-value {
                    font-size: 18px;
                    color: #1a365d;
                    font-weight: 600;
                }

                /* Responsive grid layout for transaction details */
                .card-body {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                    gap: 20px;
                }

                /* Individual field container */
                .field {
                    display: flex;
                    flex-direction: column;
                }

                /* Field label styling - uppercase with letter spacing */
                .field-label {
                    font-size: 11px;
                    color: #64748b;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    font-weight: 500;
                    margin-bottom: 6px;
                }

                /* Field value styling */
                .field-value {
                    font-size: 16px;
                    color: #1e293b;
                    font-weight: 500;
                }

                /* Payment method badge with teal color scheme */
                .payment-method {
                    background: #f1f5f9;
                    color: #0d9488;
                    padding: 6px 12px;
                    border-radius: 6px;
                    display: inline-block;
                    font-weight: 600;
                    font-size: 14px;
                    border: 1px solid #e2e8f0;
                }

                /* Total amount - larger and orange for emphasis */
                .total-amount {
                    font-size: 20px;
                    font-weight: 700;
                    color: #d97706;
                }

                /* Product category badge with blue color scheme */
                .category-badge {
                    background: #eff6ff;
                    color: #1e40af;
                    padding: 4px 10px;
                    border-radius: 4px;
                    font-size: 13px;
                    font-weight: 500;
                    display: inline-block;
                }

                /* Mobile responsive layout - stack fields vertically */
                @media (max-width: 768px) {
                    .card-body {
                        grid-template-columns: 1fr;
                    }
                    
                    .card-header {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 12px;
                    }
                }
            </style>

            <div class="card">
                <!-- Card Header: Index badge and Customer ID -->
                <div class="card-header">
                    ${this.index ? `<span class="index-badge">#${this.index}</span>` : ''}
                    <div class="customer-id-section">
                        <span class="customer-label">Customer ID</span>
                        <span class="customer-value">${this.customerId}</span>
                    </div>
                </div>

                <!-- Card Body: Transaction details in responsive grid -->
                <div class="card-body">
                    <!-- Price field -->
                    <div class="field">
                        <span class="field-label">Price</span>
                        <span class="field-value">$${parseFloat(this.price).toFixed(2)}</span>
                    </div>

                    <!-- Payment method field with badge styling -->
                    <div class="field">
                        <span class="field-label">Payment Method</span>
                        <span class="field-value">
                            <span class="payment-method">${this.paymentMethod}</span>
                        </span>
                    </div>

                    <!-- Product category field (conditionally rendered) -->
                    ${this.productCategory ? `
                        <div class="field">
                            <span class="field-label">Category</span>
                            <span class="field-value">
                                <span class="category-badge">${this.productCategory}</span>
                            </span>
                        </div>
                    ` : ''}

                    <!-- Total amount field with emphasis styling -->
                    <div class="field">
                        <span class="field-label">Total Amount</span>
                        <span class="field-value total-amount">$${parseFloat(this.totalAmount).toFixed(2)}</span>
                    </div>
                </div>
            </div>
        `;

        // Inject template into Shadow DOM
        this.shadowRoot.innerHTML = template;
    }
}

// Register custom element with browser
customElements.define('transaction-card', TransactionCard);