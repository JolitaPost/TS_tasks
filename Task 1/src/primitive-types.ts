const height: number = 175.0;
const wight: number = 78.2;
const fullname: string = 'Serbentautas';
const surname: string = 'Bordiuras';
const age: number = 19;
const wife: null = null;
const innerAnimal: undefined = undefined;

console.group
{
  const title: string = 'Vermontas';
  const subTitle: string = 'Kavinė - Baras';
  const peopleCount: number = 5;
  const maxPeopleCount: number = 26;
  const isOpen: boolean = true;
  const openTime: string = '12:00';
  const closeTime: string = '02:00';
  const security: null = null;

  console.log({
    title: [title, typeof title],
    subTitle: [subTitle, typeof subTitle],
    peopleCount: [peopleCount, typeof peopleCount],
    maxPeopleCount: [maxPeopleCount, typeof maxPeopleCount],
    isOpen: [isOpen, typeof isOpen],
    openTime: [openTime, typeof openTime],
    closeTime: [closeTime, typeof closeTime],
    security: [security, typeof security],
  }); 

}

console.groupEnd();