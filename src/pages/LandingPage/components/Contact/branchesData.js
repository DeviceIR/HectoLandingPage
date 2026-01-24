import tehranImage from "../../assets/images/tehranImage.png";
import bushehrImage from "../../assets/images/bushehrImage.png";

const branches = [
  {
    image: tehranImage,
    title: "شعبه تهران",
    buttonColor: "#6f42c1",
    // Tehran: دانشگاه علم و صنعت
    lat: 35.703807,
    lng: 51.404043,
    mapLink:
      "https://neshan.org/maps/@35.703807,51.404043,18z?marker=35.703807,51.404043&center=35.703807,51.404043&markerTitle=%D8%B4%D8%B9%D8%A8%D9%87%20%D8%AA%D9%87%D8%B1%D8%A7%D9%86&markerColor=red",
    mapEmbedUrl: "https://balad.ir/embed?p=5Ajuq6Fqq6U7EN",
    contactInfo: [
      {
        icon: "bi bi-envelope",
        text: "hectolms.bu@gmail.com",
      },
      {
        icon: "bi bi-telephone",
        text: "۰۹۲۲۳۸۳۵۳۰۰",
      },
      // {
      //   icon: "bi bi-globe",
      //   text: "www.hectolms.com | www.hectolms.ir",
      // },
      {
        icon: "bi bi-geo-alt",
        text: "تهرانسر بلوار لاله، خیابان شهید طهماسبی، روبروی کوچه ۳۳ مجمع فرهنگی و هنری پیامبر اعظم (ص)",
      },
    ],
  },
  {
    image: bushehrImage,
    title: "شعبه بوشهر",
    buttonColor: "#0f7c8c",
    lat: 28.948152424546546, // precise coord provided
    lng: 50.87475147410805, // precise coord provided
    mapLink:
      "https://neshan.org/maps/@28.948152,50.874751,18z?marker=28.948152,50.874751&center=28.948152,50.874751&markerTitle=%D8%B4%D8%B9%D8%A8%D9%87%20%D8%A8%D9%88%D8%B4%D9%87%D8%B1&markerColor=red",
    mapEmbedUrl: "https://balad.ir/embed?p=1zVyXACjYO1ZJY",
    contactInfo: [
      {
        icon: "bi bi-envelope",
        text: "hectolms.bu@gmail.com",
      },
      {
        icon: "bi bi-telephone",
        text: "۰۹۲۲۳۸۳۵۳۰۰ (شنبه تا چهارشنبه ساعت ۸ الی ۱۸)",
      },
      // {
      //   icon: "bi bi-instagram",
      //   text: "hectolms",
      // },
      {
        icon: "bi bi-geo-alt",
        text: "شهرک نیایش، بلوار شهید همتی، بلوار فناوری، پارک علم و فناوری خلیج فارس، ساختمان گلستان",
      },
    ],
  },
];

export default branches;
