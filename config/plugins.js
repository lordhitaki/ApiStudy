module.exports = ({env}) => ({
  upload: {
    config: {
      enabled: true,
      sizeLimit: 300000,
      providerOptions: {
        localServer: {
          maxage: 300000,
        },
      },
    },
  },
});
