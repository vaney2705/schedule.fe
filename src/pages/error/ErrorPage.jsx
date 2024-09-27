import {Card, CardBody, CardHeader} from "@nextui-org/react";

export default function ErrorPage() {
  return (
      <div className={"flex justify-center"} style={{ alignItems: "center", height: "90vh" }}>
        <Card style={{ width: "20vw", height: "20vh" }}>
          <CardHeader>
            <h1><b>404</b></h1>
          </CardHeader>
          <CardBody>
            <h3>Oops! </h3>
            <p>Sorry, an unexpected error has occurred.</p>
          </CardBody>

        </Card>
      </div>
  )
}