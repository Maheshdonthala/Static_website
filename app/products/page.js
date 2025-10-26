import ProductCard from '../../components/ProductCard';

const products = [
  { id: 1, name: 'Classic Halwa', price: '₹600', img: '/Classic-halwa.jpg' },
  { id: 2, name: 'Sugar Halwa', price: '₹550', img: '/sugar-halwa.jpg' },
  { id: 3, name: 'Bellam/Jaggery Halwa', price: '₹600', img: '/Bellam-halwa.jpg' },
  { id: 4, name: 'Special Dry-fruits Halwa', price: '₹900', img: '/Dry-fruits-halwa.jpg' },
];

export default function ProductsPage() {
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="grid sm:grid-cols-2 gap-6">
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
