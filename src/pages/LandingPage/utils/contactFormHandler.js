/**
 * Contact Form Handler
 * Handles contact form submissions
 */

export const submitContactForm = async (formData) => {
  try {
    // Extract form data
    const { phone, email, message } = formData;

    // Basic validation
    if (!phone || !email || !message) {
      throw new Error('تمام فیلدها الزامی هستند');
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error('فرمت ایمیل معتبر نیست');
    }

    // Phone validation (basic - adjust based on your needs)
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    if (!phoneRegex.test(phone)) {
      throw new Error('فرمت شماره تماس معتبر نیست');
    }

    // Log the form data (in production, you would send this to your API)
    console.log('Contact Form Submission:', {
      phone,
      email,
      message,
      timestamp: new Date().toISOString(),
    });

    // In a real application, you would make an API call here:
    // const response = await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ phone, email, message }),
    // });
    // if (!response.ok) throw new Error('ارسال با خطا مواجه شد');
    // return await response.json();

    // For now, return success
    return {
      success: true,
      message: 'پیام شما با موفقیت ارسال شد. به زودی با شما تماس خواهیم گرفت.',
    };
  } catch (error) {
    return {
      success: false,
      message: error.message || 'خطا در ارسال پیام. لطفاً دوباره تلاش کنید.',
    };
  }
};

