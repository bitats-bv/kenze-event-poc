module.exports = {
  "/bff": {
    target:
      process.env["services__bffplayground__https__0"]  ||
      process.env["services__bffplayground__http__0"] ,
    secure: process.env["NODE_ENV"] !== "development",
    pathRewrite: {
      "^/bff": "",
    },
  },
};
