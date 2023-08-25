export const GET = async () => {
  const markup = "<xml><url><loc>https://www.germanmagicfarm.com/</loc><lastmod>2023-08-25T13:59:49+00:00</lastmod><priority>1.00</priority></url><url><loc>https://www.germanmagicfarm.com/contact</loc><lastmod>2023-08-25T13:59:49+00:00</lastmod><priority>0.80</priority></url><url><loc>https://www.germanmagicfarm.com/services</loc><lastmod>2023-08-25T13:59:49+00:00</lastmod><priority>0.80</priority></url><url><loc>https://www.germanmagicfarm.com/meet-pam-bauer</loc><lastmod>2023-08-25T13:59:49+00:00</lastmod><priority>0.80</priority></url><url><loc>https://www.germanmagicfarm.com/clinics</loc><lastmod>2023-08-25T13:59:49+00:00</lastmod><priority>0.80</priority></url></xml>";

  return new Response(markup, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
};
