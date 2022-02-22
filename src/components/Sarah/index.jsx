import "./index.css";

const Sarah = () => {
  return (
    <section id="sarah">
      <p className="intro-text">Hi, I'm</p>
      <h1 className="pop-text" id="name">
        Sarah Drew
      </h1>
      <p className="intro-text">
        a <span className="pop-text">full-stack</span> developer &{" "}
        <span className="pop-text">creator.</span>
      </p>
      <p className="intro-text">
        I spend my time <span className="pop-text">skating,</span> writing{" "}
        <span className="pop-text">music,</span> and hacking on new{" "}
        <span className="pop-text">projects.</span>
      </p>
    </section>
  );
};

export default Sarah;
