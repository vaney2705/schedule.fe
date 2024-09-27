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
import {auditorium, breakTypes, teachers, timeTypes} from "../../data.js";
import {Time} from "@internationalized/date";

export default function SchedulerModal({isOpen, onOpenChange, onPress}) {
  return (
      <Modal size="4xl" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">Добавить расписание</ModalHeader>
                <ModalBody>
                  <div className="grid grid-rows">
                    <div className="py-2 grid grid-cols-4">
                      <Input color="primary"
                             type="text"
                             label="Нименование школы"
                             value={'Онлайн школа'}
                             variant="bordered"
                             className="pe-2 col-span-3"
                             readOnly

                      />
                      <Input color="primary"
                             type="text"
                             label="Цввет группы"
                             value={'Белый'}
                             variant="bordered"
                             className="col-span-1"
                             readOnly
                      />
                    </div>
                    <div className="py-2 grid grid-cols-3">
                      <Select
                          label="Тип часов"
                          variant="bordered"
                          color="primary"
                          defaultSelectedKeys={["60"]}
                          className="pe-2"
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
                             value={"1"}
                             variant="bordered"
                             className="pe-2"
                      />
                      <DateRangePicker color="primary"
                                       type="number"
                                       label="Дата начала курса"
                                       variant="bordered"
                      />
                    </div>
                    <div className="py-4 grid grid-cols-3">
                      <div className="pe-2 col-span-1">
                        <Button variant="bordered" className="me-2" color="primary">ПН\СР\ПТ</Button>
                        <Button variant="bordered" color="primary">ВТ\ЧТ</Button>
                      </div>
                      <CheckboxGroup
                          label="Дни недели"
                          orientation="horizontal"
                          className="col-span-2"
                          color="primary"
                          defaultValue={["2", "4"]}
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
                          defaultSelectedKeys={["noBreak"]}
                          className="pe-2"
                      >
                        {breakTypes.map((brk) => (
                            <SelectItem key={brk.key}>
                              {brk.label}
                            </SelectItem>
                        ))}
                      </Select>
                      <Input color="primary"
                             type="number"
                             label="Кол-во часов в день"
                             value={"1"}
                             variant="bordered"
                             className="pe-2"
                      />
                      <div className="col-span-1 flex flex-nowrap gap-2">
                        <TimeInput label="От" variant="bordered" defaultValue={new Time(11, 45)}/>
                        <TimeInput label="До" variant="bordered" defaultValue={new Time(11, 45)}/>
                      </div>

                    </div>
                    <div className="py-2 grid grid-cols-3">
                      <Select
                          label="Препадователь"
                          variant="bordered"
                          color="primary"
                          defaultSelectedKeys={["noBreak"]}
                          className="pe-2 col-span-2"
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
                      >
                        {auditorium.map((item) => (
                            <SelectItem key={item.key}>
                              {item.label}
                            </SelectItem>
                        ))}
                      </Select>
                    </div>
                  </div>


                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Отмена
                  </Button>
                  <Button color="primary" onPress={onClose}>
                    Добавить расписание
                  </Button>
                </ModalFooter>
              </>
          )}
        </ModalContent>
      </Modal>
  )
}