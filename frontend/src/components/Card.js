export default function Card({ title, description, buttonText, icon, onClick }) {
  return (
    <div className="card">
      {icon}
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={onClick}>{buttonText}</button>
    </div>
  );
}


