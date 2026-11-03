export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-4">Welcome to Syvora</h1>
      <p className="text-center text-gray-600 mb-8">India's No.1 Smart Fashion Destination</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-pink-100 p-8 rounded-lg text-center font-semibold">Men's Wear</div>
        <div className="bg-pink-100 p-8 rounded-lg text-center font-semibold">Women's Wear</div>
        <div className="bg-pink-100 p-8 rounded-lg text-center font-semibold">Kids Wear</div>
        
      </div>
    </div>
  );
}