import { createRoot } from 'react-dom/client'

function Car(props) {
  const {brand, model} = props;
  return (
    <h2>I love my {brand} {model}!</h2>
  );
}

createRoot(document.getElementById('root')).render(
  <Car brand="Ford" model="Mustang" color="red" year={1969} />
);