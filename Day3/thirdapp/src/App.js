import './Assets/cssfiles/nav.css'
import mhimages from './Assets/images/mh.jpg'
import pmhimages from './Assets/images/pmh.jpeg'
import tmhimages from './Assets/images/tmh.jpeg'
import bmhimages from './Assets/images/bmh.jpeg'
import pbimages from './Assets/images/pb.jpg'
import hpbimages from './Assets/images/hpb.jpeg'
import hrpbimages from './Assets/images/hrpb.jpeg'
import stimages from './Assets/images/st.jpg'
import hstimages from './Assets/images/hst.jpeg'
import hrstimages from './Assets/images/hrst.jpeg'
function App()
{
  return(
    <>
    <nav>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About </a></li>
  </nav>
  <div class="wrapper">
	<div class="card">
		<div class="poster"><img src={mhimages} alt="Money Heist"/></div>
		<div class="details">
			<h1>Money Heist</h1>
			<h2>2017 • PG • 1hr 38min</h2>
			<div class="rating">
				<i class="fas fa-star"></i>
				<i class="fas fa-star"></i>
				<i class="fas fa-star"></i>
				<i class="fas fa-star"></i>
				<i class="far fa-star"></i>
				<span>4.2/5</span>
			</div>
			<div class="tags">
				<span class="tag">Italian</span>
				<span class="tag">Drama</span>
				<span class="tag">Indie</span>
			</div>
			<p class="desc">
			When the national mint and a touring school group are held hostage by robbers.
			</p>
			<div class="cast">
				<h3>Cast</h3>
				<ul>
					<li><img src={pmhimages} alt="Marco Andrews" title="Marco Andrews"/></li>
					<li><img src={tmhimages} alt="Rebecca Floyd" title="Rebecca Floyd"/></li>
					<li><img src={bmhimages} alt="Antonio Herrera" title="Antonio Herrera"/></li>
				</ul>
			</div>
		</div>
	</div>
	<div class="card">
		<div class="poster"><img src={pbimages} alt="Location Unknown"/></div>
		<div class="details">
			<h1>Peaky Blinders </h1>
			<h2>2013 • PG • 24min</h2>
			<div class="rating">
				<i class="fas fa-star"></i>
				<i class="fas fa-star"></i>
				<i class="fas fa-star"></i>
				<i class="fas fa-star"></i>
				<i class="far fa-star"></i>
				<span>4/5</span>
			</div>
			<div class="tags">
				<span class="tag">Romance</span>
				<span class="tag">Comedy</span>
				<span class="tag">Short</span>
			</div>
			<p class="desc">
			Tommy Shelby, a dangerous man, leads the Peaky Blinders, a gang based in Birmingham.
			</p>
			<div class="cast">
				<h3>Cast</h3>
				<ul>
					<li><img src={hpbimages} alt="Angelina Whyte" title="Angelina Whyte"/></li>
					<li><img src={hrpbimages} alt="Ivan Benson" title="Ivan Benson"/></li>
				</ul>
			</div>
		</div>
	</div>
	<div class="card">
		<div class="poster"><img src={stimages} alt="Location Unknown"/></div>
		<div class="details">
			<h1>Stranger Things</h1>
			<h2>2016 • R • 1hr 41min</h2>
			<div class="rating">
				<i class="fas fa-star"></i>
				<i class="fas fa-star"></i>
				<i class="fas fa-star"></i>
				<i class="fas fa-star"></i>
				<i class="fas fa-star-half-alt"></i>
				<span>4.7/5</span>
			</div>
			<div class="tags">
				<span class="tag yellow">Teen</span>
				<span class="tag">Comedy</span>
				<span class="tag blue">Drama</span>
			</div>
			<p class="desc">
				In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits.
			</p>
			<div class="cast">
				<h3>Cast</h3>
				<ul>
					<li><img src={hstimages}  alt="Jessica Enduro" title="Jessica Enduro"/></li>
					<li><img src={hrstimages} alt="Charles Garcia" title="Charles Garcia"/></li>
				</ul>
			</div>
		</div>
	</div>
</div>
    </>
  );
}
export default App;
