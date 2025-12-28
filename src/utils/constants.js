/**
 * Application-wide constants
 * Centralizes hardcoded values for easier maintenance
 */

// API Configuration
export const API_CONFIG = {
  TIMEOUT: 30000,
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 1000,
};

// Pagination
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 10,
  PAGE_SIZE_OPTIONS: [10, 25, 50, 100],
  MAX_PAGE_SIZE: 100,
};

// Date Formats
export const DATE_FORMATS = {
  DISPLAY: 'YYYY/MM/DD',
  API: 'YYYY-MM-DD',
  TIME: 'HH:mm',
  DATETIME: 'YYYY/MM/DD HH:mm',
};

// Validation
export const VALIDATION = {
  PHONE_PATTERN: /^09\d{9}$/,
  EMAIL_PATTERN: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  MIN_PASSWORD_LENGTH: 8,
  MAX_PASSWORD_LENGTH: 128,
};

// Local Storage Keys
export const STORAGE_KEYS = {
  ACCESS_TOKEN: 'access_token',
  REFRESH_TOKEN: 'refresh_token',
  USER: 'user',
  WORKSPACE_ID: 'workspace_id',
  THEME: 'theme',
  LANGUAGE: 'language',
};

// Task Status
export const TASK_STATUS = {
  TODO: 'todo',
  DOING: 'doing',
  DONE: 'done',
  BLOCKED: 'blocked',
};

// Course Status
export const COURSE_STATUS = {
  DRAFT: 'draft',
  OPEN: 'open',
  UPCOMING: 'upcoming',
  COMPLETED: 'completed',
  CLOSED: 'close',
};

// User Roles
export const USER_ROLES = {
  OWNER: 'owner',
  ADMIN: 'admin',
  MEMBER: 'member',
  VIEWER: 'viewer',
};

// Breakpoints (matching Tailwind defaults)
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536,
};

// Animation Durations (ms)
export const ANIMATION = {
  FAST: 150,
  NORMAL: 300,
  SLOW: 500,
};

// Debounce/Throttle Delays (ms)
export const DELAYS = {
  SEARCH_DEBOUNCE: 300,
  RESIZE_THROTTLE: 150,
  SCROLL_THROTTLE: 100,
};

export default {
  API_CONFIG,
  PAGINATION,
  DATE_FORMATS,
  VALIDATION,
  STORAGE_KEYS,
  TASK_STATUS,
  COURSE_STATUS,
  USER_ROLES,
  BREAKPOINTS,
  ANIMATION,
  DELAYS,
};

