
    module.exports = function (app) {
        const modelName = "bonus";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            slide: { type: Number, max: 99999999, comment: "slide, p_number, false, true, true, true, true, true, true, , , , ," },
sectionName: { type:  String , minLength: 2, maxLength: 999, index: true, trim: true, comment: "Section Name, p, false, true, true, true, true, true, true, , , , ," },

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