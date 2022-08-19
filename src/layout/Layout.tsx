import React from "react";
import Head from "./Head";
import Style from "./Style";
import Main from "../ui/containers/Main";
import Transition from "./Transition";

const Layout = ({
  title,
  description,
  url,
  imageUrl,
  imageAlt,
  twitter,
  children,
}) => (
  <>
    <Head {...{ title, description, url, imageUrl, imageAlt, twitter }} />
    <Main>
      <Transition>{children}</Transition>
    </Main>
    <Style />
  </>
);

export default React.memo(Layout);
