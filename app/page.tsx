export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* Navbar */}
      <nav className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="text-2xl font-bold">
            BizMate
          </div>

          <div className="hidden gap-8 md:flex">
            <a href="#features" className="hover:text-blue-600">
              Features
            </a>

            <a href="#pricing" className="hover:text-blue-600">
              Pricing
            </a>

            <a href="#how-it-works" className="hover:text-blue-600">
              How It Works
            </a>

            <a href="#faq" className="hover:text-blue-600">
              FAQ
            </a>
          </div>

          <div className="flex gap-3">
            <a
              href="/login"
              className="rounded-lg px-4 py-2 font-medium hover:bg-gray-100"
            >
              Login
            </a>

            <a
              href="/signup"
              className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
            >
              Start Free
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">

          <div className="mx-auto mb-6 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            Built for Pakistani Small Businesses 🇵🇰
          </div>

          <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight md:text-6xl">
            Manage Your Business,
            <span className="text-blue-600"> Customers & Payments</span>
            <br />
            in One Place.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Manage customers, appointments, invoices, payments and
            WhatsApp reminders with one simple business management system.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/signup"
              className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white hover:bg-blue-700"
            >
              Start Free
            </a>

            <a
              href="#features"
              className="rounded-xl border border-gray-300 bg-white px-8 py-4 font-semibold hover:bg-gray-50"
            >
              Explore Features
            </a>
          </div>

          <p className="mt-5 text-sm text-gray-500">
            No credit card required.
          </p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold">
              Everything Your Business Needs
            </h2>

            <p className="mt-4 text-gray-600">
              Simple tools designed for small businesses.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">

            <Feature
              icon="👥"
              title="Customer Management"
              description="Store customer information, history, purchases and outstanding payments."
            />

            <Feature
              icon="📅"
              title="Appointments"
              description="Manage appointments and keep track of your daily schedule."
            />

            <Feature
              icon="🧾"
              title="Invoices"
              description="Create professional invoices and share them with customers."
            />

            <Feature
              icon="💰"
              title="Payment Tracking"
              description="Track cash, bank transfers, Easypaisa, JazzCash and other payments."
            />

            <Feature
              icon="💬"
              title="WhatsApp"
              description="Send appointment reminders, invoices and payment messages through WhatsApp."
            />

            <Feature
              icon="📊"
              title="Business Reports"
              description="Understand your sales, customers and business performance."
            />

          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold">
              How BizMate Works
            </h2>

            <p className="mt-4 text-gray-600">
              Start managing your business in minutes.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">

            <Step
              number="01"
              title="Create Your Business"
              description="Create your account and add your business information."
            />

            <Step
              number="02"
              title="Add Your Customers"
              description="Add customers, services and appointments."
            />

            <Step
              number="03"
              title="Manage Everything"
              description="Manage sales, invoices, payments and customers from one dashboard."
            />

          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold">
              Simple Pricing
            </h2>

            <p className="mt-4 text-gray-600">
              Start free and upgrade when your business grows.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">

            <Pricing
              name="Free"
              price="0"
              description="For businesses getting started."
              features={[
                "100 customers",
                "Basic dashboard",
                "Customer management",
                "Basic appointments",
              ]}
            />

            <Pricing
              name="Basic"
              price="499"
              description="For growing businesses."
              popular
              features={[
                "Unlimited customers",
                "Appointments",
                "Invoices",
                "Payment tracking",
                "WhatsApp reminders",
                "Business reports",
              ]}
            />

            <Pricing
              name="Pro"
              price="999"
              description="For advanced businesses."
              features={[
                "Everything in Basic",
                "Multiple employees",
                "Advanced reports",
                "Multiple branches",
                "Customer campaigns",
              ]}
            />

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-4xl font-bold">
            Ready to Simplify Your Business?
          </h2>

          <p className="mt-5 text-blue-100">
            Start managing your customers, appointments and payments today.
          </p>

          <a
            href="/signup"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-4 font-semibold text-blue-600 hover:bg-gray-100"
          >
            Create Your Free Account
          </a>

        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24">
        <div className="mx-auto max-w-3xl px-6">

          <h2 className="text-center text-4xl font-bold">
            Frequently Asked Questions
          </h2>

          <div className="mt-12 space-y-6">

            <FAQ
              question="What is BizMate?"
              answer="BizMate is a simple business management platform for small businesses."
            />

            <FAQ
              question="Can I use BizMate for my salon or barber shop?"
              answer="Yes. BizMate can manage customers, services, appointments, invoices and payments."
            />

            <FAQ
              question="Can I send messages through WhatsApp?"
              answer="Yes. The platform will support WhatsApp messaging and reminders."
            />

            <FAQ
              question="Is there a free plan?"
              answer="Yes. You can start with the free plan and upgrade when you need more features."
            />

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-gray-50">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-6 py-8 md:flex-row">

          <div>
            <div className="font-bold">
              BizMate
            </div>

            <p className="mt-1 text-sm text-gray-500">
              Simple business management for Pakistan.
            </p>
          </div>

          <p className="text-sm text-gray-500">
            © 2026 BizMate. All rights reserved.
          </p>

        </div>
      </footer>

    </main>
  );
}


/* Feature Component */

function Feature({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

      <div className="text-4xl">
        {icon}
      </div>

      <h3 className="mt-5 text-xl font-bold">
        {title}
      </h3>

      <p className="mt-3 text-gray-600">
        {description}
      </p>

    </div>
  );
}


/* Step Component */

function Step({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">

      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
        {number}
      </div>

      <h3 className="mt-6 text-xl font-bold">
        {title}
      </h3>

      <p className="mt-3 text-gray-600">
        {description}
      </p>

    </div>
  );
}


/* Pricing Component */

function Pricing({
  name,
  price,
  description,
  features,
  popular = false,
}: {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}) {
  return (
    <div
      className={`relative rounded-2xl border p-8 ${
        popular
          ? "border-blue-600 shadow-xl"
          : "bg-white shadow-sm"
      }`}
    >

      {popular && (
        <div className="absolute right-5 top-5 rounded-full bg-blue-600 px-3 py-1 text-xs font-bold text-white">
          POPULAR
        </div>
      )}

      <h3 className="text-2xl font-bold">
        {name}
      </h3>

      <p className="mt-2 text-gray-600">
        {description}
      </p>

      <div className="mt-6">
        <span className="text-4xl font-bold">
          Rs. {price}
        </span>

        <span className="text-gray-500">
          /month
        </span>
      </div>

      <ul className="mt-8 space-y-4">

        {features.map((feature) => (
          <li key={feature} className="flex gap-3">
            <span className="text-green-600">
              ✓
            </span>

            <span>{feature}</span>
          </li>
        ))}

      </ul>

      <a
        href="/signup"
        className={`mt-8 block rounded-xl px-5 py-3 text-center font-semibold ${
          popular
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "border hover:bg-gray-50"
        }`}
      >
        Get Started
      </a>

    </div>
  );
}


/* FAQ Component */

function FAQ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <details className="rounded-xl border p-5">
      <summary className="cursor-pointer font-semibold">
        {question}
      </summary>

      <p className="mt-3 text-gray-600">
        {answer}
      </p>
    </details>
  );
}
