# fastapi-service/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

app = FastAPI(title="Product Catalog API")

# Allow CORS (for frontend)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Product model
class Product(BaseModel):
    id: int
    name: str
    description: str
    category: str
    price: str
    image: str

# Mock product data
products = [
    Product(id=1, name="Wireless Headphones", description="Noise-cancelling over-ear headphones with 30 hours of battery.", category="Electronics", price="129.99", image="https://picsum.photos/seed/headphones/200/200"),
    Product(id=2, name="Smartphone XR", description="6.1-inch display, 128GB storage, dual cameras.", category="Electronics", price="699.99", image="https://picsum.photos/seed/smartphone/200/200"),
    Product(id=3, name="Bluetooth Speaker", description="Portable waterproof speaker with deep bass.", category="Electronics", price="59.99", image="https://picsum.photos/seed/speaker/200/200"),
    Product(id=4, name="4K Monitor", description="27-inch 4K UHD monitor with HDR and slim bezels.", category="Electronics", price="349.99", image="https://picsum.photos/seed/monitor/200/200"),
    Product(id=5, name="Gaming Laptop", description="15.6-inch gaming laptop with RTX graphics and SSD.", category="Electronics", price="1199.99", image="https://picsum.photos/seed/laptop/200/200"),
    Product(id=6, name="Cotton T-Shirt", description="100% organic cotton t-shirt available in multiple colors.", category="Clothing", price="19.99", image="https://picsum.photos/seed/tshirt/200/200"),
    Product(id=7, name="Denim Jacket", description="Classic denim jacket with button closure.", category="Clothing", price="59.99", image="https://picsum.photos/seed/jacket/200/200"),
    Product(id=8, name="Running Shoes", description="Lightweight breathable running shoes for comfort.", category="Clothing", price="89.99", image="https://picsum.photos/seed/shoes/200/200"),
    Product(id=9, name="Wool Scarf", description="Warm wool scarf perfect for winter.", category="Clothing", price="29.99", image="https://picsum.photos/seed/scarf/200/200"),
    Product(id=10, name="Leather Belt", description="Genuine leather belt with metal buckle.", category="Clothing", price="24.99", image="https://picsum.photos/seed/belt/200/200"),
    Product(id=11, name="Espresso Machine", description="Compact espresso machine with milk frother.", category="Home Appliances", price="249.99", image="https://picsum.photos/seed/espresso/200/200"),
    Product(id=12, name="Air Fryer", description="Oil-less air fryer with digital controls.", category="Home Appliances", price="129.99", image="https://picsum.photos/seed/airfryer/200/200"),
    Product(id=13, name="Robot Vacuum", description="Self-charging smart vacuum cleaner with Wi-Fi.", category="Home Appliances", price="349.99", image="https://picsum.photos/seed/vacuum/200/200"),
    Product(id=14, name="Electric Kettle", description="1.7L stainless steel kettle with auto shut-off.", category="Home Appliances", price="39.99", image="https://picsum.photos/seed/kettle/200/200"),
    Product(id=15, name="Microwave Oven", description="900W microwave oven with smart settings.", category="Home Appliances", price="129.99", image="https://picsum.photos/seed/microwave/200/200"),
    Product(id=16, name="The Great Gatsby", description="Classic novel by F. Scott Fitzgerald.", category="Books", price="14.99", image="https://picsum.photos/seed/gatsby/200/200"),
    Product(id=17, name="1984", description="Dystopian novel by George Orwell.", category="Books", price="12.99", image="https://picsum.photos/seed/1984/200/200"),
    Product(id=18, name="To Kill a Mockingbird", description="Pulitzer Prize-winning novel by Harper Lee.", category="Books", price="16.99", image="https://picsum.photos/seed/mockingbird/200/200"),
    Product(id=19, name="The Hobbit", description="Fantasy adventure by J.R.R. Tolkien.", category="Books", price="18.99", image="https://picsum.photos/seed/hobbit/200/200"),
    Product(id=20, name="Pride and Prejudice", description="Romantic classic by Jane Austen.", category="Books", price="11.99", image="https://picsum.photos/seed/pride/200/200"),
]

@app.get("/")
async def hello():
    return {"message": "Hello FastAPI"}

@app.get("/products", response_model=List[Product])
async def get_products():
    return products
