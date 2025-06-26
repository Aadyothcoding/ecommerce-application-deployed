import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],

  // Manually set products
  setProducts: (products) => set({ products }),

  // Fetch all products
  fetchProducts: async () => {
    try {
      const res = await fetch("/api/products");
      if (!res.ok) throw new Error("Failed to fetch products");

      const data = await res.json();
      if (!data.success || !Array.isArray(data.data)) {
        throw new Error(data.message || "Invalid data format");
      }

      set({ products: data.data });
    } catch (err) {
      console.error("fetchProducts error:", err.message);
    }
  },

  // Create a new product
  createProduct: async (newProduct) => {
    const { name, image, price } = newProduct;

    if (!name || !image || !price) {
      return { success: false, message: "Please fill in all fields." };
    }

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });

      const data = await res.json();
      if (!data.success || !data.data) {
        return { success: false, message: data.message || "Create failed" };
      }

      set((state) => ({
        products: [...state.products, data.data],
      }));

      return { success: true, message: "Product created successfully" };
    } catch (err) {
      console.error("createProduct error:", err.message);
      return { success: false, message: "Server error. Try again later." };
    }
  },

  // Delete a product
  deleteProduct: async (pid) => {
    try {
      const res = await fetch(`/api/products/${pid}`, {
        method: "DELETE",
      });

      const data = await res.json();
      if (!data.success) {
        return { success: false, message: data.message || "Delete failed" };
      }

      set((state) => ({
        products: state.products.filter((p) => p._id !== pid),
      }));

      return { success: true, message: data.message };
    } catch (err) {
      console.error("deleteProduct error:", err.message);
      return { success: false, message: "Server error. Try again later." };
    }
  },

  // Update a product
  updateProduct: async (pid, updatedProduct) => {
    const { name, price, image } = updatedProduct;

    if (!name || !price || !image) {
      return { success: false, message: "Please fill in all fields." };
    }

    try {
      const res = await fetch(`/api/products/${pid}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, price, image }),
      });

      const data = await res.json();
      if (!data.success || !data.data) {
        return { success: false, message: data.message || "Update failed" };
      }

      set((state) => ({
        products: state.products.map((p) =>
          p._id === pid ? data.data : p
        ),
      }));

      return { success: true, message: data.message };
    } catch (err) {
      console.error("updateProduct error:", err.message);
      return { success: false, message: "Server error. Try again later." };
    }
  },
}));
