package main

import (
	"encoding/json"
	"net/http"
)

func helloHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]string{
		"message": "Hello Golang",
	})
}

func main() {
	http.HandleFunc("/", helloHandler)
	println("Golang service running on port 8080")
	http.ListenAndServe(":8080", nil)
}
