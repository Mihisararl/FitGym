export type ContactPayload = {
    name: string;
    email: string;
    message: string;
};

export const nameRules = {
    required: "Name is required",
    minLength: {
        value: 2,
        message: "Name must be at least 2 characters"
    }
};

export const emailRules = {
    required: "Email is required",
    pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Please enter a valid email"
    }
};

export const messageRules = {
    required: "Message is required",
    minLength: {
        value: 10,
        message: "Message must be at least 10 characters"
    }
};

export function validateContactPayload(payload: Partial<ContactPayload>): {
    isValid: boolean;
    message?: string;
} {
    if (!payload.name || payload.name.trim().length < 2) {
        return { isValid: false, message: "Name must be at least 2 characters" };
    }

    if (!payload.email || !emailRules.pattern.value.test(payload.email)) {
        return { isValid: false, message: "Invalid email format" };
    }

    if (!payload.message || payload.message.trim().length < 10) {
        return { isValid: false, message: "Message must be at least 10 characters" };
    }

    return { isValid: true };
}
