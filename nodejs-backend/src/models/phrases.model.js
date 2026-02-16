
    module.exports = function (app) {
        const modelName = "phrases";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            title: { type:  String , minLength: 2, maxLength: 999, index: true, trim: true, comment: "Title, p, false, true, true, true, true, true, true, , , , ," },
description: { type:  String , minLength: 2, maxLength: 999, index: true, trim: true, comment: "Description, p, false, true, true, true, true, true, true, , , , ," },
tagline: { type:  String , minLength: 2, maxLength: 999, index: true, trim: true, comment: "Tagline, p, false, true, true, true, true, true, true, , , , ," },
visible: { type: Boolean, required: false, comment: "Visible, p_boolean, false, true, true, true, true, true, true, , , , ," },

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