import { Image } from "@nextui-org/react";

export const Header = () => {
  return (
    <>
      <div className="header grid place-content-center">
        <Image
          width={300}
          alt="NextUI hero Image"
          src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
        />
      </div>
    </>
  )
}
