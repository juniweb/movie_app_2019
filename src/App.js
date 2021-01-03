import PropTypes from "prop-types";

const foodLike = [
  { 'id':1, 'name': '김치',   'rating':5.0, 'image': 'https://cdn.pixabay.com/photo/2019/07/25/01/35/kimchi-4361465__340.jpg'},
  { 'id':2, 'name': '불고기', 'rating':4.9, 'image': 'https://cdn.pixabay.com/photo/2014/10/29/07/54/sprouts-507668__340.jpg'},
  { 'id':3, 'name': '라면',   'rating':4.2, 'image': 'https://media.istockphoto.com/photos/miso-ramen-noodles-with-egg-enoki-and-pak-choi-picture-id479542154?b=1&k=6&m=479542154&s=170667a&w=0&h=tZJhs3WO9FaBuOfaNTQwRpxZffQjXv77RzPpOGRDE9k='},
  { 'id':4, 'name': '김밥',   'rating':4.7, 'image': 'https://media.istockphoto.com/photos/korean-kimpab-rolls-with-vegetables-on-board-closeup-picture-id1264203474?b=1&k=6&m=1264203474&s=170667a&w=0&h=0u2tRzS9i7PMWV_mA2Nz-E9iIcEBdKeGqr9sezAIpTs='},
  { 'id':5, 'name': '떡볶이', 'rating':4.5, 'image': 'https://media.istockphoto.com/photos/rice-cake-korean-food-picture-id864009700?b=1&k=6&m=864009700&s=170667a&w=0&h=pBHsMdkoN0RRfTBLANKIi3oi-3Jyn5k6-7qHolvbR2k='}
]

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I Love {name}</h2>
      <h4>{rating} / 5.0</h4>
      <img src={picture} alt={name} />
    </div>
  )  
}

Food.propTypes = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired
}

function App() {
  return (
    <div>
      <h2>Hello React !!!</h2>
      {foodLike.map(item => <Food key={item.id} name={item.name} picture={item.image} rating={item.rating} />)};      
    </div>    
  );
}

export default App;
