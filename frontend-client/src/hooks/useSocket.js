import React from "react";
import { useEffect, useRef } from "react";
import { io } from "socket.io-client";

const useSocket = (token) => {
  const socketRef = useRef([]);

  useEffect(() => {
    if (!socketRef.current) {
      socketRef.current = io(import.meta.env.VITE_API_BASE_URL, {
        auth: { token },
      });
    }

    return () => {
      socketRef.current?.disconnect();
    };
  }, [token]);

  return socketRef.current;
};

export default useSocket;
