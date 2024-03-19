const api = 'https://portfolio-js.b.goit.study/api';
const button = document.getElementById('btn-submit');
const emailInput = document.getElementById('email');
const commentsInput = document.getElementById('form-text');
const modal = document.getElementById('modal');
const closeButton = document.querySelector('.close');
const errorMessageElement = document.querySelector('.error-message');

button.addEventListener('click', async event => {
  event.preventDefault();

  const email = emailInput.value;
  const isValidEmail = validateEmail(email);

  if (!isValidEmail) {
    emailInput.classList.add('invalid-email');
    errorMessageElement.style.display = 'block';
    emailInput.focus();

    // Скрыть сообщение об ошибке через 3 секунды
    setTimeout(() => {
      errorMessageElement.style.display = 'none';
    }, 3000);
    return;
  }

  const requestData = {
    email: email,
    comment: commentsInput.value,
  };

  try {
    const response = await fetch(`${api}/requests`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    });

    if (response.ok) {
      const responseData = await response.json();
      openModal(responseData.title, responseData.message);
      emailInput.value = '';
      commentsInput.value = '';

      // Показываем и устанавливаем стили для сообщения "Success!"
      const successMessage = document.getElementById('successMessage');
      successMessage.textContent = 'Success!';
      successMessage.style.color = 'green';
      successMessage.style.display = 'block';

      // Устанавливаем зеленое подчеркивание для успешного отправления
      emailInput.classList.add('success-email');

      // Удаляем стиль "invalid" при успешной отправке
      emailInput.classList.remove('invalid-email');

      // Удаляем стили через 3 секунды
      setTimeout(() => {
        successMessage.style.display = 'none';
        emailInput.classList.remove('success-email');
        // Удаляем стиль "invalid" также
        emailInput.classList.remove('invalid-email');
      }, 3000);
    } else {
      const errorMessage = await response.text();
      openModal('Error', errorMessage);
    }
  } catch (error) {
    console.error('Error:', error);
    openModal(
      'Error',
      'An error occurred. Please check your internet connection and try again.'
    );
  }
});

function validateEmail(email) {
  // Простая проверка валидности адреса электронной почты
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function openModal(title, message) {
  const modalTitle = document.getElementById('modal-title');
  const modalMessage = document.getElementById('modal-message');

  modalTitle.textContent = title;
  modalMessage.textContent = message;

  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}

closeButton.addEventListener('click', closeModal);

window.addEventListener('click', event => {
  if (event.target == modal) {
    closeModal();
  }
});
