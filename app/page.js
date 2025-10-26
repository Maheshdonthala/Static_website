export default function HomePage() {
  return (
    <section className="container py-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">Vyshnavi Fancy</h1>
          <p className="text-lg text-gray-600 mb-6">Traditional handmade lipsticks, crafted with love and the finest ingredients.</p>
          <p className="text-lg text-gray-800 mb-6">Vyshnavi Fancy</p>
          <a href="/products" className="inline-block bg-orange-500 text-white px-4 py-2 rounded">See Products</a>
        </div>
        <div>
          <img src="/f4.png" alt="lipstic hero" className="rounded shadow" />
        </div>
      </div>
    </section>
  );
}
