const conversionRates = {
  '$': 0.28, // Conversion rate from NIS to USD
  JOD: 0.2   // Conversion rate from NIS to JOD
};

function convertCurrency() {
  var amount = document.querySelector('.amount').value;
  var currency = document.querySelector('.currency').value;
  var conversion = conversionRates[currency];
  var result = amount * conversion;
  if (!amount) {
      document.querySelector('.result-text').innerText = 'Please enter an amount.';
      return;
  }
  document.querySelector('.result-text').innerText = `${amount} NIS = ${result} ${currency}`;
}

document.querySelector('.convert-button').addEventListener('click', convertCurrency);
