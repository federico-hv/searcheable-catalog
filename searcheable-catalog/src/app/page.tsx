"use client";

import React, { useState } from "react";
import mockData from "./products";

// Define the type for a product
interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  price: string;
  image: string;
}

// Unique handcrafted dataset

// ProductCard props interface
interface ProductCardProps {
  item: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ item }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-lg">
      {!loaded && (
        <div className="flex h-48 w-full animate-pulse items-center justify-center bg-gray-100">
          <span className="text-gray-400">Loading...</span>
        </div>
      )}
      <img
        src={item.image}
        alt={item.name}
        onLoad={() => setLoaded(true)}
        className={`h-48 w-full object-cover transition-opacity duration-300 ${
          loaded ? "opacity-100" : "absolute opacity-0"
        }`}
      />
      <div className="flex flex-1 flex-col p-4">
        <span className="text-lg font-semibold text-gray-800">{item.name}</span>
        <span className="mb-1 text-xs font-medium text-purple-600">
          {item.category}
        </span>
        <span className="mb-2 text-sm text-gray-500">{item.description}</span>
        <span className="text-md mt-auto font-bold text-green-600">
          ${item.price}
        </span>
      </div>
    </div>
  );
};

const CatalogGrid: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [aiOpen, setAiOpen] = useState<boolean>(false);
  const [aiThinking, setAiThinking] = useState<boolean>(false);
  const [aiMessage, setAiMessage] = useState<string>("");
  const [aiInput, setAiInput] = useState<string>("");

  const filteredData = mockData.filter(
    (item) =>
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleAiSearch = () => {
    setAiThinking(true);
    setAiMessage("");
    setTimeout(() => {
      setQuery(aiInput);
      setAiThinking(false);
      setAiMessage("I found this, does this work for you?");
    }, 2000);
  };

  return (
    <div className="flex min-h-screen w-full flex-row bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Catalog Section */}
      <div className="flex flex-1 flex-col items-center p-6">
        <h1 className="mb-6 text-3xl font-bold text-gray-800">
          Product Catalog
        </h1>
        <input
          type="text"
          placeholder="Search products, categories..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="mb-8 w-1/2 rounded-2xl border p-3 shadow focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <div className="grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredData.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* AI Assistant Sidebar */}
      <div
        className={`transition-all duration-300 ${
          aiOpen ? "w-80" : "w-16"
        } flex flex-col border-l bg-white shadow-lg`}
      >
        <button
          onClick={() => setAiOpen(!aiOpen)}
          className="border-b p-4 hover:bg-gray-100"
        >
          {aiOpen ? "Close AI" : "AI"}
        </button>

        {aiOpen && (
          <div className="flex flex-1 flex-col p-4">
            <h2 className="mb-2 text-lg font-semibold">AI Assistant</h2>
            <textarea
              placeholder="Describe what you're looking for..."
              value={aiInput}
              onChange={(e) => setAiInput(e.target.value)}
              className="mb-2 resize-none rounded border p-2"
              rows={3}
            />
            <button
              onClick={handleAiSearch}
              disabled={!aiInput}
              className="rounded bg-purple-500 p-2 text-white hover:bg-purple-600 disabled:opacity-50"
            >
              Ask AI
            </button>
            <div className="mt-4 flex-1 overflow-y-auto">
              {aiThinking && (
                <p className="animate-pulse text-gray-500">Thinking...</p>
              )}
              {aiMessage && <p className="text-gray-700">{aiMessage}</p>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CatalogGrid;
