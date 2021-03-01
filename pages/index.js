import React from 'react'
import { useState } from 'react'
import Navigation from "./components/layout/nav/Nav";
import Head from "next/head";
import { Provider } from 'react-redux'
import store from './store.js'
import {Homepage} from "./components/layout/homepage/Homepage";

export default function Home() {
    const [activeMenu, setActiveMenu] = useState(true)

  return (
      <Provider store={store}>
          <Head>
              <title>Balanced</title>
          </Head>
          <button className="menu-btn" onClick={() => setActiveMenu(!activeMenu)}>{activeMenu ? 'Hide menu' : 'Show menu'}</button>
          {activeMenu ? <Navigation/> : null}
          <Homepage />
      </Provider>

  )
}
