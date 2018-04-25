package data

// Post : Data model structs
type Post struct {
	ID     string `json:"id"`
	Text   string `json:"text"`
	Author Author `json:"author"`
}

// Author : Data model structs
type Author struct {
	ID   string `json:"id"`
	Name string `json:"name"`
}

// Mock data
var latestPost = &Post{
	ID:   "1",
	Text: "Hello World",
	Author: Author{
		ID:   "1",
		Name: "raymasson",
	},
}

// LatestPost : returns the latest post
func LatestPost() *Post {
	return latestPost
}

// CurrentAuthor : returns the author of the latest post
func CurrentAuthor() Author {
	return latestPost.Author
}
