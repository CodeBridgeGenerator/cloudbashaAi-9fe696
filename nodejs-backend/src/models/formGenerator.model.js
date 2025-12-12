
    module.exports = function (app) {
        const modelName = "form_generator";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            goal: { type:  String , minLength: 2, maxLength: 999, index: true, trim: true, comment: "Goal, p, false, true, true, true, true, true, true, , , , ," },
status: { type:  String , minLength: 2, maxLength: 999, index: true, trim: true, comment: "Status, p, false, true, true, true, true, true, true, , , , ," },
, comment: "Generated Questions, p, false, true, true, true, true, true, true, , , , ," },
formResponses: { type:  String , minLength: 2, maxLength: 1492, index: true, trim: true, comment: "Form Responses, p, false, true, true, true, true, true, true, , , , ," },
, comment: "Conversation History, p, false, true, true, true, true, true, true, , , , ," },
dashboardData: { type: Schema.Types.Mixed, comment: "Dashboard Data, p, false, true, true, true, true, true, true, , , , ," },
rawGeminiResponse: { type:  String , minLength: 2, maxLength: 2107, index: true, trim: true, comment: "Raw Gemini Response, p, false, true, true, true, true, true, true, , , , ," },
generationError: { type:  String , minLength: 2, maxLength: 999, index: true, trim: true, comment: "Generation Error, p, false, true, true, true, true, true, true, , , , ," },
user: { type:  String , minLength: 2, maxLength: 999, index: true, trim: true, comment: "User, p, false, true, true, true, true, true, true, , , , ," },
, comment: "Collaborators, p, false, true, true, true, true, true, true, , , , ," },
isPublic: { type: Boolean, required: false, comment: "Is Public, p_boolean, false, true, true, true, true, true, true, , , , ," },
publicUrl: { type:  String , minLength: 2, maxLength: 999, index: true, trim: true, comment: "Public Url, p, false, true, true, true, true, true, true, , , , ," },

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