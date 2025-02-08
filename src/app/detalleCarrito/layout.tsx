'use cliente'
import NavBar from "../Componentents/NavBar";
import Provider from "../Provider/Provider";

export default function LayoutGeneral2({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div>
       
      <Provider>

      <h1>layoutgeneral2</h1>
        <NavBar></NavBar>

        {children}

      </Provider>
    </div>
  );
}