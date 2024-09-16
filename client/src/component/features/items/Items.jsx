import LogoChat from "../../../assets/icon-chat.png";
import LogoMoney from "../../../assets/icon-money.png";
import LogoSecurity from "../../../assets/icon-security.png";

const Items = () => {
  const items = [
    {
      title: "You are our #1 priority",
      content:
        "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
      img: LogoChat,
    },
    {
      title: "More savings means higher rates",
      content:
        "The more you save with us, the higher your interest rate will be!",
      img: LogoMoney,
    },
    {
      title: "Security you can trust",
      content:
        "We use top of the line encryption to make sure your data and money is always safe.",
      img: LogoSecurity,
    },
  ];

  return (
    <>
      {items.map((item, index) => {
        return (
          <article key={index} className="features_card">
            <div className="features_card_img">
              <img src={item.img} alt="Description" />
            </div>
            <div className="features_card_content">
              <h3>{item.title}</h3>
              <p>{item.content}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default Items;