import './Assets/cssfiles/lgn.css'
import logimimages from'./Assets/images/logim.jpg'
function App() 
{
  return (
    <>
    <div class="wrap">
		<div class="avatar">
      <img src={logimimages}/>
		</div>
		<input type="text" placeholder="username" required/>
		<div class="bar">
			<i></i>
		</div>
		<input type="password" placeholder="password" required/>
		<a href="" class="forgot_link">forgot ?</a>
		<button>login</button>
</div>
  </>
  );
}

export default App;
