export default function AboutPage() {
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>

      <p className="text-pink-600 mb-4">
        Welcome to Vyshnavi Fancy, where beauty meets tradition. We are passionate about creating handmade, natural lipsticks that combine the wisdom of traditional beauty practices with modern elegance.
      </p>

      <p className="text-pink-600 mb-4">
        Each lipstick is carefully handcrafted using only the finest natural ingredients, ensuring that your lips receive the care and nourishment they deserve. Our commitment to quality means we never compromise on ingredients or the crafting process.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">What Makes Us Special</h2>
      <ul className="list-disc list-inside text-pink-600 mb-4">
        <li>100% Handmade Production</li>
        <li>Natural Ingredients</li>
        <li>Long-lasting Formula</li>
        <li>Moisturizing Properties</li>
        <li>Traditional Beauty Wisdom</li>
      </ul>

      <p className="text-pink-600 mb-4">
        At Vyshnavi Fancy, we believe that true beauty comes from natural ingredients. Our lipsticks are crafted with love and care, ensuring that each product meets our high standards of quality and safety.
      </p>

      <p className="text-pink-600 mb-6">
        Experience the perfect blend of tradition and beauty with our handmade lipsticks. Your lips deserve nothing but the best, and we're here to deliver just that.
      </p>

      <div className="flex gap-3">
        <a href="/products" className="btn-primary">See Products</a>
        <a href="/contact" className="px-4 py-2 rounded border border-pink-500 text-pink-600">Contact / Order</a>
      </div>
    </section>
  );
}
