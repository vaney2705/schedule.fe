import TheNav from "../../components/TheNav.jsx";
import {Card, CardBody, CardHeader, Divider} from "@nextui-org/react";

export default function WikiPage() {
  return (
      <div className="containers">
        <div className="start-container">
          <TheNav/>
        </div>
        <div className="master-container">

            <iframe
                src="src/assets/UserGide.pdf"
                width="100%"
                height="760px"
                title="PDF Viewer"
                style={{border: "none"}}
            />

        </div>
      </div>

)
}