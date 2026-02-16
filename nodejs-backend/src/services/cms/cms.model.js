
    module.exports = function (app) {
        const modelName = "cms";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            name: { type:  String , minLength: 2, maxLength: 999, index: true, trim: true, comment: "name, p, false, true, true, true, true, true, true, , , , ," },
path: { type:  String , minLength: 2, maxLength: 999, index: true, trim: true, comment: "path, p, false, true, true, true, true, true, true, , , , ," },
image1: { type:  [Schema.Types.ObjectId], ref: "document_storages" , minLength: 2, index: true, trim: true, comment: "image1, file_upload, false, true, true, true, true, true, true, , , , ," },
image2: { type:  [Schema.Types.ObjectId], ref: "document_storages" , minLength: 2, index: true, trim: true, comment: "image2, file_upload, false, true, true, true, true, true, true, , , , ," },
category: { type:  String , minLength: 2, index: true, trim: true, comment: "category, p, false, true, true, true, true, true, true, , , , ," },
headerContent: { type:  String , minLength: 2, index: true, trim: true, comment: "headerContent, editor, false, true, true, true, true, true, true, , , , ," },
bodyContent: { type:  String , minLength: 2, index: true, trim: true, comment: "bodyContent, editor, false, true, true, true, true, true, true, , , , ," },
disclaimer: { type:  String , minLength: 2, index: true, trim: true, comment: "disclaimer, editor, false, true, true, true, true, true, true, , , , ," },
visible: { type: Boolean, required: false, comment: "visible, p_boolean, false, true, true, true, true, true, true, , , , ," },
bodyList: { type:  String , minLength: 2, comment: "headerContent, editor, false, true, true, true, true, true, true, , , , ," },

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