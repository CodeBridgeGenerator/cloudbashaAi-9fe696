
    module.exports = function (app) {
        const modelName = "feature_requests";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            title: { type:  String , comment: "Title, p, false, true, true, true, true, true, true, , , , ," },
content: { type:  String , comment: "Content, p, false, true, true, true, true, true, true, , , , ," },
likes: { type: Number, max: 10000000, comment: "Likes, p_number, false, true, true, true, true, true, true, , , , ," },
reply: { type:  String , comment: "Reply, p, false, true, true, true, true, true, true, , , , ," },
status: { type:  String , comment: "Status, p, false, true, true, true, true, true, true, , , , ," },
date: { type: Date, comment: "Date, p_date, false, true, true, true, true, true, true, , , , ," },
author: { type:  String , comment: "Author, p, false, true, true, true, true, true, true, , , , ," },

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