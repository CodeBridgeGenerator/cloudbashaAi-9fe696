
    module.exports = function (app) {
        const modelName = "contact_submissions";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            name: { type:  String , comment: "Name, p, false, true, true, true, true, true, true, , , , ," },
contactNo: { type: Number, max: 1000000, comment: "contactNo, p_number, false, true, true, true, true, true, true, , , , ," },
email: { type:  String , minLength: 2, maxLength: 999, index: true, trim: true, comment: "email, p, false, true, true, true, true, true, true, , , , ," },
companyName: { type:  String , minLength: 2, maxLength: 999, index: true, trim: true, comment: "companyName, p, false, true, true, true, true, true, true, , , , ," },
position: { type:  String , minLength: 2, maxLength: 999, index: true, trim: true, comment: "position, p, false, true, true, true, true, true, true, , , , ," },
message: { type:  String , minLength: 2, maxLength: 999, index: true, trim: true, comment: "message, p, false, true, true, true, true, true, true, , , , ," },
user: { type:  String , minLength: 2, maxLength: 999, index: true, trim: true, comment: "user, p, false, true, true, true, true, true, true, , , , ," },
paymentStatus: { type:  String , minLength: 2, maxLength: 999, index: true, trim: true, comment: "paymentStatus, p, false, true, true, true, true, true, true, , , , ," },
paymentIntentId: { type:  String , minLength: 2, maxLength: 999, index: true, trim: true, comment: "paymentIntentId, p, false, true, true, true, true, true, true, , , , ," },
sessionId: { type:  String , minLength: 2, maxLength: 999, index: true, trim: true, comment: "sessionId, p, false, true, true, true, true, true, true, , , , ," },
amount: { type: Number, max: 99999999, comment: "amount, p_number, false, true, true, true, true, true, true, , , , ," },
currency: { type:  String , minLength: 2, maxLength: 999, index: true, trim: true, comment: "currency, p, false, true, true, true, true, true, true, , , , ," },
paidAt: { type:  String , minLength: 2, maxLength: 999, index: true, trim: true, comment: "paidAt, p, false, true, true, true, true, true, true, , , , ," },
status: { type:  String , minLength: 2, maxLength: 999, index: true, trim: true, comment: "status, p, false, true, true, true, true, true, true, , , , ," },

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