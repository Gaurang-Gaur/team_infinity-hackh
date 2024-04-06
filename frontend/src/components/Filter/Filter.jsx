import './Filter.css';

const Filter = () => {
	return (
		<div className="filter">
			<h1>Filter Products</h1>
			<input
				type="text"
				placeholder="Search By Name"
			/>
			<div className="filterTags">
				<legend>Tags</legend>
				<input
					type="text"
					placeholder="Filter By Tags"
				/>
			</div>
			<div className="filterLocations">
				<legend>Location</legend>
				<input
					type="text"
					placeholder="Filter By Location"
				/>
			</div>
			<div className="filterCategories">
				<legend>Categories</legend>
				<select value="category" onChange={()=>{}}>
					<option value="All">All</option>
					<option value="Category 1">Category 1</option>
					<option value="Category 2">Category 2</option>
					<option value="Category 3">Category 3</option>
				</select>
			</div>

			<div className="filterRadio">
				<label htmlFor="text-filter">
					<input
						type="radio"
						id="text-filter"
						name="filter-type"
						value="text"
						onChange={()=>{}}
					/>
					Available
				</label>
				<label htmlFor="category-filter">
					<input
						type="radio"
						id="category-filter"
						name="filter-type"
						value="category"
						onChange={()=>{}}
					/>
					Outdated
				</label>
			</div>

			<div className="filterButtons">
				<button>Clear Filter</button>
				<button>Apply</button>
			</div>
		</div>
	)
}

export default Filter