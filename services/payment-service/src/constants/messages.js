const MESSAGES = {

    PRODUCT: {

        CREATE_SUCCESS: "Product created successfully",

        FETCH_SUCCESS: "Product fetched successfully",

        FETCH_ALL_SUCCESS: "Products fetched successfully",

        UPDATE_SUCCESS: "Product updated successfully",

        DELETE_SUCCESS: "Product deleted successfully",

        NOT_FOUND: "Product not found"

    },

    AUTH: {

        TOKEN_MISSING: "Authentication token is missing",

        INVALID_TOKEN: "Invalid or expired token",

        ACCESS_DENIED: "Access denied"

    },

    VALIDATION: {

        INVALID_PRODUCT_DATA: "Invalid product data"

    },

    COMMON: {

        INTERNAL_SERVER_ERROR: "Internal server error"

    },

    PAYMENT: {

    CREATE_SUCCESS: "Payment created successfully",

    FETCH_SUCCESS: "Payment fetched successfully",

    UPDATE_SUCCESS: "Payment updated successfully",

    DELETE_SUCCESS: "Payment deleted successfully"

},

};

module.exports = Object.freeze(MESSAGES);