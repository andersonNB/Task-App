"use client"
//Este componente ya no se convertira en una pagina para nextjs
//ya que en esta versión tendra encuenta los archivos page como página
//o rutas en la aplicación
import dynamic from "next/dynamic";

export const Toaster = dynamic(async () => {
    const { Toaster } = await import("react-hot-toast")

    return Toaster;
}, {
    ssr: false,
});