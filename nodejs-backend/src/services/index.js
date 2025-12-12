const cms = require("./cms/cms.service.js");
const formGenerator = require("./formGenerator/formGenerator.service.js");
const contactSubmissions = require("./contactSubmissions/contactSubmissions.service.js");
const payments = require("./payments/payments.service.js");
const workspaces = require("./workspaces/workspaces.service.js");
const workspaceMembers = require("./workspaceMembers/workspaceMembers.service.js");
const phrases = require("./phrases/phrases.service.js");
const headers = require("./headers/headers.service.js");
const contents = require("./contents/contents.service.js");
const blogs = require("./blogs/blogs.service.js");
const bonus = require("./bonus/bonus.service.js");
const faqs = require("./faqs/faqs.service.js");
const callToActions = require("./callToActions/callToActions.service.js");
const apiTokens = require("./apiTokens/apiTokens.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(cms);
  app.configure(formGenerator);
  app.configure(contactSubmissions);
  app.configure(payments);
  app.configure(workspaces);
  app.configure(workspaceMembers);
  app.configure(phrases);
  app.configure(headers);
  app.configure(contents);
  app.configure(blogs);
  app.configure(bonus);
  app.configure(faqs);
  app.configure(callToActions);
  app.configure(apiTokens);
    // ~cb-add-configure-service-name~
};
