export default function InterviewCard({ id, title, summary, text, image }) {
  return (
    <article>
      <div>
        <p>id={id}</p>
        <h2 className="title-container">{title}</h2>
        <div className="image-container">
          {/* <img src={image} alt={title} /> */}

          <img
            src={image}
            alt={title}
            style={{ maxWidth: "100%", maxHeight: "250px" }}
          />
        </div>
        <p className="summary-container">{summary}</p>
        <p className="text-container">{text}</p>
      </div>
    </article>
  );
}
