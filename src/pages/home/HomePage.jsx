import {Card, CardBody, CardHeader, Divider} from "@nextui-org/react";
import TheNav from "../../components/TheNav.jsx";

export default function HomePage() {
  return (
      <div className="containers">
        <div className="start-container">
          <TheNav/>
        </div>
        <div className="center-container">


          <div className="mb-2 text-3xl font-sans">
                <span>
                  Добро пожаловать
                </span>
          </div>

          <Divider className="mb-2"/>

          <div className="mb-2 text-md font-sans">
                <span>
                  Образование превращает ваше плохое сегодня в хорошее завтра
                </span>
          </div>


        </div>
        <div className="end-container">

          <Card shadow={'sm'}>
            <CardHeader className="text-center">
              Внимание!
            </CardHeader>
            <CardBody>
              Перейдите на вкладку расписание для просмотра и\или добавления расписания для учебного заведения. А ещё
              есть документация в которой подробно описано как взаимодействовать с приложением
            </CardBody>
          </Card>
        </div>
      </div>
  )
}