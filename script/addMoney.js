document.getElementById('add-money').addEventListener('click', function (e) {
  e.preventDefault;
  const amount = document.getElementById('amount').value;
  const convertedAmount = parseFloat(amount);
  const pin = document.getElementById('pin-no').value;
  const convertedPin = parseInt(pin);
  const mainBalance = document.getElementById('mainBalance').innerText;
  const convertedMainBalance = parseFloat(mainBalance);

  if (convertedPin === 1234) {
    const sum = convertedAmount + convertedMainBalance;
    document.getElementById('mainBalance').innerText = sum;
    console.log(sum);
  } else {
    console.log('wrong pin');
  }
});
