import '../css/styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import AppHeader from './components/app-header.js';
import AppContent from './components/app-content.js';
import {config} from './form-descriptor.js';

const behaviour = {
  onSubmit: handleCalculateButtonClick,
  onReset: initApplication
};

initApplication();

function handleCalculateButtonClick(resultWrapperId) {
  return () => {
    function calculateMonthlyPayment(principal, years, rate) {
      let monthlyRate = 1;
      if (rate) {
        monthlyRate = rate / 100 / 12;
      }
      let monthlyPayment = principal * monthlyRate / (1 - (Math.pow(1 / (1 + monthlyRate), years * 12)));
      return monthlyPayment;
    }

    const principal = document.getElementById('principal').value;
    const years = document.getElementById('years').value;
    const rate = document.getElementById('rate').value;
    const monthlyPayment = calculateMonthlyPayment(principal, years, rate);
    document.getElementById(resultWrapperId).innerHTML = monthlyPayment.toFixed(2);
  };
}

function initApplication() {
  const appContainer = document.getElementById('app-container');
  appContainer.innerHTML = '';
  if (appContainer) {
    appContainer.appendChild(AppHeader('Mortgage Calculator'));
    appContainer.appendChild(AppContent(config, behaviour));
  }
}

/*  This is a key for Hot module reloading */
if (module.hot) {
  module.hot.accept();
}
