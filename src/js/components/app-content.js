import FormRow from './form-row.js';
import Button from './app-button.js';

function buildButtonGroup(formBehaviour) {
  const buttonRow = document.createElement('div');
  buttonRow.setAttribute('class', 'row');
  const buttonRowCell = document.createElement('div');
  buttonRowCell.setAttribute('class', 'col-md-12');
  buttonRow.appendChild(buttonRowCell);
  buttonRowCell.appendChild(Button('resetBtn', 'Reset', 'btn btn-default', formBehaviour.onReset));
  buttonRowCell.appendChild(Button('calcBtn', 'Calculate', 'btn btn-primary pull-right', formBehaviour.onSubmit('monthlyPayment')));
  return buttonRow;
}

function buildForm(formDescription, formBehaviour) {
  const contentRow = document.createElement('div');
  contentRow.setAttribute('class', 'row');

  const contentCell = document.createElement('div');
  contentCell.setAttribute('class', 'col-md-10 col-md-offset-1');
  contentRow.appendChild(contentCell);

  const form = document.createElement('div');
  contentCell.appendChild(form);

  formDescription.items.forEach((item) => {
    form.appendChild(FormRow(item));
  });

  form.appendChild(buildButtonGroup(formBehaviour));

  form.appendChild(buildResultMessage());
  return contentRow;
}

function buildResultMessage() {
  const resultRow = document.createElement('div');
  resultRow.setAttribute('class', 'row');

  const resultCell = document.createElement('div');
  resultCell.setAttribute('class', 'col-md-12');
  resultRow.appendChild(resultCell);

  const resultLabelWrapper = document.createElement('h2');
  resultLabelWrapper.innerHTML = 'Monthly Payment:';
  resultCell.appendChild(resultLabelWrapper);

  const resultLabel = document.createElement('span');
  resultLabel.setAttribute('id', 'monthlyPayment');
  resultLabel.setAttribute('class', 'currency');
  resultLabelWrapper.appendChild(resultLabel);
  return resultRow;
}

export default function (formDescription, formBehaviour) {
  const content = document.createElement('div');
  content.setAttribute('class', 'content container');
  content.appendChild(buildForm(formDescription, formBehaviour));
  return content;
}
