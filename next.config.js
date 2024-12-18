module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
    ],
  },
  env: {
    CLERK_PUBLISHABLE_KEY:
      "pk_test_b3B0aW1hbC1ob3JuZXQtNTkuY2xlcmsuYWNjb3VudHMuZGV2JA",
    CLERK_SECRET_KEY: "sk_test_xW4y1gUKymQ1qbhB9GtqnvYTbtVbG15nYxfuYoTFSF",
    CLERK_ENCRYPTION_KEY: "sk_test_xW4y1gUKymQ1qbhB9GtqnvYTbtVbG15nYxfuYoTFSF",
  },
};
