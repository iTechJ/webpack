export default function (labelText) {
  const header = document.createElement('header');
  const label = document.createElement('h1');
  label.setAttribute('class', 'text-center');
  label.innerHTML = labelText;
  header.appendChild(label);
  return header;
}

