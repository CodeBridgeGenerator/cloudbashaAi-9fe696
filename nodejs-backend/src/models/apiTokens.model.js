
    module.exports = function (app) {
        const modelName = "api_tokens";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            company: { type:  String , minLength: 2, maxLength: 999, index: true, trim: true, comment: "Company, p, false, true, true, true, true, true, true, , , , ," },
apiKey: { type:  String , minLength: 2, maxLength: 999, index: true, trim: true, comment: "API Key, p, false, true, true, true, true, true, true, , , , ," },
apiSecret: { type:  String , minLength: 2, maxLength: 999, index: true, trim: true, comment: "API Secret, p, false, true, true, true, true, true, true, , , , ," },
accessToken: { type:  String , minLength: 2, maxLength: 999, index: true, trim: true, comment: "Access Token, p, false, true, true, true, true, true, true, , , , ," },
createdDate: { type: Number, max: 99999999, comment: "Created Date, p_number, false, true, true, true, true, true, true, , , , ," },
expiryDate: { type: Number, max: 99999999, comment: "Expiry Date, p_number, false, true, true, true, true, true, true, , , , ," },
status: { type:  String , minLength: 2, maxLength: 999, index: true, trim: true, comment: "Status, p, false, true, true, true, true, true, true, , , , ," },
environment: { type:  String , minLength: 2, maxLength: 999, index: true, trim: true, comment: "Environment, p, false, true, true, true, true, true, true, , , , ," },
notes: { type:  String , minLength: 2, maxLength: 999, index: true, trim: true, comment: "Notes, p, false, true, true, true, true, true, true, , , , ," },

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