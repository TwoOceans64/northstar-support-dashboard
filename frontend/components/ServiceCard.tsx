type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  link: string;
  buttonColor: string;
};

export default function ServiceCard({ icon, title, description, buttonText, link, buttonColor }: ServiceCardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-200">
      {icon}
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-800 mb-4">{description}</p>
      <a href={link} className={`${buttonColor} px-4 py-2 rounded font-medium transition`}>
        {buttonText}
      </a>
    </div>
  );
}
