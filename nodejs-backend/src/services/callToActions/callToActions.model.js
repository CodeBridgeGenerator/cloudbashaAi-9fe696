
    module.exports = function (app) {
        const modelName = "call_to_actions";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            heading: { type:  String , minLength: 2, maxLength: 999, index: true, trim: true, comment: "Heading, p, false, true, true, true, true, true, true, , , , ," },
subHeading: { type:  String , minLength: 2, maxLength: 999, index: true, trim: true, comment: "Sub Heading, p, false, true, true, true, true, true, true, , , , ," },
button: { type:  String , minLength: 2, maxLength: 999, index: true, trim: true, comment: "Button, p, false, true, true, true, true, true, true, , , , ," },

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