import react from 'react';
import Potato from './Potato';

function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} />
    </div>
  );
}

const foodLike = [
  {
    name: 'Kimchi',
    image: 'https://dimg.donga.com/wps/NEWS/IMAGE/2021/03/12/105850095.2.jpg', },
  {
    name: 'Jeyuk',
    image: 'https://recipe1.ezmember.co.kr/cache/recipe/2015/05/27/38013d1dfd8fa46a871b9cda074b26341.jpg',},
];

function App() {
  return (
    <div>
      {foodLike.map(dish => (<Food name={dish.name} picture={dish.image} />))}
    </div> 
  );
}

export default App;
