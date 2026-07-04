import "../styles/CastList.css";

function CastList({ cast = [] }) {
  return (
    <>
      <h2 className="cast-heading">Cast</h2>

      <div className="cast-container">
        {cast.slice(0, 10).map((actor) => (
          <div key={actor.id} className="cast-card">
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w185${actor.profile_path}`
                  : "https://via.placeholder.com/120x180"
              }
              alt={actor.name}
              className="cast-image"
            />

            <p>{actor.name}</p>

            <small>{actor.character}</small>
          </div>
        ))}
      </div>
    </>
  );
}

export default CastList;
