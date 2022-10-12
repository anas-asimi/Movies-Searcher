import image from '../imgs/error-404.webp'
export default function Card(props) {
  const data = props.data;
	// 
	let url = image
	if (data.i){
		if (data.i.imageUrl){
			url = data.i.imageUrl
		}
	}
	const rate = data.q
  let title = data.l;
  let content =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.";
  let year = data.y;

  return (
    <>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={url} className="img rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body d-flex flex-column justify-content-between h-100">
              <h2 className="card-title">{title}</h2>
              <p className="card-text">{content}</p>
              <div className="d-flex flex-row justify-content-between align-items-center">
                <h5 className="card-text m-0">{year}</h5>
                <span className="badge bg-success p-3 h1"><h6 className='m-0'>{rate}</h6></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
