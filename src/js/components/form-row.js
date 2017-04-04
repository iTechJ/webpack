export default function (rowDescription) {
  const row = document.createElement('div');
  row.setAttribute('class', 'form-group');
  const label = document.createElement('label');
  label.innerHTML = `${rowDescription.label} :`;
  const userInput = document.createElement('input');
  userInput.setAttribute('type', 'text');
  userInput.setAttribute('id', rowDescription.id);
  userInput.setAttribute('value', rowDescription.value);
  userInput.setAttribute('class', 'form-control');
  row.appendChild(label);
  row.appendChild(userInput);
  return row;
}
