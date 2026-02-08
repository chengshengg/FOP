// Name: Kong Cheng Sheng
// Class: DIT/FT/1B/11
// Admin No: 2026044

/**
 * API Module - Handles all API calls to the backend
 * Reusable across all pages
 */

const API_URL = "http://localhost:8081";

/**
 * Fetch all payment methods
 * Returns: Map of payment methods with their slugs
 */
export async function getPaymentMethods() {
    try {
        const response = await fetch(`${API_URL}/paymentMethod`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const paymentData = await response.json();
        return new Map(paymentData);
    } catch (error) {
        console.error("Error fetching payment methods:", error.message);
        throw error;
    }
}

/**
 * Fetch all product categories
 * Returns: Map of product categories with their slugs
 */
export async function getProductCategories() {
    try {
        const response = await fetch(`${API_URL}/productCategory`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const categoryData = await response.json();
        return new Map(categoryData);
    } catch (error) {
        console.error("Error fetching product categories:", error.message);
        throw error;
    }
}

/**
 * Fetch first 5 retail transaction records
 * Returns: Array of transaction objects
 */
export async function getRetailData5() {
    try {
        const response = await fetch(`${API_URL}/retailData5`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching retail data:", error.message);
        throw error;
    }
}

/**
 * Fetch transactions by payment method
 * Parameters: paymentMethodSlug - the slug identifier for payment method
 * Returns: Array of transaction objects
 */
export async function getTransactionsByPaymentMethod(paymentMethodSlug) {
    try {
        const response = await fetch(`${API_URL}/byPaymentMethod/${paymentMethodSlug}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching transactions by payment method:", error.message);
        throw error;
    }
}

/**
 * Fetch transactions by product category
 * Parameters: productCategorySlug - the slug identifier for product category
 * Returns: Array of transaction objects
 */
export async function getTransactionsByCategory(productCategorySlug) {
    try {
        const response = await fetch(`${API_URL}/byProductCategory/${productCategorySlug}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching transactions by product category:", error.message);
        throw error;
    }
}

/**
 * Test server connection
 * Returns: Boolean indicating if server is reachable
 */
export async function testConnection() {
    try {
        const response = await fetch(API_URL);
        return response.ok;
    } catch (error) {
        console.error("Server connection failed:", error.message);
        return false;
    }
}