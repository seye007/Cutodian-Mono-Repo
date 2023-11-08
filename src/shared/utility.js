import swal from 'sweetalert';

export const Utility = (() => {
  
  function validateInput() {
    const formElements = document.querySelectorAll('form input, form select');
    let isValid = true;

    for (const element of formElements) {
        const name = element.name;
        const value = element.value;
        const errorMessage = element.getAttribute('data-error') || `${name} is required.`;

        if (!value) {
            showAlert(errorMessage);
            isValid = false;
            break;
        } else if (name === 'Email' && !validateEmail(value)) {
            showAlert(errorMessage);
            isValid = false;
            break; // Fixed the typo here
        } else if (name === 'TelePhone' && !validPhoneNumber(value)) {
            showAlert(errorMessage);
            isValid = false;
            break;
        }
    }

    return isValid;
  }
  function showAlert(errorMessage) {
    swal(`${errorMessage}`, {
        icon: "warning",
    });
  }
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function validPhoneNumber(phoneNumber) {
    const numericPhoneNumber = phoneNumber.replace(/\D/g, '');
    return numericPhoneNumber.length === 11;
  }

  function pascalToWords(pascalString) {
    const result = pascalString.replace(/([a-z])([A-Z])/g, '$1 $2');
    return result.charAt(0).toUpperCase() + result.slice(1).toLowerCase();
  }

  return {
    validateInput: validateInput
  }
})();
