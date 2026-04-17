import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="min-h-screen bg-[#fafafa]">
      
      {/* --- HERO SECTION --- */}
      <header className="max-w-7xl mx-auto px-6 py-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        <div className="lg:w-1/2 text-center lg:text-left space-y-6">
          <span className="text-sm font-bold tracking-widest text-gray-400 uppercase">
            Curated For You
          </span>
          <h2 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-[1.1]">
            Elevate Your <br /> Everyday.
          </h2>
          <p className="text-xl text-gray-500 max-w-lg mx-auto lg:mx-0">
            From luxury fragrances to handcrafted furniture, explore a collection designed to inspire your lifestyle.
          </p>
          <div className="pt-4 flex justify-center lg:justify-start gap-4">
            <button className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl">
              Explore Our Products
            </button>
          </div>
        </div>

        <div className="lg:w-1/2 w-full flex justify-center relative">
          <div className="absolute inset-0 bg-gray-200 rounded-full blur-3xl opacity-50 transform -translate-x-10 translate-y-10"></div>
          <img 
            src="https://relinksys.com/assets/images/ecommerce.gif" 
            alt="Premium Shopping" 
            className="w-full max-w-3xl rounded-3xl object-contain relative z-10 aspect-[4/3]"
          />
        </div>
      </header>

  {/* --- OPTION 1: MAIN FOCUS BENTO --- */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h3 className="text-3xl font-bold text-gray-900 tracking-tight mb-10">Our Categories</h3>

        {/* 4 Columns, 2 Rows */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
          
          {/* Furniture - Massive 2x2 Square */}
          <div className="md:col-span-2 md:row-span-2 relative rounded-2xl overflow-hidden group cursor-pointer h-64 md:h-auto">
            <img src="https://i.pinimg.com/736x/f1/61/93/f16193c408cb2fea69126599c8f1de24.jpg" alt="Furniture" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <h4 className="text-3xl font-bold mb-2">Stylish Furniture</h4>
              <p className="text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Crafted for comfort</p>
            </div>
          </div>

          {/* Fragrances - Tall Vertical */}
          <div className="md:col-span-1 md:row-span-2 relative rounded-2xl overflow-hidden group cursor-pointer h-64 md:h-auto">
            <img src="https://i.pinimg.com/736x/18/75/6b/18756bd3891df8a8c81df289b74da308.jpg" alt="Fragrances" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h4 className="text-2xl font-bold mb-1">Fragrances</h4>
              <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Signature scents</p>
            </div>
          </div>

          {/* Beauty - Small Square Top Right */}
          <div className="md:col-span-1 md:row-span-1 relative rounded-2xl overflow-hidden group cursor-pointer h-64 md:h-auto">
            <img src="https://i.pinimg.com/736x/fa/bb/74/fabb747e3dbd505db97f147c2ce5222b.jpg" alt="Beauty" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h4 className="text-xl font-bold mb-1">Beauty</h4>
              <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Glam And Beyond</p>
            </div>
          </div>

          {/* Groceries - Small Square Bottom Right */}
          <div className="md:col-span-1 md:row-span-1 relative rounded-2xl overflow-hidden group cursor-pointer h-64 md:h-auto">
            <img src="https://i.pinimg.com/736x/ee/23/79/ee2379b0736239e56583adb69a76771b.jpg" alt="Groceries" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h4 className="text-xl font-bold mb-1">Groceries</h4>
              <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Stocking Up For The Week</p>
            </div>
          </div>

        </div>
      </section>

      {/* --- ALL PRODUCTS SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold text-gray-900 tracking-tight mb-10">
          Trending Now
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
{products.map((product) => (
  <div key={product._id} className="group relative bg-white p-4 rounded-3xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-transparent hover:border-gray-100">
    
    {/* Product Image Container */}
    <div className="relative aspect-square bg-[#f9f9f9] rounded-2xl overflow-hidden mb-5">
      {/* Badge Example */}
      <span className="absolute top-3 left-3 z-20 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-gray-900 shadow-sm">
        New Arrival
      </span>

      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-full object-contain p-6 transition-transform duration-700 ease-out group-hover:scale-110"
      />

      {/* Floating Action Buttons */}
      <div className="absolute bottom-4 inset-x-4 flex gap-2 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <button className="flex-1 bg-black text-white py-3 rounded-xl text-sm font-bold hover:bg-gray-800 transition-colors shadow-xl">
          View Product
        </button>
      </div>
    </div>

    {/* Product Details */}
    <div className="px-1">
      <div className="flex justify-between items-start mb-1">
        <h4 className="font-semibold text-gray-900 text-lg group-hover:text-black transition-colors truncate pr-2">
          {product.name}
        </h4>
        <p className="font-bold text-gray-900">
          ${product.price}
        </p>
      </div>
      <p className="text-sm text-gray-400 font-medium italic">
        {product.category || "Collection 2026"}
      </p>
    </div>
  </div>
))}
        </div>
      </section>

    </div>
  );
};

export default Home;