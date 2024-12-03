// pages/api/login.js

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      // Forward the request to your authentication server
      const response = await fetch(
        "http://136.228.158.126:5465/api/v1/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(req.body),
        }
      );

      const data = await response.json();

      if (response.ok) {
        // Set the access token as an HttpOnly cookie
        res.setHeader(
          "Set-Cookie",
          `accessToken=${data.accessToken}; HttpOnly; Path=/; Max-Age=3600; SameSite=Strict`
        );

        // Return the refresh token (and any other data) to the client
        res.status(200).json({ refreshToken: data?.data.refreshToken });
      } else {
        res.status(response.status).json(data);
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
