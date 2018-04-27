import React from "react";

const Search = () => (
  <div>

    <div className="container">
        
      <div className="jumbotron">
        <h1 className="text-center"><strong> New York Times Article Scrubber</strong></h1>
      </div>

      <div className="row">
        <div className="col-md-12">

        <br/>
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title"><strong>Search</strong></h3>
            </div>
          </div>
          <div className="panel-body">
            <form role="form">
 			  <div className="form-group">
                <label for="search">Topic:</label>
                <input type="text" className="form-control" id="search-term" />
              </div>
           <div className="form-group">
              <label for="start-year">Start Year (Optional):</label>
              <input type="text" className="form-control" id="start-year"/>
           </div>
           <div className="form-group">
              <label for="end-year">End Year (Optional):</label>
              <input type="text" className="form-control" id="end-year"/>
            </div>
            <button type="submit" className="btn btn-default" id="run-search"> Search</button>
           </form>
          </div>
        </div>
      </div>
   </div>
 </div>
);

export default Search;
