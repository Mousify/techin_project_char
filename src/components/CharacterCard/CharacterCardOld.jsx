import './CharacterCard.css';

function CharacterCardOld(props) {
  return (
    <div className="col">
      <div className="card h-100">
        <h5 className="card-title">{props.name}</h5>
        <img src={props.image} className="card-img-top" />
        <div className="card-body">
          <p className="card-text">Name: {props.name}</p>
          <p className="card-text">Age: {props.age}</p>
          <p className="card-text">Job: {props.job}</p>
        </div>
      </div>
    </div>
  );
}

export default CharacterCardOld;
