package posts

import (
	"strconv"

	"blog.com/common"
	"blog.com/users"
	"gorm.io/gorm"
)

type PostModel struct {
	gorm.Model
	Slug        string `gorm:"unique_index"`
	Title       string
	Description string `gorm:"size:2048"`
	Body        string `gorm:"size:2048"`
	Author      PostUserModel
	AuthorID    uint
	Comments    []CommentModel `gorm:"ForeignKey:PostID"`
}

type CommentModel struct {
	gorm.Model
	Post     PostModel
	PostID   uint
	Author   PostUserModel
	AuthorID uint
	Body     string `gorm:"size:2048"`
}

type PostUserModel struct {
	gorm.Model
	UserModel   users.UserModel
	UserModelID uint
	PostModels  []PostModel `gorm:"ForeignKey:AuthorID"`
}

func SaveOne(data interface{}) error {
	db := common.GetDB()
	err := db.Save(data).Error
	return err
}

func (model *PostModel) Update(data interface{}) error {
	db := common.GetDB()
	err := db.Model(model).Updates(data).Error
	return err
}

func FindOnePost(condition interface{}) (PostModel, error) {
	db := common.GetDB()
	var model PostModel
	tx := db.Begin()
	tx.Where(condition).First(&model)
	tx.Model(&model).Association("Author").Find(&model.Author)
	db.Model(&model).Association("UserModel").Find(&model.Author.UserModel)
	err := tx.Commit().Error
	return model, err
}

func (self *PostModel) getComments() error {
	db := common.GetDB()
	tx := db.Begin()
	tx.Where(PostModel{AuthorID: self.AuthorID}).Preload("Comments").Find(&self)
	err := tx.Commit().Error
	return err
}

func DeletePostModel(condition interface{}) error {
	db := common.GetDB()
	err := db.Where(condition).Delete(&PostModel{}).Error
	return err
}

func GetPostUserModel(userModel users.UserModel) PostUserModel {
	var postUserModel PostUserModel
	if userModel.ID == 0 {
		return postUserModel
	}
	db := common.GetDB()
	db.Where(&PostUserModel{
		UserModelID: userModel.ID,
	}).FirstOrCreate(&postUserModel)
	postUserModel.UserModel = userModel
	return postUserModel
}

func FindManyPost(author, limit, offset string) ([]PostModel, int64, error) {
	db := common.GetDB()
	var models []PostModel
	var count int64

	offset_int, err := strconv.Atoi(offset)
	if err != nil {
		offset_int = 0
	}

	limit_int, err := strconv.Atoi(limit)
	if err != nil {
		limit_int = 20
	}

	tx := db.Begin()
	if author != "" {
		var userModel users.UserModel
		tx.Where(users.UserModel{Username: author}).First(&userModel)
		postUserModel := GetPostUserModel(userModel)

		if postUserModel.ID != 0 {
			count = tx.Model(&postUserModel).Association("PostModels").Count()
			tx.Where(PostModel{AuthorID: postUserModel.ID}).Preload("PostModels").Offset(offset_int).Limit(limit_int).Find(&models)
		}
	} else {
		db.Model(&models).Count(&count)
		db.Offset(offset_int).Limit(limit_int).Find(&models)
	}

	err = tx.Commit().Error
	return models, count, err
}

func DeleteCommentModel(condition interface{}) error {
	db := common.GetDB()
	err := db.Where(condition).Delete(&CommentModel{}).Error
	return err
}
