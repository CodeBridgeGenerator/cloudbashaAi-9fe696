
    module.exports = function (app) {
        const modelName = "email_subscriptions";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            email: { type:  String , comment: "email, p, false, true, true, true, true, true, true, , , , ," },
subscribed: { type: Boolean, required: false, comment: "subscribed, p_boolean, false, true, true, true, true, true, true, , , , ," },
token: { type:  String , comment: "token, p, false, true, true, true, true, true, true, , , , ," },
source: { type:  String , comment: "source, p, false, true, true, true, true, true, true, , , , ," },
unsubscribedAt: { type: Date, comment: "unsubscribedAt, p_date, false, true, true, true, true, true, true, , , , ," },
subscribedAt: { type: Date, comment: "subscribedAt, p_date, false, true, true, true, true, true, true, , , , ," },
lastChangedAt: { type: Date, comment: "lastChangedAt, p_date, false, true, true, true, true, true, true, , , , ," },

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