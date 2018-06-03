import Instagram from 'node-instagram'

const instagram = new Instagram({
  clientId: 'your-client-id', // https://elfsight.com/blog/2015/10/get-instagram-client-id-guide/
  clientSecret: 'your-client-secret', // https://elfsight.com/blog/2015/10/get-instagram-client-id-guide/
  accessToken: 'user-access-token', //http://instagram.pixelunion.net/
});

export {instagram}