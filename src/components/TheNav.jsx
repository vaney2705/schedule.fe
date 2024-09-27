import {Listbox, ListboxItem} from "@nextui-org/react";

export default function TheNav() {
  return (
      <Listbox color="primary" variant="flat" aria-label="Listbox menu with icons" >
        <ListboxItem key="schedule" href="/">
          Главная страница
        </ListboxItem>
        <ListboxItem key="schedule" href="/scheduler">
          Расписание
        </ListboxItem>
        <ListboxItem key="wiki" href="/wiki">
          Документация
        </ListboxItem>
      </Listbox>
      )

}