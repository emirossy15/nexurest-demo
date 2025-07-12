import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 flex flex-col items-center justify-center px-6 py-12">
      <header className="max-w-3xl text-center mb-10">
        <h1 className="text-5xl font-extrabold text-blue-900 mb-4">
          NexuRest
        </h1>
        <p className="text-lg text-blue-700">
          Automatizá las reservas, comunicación y más para tu restaurante con IA.
        </p>
      </header>

      <Card className="w-full max-w-lg shadow-2xl rounded-3xl p-8 bg-white">
        {!submitted ? (
          <>
            <h2 className="text-2xl font-bold mb-6 text-center text-blue-800">
              Solicita tu demo gratuita
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-semibold mb-2 text-gray-700">
                  Nombre del responsable
                </label>
                <Input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Ej: Laura García"
                  required
                  className="border-blue-300 focus:border-blue-500 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block font-semibold mb-2 text-gray-700">
                  Teléfono de contacto
                </label>
                <Input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Ej: +598 91234567"
                  required
                  className="border-blue-300 focus:border-blue-500 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block font-semibold mb-2 text-gray-700">
                  ¿Qué problema querés automatizar?
                </label>
                <Textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Reservas, WhatsApp, cumpleaños, encuestas, etc."
                  rows={5}
                  required
                  className="border-blue-300 focus:border-blue-500 focus:ring-blue-400 resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 rounded-lg transition-colors duration-300"
              >
                Quiero mi demo gratuita
              </Button>
            </form>
          </>
        ) : (
          <CardContent className="text-center text-green-600 font-semibold text-lg">
            ¡Gracias por tu interés! En breve te contactaremos por WhatsApp para mostrarte cómo funciona NexuRest.
          </CardContent>
        )}
      </Card>

      <footer className="mt-12 text-center text-blue-600 text-sm">
        © 2025 NexuRest. Todos los derechos reservados.
      </footer>
    </main>
  );
}
