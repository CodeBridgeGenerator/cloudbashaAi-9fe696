
    module.exports = function (app) {
        const modelName = "workspace_members";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            workspaceId: { type:  String , minLength: 2, maxLength: 999, index: true, trim: true, comment: "Workspace Id, p, false, true, true, true, true, true, true, , , , ," },
userId: { type:  String , minLength: 2, maxLength: 999, index: true, trim: true, comment: "UserId, p, false, true, true, true, true, true, true, , , , ," },
role: { type:  String , minLength: 2, maxLength: 999, index: true, trim: true, comment: "Role, p, false, true, true, true, true, true, true, , , , ," },

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