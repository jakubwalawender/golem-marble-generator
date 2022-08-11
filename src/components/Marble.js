import React, { Component } from "react";
import { colorMapping } from "../colorMapping";

export const Marble = ({color}) =>(
  <img src={colorMapping[color]} alt='marble' className="marble"/>
)