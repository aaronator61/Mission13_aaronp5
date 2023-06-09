//Listing out all of the data.

import data from './MovieData.json';

const mds = data.MovieData;

function MovieList() {
  return (
    <>
      <br></br>
      <br></br>
      <div className="d-flex align-items-center justify-content-center">
        <h1>Joel Hilton's Movie Collection</h1>
      </div>
      <br></br>
      <table className="table table-dark">
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Director</th>
            <th>Rating</th>
            <th>Category</th>
            <th>Edited</th>
          </tr>
        </thead>
        <tbody>
          {mds.map((m) => (
            <tr>
              <td>{m.Title}</td>
              <td>{m.Year}</td>
              <td>{m.Director}</td>
              <td>{m.Rating}</td>
              <td>{m.Category}</td>
              <td>{m.Edited}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default MovieList;
