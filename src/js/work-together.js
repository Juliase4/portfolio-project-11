const api = 'https://portfolio-js.b.goit.study/api';
const button = document.getElementById('btn-submit');
const emailInput = document.getElementById('email');
const commentsInput = document.getElementById('form-text');
const modal = document.getElementById('modal');
const closeButton = document.querySelector('.close');

button.addEventListener('click', async event => {
  event.preventDefault();

  const requestData = {
    email: emailInput.value,
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
      openModal(responseData.title + '\n' + responseData.message);
      emailInput.value = '';
      commentsInput.value = '';
    } else {
      const errorMessage = await response.text();
      openModal('Error: ' + errorMessage);
    }
  } catch (error) {
    console.error('Error:', error);
    openModal(
      'An error occurred. Please check your internet connection and try again.'
    );
  }
});

function openModal(message) {
  document.getElementById('modal-message').textContent = message;
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

function handleInputOverflow(inputElement) {
  return () => {
    const isOverflowing = inputElement.scrollWidth > inputElement.clientWidth;
    if (isOverflowing) {
      // Добавляем многоточие в конце видимого текста
      inputElement.title = inputElement.value;
      inputElement.style.textOverflow = 'ellipsis';
    } else {
      // Убираем многоточие, если input не переполнен
      inputElement.title = '';
      inputElement.style.textOverflow = 'clip';
    }
  };
}

emailInput.addEventListener('input', handleInputOverflow(emailInput));
commentsInput.addEventListener('input', handleInputOverflow(commentsInput));
