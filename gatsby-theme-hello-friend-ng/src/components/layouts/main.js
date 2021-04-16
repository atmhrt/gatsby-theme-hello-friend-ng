import React, { useContext } from "react"

import ThemeContext from "../../context/theme-context"

import Header from "../partials/header"
import FooterTemplate from "../../templates/footer"

import "../../assets/css/default.css"
import "../../assets/css/custom.css"

const LayoutMain = ({ children }) => {
  return (
    <div className="container">
      <Header />
      <div className="content">{children}</div>
      <FooterTemplate />
    </div>
  )
}

export default LayoutMain
