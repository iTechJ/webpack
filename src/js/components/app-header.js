import CalculatorImageSrc from '../../images/calculator.png'; // You can check, that CalculatorImageSrc  here is actually data-uri (with url-loader)

export default function (labelText) {
  const header = document.createElement('header');


  const label = document.createElement('h1');
  label.setAttribute('class', 'text-center');
  label.innerHTML = labelText;
  header.appendChild(label);

  const image = document.createElement('img');
  image.setAttribute('alt', 'Calculator image');
  image.setAttribute('src', CalculatorImageSrc);
  image.setAttribute('class', 'calculator-image-wrapper');
  label.appendChild(image);
  return header;
}

