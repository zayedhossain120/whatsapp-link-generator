import React, { useState } from "react";

const WhatsAppLinkGenerator = () => {
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const generateLink = () => {
    const encodedMessage = encodeURIComponent(message);
    const link = `https://wa.me/${number}?text=${encodedMessage}`;
    if (!number || !encodedMessage) {
      return;
    } else {
      window.open(link);
    }
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl mb-7 font-bold">
              Whatsapp Link Generator!
            </h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Number</span>
                </label>
                <input
                  type="number"
                  placeholder="+8801612XXXXXX"
                  required
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Text</span>
                </label>
                <input
                  type="text"
                  placeholder="Hi...."
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="input input-bordered"
                />
                <label className="label"></label>
              </div>

              <div className="form-control mt-6">
                <button onClick={generateLink} className="btn btn-primary">
                  Whatsapp Link
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppLinkGenerator;
