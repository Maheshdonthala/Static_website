export default function WhatsAppButton({ number = '919347592801', text = "Hi! I'd like to order lipsticks." }) {
  // Normalize number: remove any non-digit characters
  const normalized = String(number).replace(/\D/g, '');
  const href = `https://api.whatsapp.com/send?phone=${normalized}&text=${encodeURIComponent(text)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Order via WhatsApp"
  className="fixed right-4 bottom-4 bg-pink-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center text-sm md:text-base"
    >
      WhatsApp
    </a>
  );
}
