export default function AboutPage() {
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>

      <p className="text-gray-700 mb-4">
        Sri Modhakondamma Madugula Halwa is a family-run sweets business dedicated to crafting authentic, melt-in-your-mouth halwa the way it was meant to be — rich, aromatic and made with love.
      </p>

      <p className="text-gray-700 mb-4">
        We use only the finest, traditional ingredients: whole wheat, milk, sugar and jaggery, and most importantly pure cow ghee which gives our halwa its silky texture and unforgettable flavor. Each batch is prepared slowly and carefully to bring out deep caramel notes and the perfect balance of sweetness.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Key Ingredients</h2>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>Wheat</li>
        <li>Milk</li>
        <li>Sugar & Jaggery</li>
        <li>Pure Cow Ghee</li>
        <li>Cashew Nuts, Pistachio, Almonds</li>
      </ul>

      <p className="text-gray-700 mb-4">
        Our owner, Karanam Vamsi, oversees production personally to ensure every tray meets our high standards. For enquiries or custom orders you can reach him at <a className="text-orange-600 underline" href="mailto:karanamvamsi256@gmail.com">karanamvamsi256@gmail.com</a> or call us at <a className="text-orange-600 underline" href="tel:+918297941043">+91-8297941043</a>.
      </p>

      <p className="text-gray-700 mb-6">
        We currently deliver worldwide and offer reliable home delivery — whether you want a small gift box or a bulk order for celebrations, we’ll make sure it arrives fresh and ready to enjoy.
      </p>

      <div className="flex gap-3">
        <a href="/products" className="btn-primary">See Products</a>
        <a href="/contact" className="px-4 py-2 rounded border border-orange-500 text-orange-600">Contact / Order</a>
      </div>
    </section>
  );
}
