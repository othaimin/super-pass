"use client";
import HomePage from "@/components/screens/HomePage";
import { store } from "@/store";
import React from "react";
import { Provider } from "react-redux";
const Home = () => {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
};

export default Home;
