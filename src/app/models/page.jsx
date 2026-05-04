import React from "react";

const ModelsPage = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/products`,
    { cache: "no-store" }
  );
  const models = await res.json();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">All Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {models.map((model) => (
          <div key={model.id} className="card bg-base-100 shadow-md border border-base-200 p-4">
            <h2 className="text-xl font-semibold">{model.name}</h2>
            <p className="text-base-content/60">{model.brand}</p>
            <p className="text-lg font-bold text-primary mt-1">${model.price}</p>
            <p className="text-sm">{model.rating} ⭐ · {model.stock} in stock</p>
            <p className="text-sm text-base-content/70 mt-2">{model.description}</p>
            <span className="badge badge-outline mt-3">{model.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModelsPage;