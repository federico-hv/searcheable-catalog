"use client";

import React, { useState } from "react";

// Unique handcrafted dataset (20 items for now, can be expanded to 100+)
const mockData = [
  {
    id: 1,
    name: "Wireless Headphones",
    description:
      "Noise-cancelling over-ear headphones with 30 hours of battery.",
    category: "Electronics",
    price: "129.99",
    image: "https://picsum.photos/seed/headphones/200/200",
  },
  {
    id: 2,
    name: "Smartphone XR",
    description: "6.1-inch display, 128GB storage, dual cameras.",
    category: "Electronics",
    price: "699.99",
    image: "https://picsum.photos/seed/smartphone/200/200",
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    description: "Portable waterproof speaker with deep bass.",
    category: "Electronics",
    price: "59.99",
    image: "https://picsum.photos/seed/speaker/200/200",
  },
  {
    id: 4,
    name: "4K Monitor",
    description: "27-inch 4K UHD monitor with HDR and slim bezels.",
    category: "Electronics",
    price: "349.99",
    image: "https://picsum.photos/seed/monitor/200/200",
  },
  {
    id: 5,
    name: "Gaming Laptop",
    description: "15.6-inch gaming laptop with RTX graphics and SSD.",
    category: "Electronics",
    price: "1199.99",
    image: "https://picsum.photos/seed/laptop/200/200",
  },
  {
    id: 6,
    name: "Cotton T-Shirt",
    description: "100% organic cotton t-shirt available in multiple colors.",
    category: "Clothing",
    price: "19.99",
    image: "https://picsum.photos/seed/tshirt/200/200",
  },
  {
    id: 7,
    name: "Denim Jacket",
    description: "Classic denim jacket with button closure.",
    category: "Clothing",
    price: "59.99",
    image: "https://picsum.photos/seed/jacket/200/200",
  },
  {
    id: 8,
    name: "Running Shoes",
    description: "Lightweight breathable running shoes for comfort.",
    category: "Clothing",
    price: "89.99",
    image: "https://picsum.photos/seed/shoes/200/200",
  },
  {
    id: 9,
    name: "Wool Scarf",
    description: "Warm wool scarf perfect for winter.",
    category: "Clothing",
    price: "29.99",
    image: "https://picsum.photos/seed/scarf/200/200",
  },
  {
    id: 10,
    name: "Leather Belt",
    description: "Genuine leather belt with metal buckle.",
    category: "Clothing",
    price: "24.99",
    image: "https://picsum.photos/seed/belt/200/200",
  },
  {
    id: 11,
    name: "Espresso Machine",
    description: "Compact espresso machine with milk frother.",
    category: "Home Appliances",
    price: "249.99",
    image: "https://picsum.photos/seed/espresso/200/200",
  },
  {
    id: 12,
    name: "Air Fryer",
    description: "Oil-less air fryer with digital controls.",
    category: "Home Appliances",
    price: "129.99",
    image: "https://picsum.photos/seed/airfryer/200/200",
  },
  {
    id: 13,
    name: "Robot Vacuum",
    description: "Self-charging smart vacuum cleaner with Wi-Fi.",
    category: "Home Appliances",
    price: "349.99",
    image: "https://picsum.photos/seed/vacuum/200/200",
  },
  {
    id: 14,
    name: "Electric Kettle",
    description: "1.7L stainless steel kettle with auto shut-off.",
    category: "Home Appliances",
    price: "39.99",
    image: "https://picsum.photos/seed/kettle/200/200",
  },
  {
    id: 15,
    name: "Microwave Oven",
    description: "900W microwave oven with smart settings.",
    category: "Home Appliances",
    price: "129.99",
    image: "https://picsum.photos/seed/microwave/200/200",
  },
  {
    id: 16,
    name: "The Great Gatsby",
    description: "Classic novel by F. Scott Fitzgerald.",
    category: "Books",
    price: "14.99",
    image: "https://picsum.photos/seed/gatsby/200/200",
  },
  {
    id: 17,
    name: "1984",
    description: "Dystopian novel by George Orwell.",
    category: "Books",
    price: "12.99",
    image: "https://picsum.photos/seed/1984/200/200",
  },
  {
    id: 18,
    name: "To Kill a Mockingbird",
    description: "Pulitzer Prize-winning novel by Harper Lee.",
    category: "Books",
    price: "16.99",
    image: "https://picsum.photos/seed/mockingbird/200/200",
  },
  {
    id: 19,
    name: "The Hobbit",
    description: "Fantasy adventure by J.R.R. Tolkien.",
    category: "Books",
    price: "18.99",
    image: "https://picsum.photos/seed/hobbit/200/200",
  },
  {
    id: 20,
    name: "Pride and Prejudice",
    description: "Romantic classic by Jane Austen.",
    category: "Books",
    price: "11.99",
    image: "https://picsum.photos/seed/pride/200/200",
  },
];

function ProductCard({ item }) {
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
}

export default function CatalogGrid() {
  const [query, setQuery] = useState("");
  const [aiOpen, setAiOpen] = useState(false);
  const [aiThinking, setAiThinking] = useState(false);
  const [aiMessage, setAiMessage] = useState("");
  const [aiInput, setAiInput] = useState("");

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
}
