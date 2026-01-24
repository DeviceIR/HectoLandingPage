import { useState } from "react";
import { submitContactForm } from "../../utils/contactFormHandler";
import { handleApiError } from "@/utils/errorHandler";
import {
  validatePhone,
  validateEmail,
  validateRequired,
} from "@/utils/formValidation";
import BranchCard from "./BranchCard";
import branches from "./branchesData";

const Contact = () => {
  const [formData, setFormData] = useState({
    phone: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [mapUrl, setMapUrl] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user types
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleLocationClick = (branch) => {
    setSelectedBranch(branch);
    if (branch?.lat && branch?.lng) {
      const addressTitle =
        branch.contactInfo?.[branch.contactInfo.length - 1]?.text ||
        branch.title;
      const encodedTitle = encodeURIComponent(addressTitle);
      const lat = Number(branch.lat);
      const lng = Number(branch.lng);
      const fallbackUrl = `https://neshan.org/maps/@${lat},${lng},18z?marker=${lat},${lng}&center=${lat},${lng}&markerTitle=${encodedTitle}&markerColor=red`;
      const url = branch.mapEmbedUrl || branch.mapLink || fallbackUrl;
      setMapUrl(url);
    } else {
      setMapUrl(null);
    }
  };

  const closeModal = () => {
    setSelectedBranch(null);
    setMapUrl(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    const phoneValidation = validatePhone(formData.phone);
    const emailValidation = validateEmail(formData.email);
    const messageValidation = validateRequired(formData.message, "پیام");

    const errors = {};
    if (!phoneValidation.isValid) errors.phone = phoneValidation.message;
    if (!emailValidation.isValid) errors.email = emailValidation.message;
    if (!messageValidation.isValid) errors.message = messageValidation.message;

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setFormErrors({});

    try {
      const result = await submitContactForm(formData);
      setSubmitStatus(result);

      if (result.success) {
        // Reset form on success
        setFormData({
          phone: "",
          email: "",
          message: "",
        });
        setFormErrors({});
      }
    } catch (error) {
      const errorResult = handleApiError(error, (errorInfo) => {
        setSubmitStatus({
          success: false,
          message:
            errorInfo.message || "خطا در ارسال پیام. لطفاً دوباره تلاش کنید.",
        });
      });
      setSubmitStatus(errorResult);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h3 className="contact-card-grid-title">راه های ارتباطی ما</h3>
        <div
          className="contact-layout"
          // style={{ display: "flex", flexDirection: "row", width: "1200px" }}
        >
          <div className="contact-card-grid">
            {branches.map((branch, index) => (
              <BranchCard
                key={index}
                branchData={branch}
                onLocationClick={handleLocationClick}
              />
            ))}
          </div>

          <div className="contact-form-shell">
            <div className="contact-form-card-wrapper">
              <div
                className="contact-form-card"
                style={{ borderTop: "none", boxShadow: "none" }}
                data-no-top-bar="true"
              >
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="contact-form-row">
                    <div className="contact-field">
                      <input
                        type="tel"
                        name="phone"
                        className={`form-control contact-input ${formErrors.phone ? "is-invalid" : ""}`}
                        placeholder="شماره تماس"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        aria-label="شماره تماس"
                        aria-invalid={!!formErrors.phone}
                        aria-describedby={
                          formErrors.phone ? "phone-error" : undefined
                        }
                      />
                      {formErrors.phone && (
                        <div
                          id="phone-error"
                          className="error-message"
                          role="alert"
                        >
                          {formErrors.phone}
                        </div>
                      )}
                    </div>
                    <div className="contact-field">
                      <input
                        type="email"
                        className={`form-control contact-input ${formErrors.email ? "is-invalid" : ""}`}
                        name="email"
                        placeholder="ایمیل"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        aria-label="ایمیل"
                        aria-invalid={!!formErrors.email}
                        aria-describedby={
                          formErrors.email ? "email-error" : undefined
                        }
                      />
                      {formErrors.email && (
                        <div
                          id="email-error"
                          className="error-message"
                          role="alert"
                        >
                          {formErrors.email}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="contact-field">
                    <textarea
                      className={`form-control contact-input contact-textarea ${formErrors.message ? "is-invalid" : ""}`}
                      style={{ height: "200px" }}
                      name="message"
                      rows="4"
                      placeholder="توضیحات"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      aria-label="پیام"
                      aria-invalid={!!formErrors.message}
                      aria-describedby={
                        formErrors.message ? "message-error" : undefined
                      }
                    ></textarea>
                    {formErrors.message && (
                      <div
                        id="message-error"
                        className="error-message"
                        role="alert"
                      >
                        {formErrors.message}
                      </div>
                    )}
                  </div>

                  {submitStatus && (
                    <div
                      className={`contact-status ${submitStatus.success ? "is-success" : "is-error"}`}
                    >
                      {submitStatus.message}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="contact-submit-btn"
                    disabled={isSubmitting}
                    aria-label="ارسال فرم تماس"
                    aria-busy={isSubmitting}
                  >
                    {isSubmitting ? "در حال ارسال..." : "ارسال"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {selectedBranch && (
        <div
          className="contact-location-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`آدرس ${selectedBranch.title}`}
        >
          <div className="contact-location-modal__content">
            <button
              className="contact-location-modal__close"
              onClick={closeModal}
              aria-label="بستن"
            >
              ×
            </button>
            <h4>{selectedBranch.title}</h4>
            <p className="contact-location-modal__address">
              {
                selectedBranch.contactInfo[
                  selectedBranch.contactInfo.length - 1
                ]?.text
              }
            </p>
            {mapUrl && (
              <div className="contact-location-modal__map">
                <iframe
                  title={`نقشه ${selectedBranch.title}`}
                  src={mapUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-label={`نمایش نقشه ${selectedBranch.title}`}
                />
              </div>
            )}
            {mapUrl && (
              <div className="contact-location-modal__meta">
                <div className="contact-location-modal__meta-row">
                  <span className="contact-location-modal__meta-label">
                    لینک نقشه:
                  </span>
                  <a href={mapUrl} target="_blank" rel="noreferrer">
                    {mapUrl}
                  </a>
                </div>
                <div className="contact-location-modal__meta-row">
                  <span className="contact-location-modal__meta-label">
                    مختصات:
                  </span>
                  <span>
                    {Number(selectedBranch.lat).toFixed(6)},{" "}
                    {Number(selectedBranch.lng).toFixed(6)}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
