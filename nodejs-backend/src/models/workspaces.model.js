
    module.exports = function (app) {
        const modelName = "workspaces";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            name: { type:  String , minLength: 2, maxLength: 999, index: true, trim: true, comment: "Name, p, false, true, true, true, true, true, true, , , , ," },
ownerId: { type:  String , minLength: 2, maxLength: 999, index: true, trim: true, comment: "Owner Id, p, false, true, true, true, true, true, true, , , , ," },
isdefault: { type:  String , minLength: 2, maxLength: 999, index: true, trim: true, comment: "Isdefault, p, false, true, true, true, true, true, true, , , , ," },

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