import { useEffect, useState } from "react";
import axios from "axios";

export default function ShowProducts() {
  const [products, setProducts] = useState([]);
  const [editId, setEditId] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    imageSrc: "",
  });

  const fetchProducts = async () => {
    try {
      const res = await axios.get(
       "https://full-stack-product-management.onrender.com/api/product/all"
    );
      setProducts(res.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const deleteProduct = async (id) => {
    try {
      await axios.delete(
      `https://full-stack-product-management.onrender.com/api/product/${id}`
);
      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (product) => {
    setEditId(product._id);

    setFormData({
      name: product.name,
      description: product.description,
      category: product.category,
      price: product.price,
      imageSrc: product.imageSrc,
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const updateProduct = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
  `https://full-stack-product-management.onrender.com/api/product/${editId}`,
  formData
);

      setEditId(null);

      setFormData({
        name: "",
        description: "",
        category: "",
        price: "",
        imageSrc: "",
      });

      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-5">
          All Products
        </h1>

        {editId && (
          <div className="bg-white max-w-2xl mx-auto p-6 rounded-xl shadow-lg mb-10">
            <h2 className="text-2xl font-bold text-center text-green-600 mb-6">
              Edit Product
            </h2>

            <form
              onSubmit={updateProduct}
              className="space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Product Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                name="description"
                placeholder="Product Description"
                value={formData.description}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                name="category"
                placeholder="Category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="number"
                name="price"
                placeholder="Price"
                value={formData.price}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                name="imageSrc"
                placeholder="Image URL"
                value={formData.imageSrc}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition"
              >
                Update Product
              </button>
            </form>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 flex flex-col"
            >
              <img
                src={item.imageSrc}
                alt={item.name}
                className="w-full h-44 object-cover"
              />

              <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-lg font-bold mb-2">
                  {item.name}
                </h2>

                <p className="text-gray-600 text-sm h-12 overflow-hidden mb-3">
                  {item.description}
                </p>

                <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs mb-3 w-fit">
                  {item.category}
                </span>

                <p className="text-xl font-bold text-green-600 mb-4">
                  ₹{item.price}
                </p>

                <div className="flex gap-2 mt-auto">
                  <button
                    onClick={() => handleEdit(item)}
                    className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg transition"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteProduct(item._id)}
                    className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center text-gray-500 text-xl mt-10">
            No Products Found
          </div>
        )}
      </div>
    </div>
  );
}
