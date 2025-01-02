export default function NewsCard({ article, onClick }) {
    return (
      <div className="border rounded shadow p-4 hover:shadow-lg cursor-pointer" onClick={onClick}>
        <img src="public/news 1.jpg" alt="Genz on media" className="w-full h-48 object-cover rounded" />
        <h2 className="text-lg font-bold my-2">"2024 on media"</h2>
        <p className="text-sm text-gray-600">"2024: Social media power on politics, governance hit climax"</p>
        <p className="text-sm text-gray-500 mt-2">{new Date(0).toLocaleDateString()}</p>
      </div>
    );
  }
  