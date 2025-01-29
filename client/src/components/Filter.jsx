import React from "react";

function Filter() {
  return (
    <div>
      {" "}
      <form className="grid gap-4  md:grid-cols-2 lg:grid-cols-6">
        {/* Título */}
        <div>
          <input
            type="text"
            id="titulo"
            placeholder="Ex.: Apartamento no centro"
            className="w-full border border-gray-400 rounded-lg p-2 focus:ring-2 focus:ring-orange-500 focus:outline-none text-sm"
          />
        </div>

        {/* Tipo de Imóvel */}
        <div>
          <select
            id="tipo"
            className="w-full border border-gray-400 rounded-lg p-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
          >
            <option value="">Tipo</option>
            <option value="casa">Casa</option>
            <option value="apartamento">Apartamento</option>
            <option value="comercial">Imóvel Comercial</option>
          </select>
        </div>

        {/* Quartos */}
        <div>
          <select
            id="quartos"
            className="w-full border border-gray-400 rounded-lg p-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
          >
            <option value="">Quartos</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4+</option>
          </select>
        </div>

        {/* Banheiros */}
        <div>
          <select
            id="banheiros"
            className="w-full border border-gray-400 rounded-lg p-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
          >
            <option value="">Banheiros</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4+</option>
          </select>
        </div>

        {/* Vagas */}
        <div>
          <select
            id="vagas"
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
          >
            <option value="">Vagas</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4+</option>
          </select>
        </div>

        {/* Preço */}
        <div>
          <input
            type="range"
            id="preco"
            min="500"
            max="10000"
            step="100"
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-500 mt-1">
            <span>R$ 500</span>
            <span>R$ 10.000</span>
          </div>
        </div>

        {/* Botão de Busca */}
        <div className="col-span-full">
          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-semibold py-2 rounded-lg hover:bg-orange-400 transition"
          >
            Buscar Imóveis
          </button>
        </div>
      </form>
    </div>
  );
}

export default Filter;
