import {Button, Calendar, Card, CardHeader, Divider, Input, useDisclosure} from "@nextui-org/react";
import {getLocalTimeZone, today} from "@internationalized/date"
import TheNav from "../../components/TheNav.jsx";
import SchedulerModal from "./SchedulerModal.jsx";

export default function SchedulerPage() {
  let defaultDate = today(getLocalTimeZone());
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
      <div className="containers">
        <div className="start-container">
          <TheNav/>
          <Divider className="my-4"/>
          <Calendar style={{width: '15vw'}} defaultValue={defaultDate} onChange={e => console.log(e)}/>
        </div>
        <div className="center-container">
          <Input
              color="primary"
              type="text"
              label="Поиск"
              variant="bordered"
              size="sm"
              className="mb-2"
          />

          <Divider className="my-4"/>
          <div className="my-4 flex justify-end">
            <Button
                color="primary"
                size="sm"
                onPress={onOpen}
            >
              Добавить
            </Button>
            <SchedulerModal isOpen={isOpen} onOpenChange={onOpenChange}/>
          </div>


          <Card shadow={'sm'} className={"mb-2"}>
            <CardHeader>Школка 103</CardHeader>
          </Card>
          <Card shadow={'sm'} className={"mb-2"}>
            <CardHeader>Школка 104</CardHeader>
          </Card>
          <Card shadow={'sm'} className={"mb-2"}>
            <CardHeader>Школка 105</CardHeader>
          </Card>

        </div>
        <div className="end-container">

          {/*  Add detail content */}
        </div>
      </div>
  )
}