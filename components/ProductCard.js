export default function ProductCard({ product }) {
  return (
    <div className="border rounded overflow-hidden shadow-sm flex flex-col">
      <img src={product.img} alt={product.name} className="w-full h-48 md:h-56 object-cover" />
      <div className="p-4 flex-1 flex flex-col">
        <div>
          <h3 className="font-semibold">{product.name}</h3>
          <p className="text-gray-600">{product.price}</p>
        </div>
        <div className="mt-3">
          <a href="/contact" className="block bg-orange-500 text-white px-4 py-2 rounded text-center w-full md:inline-block md:w-auto">Order</a>
        </div>
      </div>
    </div>
  );
}
