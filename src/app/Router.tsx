import { Route, Routes, useNavigate } from "react-router-dom"
import { GridHeroView } from "./features/heroes/views/Grid-hero-view"
import { NextUIProvider } from "@nextui-org/react"

export const Router = () => {

  const navigate = useNavigate();

  return (
    <>
      <NextUIProvider navigate={navigate}>
        <Routes>
          <Route path="/" element={<GridHeroView />} />
        </Routes>
      </NextUIProvider>
    </>
  )
}
