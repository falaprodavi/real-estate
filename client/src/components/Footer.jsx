import React from "react";

export default function FooterLight() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8 mt-40">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        {/* Coluna 1: Descrição da empresa */}
        <div>
          <h4 className="text-lg font-semibold text-orange-600 mb-2">
            Sobre Nós
          </h4>
          <p className="text-sm">
            Especialistas em conectar você ao imóvel ideal. Confiança, qualidade
            e inovação para tornar sua jornada mais simples.
          </p>
        </div>

        {/* Coluna 2: Links úteis */}
        <div>
          <h4 className="text-lg font-semibold text-orange-600 mb-2">
            Links Úteis
          </h4>
          <ul className="text-sm space-y-1">
            <li>
              <a href="/imoveis" className="hover:underline">
                Imóveis
              </a>
            </li>
            <li>
              <a href="/sobre" className="hover:underline">
                Sobre Nós
              </a>
            </li>
            <li>
              <a href="/contato" className="hover:underline">
                Contato
              </a>
            </li>
          </ul>
        </div>

        {/* Coluna 3: Redes sociais e newsletter */}
        <div>
          <h4 className="text-lg font-semibold text-orange-600 mb-2">
            Fique Conectado
          </h4>
          <div className="flex space-x-4 mb-3">
            <a
              href="https://facebook.com"
              className="text-gray-600 hover:text-orange-600"
            >
              Facebook
            </a>
            <a
              href="https://instagram.com"
              className="text-gray-600 hover:text-orange-600"
            >
              Instagram
            </a>
            <a
              href="https://twitter.com"
              className="text-gray-600 hover:text-orange-600"
            >
              Twitter
            </a>
          </div>
          <form>
            <input
              type="email"
              placeholder="Seu e-mail"
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-600"
            />
            <button
              type="submit"
              className="mt-2 w-full bg-orange-600 text-white text-sm py-2 rounded hover:bg-orange-700"
            >
              Assinar Newsletter
            </button>
          </form>
        </div>
      </div>
      {/* Linha inferior */}
      <div className="mt-6 border-t border-gray-200 pt-4 text-center text-sm">
        © 2025 Sua Empresa. Todos os direitos reservados.
      </div>
    </footer>
  );
}
