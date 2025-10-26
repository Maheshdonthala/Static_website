import ProductCard from '../../components/ProductCard';

const products = [
  { id: 1, name: 'Lipstick 1', price: '₹250', img: '/f5.jpg' },
  { id: 2, name: 'Lipstick 2', price: '₹200', img: '/f6.jpg' },
  { id: 3, name: 'Lipstick 3', price: '₹150', img: '/f7.jpg' },
  { id: 4, name: 'Lipstick 4', price: '₹350', img: '/f6.jpg' },
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
