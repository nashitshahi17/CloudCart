const MESSAGES = {

    AUTH: {

        LOGIN_SUCCESS: "Login successful",

        INVALID_CREDENTIALS: "Invalid email or password",

        TOKEN_MISSING: "Authentication token is missing",

        INVALID_TOKEN: "Invalid or expired token",

        ACCESS_DENIED: "Access denied"

    },
    CART: {

    FETCH_SUCCESS: "Cart fetched successfully",

    CLEAR_SUCCESS: "Cart cleared successfully"

    },

    USER: {

        REGISTER_SUCCESS: "User registered successfully",

        FETCH_SUCCESS: "User fetched successfully",

        UPDATE_SUCCESS: "User updated successfully",

        DELETE_SUCCESS: "User deleted successfully",

        PROFILE_FETCH_SUCCESS: "Profile fetched successfully",

        NOT_FOUND: "User not found",

        ALREADY_EXISTS: "User already exists"

    },

    PRODUCT: {

        CREATE_SUCCESS: "Product created successfully",

        UPDATE_SUCCESS: "Product updated successfully",

        DELETE_SUCCESS: "Product deleted successfully",

        FETCH_SUCCESS: "Product fetched successfully",

        NOT_FOUND: "Product not found"

    },

    ORDER: {

        CREATE_SUCCESS: "Order placed successfully",

        FETCH_ALL_SUCCESS: "Orders fetched successfully",

        UPDATE_SUCCESS: "Order updated successfully",

        DELETE_SUCCESS: "Order cancelled successfully",

        FETCH_SUCCESS: "Order fetched successfully",

        NOT_FOUND: "Order not found"

    },

    COMMON: {

        INTERNAL_SERVER_ERROR: "Internal server error",

        VALIDATION_ERROR: "Validation failed",

        BAD_REQUEST: "Bad request"

    }

};

module.exports = Object.freeze(MESSAGES);