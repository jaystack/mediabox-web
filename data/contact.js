const contactContent = {
  imageBanner: {
    title: "contact us",
    subTitle: "the mediaBox team would be happy to help",
    variant: [],
    content: ``,
    asset: {
      assetType: "image",
      parallax: true,
      maskOpacity: 0.65,
      img: {
        src: "/images/faq/FAQ_People_Answering_Questions.jpg",
        alt: "",
      },
    },
  },
  contactComponentData: {
    variant: [],
    map: {
      x: 51.53215,
      y: -0.09512,
      zoom: 15,
      popupHTML: `<p>
        <strong>Mediabox Solutions Limited</strong>
        <br /> 20-22 Wenlock Road, London, N1 7G
      </p>`,
    },
    content: `
    <h1>HAVE A QUESTION?</h1>
    <h2>The MediaBox team would be happy to help</h2>

    <section>
      <h3>Live Chat</h3>
      <p>
        <strong>Telephone:</strong>
        0203 7459067
      </p>
      <p>
        <strong>Email:</strong>
        <a href="mailto:info@mediaboxsolutions.co.uk">info@mediaboxsolutions.co.uk</a>
      </p>
    </section>

    <section>
      <h3>Address</h3>
      <p>20-22 Wenlock Road</p>
      <p>London</p>
      <p>N1 7GU</p>
    </section>

    <h1>TECHNICAL SUPPORT</h1>

    <section>
      <p>
        <strong>Email:</strong>
        <a href="mailto:support@mediaboxsolutions.co.uk">support@mediaboxsolutions.co.uk</a>
      </p>
    </section>

    <section>
      <p>
        <strong>Live Chat:</strong>
        (please quote your user number)
      </p>
    </section>
    `,
  },
};

export const getContactContent = async () => Promise.resolve(contactContent);
