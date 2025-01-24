import "./index.css";

const Sarah = () => {
  return (
    <section id="sarah">
      <p className="intro-text">Hi, I'm</p>
      <h1 className="pop-text" id="name">
        Sarah Drew
      </h1>

      <p className="intro-text">
        A&nbsp;<span className="pop-text">longboard dancer</span>
        ,&nbsp;
        <span className="pop-text">engineer</span>, and&nbsp;
        <span className="pop-text">creator</span>.
      </p>

      <p className="intro-text">
        I'm always hacking on something, so check up on what I've been up to
        below!
      </p>
    </section>
  );
};

export default Sarah;
