"use client";
import Cookies from "universal-cookie";
import { useEffect, useState } from "react";

export default function Update({ email, oldData }) {
  let cookies = new Cookies();
  const [show, setShow] = useState(false);
  const fetchData = async () => {
    let data = await fetch("/api/update-info", {
      method: "POST",
      body: JSON.stringify({ email: email }),
    }).then((e) => e.json());
    if (!data.loggedIn) {
      cookies.remove("User");
      location.reload();
    } else {
      oldData.verified = `${oldData.verified}`;
      if (
        (data.newData.email != oldData.email) |
        (data.newData.verified != oldData.verified) |
        (data.newData.type != oldData.type)
      ) {
        cookies.set("User", data.key, {
          secure: true,
          sameSite: "lax",
        });
        setShow(true);
      }
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {show && (
        <button onClick={() => location.reload()}>
          Update is available please refresh
        </button>
      )}
    </div>
  );
}