import {
  Button, Checkbox, CheckboxGroup, DateRangePicker,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem, TimeInput
} from "@nextui-org/react";
import {colors, auditoriums, breakTypes, teachers, timeTypes} from "../../data.js";
import {getLocalTimeZone, parseDate, Time, today} from "@internationalized/date";
import {useMemo, useState} from "react";

export default function SchedulerModal({isOpen, onOpenChange, onPress}) {
  // data
  const [weekDays, setWeekDays] = useState([]);
  const [orgName, setOrgName] = useState("Онлайн школа");
  const [color, setColor] = useState(new Set(["white"]));
  const [timeType, setTimeType] = useState(new Set(["60"]));
  const [hoursOnCourse, setHoursOnCourse] = useState(1);
  const [date, setDate] = useState({
    start: today(getLocalTimeZone()),
    end: today(getLocalTimeZone()),
  })
  const [breaking, setBreaking] = useState(new Set(["noBreak"]));
  const [hoursOnDay, setHoursOnDay] = useState(1);
  const [timeStart, setTimeStart] = useState(new Time(7, 0));
  const [timeEnd, setTimeEnd] = useState(new Time(8, 0));
  const [teacher, setTeacher] = useState(new Set([]));
  const [auditorium, setAuditorium] = useState(new Set([]));

  //validate
  const isInvalidOnDay = useMemo(() => {
    return hoursOnDay > hoursOnCourse || hoursOnDay <= 0 ;
  }, [hoursOnDay]);

  // methods
  function selectWeekDay(arr) {
    setWeekDays(arr)
  }
  function computeHourEnd(startTime, timeTypeVal, brkVal, hoursOnDayVal  ) {
    console.log(startTime, Number(timeTypeVal), brkVal, hoursOnDayVal);
    let duration = (Number(timeTypeVal) + brkVal + (hoursOnDayVal * 60)) * 60
    console.log("Duration", duration, duration/60/60);
    let res = startTime.add({seconds: duration})
    console.log("Res", res)
    setTimeEnd(res)
  }
  function handelTimeType(event) {
    computeHourEnd(timeStart, event.target.value, breaking.values().next().value === 'break' ? 30 : 0, hoursOnDay - 1)
  }
  function handelBreaking(event) {
    let duration = event.target.value === 'break' ? 30 : 0
    computeHourEnd(timeStart, timeType.values().next().value, duration, hoursOnDay - 1)
  }
  function handelHoursOnDay(val) {
    setHoursOnDay(val)
    computeHourEnd(timeStart,
                    timeType.values().next().value,
              breaking.values().next().value === 'break' ? 30 : 0,
        val - 1)
  }
  function handelTimeStart(e) {
    setTimeStart(e)
    computeHourEnd(e,
        timeType.values().next().value,
        breaking.values().next().value === 'break' ? 30 : 0,
        hoursOnDay - 1)
  }

  function saveSchedule() {
    let data = {
      weekDays: weekDays,
      orgName : orgName,
      color : color.values().next().value,
      timeType : timeType.values().next().value,
      hoursOnCourse : hoursOnCourse,
      startDate : new Date(date.start),
      endDate : new Date(date.end),
      breaking : breaking.values().next().value,
      hoursOnDay : hoursOnDay,
      timeStart : timeStart.toString(),
      timeEnd : timeEnd.toString(),
      teacher : teacher.values().next().value,
      auditorium : auditorium.values().next().value,
    }
    console.log(data)
  }




  return (
      <Modal size="4xl" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">Добавить расписание</ModalHeader>
                <ModalBody>
                  <form>
                    <div className="grid grid-rows">
                      <div className="py-2 grid grid-cols-4">
                        <Input
                            color="primary"
                            type="text"
                            label="Нименование школы"
                            variant="bordered"
                            className="pe-2 col-span-3"
                            value={orgName}
                            onValueChange={setOrgName}
                        />
                        <Select
                            label="Цввет группы"
                            variant="bordered"
                            color="primary"
                            className="col-span-1"
                            selectedKeys={color}
                            onSelectionChange={setColor}
                        >
                          {colors.map((item) => (
                              <SelectItem key={item.key}>
                                {item.label}
                              </SelectItem>
                          ))}
                        </Select>
                      </div>
                      <div className="py-2 grid grid-cols-3">
                        <Select
                            label="Тип часов"
                            variant="bordered"
                            color="primary"
                            className="pe-2"
                            selectedKeys={timeType}
                            onSelectionChange={setTimeType}
                            onChange={e => handelTimeType(e)}
                        >
                          {timeTypes.map((time) => (
                              <SelectItem key={time.key}>
                                {time.label}
                              </SelectItem>
                          ))}
                        </Select>
                        <Input color="primary"
                               type="number"
                               label="Кол-во часов в курсе"
                               variant="bordered"
                               className="pe-2"
                               value={hoursOnCourse}
                               onValueChange={setHoursOnCourse}
                        />
                        <DateRangePicker color="primary"
                                         type="number"
                                         label="Дата начала курса"
                                         variant="bordered"
                                         value={date}
                                         onChange={setDate}
                        />
                      </div>
                      <div className="py-4 grid grid-cols-3">
                        <div className="pe-2 col-span-1">
                          <Button onPress={() => selectWeekDay(['1', '3', '5'])} variant="bordered" className="me-2"
                                  color="primary">ПН\СР\ПТ</Button>
                          <Button onPress={() => selectWeekDay(['2', '4'])} variant="bordered"
                                  color="primary">ВТ\ЧТ</Button>
                        </div>
                        <CheckboxGroup
                            label="Дни недели"
                            orientation="horizontal"
                            className="col-span-2"
                            color="primary"
                            defaultValue={["2", "4"]}
                            value={weekDays}
                            onValueChange={setWeekDays}
                        >
                          <Checkbox value="1">ПН</Checkbox>
                          <Checkbox value="2">ВТ</Checkbox>
                          <Checkbox value="3">СР</Checkbox>
                          <Checkbox value="4">ЧТ</Checkbox>
                          <Checkbox value="5">ПТ</Checkbox>
                          <Checkbox value="6">СБ</Checkbox>
                          <Checkbox value="7">ВС</Checkbox>
                        </CheckboxGroup>
                      </div>
                      <div className="py-2 grid grid-cols-3">
                        <Select
                            label="Перерыв"
                            variant="bordered"
                            color="primary"
                            className="pe-2"
                            selectedKeys={breaking}
                            onSelectionChange={setBreaking}
                            onChange={e => handelBreaking(e)}

                        >
                          {breakTypes.map((item) => (
                              <SelectItem key={item.key}>
                                {item.label}
                              </SelectItem>
                          ))}
                        </Select>
                        <Input color={isInvalidOnDay ? "danger" : "success"}
                               type="number"
                               label="Кол-во часов в день"
                               variant="bordered"
                               className="pe-2"
                               isInvalid={isInvalidOnDay}
                               errorMessage="Некоректное число часов"
                               value={hoursOnDay}
                               onValueChange={e => handelHoursOnDay(e)}
                        />
                        <div className="col-span-1 flex flex-nowrap gap-2">
                          <TimeInput label="От" variant="bordered" hourCycle={24} minValue={new Time(7)} value={timeStart} onChange={e =>  handelTimeStart(e)}/>
                          <TimeInput isReadOnly label="До" variant="bordered" hourCycle={24} minValue={new Time(7)} value={timeEnd} onChange={setTimeEnd}/>
                        </div>

                      </div>
                      <div className="py-2 grid grid-cols-3">
                        <Select
                            label="Препадователь"
                            variant="bordered"
                            color="primary"
                            defaultSelectedKeys={["noBreak"]}
                            className="pe-2 col-span-2"
                            selectedKeys={teacher}
                            onSelectionChange={setTeacher}
                        >
                          {teachers.map((item) => (
                              <SelectItem key={item.key}>
                                {item.label}
                              </SelectItem>
                          ))}
                        </Select>
                        <Select
                            label="Аудитория"
                            variant="bordered"
                            color="primary"
                            className="pe-2 col-span-1"
                            selectedKeys={auditorium}
                            onSelectionChange={setAuditorium}
                        >
                          {auditoriums.map((item) => (
                              <SelectItem key={item.key}>
                                {item.label}
                              </SelectItem>
                          ))}
                        </Select>
                      </div>
                    </div>

                  </form>


                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Отмена
                  </Button>
                  <Button color="primary" onPress={saveSchedule}>
                    Добавить расписание
                  </Button>
                </ModalFooter>
              </>
          )}
        </ModalContent>
      </Modal>
  )
}