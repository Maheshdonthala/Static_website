export default function ContactPage() {
  return (
    <section className="container py-12">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Order Now</h1>
        
  <p className="text-xl text-pink-600 mb-8">
          Ordering is simple! Just click the button below to send us a WhatsApp message.
          We'll help you customize your order and arrange payment via GPay.
        </p>

        <div className="space-y-8">
          <a
            href={`https://api.whatsapp.com/send?phone=919347592801&text=${encodeURIComponent("Hi! I'd like to order Lipsticks.")}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center bg-pink-500 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-pink-600 transition-colors"
          >
            Order Now on WhatsApp
          </a>

          <div className="border-t pt-8">
            <h2 className="text-2xl font-semibold mb-4">Other Ways to Reach Us</h2>
            <div className="space-y-2 text-pink-600">
              <p>
                Call us: <a href="tel:+919347592801" className="text-pink-600">+91-9347592801</a>
              </p>
              <p>
                Email: <a href="mailto:vyshnavi@gmail.com" className="text-pink-600">vyshnavi@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
