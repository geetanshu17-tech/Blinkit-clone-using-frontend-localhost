import React from "react";
import "./products.css";
import AddToCartBtn from "./AddToCartBtn";

const ProductCard = ({ image, name, weight, price }) => {
  const product = { image, name, weight, price };
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{weight}</p>
      <div className="one-container">
        <div className="price">{price}</div>
        <AddToCartBtn product={product} />
      </div>
    </div>
  );
};

const productData = [
  {
    category: "Dairy, Bread & Eggs",
    items: [
      { image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/2b146201-870b-4bb8-aee7-8ef0377cbe2b.png", name: "Mother Dairy Classic Curd", weight: "390 g", price: "₹35" },
      { image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/9a4088cc-db19-4add-b3ce-2edd4d09f4ae.png", name: "Amul Taaza Milk", weight: "1 ltr", price: "₹71" },
      { image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/df3666bc-c07b-4a71-909a-63d829ebaed0.png", name: "Harvest Gold Hearty Brown Bread", weight: "400 g", price: "₹55" },
      { image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/613787ac-f983-4cfb-b534-e219c8d47b39.png", name: "Amul Butter", weight: "100 g", price: "₹58" },
      { image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/a501e65f-194b-4db2-abc9-6b7bb515349c.png", name: "Amul Pure Milk Cheese Slices", weight: "200 g", price: "₹129" },
      { image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/69bbe988-9d19-4d3e-a413-0db6e2d46860.png", name: "Mother Dairy Mango Yogurt", weight: "100 g", price: "₹35" },
    ],
  },
  {
    category: "Snacks & Beverages",
    items: [
      { image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/f55e87f5-ecab-4d91-aca9-62883084374d.png", name: "Lay’s Classic Salted", weight: "48 g", price: "₹15" },
      { image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/6771100f-3fad-40fb-80ff-4781de705832.png", name: "Coca-Cola Diet Coke Soft Drink", weight: "300 ml", price: "₹40" },
      { image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/0b906acb-c5c9-498f-8993-97e9834faaa2.png", name: "Pepsi Cream Soda Flavoured Soft Drink", weight: "330 ml", price: "₹199" },
      { image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/10dc2590-fa55-4cba-9138-227af9ab7e26.png", name: "Cheetos Flamin' Hot Crunchy Crisps", weight: "99 g", price: "₹442" },
      { image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/6f4bd423-1666-4d23-bf3d-db482be09608.png", name: "Red Bull", weight: "250 ml", price: "₹125" },
      { image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/b329dcb8-edd2-406a-9575-40ef17b663ac.png", name: "Tropicana Orange Juice", weight: "1 ltr", price: "₹120" },
    ],
  },
  {
    category: "Fruits & Vegetables",
    items: [
      { image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/b89fe4bd-2018-4502-a80e-d8dc274955b8.png", name: "Bananas", weight: "1 dozen", price: "₹80" },
      { image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/4ea129f5-d31b-4c96-8825-3680f77f4c5c.png", name: "Tomatoes", weight: "500 g", price: "₹25" },
      { image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/f53c1ea1-cfa0-438b-a14c-b4f5ebeed7dd.png", name: "Onions", weight: "1 kg", price: "₹40" },
      { image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/146ebb31-654a-428f-9fa1-113f19c6e3b1.png", name: "Apples", weight: "1 kg", price: "₹150" },
      { image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/47aacb59-7ce0-438a-9c8d-208e6901fef4.png", name: "Potatoes", weight: "1 kg", price: "₹30" },
      { image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/e29ff4ab-7a96-4b90-b251-0489fa0416a2.png", name: "Cucumbers", weight: "500 g", price: "₹25" },
    ],
  },
  {
    category: "Personal Care",
    items: [
      { image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/1b526cdc-ef28-41a0-8424-cdce883b9293.png", name: "Dove Soap", weight: "100 g", price: "₹45" },
      { image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/200220b3-6473-498b-b065-c2fbce36d412.png", name: "Colgate Toothpaste", weight: "150 g", price: "₹75" },
      { image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/09922605-b05e-478f-ae5c-d0530bf0fdf7.png", name: "Nivea Body Lotion", weight: "200 ml", price: "₹120" },
      { image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/dca8f68c-3c28-4980-ba79-28b522137f37.png", name: "Clinic Plus Shampoo", weight: "340 ml", price: "₹140" },
      { image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/9a62c64a-cf65-4c0d-83ac-6b59ae83ab26.png", name: "Dettol Handwash", weight: "200 ml", price: "₹76" },
      { image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/20c8c61f-7474-4992-93be-5a2fa6a468ae.png", name: "Vaseline Petroleum Jelly", weight: "42 g", price: "₹95" },
    ],
  },
  {
    category: "Household Essentials",
    items: [
      { image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/83ec4dd2-72f6-4c64-9a37-c38b32612db8.png", name: "Surf Excel Detergent", weight: "1 kg", price: "₹130" },
      { image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/6a827806-fd3c-432b-99fb-f12e0b1930a7.png", name: "Harpic Toilet Cleaner", weight: "600 ml", price: "₹135" },
      { image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/68039a34-b2af-4daa-a6d6-de8c3a1dea29.png", name: "Lizol Floor Cleaner", weight: "500 ml", price: "₹123" },
      { image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/2d933088-48fe-437f-ba93-90d8ea61096b.png", name: "Vim Dishwash Liquid", weight: "500 ml", price: "₹135" },
      { image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/154e0854-9c1e-4e9f-8802-8b7b6ecefb2e.png", name: "Colin Glass Cleaner(500 ml) + Glass Cleaner(1 ltr)", weight: "500 ml + 1 ltr", price: "₹281" },
      { image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/7c8dab22-13ee-40b2-af81-91f41c396c36.png", name: "Good Knight Coil", weight: "10 units", price: "₹43" },
    ],
  },
];

const Products = () => {
  return (
    <div className="products-container">
      {productData.map((category, index) => (
        <div key={index} className="category-section">
          <h2 className="category-title">{category.category}</h2>
          <div className="product-grid">
            {category.items.map((item, idx) => (
              <ProductCard
                key={idx}
                image={item.image}
                name={item.name}
                weight={item.weight}
                price={item.price}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
