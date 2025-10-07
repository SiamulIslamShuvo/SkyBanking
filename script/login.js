document
  .getElementById('login-btn')
  .addEventListener('click', function (event) {
    event.preventDefault();
    const acc = document.getElementById('acc-no').value;
    const pin = document.getElementById('pin-no').value;
    const convertedPin = parseInt(pin);
    if (acc.length === 13) {
      if (convertedPin === 1234) {
        window.location.href = 'Home.html';
      } else {
        alert('PIN No is invalid');
      }
    } else {
      alert('Account No is invalid');
    }
  });
