import { createRoot } from 'react-dom/client'

function Car(props) {
  return (
    <h2>My car is a {props.carinfo[0]} {props.carinfo[1]}!</h2>
  );
}

const carInfo = ["Ford", "Mustang"];

createRoot(document.getElementById('root')).render(
  <Car carinfo={carInfo} />
);