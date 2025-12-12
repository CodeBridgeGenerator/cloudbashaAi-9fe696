
    module.exports = function (app) {
        const modelName = "blogs";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            title: { type:  String , minLength: 2, maxLength: 999, index: true, trim: true, comment: "Title, p, false, true, true, true, true, true, true, , , , ," },
postedOn: { type: Number, max: 99999999, comment: "Posted On, p_number, false, true, true, true, true, true, true, , , , ," },
description: { type:  String , minLength: 2, maxLength: 999, index: true, trim: true, comment: "Description, p, false, true, true, true, true, true, true, , , , ," },
image1: { type:  String , minLength: 2, maxLength: 999, index: true, trim: true, comment: "image1, p, false, true, true, true, true, true, true, , , , ," },
image2: { type:  String , minLength: 2, maxLength: 999, index: true, trim: true, comment: "image2, p, false, true, true, true, true, true, true, , , , ," },

            createdBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
            updatedBy: { type: Schema.Types.ObjectId, ref: "users", required: true }
          },
          {
            timestamps: true
        });
      
       
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };