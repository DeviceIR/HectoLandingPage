/**
 * Form validation utilities
 * Provides reusable validation functions
 */

import { VALIDATION } from './constants.js';

/**
 * Validates phone number (Iranian format)
 * @param {string} phone - Phone number to validate
 * @returns {Object} Validation result with isValid and message
 */
export const validatePhone = (phone) => {
  if (!phone || phone.trim() === '') {
    return { isValid: false, message: 'شماره تماس الزامی است' };
  }
  
  if (!VALIDATION.PHONE_PATTERN.test(phone)) {
    return { isValid: false, message: 'فرمت شماره تماس صحیح نیست (09XXXXXXXXX)' };
  }
  
  return { isValid: true, message: '' };
};

/**
 * Validates email address
 * @param {string} email - Email to validate
 * @returns {Object} Validation result with isValid and message
 */
export const validateEmail = (email) => {
  if (!email || email.trim() === '') {
    return { isValid: false, message: 'ایمیل الزامی است' };
  }
  
  if (!VALIDATION.EMAIL_PATTERN.test(email)) {
    return { isValid: false, message: 'فرمت ایمیل صحیح نیست' };
  }
  
  return { isValid: true, message: '' };
};

/**
 * Validates password
 * @param {string} password - Password to validate
 * @returns {Object} Validation result with isValid and message
 */
export const validatePassword = (password) => {
  if (!password || password.trim() === '') {
    return { isValid: false, message: 'رمز عبور الزامی است' };
  }
  
  if (password.length < VALIDATION.MIN_PASSWORD_LENGTH) {
    return {
      isValid: false,
      message: `رمز عبور باید حداقل ${VALIDATION.MIN_PASSWORD_LENGTH} کاراکتر باشد`,
    };
  }
  
  if (password.length > VALIDATION.MAX_PASSWORD_LENGTH) {
    return {
      isValid: false,
      message: `رمز عبور نباید بیشتر از ${VALIDATION.MAX_PASSWORD_LENGTH} کاراکتر باشد`,
    };
  }
  
  return { isValid: true, message: '' };
};

/**
 * Validates required field
 * @param {any} value - Value to validate
 * @param {string} fieldName - Name of the field for error message
 * @returns {Object} Validation result with isValid and message
 */
export const validateRequired = (value, fieldName = 'فیلد') => {
  if (value === null || value === undefined || value === '' || 
      (Array.isArray(value) && value.length === 0)) {
    return { isValid: false, message: `${fieldName} الزامی است` };
  }
  
  return { isValid: true, message: '' };
};

/**
 * Validates minimum length
 * @param {string} value - Value to validate
 * @param {number} minLength - Minimum required length
 * @param {string} fieldName - Name of the field for error message
 * @returns {Object} Validation result with isValid and message
 */
export const validateMinLength = (value, minLength, fieldName = 'فیلد') => {
  if (!value || value.length < minLength) {
    return {
      isValid: false,
      message: `${fieldName} باید حداقل ${minLength} کاراکتر باشد`,
    };
  }
  
  return { isValid: true, message: '' };
};

/**
 * Validates maximum length
 * @param {string} value - Value to validate
 * @param {number} maxLength - Maximum allowed length
 * @param {string} fieldName - Name of the field for error message
 * @returns {Object} Validation result with isValid and message
 */
export const validateMaxLength = (value, maxLength, fieldName = 'فیلد') => {
  if (value && value.length > maxLength) {
    return {
      isValid: false,
      message: `${fieldName} نباید بیشتر از ${maxLength} کاراکتر باشد`,
    };
  }
  
  return { isValid: true, message: '' };
};

/**
 * Validates form object with validation rules
 * @param {Object} formData - Form data to validate
 * @param {Object} rules - Validation rules object
 * @returns {Object} Validation result with isValid and errors object
 */
export const validateForm = (formData, rules) => {
  const errors = {};
  let isValid = true;
  
  Object.keys(rules).forEach((field) => {
    const fieldRules = rules[field];
    const value = formData[field];
    
    for (const rule of fieldRules) {
      const result = rule(value, field);
      if (!result.isValid) {
        errors[field] = result.message;
        isValid = false;
        break; // Stop at first error for this field
      }
    }
  });
  
  return { isValid, errors };
};

export default {
  validatePhone,
  validateEmail,
  validatePassword,
  validateRequired,
  validateMinLength,
  validateMaxLength,
  validateForm,
};

