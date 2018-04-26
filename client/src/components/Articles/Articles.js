import React from "react";

const Article = () => (
	<div>
  <div className="row">
  	<div className="col-lg-12">
  	  			<h3>Search Topic</h3>
  		<div className="input-group">
      		<input type="text" className="form-control" placeholder="Search for..."/>
  			<span className="input-group-btn">
       	 		<button className="btn btn-default" type="button">Go!</button>
      		</span>
  		</div>
  	</div>
  </div>

    <div className="row">
  	<div className="col-lg-12">
  	  			<h3>Start Year</h3>
  		<div className="input-group">
      		<input type="text" className="form-control" placeholder="Search for..."/>
  			<span className="input-group-btn">
       	 		<button className="btn btn-default" type="button">Go!</button>
      		</span>
  		</div>
  	</div>
  </div>
  </div>
);

export default Article;
