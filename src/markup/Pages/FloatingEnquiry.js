import React, { useState, useEffect } from "react";

const FloatingEnquiryForm = () => {
  const schoolId = "HMa5CoEiDB";
  const enquiryFor = [
    "Daycare",
    "Toddlers(Playgroup)",
    "EY M1",
    "EY M2",
    "EY M3",

  ];
  const parents = ["Father", "Mother"];

  const [isVisible, setIsVisible] = useState(false);
  const [onSave, setOnSave] = useState(false);
  const [error, setError] = useState(undefined);
  const [responce, setResponce] = useState(undefined);
  const [enquiryForError, setEnquiryForError] = useState(undefined);
  const [relationError, setRelationError] = useState(undefined);

  // Show form after page loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const saveEnquiryTolilTriangle = (enqObj) => {
    fetch(
      "https://liltriangle.b4a.app/addEnquiry",
      {
        method: "POST",
        body: JSON.stringify({
          schoolId: schoolId,
          childName: enqObj.childName,
          relation: enqObj.relation,
          enquiryFor: enqObj.enquiryFor,
          enquirySource: "Website - Home Page",
          parentName: enqObj.parentName,
          phone: enqObj.phone,
          email: enqObj.email,
          notes: "",
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    ).then(
      (response) => {
        console.log(response);
        setOnSave(false);
        if (response.status === 200) {
          setResponce("SUCCESS");
          setError(undefined);
          setTimeout(() => {
            setResponce(undefined);
            setIsVisible(false);
          }, 2000);
          clearValues();
        } else {
          response.json().then((data) => {
            console.log(data);
            setError(data.error);
            setResponce(undefined);
          });
        }
      },
      (error) => {
        console.log("error" + error.message);
        setOnSave(false);
        setError("Something went wrong. Please try again.");
      }
    );
  };

  const clearValues = () => {
    document.getElementById("floatChildName").value = "";
    document.getElementById("floatRelation").value = "";
    document.getElementById("floatEnquiryFor").value = "";
    document.getElementById("floatName").value = "";
    document.getElementById("floatPhone").value = "";
    document.getElementById("floatEmail").value = "";
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  // Inject keyframes
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.textContent = `
      @keyframes slideDownFade {
        from {
          opacity: 0;
          transform: translate(-50%, -100%);
        }
        to {
          opacity: 1;
          transform: translate(-50%, 0);
        }
      }
      
      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      .floating-enquiry-overlay {
        animation: fadeIn 0.3s ease-out;
      }

      .floating-enquiry-modal {
        animation: slideDownFade 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
      }

      .floating-enquiry-input:focus,
      .floating-enquiry-select:focus {
        outline: none !important;
        border-color: #e91e63 !important;
        box-shadow: 0 0 0 3px rgba(233, 30, 99, 0.1) !important;
      }

      .floating-enquiry-submit:hover:not(:disabled) {
        transform: scale(1.05) !important;
        box-shadow: 0 8px 20px rgba(233, 30, 99, 0.4) !important;
      }

      .floating-enquiry-submit:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }

      .floating-enquiry-close:hover {
        background: rgba(0, 0, 0, 0.1) !important;
        transform: rotate(90deg) !important;
      }

      @media (max-width: 768px) {
        .floating-enquiry-modal {
          width: 90% !important;
          max-width: 500px !important;
        }
        .floating-enquiry-grid {
          grid-template-columns: 1fr !important;
        }
      }
    `;
    document.head.appendChild(styleSheet);
    return () => {
      if (document.head.contains(styleSheet)) {
        document.head.removeChild(styleSheet);
      }
    };
  }, []);

  if (!isVisible) return null;

  const styles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 99999,
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      paddingTop: '80px',
    },
    modal: {
      position: 'fixed',
      top: '80px',
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'white',
      borderRadius: '24px',
      padding: '0',
      width: '600px',
      maxWidth: '90%',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
      zIndex: 100000,
      // Updated: Baby Pink Border
      border: '3px solid #FF91A4',
    },
    closeButton: {
      position: 'absolute',
      top: '15px',
      right: '15px',
      background: 'transparent',
      border: 'none',
      fontSize: '28px',
      cursor: 'pointer',
      color: '#888',
      width: '40px',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      transition: 'all 0.3s ease',
      zIndex: 10,
      padding: 0,
    },
    header: {
      textAlign: 'center',
      padding: '35px 20px 25px',
      position: 'relative',
    },
    title: {
      fontSize: '32px',
      fontWeight: '700',
      // Updated: Baby Pink Text
      color: '#FF91A4',
      margin: 0,
      letterSpacing: '-0.5px',
    },
    form: {
      padding: '0 35px 35px',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '15px',
      marginBottom: '15px',
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
    },
    input: {
      width: '100%',
      padding: '14px 18px',
      border: '2px solid #e0e0e0',
      borderRadius: '12px',
      fontSize: '15px',
      fontFamily: 'inherit',
      transition: 'all 0.3s ease',
      boxSizing: 'border-box',
      backgroundColor: '#fff',
    },
    select: {
      width: '100%',
      padding: '14px 18px',
      border: '2px solid #e0e0e0',
      borderRadius: '12px',
      fontSize: '15px',
      fontFamily: 'inherit',
      transition: 'all 0.3s ease',
      boxSizing: 'border-box',
      cursor: 'pointer',
      appearance: 'none',
      // Updated: Arrow color changed to Baby Pink (%23FF91A4)
      backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 14 14'%3E%3Cpath fill='%23FF91A4' d='M7 10L2 5h10z'/%3E%3C/svg%3E\")",
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right 15px center',
      paddingRight: '45px',
      backgroundColor: '#fff',
      color: '#666',
    },
    submitButton: {
      width: '100%',
      padding: '16px',
      // Updated: Baby Pink Gradient
      background: 'linear-gradient(135deg, #FF91A4 0%, #FF748F 100%)',
      color: 'white',
      border: 'none',
      borderRadius: '50px',
      fontSize: '18px',
      fontWeight: '700',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      marginTop: '10px',
      // Updated: Baby Pink Shadow
      boxShadow: '0 4px 15px rgba(255, 145, 164, 0.3)',
      letterSpacing: '0.5px',
    },
    errorText: {
      color: '#dc3545',
      fontSize: '13px',
      marginTop: '5px',
      marginBottom: 0,
    },
    successText: {
      color: '#28a745',
      fontSize: '15px',
      fontWeight: '600',
      textAlign: 'center',
      marginBottom: '10px',
      padding: '10px',
      backgroundColor: '#d4edda',
      borderRadius: '8px',
    },
    savingText: {
      // Updated: Baby Pink Text
      color: '#FF91A4',
      fontSize: '15px',
      fontWeight: '600',
      textAlign: 'center',
      marginBottom: '10px',
    },
  };

  return (
    <>
      <div
        className="floating-enquiry-overlay"
        style={styles.overlay}
        onClick={handleClose}
      />

      <div
        className="floating-enquiry-modal"
        style={styles.modal}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="floating-enquiry-close"
          style={styles.closeButton}
          onClick={handleClose}
          aria-label="Close"
        >
          ✕
        </button>

        <div style={styles.header}>
          <h2 style={styles.title}>Enquiry Form</h2>
        </div>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            setEnquiryForError(false);
            setRelationError(false);

            const enquiryForValue = event.target.elements.floatEnquiryFor.value;
            const relationValue = event.target.elements.floatRelation.value;

            let hasError = false;

            if (!enquiryFor.includes(enquiryForValue)) {
              setEnquiryForError(true);
              hasError = true;
            }

            if (!parents.includes(relationValue)) {
              setRelationError(true);
              hasError = true;
            }

            if (!hasError) {
              setOnSave(true);
              let enqObj = {
                childName: event.target.elements.floatChildName.value,
                relation: relationValue,
                enquiryFor: enquiryForValue,
                parentName: event.target.elements.floatName.value,
                phone: event.target.elements.floatPhone.value,
                email: event.target.elements.floatEmail.value,
              };
              saveEnquiryTolilTriangle(enqObj);
            }
          }}
          style={styles.form}
        >
          <div className="floating-enquiry-grid" style={styles.grid}>
            <div style={styles.formGroup}>
              <input
                className="floating-enquiry-input"
                name="floatChildName"
                id="floatChildName"
                type="text"
                required
                style={styles.input}
                placeholder="Enter your child's name"
              />
            </div>

            <div style={styles.formGroup}>
              <select
                className="floating-enquiry-select"
                required
                style={styles.select}
                name="floatEnquiryFor"
                id="floatEnquiryFor"
                onChange={() => {
                  if (enquiryForError) setEnquiryForError(false);
                }}
              >
                <option value="" disabled selected>-- Enquiring for --</option>
                {enquiryFor.map((e, k) => (
                  <option key={k} value={e}>{e}</option>
                ))}
              </select>
              {enquiryForError && (
                <p style={styles.errorText}>Please select a program</p>
              )}
            </div>
          </div>

          <div className="floating-enquiry-grid" style={styles.grid}>
            <div style={styles.formGroup}>
              <select
                className="floating-enquiry-select"
                required
                style={styles.select}
                name="floatRelation"
                id="floatRelation"
                onChange={() => {
                  if (relationError) setRelationError(false);
                }}
              >
                <option value="" disabled selected>-- Select relation --</option>
                {parents.map((e, k) => (
                  <option key={k} value={e}>{e}</option>
                ))}
              </select>
              {relationError && (
                <p style={styles.errorText}>Please select relation</p>
              )}
            </div>

            <div style={styles.formGroup}>
              <input
                className="floating-enquiry-input"
                name="floatName"
                id="floatName"
                type="text"
                required
                style={styles.input}
                placeholder="Your Name"
              />
            </div>
          </div>

          <div className="floating-enquiry-grid" style={styles.grid}>
            <div style={styles.formGroup}>
              <input
                className="floating-enquiry-input"
                name="floatPhone"
                id="floatPhone"
                type="tel"
                required
                style={styles.input}
                placeholder="Phone Number"
              />
            </div>

            <div style={styles.formGroup}>
              <input
                className="floating-enquiry-input"
                name="floatEmail"
                id="floatEmail"
                type="email"
                style={styles.input}
                placeholder="Email Address"
              />
            </div>
          </div>

          {onSave && <p style={styles.savingText}>Submitting...</p>}
          {!onSave && error && <p style={styles.errorText}>{error}</p>}
          {!onSave && responce && (
            <p style={styles.successText}>
              ✓ {responce}! We'll contact you soon.
            </p>
          )}

          <button
            type="submit"
            disabled={onSave}
            className="floating-enquiry-submit"
            style={styles.submitButton}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default FloatingEnquiryForm;