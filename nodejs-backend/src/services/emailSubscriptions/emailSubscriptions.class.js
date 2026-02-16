const { Service } = require("feathers-mongoose");
const FindService = require("../../utils/abstracts/FindService");
const MixedService = FindService(Service);

exports.EmailSubscriptions = class EmailSubscriptions extends MixedService {
  
};