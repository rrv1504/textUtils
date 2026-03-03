import React from "react";

export default function About(props) {
  const themes = {
    light: { bg: "#f8f9fa", text: "#212529" },
    dark: { bg: "#121212", text: "#ffffff" },
    pink: { bg: "#a4135c", text: "#ffffff" },
    blue: { bg: "#14213d", text: "#ffffff" },
    green: { bg: "#1b4332", text: "#ffffff" },
  };

  const currentTheme = themes[props.mode];

  return (
    <section
      className="py-3 py-md-5"
      style={{
        backgroundColor: currentTheme.bg,
        color: currentTheme.text,
        minHeight: "100vh",
        transition: "all 0.3s ease",
      }}
    >
      <div className="container">
        <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
          <div className="col-12 col-lg-6 col-xl-5">
            <img
              className="img-fluid rounded"
              loading="lazy"
              src="https://bootstrapbrain.com/demo/components/abouts/about-1/assets/img/about-img-1.jpg"
              alt="About"
            />
          </div>

          <div className="col-12 col-lg-6 col-xl-7">
            <h2 className="mb-3">Who Are We?</h2>

            <p className="lead fs-4 mb-3">
              We help people build incredible brands and superior products. Our
              perspective is to furnish outstanding captivating services.
            </p>

            <p className="mb-5">
              We are a fast-growing company but never lost sight of our core
              values. We believe in collaboration, innovation, and customer
              satisfaction.
            </p>

            <div className="row">
              <div className="col-md-6 mb-3">
                <h4>Versatile Brand</h4>
                <p>
                  We craft digital methods that bring life across all mediums.
                </p>
              </div>

              <div className="col-md-6 mb-3">
                <h4>Digital Agency</h4>
                <p>
                  We believe in innovation by merging simple and creative ideas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
