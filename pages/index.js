import { useState } from "react";

export default function NexuRestDemo() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", form);
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-gray-100 p-6 flex flex-col items-center justify-center">
      <div className="w-full max-w-xl shadow-xl rounded-2xl p-6 bg-white">
        <h1 className="text-3xl font-bold mb-4 text-center">NexuRest: Demo de Automatizaciones</h1>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="font-semibold block mb-1">Nombre del responsable</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Ej: Laura García"
                required
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="font-semibold block mb-1">Teléfono de contacto</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Ej: +598 91234567"
                required
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="font-semibold block mb-1">¿Qué problema querés automatizar?</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Reservas, WhatsApp, cumpleaños, encuestas, etc."
                rows={4}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white font-semibold py-2 rounded hover:bg-gray-800 transition-colors"
            >
              Quiero mi demo gratuita
            </button>
          </form>
        ) : (
          <div className="text-center text-green-600 font-medium p-4">
            ¡Gracias por tu interés! En breve te contactaremos por WhatsApp para mostrarte cómo funciona NexuRest.
          </div>
        )}
      </div>
    </main>
  );
}
