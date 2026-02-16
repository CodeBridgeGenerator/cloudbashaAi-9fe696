
    module.exports = function (app) {
        const modelName = "careers";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            position: { type:  String , comment: "Position, p, false, true, true, true, true, true, true, , , , ," },
category: { type:  String , comment: "Category, p, false, true, true, true, true, true, true, , , , ," },
location: { type:  String , comment: "Location, p, false, true, true, true, true, true, true, , , , ," },
employmentType: { type:  String , comment: "Employment Type, p, false, true, true, true, true, true, true, , , , ," },
jobDescription: { type:  String , comment: "Job Description, p, false, true, true, true, true, true, true, , , , ," },
requirements: { type:  String , maxLength: 150, index: true, trim: true, comment: "Requirements, p, false, true, true, true, true, true, true, , , , ," },
aboutTheTeam: { type:  String , comment: "About The Team, p, false, true, true, true, true, true, true, , , , ," },
salaryRange: { type:  String , comment: "Salary Range, p, false, true, true, true, true, true, true, , , , ," },
experienceLevel: { type:  String , comment: "Experience Level, p, false, true, true, true, true, true, true, , , , ," },
applicationDeadline: { type: Date, comment: "Application Deadline, p_date, false, true, true, true, true, true, true, , , , ," },
isActive: { type: Boolean, required: false, comment: "Is Active, p_boolean, false, true, true, true, true, true, true, , , , ," },
responsibilites: { type:  String , comment: "Responsibilites, p, false, true, true, true, true, true, true, , , , ," },
applicationLink: { type:  String , comment: "Application Link, p, false, true, true, true, true, true, true, , , , ," },

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