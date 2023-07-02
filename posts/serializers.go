package posts

import (
	"blog.com/users"
	"github.com/gin-gonic/gin"
	"github.com/gosimple/slug"
)

type PostUserSerializer struct {
	C *gin.Context
	PostUserModel
}

func (s *PostUserSerializer) Response() users.ProfileResponse {
	response := users.ProfileSerializer{s.C, s.PostUserModel.UserModel}
	return response.Response()
}

type PostSerializer struct {
	C *gin.Context
	PostModel
}

type PostResponse struct {
	ID          uint                  `json:"-"`
	Title       string                `json:"title"`
	Slug        string                `json:"slug"`
	Description string                `json:"description"`
	Body        string                `json:"body"`
	CreatedAt   string                `json:"createdAt"`
	UpdatedAt   string                `json:"updatedAt"`
	Author      users.ProfileResponse `json:"author"`
}

type PostsSerializer struct {
	C     *gin.Context
	Posts []PostModel
}

func (s *PostSerializer) Response() PostResponse {
	authorSerializer := PostUserSerializer{s.C, s.Author}
	response := PostResponse{
		ID:          s.ID,
		Slug:        slug.Make(s.Title),
		Title:       s.Title,
		Description: s.Description,
		Body:        s.Body,
		CreatedAt:   s.CreatedAt.UTC().Format("2006-01-02T15:04:05.999Z"),
		UpdatedAt:   s.UpdatedAt.UTC().Format("2006-01-02T15:04:05.999Z"),
		Author:      authorSerializer.Response(),
	}
	return response
}

func (s *PostsSerializer) Response() []PostResponse {
	response := []PostResponse{}
	for _, post := range s.Posts {
		serializer := PostSerializer{s.C, post}
		response = append(response, serializer.Response())
	}
	return response
}

type CommentSerializer struct {
	C *gin.Context
	CommentModel
}

type CommentsSerializer struct {
	C        *gin.Context
	Comments []CommentModel
}

type CommentResponse struct {
	ID        uint                  `json:"id"`
	Body      string                `json:"body"`
	CreatedAt string                `json:"createdAt"`
	UpdatedAt string                `json:"updatedAt"`
	Author    users.ProfileResponse `json:"author"`
}

func (s *CommentSerializer) Response() CommentResponse {
	authorSerializer := PostUserSerializer{s.C, s.Author}
	response := CommentResponse{
		ID:        s.ID,
		Body:      s.Body,
		CreatedAt: s.CreatedAt.UTC().Format("2006-01-02T15:04:05.999Z"),
		UpdatedAt: s.UpdatedAt.UTC().Format("2006-01-02T15:04:05.999Z"),
		Author:    authorSerializer.Response(),
	}
	return response
}

func (s *CommentsSerializer) Response() []CommentResponse {
	response := []CommentResponse{}
	for _, comment := range s.Comments {
		serializer := CommentSerializer{s.C, comment}
		response = append(response, serializer.Response())
	}
	return response
}
