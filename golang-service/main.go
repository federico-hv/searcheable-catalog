// golang-service/main.go
package main

import (
	"encoding/json"
	"net/http"
)

type Product struct {
	ID          int    `json:"id"`
	Name        string `json:"name"`
	Description string `json:"description"`
	Category    string `json:"category"`
	Price       string `json:"price"`
	Image       string `json:"image"`
}

var products = []Product{
	{1, "Wireless Headphones", "Noise-cancelling over-ear headphones with 30 hours of battery.", "Electronics", "129.99", "https://picsum.photos/seed/headphones/200/200"},
	{2, "Smartphone XR", "6.1-inch display, 128GB storage, dual cameras.", "Electronics", "699.99", "https://picsum.photos/seed/smartphone/200/200"},
	{3, "Bluetooth Speaker", "Portable waterproof speaker with deep bass.", "Electronics", "59.99", "https://picsum.photos/seed/speaker/200/200"},
	{4, "4K Monitor", "27-inch 4K UHD monitor with HDR and slim bezels.", "Electronics", "349.99", "https://picsum.photos/seed/monitor/200/200"},
	{5, "Gaming Laptop", "15.6-inch gaming laptop with RTX graphics and SSD.", "Electronics", "1199.99", "https://picsum.photos/seed/laptop/200/200"},
	{6, "Cotton T-Shirt", "100% organic cotton t-shirt available in multiple colors.", "Clothing", "19.99", "https://picsum.photos/seed/tshirt/200/200"},
	{7, "Denim Jacket", "Classic denim jacket with button closure.", "Clothing", "59.99", "https://picsum.photos/seed/jacket/200/200"},
	{8, "Running Shoes", "Lightweight breathable running shoes for comfort.", "Clothing", "89.99", "https://picsum.photos/seed/shoes/200/200"},
	{9, "Wool Scarf", "Warm wool scarf perfect for winter.", "Clothing", "29.99", "https://picsum.photos/seed/scarf/200/200"},
	{10, "Leather Belt", "Genuine leather belt with metal buckle.", "Clothing", "24.99", "https://picsum.photos/seed/belt/200/200"},
	{11, "Espresso Machine", "Compact espresso machine with milk frother.", "Home Appliances", "249.99", "https://picsum.photos/seed/espresso/200/200"},
	{12, "Air Fryer", "Oil-less air fryer with digital controls.", "Home Appliances", "129.99", "https://picsum.photos/seed/airfryer/200/200"},
	{13, "Robot Vacuum", "Self-charging smart vacuum cleaner with Wi-Fi.", "Home Appliances", "349.99", "https://picsum.photos/seed/vacuum/200/200"},
	{14, "Electric Kettle", "1.7L stainless steel kettle with auto shut-off.", "Home Appliances", "39.99", "https://picsum.photos/seed/kettle/200/200"},
	{15, "Microwave Oven", "900W microwave oven with smart settings.", "Home Appliances", "129.99", "https://picsum.photos/seed/microwave/200/200"},
	{16, "The Great Gatsby", "Classic novel by F. Scott Fitzgerald.", "Books", "14.99", "https://picsum.photos/seed/gatsby/200/200"},
	{17, "1984", "Dystopian novel by George Orwell.", "Books", "12.99", "https://picsum.photos/seed/1984/200/200"},
	{18, "To Kill a Mockingbird", "Pulitzer Prize-winning novel by Harper Lee.", "Books", "16.99", "https://picsum.photos/seed/mockingbird/200/200"},
	{19, "The Hobbit", "Fantasy adventure by J.R.R. Tolkien.", "Books", "18.99", "https://picsum.photos/seed/hobbit/200/200"},
	{20, "Pride and Prejudice", "Romantic classic by Jane Austen.", "Books", "11.99", "https://picsum.photos/seed/pride/200/200"},
}


func helloHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]string{
		"message": "Hello Golang",
	})
}


func productsHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(products)
}

func main() {
	http.HandleFunc("/", helloHandler)
	http.HandleFunc("/products", productsHandler)
	http.ListenAndServe(":8080", nil)
}
