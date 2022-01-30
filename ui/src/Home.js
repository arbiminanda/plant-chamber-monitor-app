function Home(){
    return(
        <div>
            <h3 align="left"> This application consists of 3 menus, namely Dashboard, Data, and Photos. Each menu has the following features: </h3>
			<ul align="left"> 
				<h4> Dashboard: </h4> 
				<li> Present historical condition data of Smart Growth Chamber using Line Chart. </li> 
			</ul>
			<ul align="left"> 
				<h4> Data: </h4>  
				<li> Show all historical condition data of Smart Growth Chamber </li>
				<li> Add new chamber condition data manually </li>
				<li> Update and delete chamber condition data </li>
			</ul>
			<ul align="left"> 
				<h4> Photo: </h4>  
				<li> Show all historical photo data of Smart Growth Chamber </li>
				<li> Add new chamber photo manually </li>
				<li> Update and delete chamber photo data </li>
			</ul>
        </div>
    )
}
export default Home;