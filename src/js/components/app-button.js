export default function (id, label, className, onClick) {
  const formButton = document.createElement('button');
  formButton.setAttribute('id', id);
  formButton.addEventListener('click', onClick);
  console.log('We are here - going to re-render app button4');
  formButton.setAttribute('class', className);
  formButton.innerHTML = label;
  return formButton;
}
