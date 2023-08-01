export default function InterviewCard({ id, title, summary, text, image }) {
  return (
    <article>
      <div className="interview-container">
        {/* <p>id={id}</p> */}
        <div className="title-container"></div>
        <h2 className="preview-title">{title}</h2>
        <div className="image-container">
          {/* <img src={image} alt={title} /> */}

          <img
            src={image}
            alt={title}
            style={{ maxWidth: "100%", maxHeight: "250px" }}
          />
        </div>
        <div>
          <p className="summary-container">{summary}</p>
        </div>
        {/* <p className="text-container">{text}</p> */}
      </div>
    </article>
  );
}
