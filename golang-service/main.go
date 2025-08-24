package main

import (
	"fmt"
	"net/http"
)

func helloHandler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Hello Golang")
}

func main() {
    http.HandleFunc("/", helloHandler)
    fmt.Println("Golang service running on port 8080")
    http.ListenAndServe(":8080", nil)
}
